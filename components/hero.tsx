import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Welcome to My Portfolio</h1>
      <p className="mt-4 text-xl text-muted-foreground">
        I'm a passionate developer creating amazing web experiences
      </p>
      <Button className="mt-8" size="lg" asChild>
        <a href="#contact">Get in Touch</a>
      </Button>
    </section>
  )
}

export default Hero

