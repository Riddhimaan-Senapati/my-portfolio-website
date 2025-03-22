import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Mail, Linkedin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Get in Touch</h2>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Contact Me</CardTitle>
          <CardDescription>Feel free to reach out through the following channels:</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          <Button variant="outline" className="w-full" asChild>
            <a href="https://github.com/Riddhimaan-Senapati" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <a target="_blank" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=riddhimaan22@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </a>
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <a href="https://www.linkedin.com/in/riddhimaan-senapati/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}

export default Contact