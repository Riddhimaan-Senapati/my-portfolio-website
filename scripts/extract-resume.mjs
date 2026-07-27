/**
 * Extracts the résumé PDF to text at build time.
 *
 * Runs from the `prebuild` script, so replacing the PDF and deploying is enough
 * to update what the assistant knows — there is nothing else to remember.
 *
 * Build time rather than request time because pdfjs-dist (which pdf-parse wraps)
 * needs browser DOM globals and throws `ReferenceError: DOMMatrix is not defined`
 * on Vercel's Node runtime. Doing it here keeps that dependency out of the
 * serverless bundle entirely.
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { PDFParse } from 'pdf-parse'

const PDF = 'public/Riddhimaan_Senapati_Machine_Learning_Engineer_Resume.pdf'
const OUT = 'content/resume.txt'

const parser = new PDFParse({ data: new Uint8Array(await readFile(PDF)) })

try {
  const { text } = await parser.getText()
  const cleaned = text.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim()

  if (cleaned.length < 500) {
    throw new Error(`extracted only ${cleaned.length} chars — the PDF may be image-only`)
  }

  await mkdir(path.dirname(OUT), { recursive: true })
  await writeFile(OUT, `${cleaned}\n`, 'utf8')
  console.log(`✓ ${OUT} — ${cleaned.length} chars from ${path.basename(PDF)}`)
} finally {
  await parser.destroy()
}
