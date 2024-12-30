import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const skills = [
  { name: 'React', description: 'Building interactive UIs' },
  { name: 'Next.js', description: 'Server-side rendering and static site generation' },
  { name: 'TypeScript', description: 'Type-safe JavaScript development' },
  { name: 'Tailwind CSS', description: 'Rapid UI development with utility classes' },
]

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <Card key={skill.name}>
            <CardHeader>
              <CardTitle>{skill.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{skill.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Skills

