import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export type PostMeta = {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  readingTime: number
}

export type Post = PostMeta & {
  content: string
}

const WORDS_PER_MINUTE = 200

const estimateReadingTime = (content: string) => {
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}

const readPost = (fileName: string): Post => {
  const slug = fileName.replace(/\.mdx?$/, '')
  const fullPath = path.join(postsDirectory, fileName)
  const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'))

  if (!data.title || !data.date) {
    throw new Error(`content/blog/${fileName} is missing a required "title" or "date" field.`)
  }

  return {
    slug,
    title: data.title,
    description: data.description ?? '',
    // gray-matter parses unquoted YAML dates into Date objects, so normalise to ISO strings.
    date: data.date instanceof Date ? data.date.toISOString() : String(data.date),
    tags: Array.isArray(data.tags) ? data.tags : [],
    readingTime: estimateReadingTime(content),
    content,
  }
}

export const getAllPosts = (): Post[] => {
  if (!fs.existsSync(postsDirectory)) return []

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => /\.mdx?$/.test(fileName))
    .map(readPost)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export const getPostBySlug = (slug: string): Post | null => {
  const match = ['md', 'mdx']
    .map((extension) => `${slug}.${extension}`)
    .find((fileName) => fs.existsSync(path.join(postsDirectory, fileName)))

  return match ? readPost(match) : null
}

export const formatPostDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
