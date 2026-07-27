import { defineConfig } from 'drizzle-kit'

// drizzle-kit runs outside Next, so it does not get .env.local loading for free.
import { loadEnvConfig } from '@next/env'
loadEnvConfig(process.cwd())

export default defineConfig({
  dialect: 'postgresql',
  schema: './lib/db/schema.ts',
  out: './drizzle',
  dbCredentials: {
    url: process.env.DATABASE_URL ?? '',
  },
  // Supabase manages these; without the filter drizzle-kit tries to diff them.
  schemaFilter: ['public'],
  verbose: true,
  strict: true,
})
