import Hero from '@/components/hero'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import AboutMe from '@/components/about-me'
import Contact from '@/components/contacts'
import GitHubStats from '@/components/github-stats'
import PreviousExperience from '@/components/previous-experience'
import Certifications from '@/components/certifications'
import AnimatedSection from '@/components/animated-section'

export default function Home() {
  return (
    <>
      <Hero />
      <AnimatedSection>
        <AboutMe />
      </AnimatedSection>
      <AnimatedSection>
        <PreviousExperience />
      </AnimatedSection>
      <AnimatedSection>
        <Skills />
      </AnimatedSection>
      <AnimatedSection>
        <Certifications />
      </AnimatedSection>
      <AnimatedSection>
        <Projects />
      </AnimatedSection>
      <AnimatedSection>
        <GitHubStats />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </>
  )
}
