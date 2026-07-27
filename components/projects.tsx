import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { projects } from '@/lib/profile'


const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Projects
      </h2>
      <AnimatedGroup
        preset="blur-slide"
        className="grid gap-6 sm:grid-cols-2 [&>div]:h-full"
        amount={0.05}
        variants={{
          container: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
          },
        }}
      >
        {projects.map((project) => {
          // Use website_link if available; otherwise, use the link property.
          const headerLink = project.website_link || project.link
          const imageLink = project.website_link || project.link
          return (
            <Card key={project.title} className="h-full">
              <CardHeader>
                <CardTitle>
                  <Link
                    href={headerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {project.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Link href={imageLink} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={project.image}
                    width={300}
                    height={200}
                    className="mb-4 rounded-lg object-cover"
                    alt={project.title}
                  />
                </Link>
                <CardDescription className="mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  {project.demo && (
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Video Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
              {/* CardFooter is nowrap by default, which forced cards wider than
                  the viewport on mobile once a project had several tags. */}
              <CardFooter className="flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          )
        })}
      </AnimatedGroup>
    </section>
  )
}

export default Projects
