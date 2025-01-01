import { Button } from '@/components/ui/button'
import Image from 'next/image'


const Hero = () => {
  return (
    <section className="py-24 flex flex-col md:flex-row items-center justify-between">
      <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center md:justify-start">
        <Image
          src="/profile_photo.jpeg"
          alt="Riddhimaan's photo"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Welcome!</h1>
        <div className="mt-4">
          <img 
            src="https://readme-typing-svg.demolab.com/?lines=👋+Hi!+I'm+Riddhimaan!;+software+developer;+AI/ML+enthusiast" 
            alt="Animated text showing: Hi! I'm Riddhimaan!, software developer, AI/ML enthusiast"
            className="mx-auto md:mx-0"
          />
        </div>
        <Button className="mt-8" size="lg" asChild>
          <a href="#contact">Get in Touch</a>
        </Button>
        
        <Button size="lg" variant="outline" className="bg-yellow-400 hover:bg-yellow-500 text-black border-yellow-500" asChild>
            <a href="https://drive.google.com/file/d/12t5e_3T9QRfO4jA4o0rEvoXvEpeAFCEL/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </Button>
      </div>
    </section>
  )
}

export default Hero

