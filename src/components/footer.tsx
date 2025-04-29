import Link from "next/link"
import { Github, Facebook, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
        <div className="flex flex-col items-center gap-2 md:items-start md:gap-1">
          <Link href="/" className="text-xl font-bold text-[#2BA6FF]">
            Loi Dev
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Luong Thanh Loi. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://github.com/codevcn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-[#2BA6FF]"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://fb.com/lthloi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-[#2BA6FF]"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="mailto:codevoicainay@gmail.com"
            className="text-muted-foreground hover:text-[#2BA6FF]"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link href="#home" className="text-sm font-medium text-muted-foreground hover:text-[#2BA6FF]">
            Home
          </Link>
          <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-[#2BA6FF]">
            About
          </Link>
          <Link href="#blog" className="text-sm font-medium text-muted-foreground hover:text-[#2BA6FF]">
            Blog
          </Link>
          <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-[#2BA6FF]">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}
