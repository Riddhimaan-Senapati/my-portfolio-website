import Header from '@/components/header'
import Hero from '@/components/hero'
import Skills from '@/components/skills'
import Projects from '@/components/projects'

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Skills />
        <Projects />
      </main>
    </div>
  )
}

