import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
    {
    title: 'DoorSmashOrPass',
    description:
      'A campus food delivery platform that connects students with student couriers while providing AI-powered nutrition coaching. ',
    image: '/doorsmashorpass.png',
    tags: ['NextJs', 'ElevenLabs', 'Supabase', 'AWS lambda','Gemini API','AWS ECR'],
    link: 'https://github.com/icedmoch/doorsmashorpass',
    demo: 'https://youtu.be/9kZN4feIgps',
    website_link: 'https://doorsmash.vercel.app/',
  },

  {
    title: 'Recuvia',
    description:
      'a modern web application designed to help people find their lost items and report found items using AI-powered image and text search capabilities. ',
    image: '/Recuvia.png',
    tags: ['NextJs', 'Supabase', 'pgvector', 'postgresql'],
    link: 'https://github.com/Riddhimaan-Senapati/Recuvia',
    demo: '',
    website_link: 'https://recuvia.vercel.app/',
  },


  {
    title: 'TL;DR Mail',
    description:
      'AI-powered email assistant to summarize emails, extract key event details, and track deadlines',
    image: '/tldrmail.png',
    tags: ['NextJs', 'OpenAI', 'Clerk', 'Google API'],
    link: 'https://github.com/Riddhimaan-Senapati/tldrmail',
    demo: 'https://www.youtube.com/watch?v=xUNG3yKc2hk',
    website_link: 'https://tldrmail.us',
  },

  {
    title: 'Plowtion',
    description: 'An AI-powered schedule builder for farmers',
    image: '/plowtion.png',
    tags: ['Next.Js', 'Docker', 'Tensorflow'],
    link: 'https://github.com/Aadityaa2004/Plowtion',
    demo: 'https://www.youtube.com/watch?v=GYeHbwub1oI',
  },

  {
    title: 'Codestrike',
    description: 'A CS-GO inspired website where you can PvP leetcode problems',
    image: '/codestrike.png',
    tags: ['React.Js', 'Docker', 'Express.Js', 'Node.Js'],
    link: 'https://github.com/craigbsch/CodeStrike',
    demo: 'https://www.youtube.com/watch?v=qSjl_q2JoYw',
  },

  {
    title: 'Course Advisor',
    description:
      'An AI-powered app to analyze course descriptions, provide recommendations and see professor rankings',
    image: '/CourseAdvisor.png',
    tags: ['Streamlit', 'OpenAI', 'RESTful API'],
    link: 'https://github.com/Riddhimaan-Senapati/CourseAdvisor',
  },

  {
    title: 'Airport Coordinator',
    description:
      'A website to help international students coordinate their trips for ridesharing',
    image: '/airport_coordinator.jpg',
    tags: ['React.Js', 'MongoDB', 'Node.Js'],
    link: 'https://github.com/Riddhimaan-Senapati/Airport-Coordinator',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => {
          // Use website_link if available; otherwise, use the link property.
          const headerLink = project.website_link || project.link
          const imageLink = project.website_link || project.link
          return (
            <Card key={project.title}>
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
              <CardFooter>
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="mr-2">
                    {tag}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
