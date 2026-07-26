import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import MotionProvider from '@/components/motion-provider'
import Header from '@/components/header'
import HashScroll from '@/components/hash-scroll'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Riddhimaan',
  description: 'Riddhimaan\'s portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // `data-scroll-behavior` keeps Next 16 suppressing the global `scroll-behavior: smooth`
    // during route transitions, so navigations still jump instantly to the top.
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={inter.className}>
        {/* Motion server-renders its `initial` variant as inline styles, so without JS the
            page would be invisible. This forces every animated element to its final state. */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '[style*="opacity:0"]{opacity:1!important;filter:none!important;transform:none!important}',
            }}
          />
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MotionProvider>
            <div className="min-h-screen bg-background font-sans antialiased">
              <Header />
              <HashScroll />
              <main className="container mx-auto px-4 py-8">{children}</main>
            </div>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
