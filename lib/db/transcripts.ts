import { sql } from 'drizzle-orm'
import { getDb } from '@/lib/db'
import { conversations, messages } from '@/lib/db/schema'

const MAX_STORED_CHARS = 4000

type Turn = { role: 'user' | 'assistant'; content: string }

/**
 * Persists one exchange, best effort.
 *
 * Never throws and never blocks the response: the assistant's reply has already
 * been streamed to the visitor by the time this runs. A paused Supabase project,
 * a revoked password, or a dropped connection results in a logged warning and
 * nothing else.
 */
export const saveTurns = async (conversationId: string, turns: Turn[]) => {
  if (turns.length === 0) return

  const db = getDb()
  if (!db) {
    // Logged rather than returned silently: an unset DATABASE_URL and a failing
    // insert are very different problems, and without this they look identical.
    console.warn('[transcripts] DATABASE_URL not configured; skipping persistence')
    return
  }

  try {
    // Upsert so the second and later turns of a conversation don't collide.
    await db
      .insert(conversations)
      .values({ id: conversationId })
      .onConflictDoNothing({ target: conversations.id })

    await db.insert(messages).values(
      turns.map((turn) => ({
        conversationId,
        role: turn.role,
        content: turn.content.slice(0, MAX_STORED_CHARS),
      }))
    )
  } catch (error) {
    console.warn(
      '[transcripts] skipped persisting turn:',
      error instanceof Error ? error.message : error
    )
  }
}

/** Simple health probe used by `npm run db:check`. */
export const pingDatabase = async () => {
  const db = getDb()
  if (!db) return { ok: false as const, reason: 'DATABASE_URL is not set' }

  try {
    await db.execute(sql`select 1`)
    return { ok: true as const }
  } catch (error) {
    return {
      ok: false as const,
      reason: error instanceof Error ? error.message : String(error),
    }
  }
}
