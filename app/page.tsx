import Header from '@/components/header'
import Hero from '@/components/hero'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import AboutMe from '@/components/about-me'
import Contact from '@/components/contacts'
import GitHubStats from '@/components/github-stats'
import PreviousExperience from '@/components/previous-experience'
import Certifications from '@/components/certifications'

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <AboutMe />
        <PreviousExperience />
        <Skills />
        <Certifications />
        <Projects />
        <GitHubStats />
        <Contact />
      </main>
    </div>
  )
}

