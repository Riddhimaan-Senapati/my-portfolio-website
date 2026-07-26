'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useMounted } from '@/hooks/use-mounted'

const GitHubStats = () => {
  const { resolvedTheme } = useTheme()
  const mounted = useMounted()
  // Stay on the light card until hydration completes, otherwise the server and client
  // disagree about the image src.
  const currentTheme = mounted && resolvedTheme === 'dark' ? 'dark' : 'light'

  const src = `https://github-readme-stats.vercel.app/api?username=Riddhimaan-Senapati&show_icons=true${currentTheme === 'dark' ? '&theme=radical' : ''}`

  return (
    <section id="github-stats" className="py-24">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">GitHub Stats</h2>
      <div className="flex flex-col items-center space-y-8">
        <Image
          src={src}
          alt={`Riddhimaan's GitHub stats (${currentTheme} Mode)`}
          width={500}
          height={200}
          className="rounded-lg"
          unoptimized
        />
      </div>
    </section>
  )
}

export default GitHubStats