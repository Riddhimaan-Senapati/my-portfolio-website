import { AnimatedGroup } from '@/components/ui/animated-group'
import { certifications } from '@/lib/profile'

const Certifications = () => {
  return (
    <section id="certifications" className="py-24">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        🎓 Certifications
      </h2>

      <AnimatedGroup
        preset="blur-slide"
        className="space-y-8"
        amount={0.2}
        variants={{
          container: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
          },
        }}
      >
        {certifications.map((certification) => (
          <p key={certification.name} className="text-2xl font-semibold mb-2">
            <a
              href={certification.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {certification.name}
            </a>
          </p>
        ))}
      </AnimatedGroup>
    </section>
  )
}

export default Certifications
