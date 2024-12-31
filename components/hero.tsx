import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Welcome to My Portfolio</h1>
      <div className="mt-4">
        <img
          src="https://readme-typing-svg.demolab.com/?lines=👋+Hi!+I'm+Riddhimaan!;+software+developer;+AI/ML+enthusiast" 
          alt="Animated text showing: Hi! I'm Riddhimaan!, software developer, AI/ML enthusiast"
          className="mx-auto"
        />
      </div>
      <Button className="mt-8" size="lg" asChild>
        <a href="mailto:riddhimaan22@gmail.com">Get in Touch</a>
      </Button>
    </section>
  )
}

export default Hero


