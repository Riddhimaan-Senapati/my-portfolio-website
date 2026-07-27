import { readFile } from 'node:fs/promises'
import path from 'node:path'

const RESUME_TEXT = path.join(process.cwd(), 'content', 'resume.txt')

let cached: string | null | undefined

/**
 * Text of the résumé PDF that the site serves, so the assistant answers from the
 * same document a recruiter downloads.
 *
 * Reads the extract produced by `scripts/extract-resume.mjs` at build time
 * rather than parsing the PDF here: pdfjs-dist needs browser DOM globals and
 * throws on Vercel's Node runtime, which took down the whole route.
 *
 * Memoised per server instance, and returns null on failure so a missing file
 * degrades to the structured profile instead of erroring.
 */
export const getResumeText = async (): Promise<string | null> => {
  if (cached !== undefined) return cached

  try {
    cached = (await readFile(RESUME_TEXT, 'utf8')).trim() || null
  } catch {
    cached = null
  }

  return cached
}
