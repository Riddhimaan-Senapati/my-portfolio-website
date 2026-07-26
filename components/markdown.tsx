import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import { cn } from '@/lib/utils'

// Renders on the server, so no markdown parser or highlighter ships to the browser.
const Markdown = ({ content, className }: { content: string; className?: string }) => {
  return (
    // No `prose-*` colour modifier here: those set --tw-prose-* to fixed greys and would
    // override the theme-aware values configured in tailwind.config.ts.
    <div className={cn('prose', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, [rehypeHighlight, { detect: true, ignoreMissing: true }]]}
        components={{
          a({ href, children, ...props }) {
            const isInternal = href?.startsWith('/') || href?.startsWith('#')

            if (isInternal) {
              return (
                <Link href={href ?? '#'} {...props}>
                  {children}
                </Link>
              )
            }

            return (
              <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
              </a>
            )
          },
          table({ children, ...props }) {
            // Keep wide tables from pushing the page into horizontal scroll.
            return (
              <div className="overflow-x-auto">
                <table {...props}>{children}</table>
              </div>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default Markdown
