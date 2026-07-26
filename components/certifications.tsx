import { AnimatedGroup } from '@/components/ui/animated-group'

const certifications = [
  {
    name: 'AWS Certified AI Practitioner',
    url: 'https://www.credly.com/badges/42ee21f3-762c-478f-a83c-4e16a6aabfdc/public_url',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    url: 'https://www.credly.com/badges/c6b05266-8415-452c-a136-78bbec3697aa/public_url',
  },
]

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
