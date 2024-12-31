import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

const projects = [
  {
    title: 'Plowtion',
    description: 'An AI-powered schedule builder for farmers',
    image: '/plowtion.png',
    tags: ['Next.Js', 'Docker','Tensorflow'],
    link: 'https://github.com/Aadityaa2004/Plowtion',
  },

  {
    title: 'Codestrike',
    description: 'A CS-GO inspired website where you can PvP leetcode problems',
    image: '/codestrike.png',
    tags: ['React.Js', 'Docker','Express.Js','Node.Js'],
    link: 'https://github.com/craigbsch/CodeStrike',
  },

  {
    title: 'Course Advisor',
    description: 'An AI-powered app to analyze course descriptions, provide recommendations and see professor rankings',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['Streamlit', 'OpenAI','RESTful API'],
    link: 'https://github.com/Riddhimaan-Senapati/CourseAdvisor',
  },
  {
    title: 'Airport Coordinator',
    description: 'A website to help international students coordinate their trips for ridesharing',
    image: '/airport_coordinator.jpg',
    tags: ['React.Js', 'MongoDB','Node.Js'],
    link: 'https://github.com/Riddhimaan-Senapati/Airport-Coordinator',
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
              <CardTitle>
                <Link href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {project.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image}
                  width={300}
                  height={200}
                  className="mb-4 rounded-lg object-cover"
                  alt=""
                />
              </Link>
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
