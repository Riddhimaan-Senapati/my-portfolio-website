import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts, formatPostDate } from '@/lib/blog'
import { Badge } from '@/components/ui/badge'
import { AnimatedGroup } from '@/components/ui/animated-group'

export const metadata: Metadata = {
  title: 'Blog | Riddhimaan',
  description: 'Notes on machine learning, retrieval systems, and the things I build.',
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <section className="py-16">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">📝 Blog</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Notes on machine learning, retrieval systems, and the things I build.
      </p>

      {posts.length === 0 ? (
        <p className="mt-12 text-muted-foreground">No posts yet. Check back soon.</p>
      ) : (
        <AnimatedGroup
          preset="blur-slide"
          className="mt-12 divide-y divide-border border-t border-border"
          amount={0.05}
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
            },
          }}
        >
          {posts.map((post) => (
            <article key={post.slug} className="py-8">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                <span aria-hidden="true">·</span>
                <span>{post.readingTime} min read</span>
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                <Link href={`/blog/${post.slug}`} className="hover:underline underline-offset-4">
                  {post.title}
                </Link>
              </h2>
              {post.description && (
                <p className="mt-2 text-muted-foreground">{post.description}</p>
              )}
              {post.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </article>
          ))}
        </AnimatedGroup>
      )}
    </section>
  )
}
