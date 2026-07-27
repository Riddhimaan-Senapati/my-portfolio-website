/**
 * Confirms the configured Supabase project is reachable and has the schema.
 *
 * Run after pointing DATABASE_URL at a new project:
 *   npm run db:push && npm run db:check
 *
 * Standalone on purpose: no `@/` path aliases and no app imports, so it runs
 * under plain `node --experimental-strip-types` without a bundler.
 */
// @next/env is CommonJS, so it has no named ESM exports.
import nextEnv from '@next/env'
import postgres from 'postgres'

nextEnv.loadEnvConfig(process.cwd())

const url = process.env.DATABASE_URL

if (!url) {
  console.error('✗ DATABASE_URL is not set.')
  console.error('\n  Add it to .env.local. In Supabase: Project Settings → Database →')
  console.error('  Connection string → Transaction pooler (port 6543).')
  process.exit(1)
}

const sql = postgres(url, { prepare: false, max: 1, connect_timeout: 10 })

try {
  await sql`select 1`
  console.log('✓ connected')

  const found = await sql<{ table_name: string }[]>`
    select table_name from information_schema.tables
    where table_schema = 'public' and table_name in ('conversations', 'messages')
  `
  const names = found.map((row) => row.table_name)
  const missing = ['conversations', 'messages'].filter((t) => !names.includes(t))

  if (missing.length > 0) {
    console.error(`✗ missing tables: ${missing.join(', ')}`)
    console.error('\n  Run: npm run db:push')
    process.exit(1)
  }

  const [counts] = await sql<{ conversations: string; messages: string }[]>`
    select
      (select count(*) from conversations) as conversations,
      (select count(*) from messages) as messages
  `
  console.log(
    `✓ schema present — ${counts.conversations} conversations, ${counts.messages} messages`
  )
} catch (error) {
  console.error(`✗ ${error instanceof Error ? error.message : String(error)}`)
  console.error('\n  If the project was paused for inactivity, resume it in the Supabase')
  console.error('  dashboard. If it was deleted, create a new one, update DATABASE_URL,')
  console.error('  then run: npm run db:push')
  process.exit(1)
} finally {
  await sql.end({ timeout: 5 })
}
