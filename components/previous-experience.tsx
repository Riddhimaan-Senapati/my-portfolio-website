import Image from 'next/image'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { experience } from '@/lib/profile'

const PreviousExperience = () => {
  return (
    <section id="experience" className="py-24">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        💼 Previous Experience
      </h2>

      <AnimatedGroup
        preset="blur-slide"
        className="space-y-12"
        amount={0.05}
        variants={{
          container: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
          },
        }}
      >
        {experience.map((job) => (
          <div key={`${job.organization}-${job.role}`}>
            <div className="flex items-center mb-2">
              <Image
                src={job.logo}
                alt={job.logoAlt}
                width={40}
                height={40}
                className="mr-4 h-10 w-10 rounded object-contain"
              />
              <h3 className="text-2xl font-semibold">{job.role}</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-1">{job.organization}</p>
            <p className="text-sm text-muted-foreground mb-4">{job.period}</p>
            <ul className="list-disc list-outside pl-5 space-y-2 marker:text-muted-foreground">
              {job.bullets.map((bullet) => (
                <li key={bullet.label}>
                  <span className="font-semibold">{bullet.label}:</span>
                  <span className="text-muted-foreground"> {bullet.detail}</span>
                </li>
              ))}
            </ul>
            {job.contactEmail && (
              <p className="mt-3 text-sm text-muted-foreground">
                For more details you may contact me{' '}
                <a
                  href={`mailto:${job.contactEmail}`}
                  className="text-blue-500 underline underline-offset-2"
                >
                  here
                </a>
                .
              </p>
            )}
          </div>
        ))}
      </AnimatedGroup>
    </section>
  )
}

export default PreviousExperience
