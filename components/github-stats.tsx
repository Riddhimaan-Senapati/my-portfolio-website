'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const GitHubStats = () => {
  const { theme, systemTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<string>('light')

  useEffect(() => {
    // Handle system theme preference
    const resolvedTheme = theme === 'system' ? systemTheme : theme
    setCurrentTheme(resolvedTheme || 'light')
  }, [theme, systemTheme])

  return (
    <section id="github-stats" className="py-24">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">GitHub Stats</h2>
      <div className="flex flex-col items-center space-y-8">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=Riddhimaan-Senapati&show_icons=true${currentTheme === 'dark' ? '&theme=radical' : ''}`}
          alt={`Riddhimaan's GitHub stats (${currentTheme} Mode)`}
          className="rounded-lg"
        />
      </div>
    </section>
  )
}

export default GitHubStats