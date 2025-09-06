import { Github, Linkedin, Mail } from "lucide-react"
import { BsTwitterX } from "react-icons/bs";


export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">© 2025 Alief Adha. Built with passion and love.</p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/aliefadha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/alief-adha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://x.com/aliefadhaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <BsTwitterX className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="mailto:aliefadha1@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
