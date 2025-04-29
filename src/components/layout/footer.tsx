import { Mail } from "lucide-react"
import { FacebookIcon, GithubIcon } from "../icons"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white py-4">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
        <div className="flex flex-col items-center gap-2 md:items-start md:gap-1">
          <a href="/" className="text-xl font-bold text-[#2BA6FF]">
            Loi Dev
          </a>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            <span>&copy; </span>
            <span>{new Date().getFullYear()} </span>
            <span>Luong Thanh Loi. All rights reserved.</span>
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/codevcn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:fill-[#2BA6FF]"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://fb.com/lthloi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:fill-[#2BA6FF]"
            aria-label="Facebook"
          >
            <FacebookIcon className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </a>
          <a
            href="mailto:codevoicainay@gmail.com"
            className="text-muted-foreground hover:text-[#2BA6FF]"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <a
            href="#home"
            className="text-sm font-medium text-muted-foreground hover:text-[#2BA6FF]"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-[#2BA6FF]"
          >
            About
          </a>
          <a
            href="#blog"
            className="text-sm font-medium text-muted-foreground hover:text-[#2BA6FF]"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground hover:text-[#2BA6FF]"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
