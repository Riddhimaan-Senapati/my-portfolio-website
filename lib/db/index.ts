import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from '@/lib/db/schema'

export type Database = ReturnType<typeof drizzle<typeof schema>>

let client: postgres.Sql | null = null
let database: Database | null = null
let initialised = false

/**
 * Lazily-created Drizzle client, or null when DATABASE_URL is unset.
 *
 * Returning null rather than throwing is deliberate. Supabase pauses free
 * projects after a period of inactivity, and the site must keep working when
 * that happens — transcript logging is a nice-to-have, not a dependency of the
 * chat. Every caller treats null as "skip persistence".
 */
export const getDb = (): Database | null => {
  if (initialised) return database
  initialised = true

  const url = process.env.DATABASE_URL
  if (!url) return null

  try {
    client = postgres(url, {
      // Supabase's transaction pooler (port 6543) does not support prepared
      // statements. Harmless on a direct connection, required on the pooler.
      prepare: false,
      // One connection per serverless instance; the pooler does the real pooling.
      max: 1,
      idle_timeout: 20,
      // Fail fast instead of holding a request open against a paused project.
      connect_timeout: 10,
    })
    database = drizzle(client, { schema })
  } catch {
    database = null
  }

  return database
}

export { schema }
