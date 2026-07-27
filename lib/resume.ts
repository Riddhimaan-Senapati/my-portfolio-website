import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { PDFParse } from 'pdf-parse'
import { identity } from '@/lib/profile'

const RESUME_PATH = path.join(process.cwd(), 'public', path.basename(identity.resumePath))

let cached: string | null | undefined

/**
 * Text of the résumé PDF that the site serves, so the assistant answers from the
 * same document a recruiter downloads.
 *
 * Uses pdf-parse rather than unpdf: unpdf silently drops this PDF's ligatures
 * (`Chief AI Officer` came out as `Chief AI O cer`), which would feed the model
 * corrupted facts.
 *
 * Memoised per server instance, and returns null on failure so a missing or
 * unreadable file degrades to the structured profile instead of erroring.
 */
export const getResumeText = async (): Promise<string | null> => {
  if (cached !== undefined) return cached

  try {
    const buffer = await readFile(RESUME_PATH)
    const parser = new PDFParse({ data: new Uint8Array(buffer) })

    try {
      const { text } = await parser.getText()
      cached = text.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim() || null
    } finally {
      await parser.destroy()
    }
  } catch {
    cached = null
  }

  return cached
}
