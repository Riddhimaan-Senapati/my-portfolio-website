import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React and Node.js',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Task Management App',
    description: 'A productivity app built with Next.js and Firebase',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['Next.js', 'Firebase', 'Tailwind CSS'],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="mb-4 rounded-lg object-cover"
              />
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter>
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="mr-2">
                  {tag}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Projects

