import { index, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

/**
 * Chat transcripts from the site assistant.
 *
 * Deliberately minimal: no IP address, no user agent, no cookie, no fingerprint.
 * Visitors have not consented to anything beyond the notice shown in the widget,
 * so this stores the conversation and nothing that identifies who had it.
 */
export const conversations = pgTable('conversations', {
  id: uuid('id').primaryKey(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})

export const messages = pgTable(
  'messages',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    conversationId: uuid('conversation_id')
      .notNull()
      .references(() => conversations.id, { onDelete: 'cascade' }),
    role: text('role').$type<'user' | 'assistant'>().notNull(),
    content: text('content').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [index('messages_conversation_idx').on(table.conversationId, table.createdAt)]
)

export type Conversation = typeof conversations.$inferSelect
export type Message = typeof messages.$inferSelect
