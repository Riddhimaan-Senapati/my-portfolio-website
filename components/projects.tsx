import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    title: 'Plowtion',
    description: 'An AI-powered schedule builder for farmers',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['Next.Js', 'Docker','Tensorflow'],
  },
  {
    title: 'Codestrike',
    description: 'A CS-GO inspired website where you can PvP leetcode problems',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['React.Js', 'Docker','Express.Js','Node.Js'],
  },
  {
    title: 'Course Advisor',
    description: 'An AI-powered app to analyze course descriptions, provide recommendations and see professor rankings',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['Streamlit', 'OpenAI','RESTful API'],
  },
  {
    title: 'Airport Coordinator',
    description: 'A website to help international students coordinate their trips for ridesharing',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['React.Js', 'MongoDB','Node.Js'],
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

