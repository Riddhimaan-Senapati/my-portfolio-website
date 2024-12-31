import Header from '@/components/header'
import Hero from '@/components/hero'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import AboutMe from '@/components/about-me'
import Contact from '@/components/contacts'

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

