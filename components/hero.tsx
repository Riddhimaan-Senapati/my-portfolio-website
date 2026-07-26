'use client'

import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { TextEffect } from '@/components/ui/text-effect'
import Image from 'next/image'
import { motion } from 'motion/react'

const Hero = () => {
  return (
    <section className="py-24 flex flex-col md:flex-row items-center justify-between">
      <motion.div
        className="mb-8 md:mb-0 md:w-1/2 flex justify-center md:justify-start"
        initial={{ opacity: 0, scale: 0.94, filter: 'blur(6px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/profile_photo.jpeg"
          alt="Riddhimaan's photo"
          width={300}
          height={300}
          className="rounded-full"
          priority
        />
      </motion.div>
      <div className="text-center md:text-left md:w-1/2">
        <TextEffect
          as="h1"
          per="char"
          preset="fade-in-blur"
          speedReveal={1.4}
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
        >
          Welcome!
        </TextEffect>
        <div className="mt-4">
          <Image
            src={`https://readme-typing-svg.demolab.com/?lines=%F0%9F%91%8B+Hi!+I'm+Riddhimaan!;+software+developer;+AI/ML+enthusiast`}
            alt="Animated text showing: Hi! I'm Riddhimaan!, software developer, AI/ML enthusiast"
            width={600}
            height={60}
            className="mx-auto h-auto w-full max-w-[600px] md:mx-0"
            priority
            unoptimized
          />
        </div>
        <AnimatedGroup
          preset="blur-slide"
          className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start"
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
            },
          }}
        >
          <Button size="lg" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="bg-yellow-400 hover:bg-yellow-500 text-black border-yellow-500"
            asChild
          >
            <a
              href="/Riddhimaan_Senapati_Machine_Learning_Engineer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </Button>
        </AnimatedGroup>
      </div>
    </section>
  )
}

export default Hero
