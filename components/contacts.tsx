import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Mail, Linkedin } from 'lucide-react'

// Lucide's `X` is the generic close mark and `Twitter` is the retired bird, so the current
// brand glyph is inlined here. Sized and coloured to match the Lucide icons beside it.
const XLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

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
            <a
              href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=riddhimaan22@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
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
          <Button variant="outline" className="w-full" asChild>
            <a href="https://x.com/riddhimaan04" target="_blank" rel="noopener noreferrer">
              <XLogo className="mr-2 h-4 w-4" />
              X
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}

export default Contact