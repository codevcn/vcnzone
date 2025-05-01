import { Mail } from "lucide-react"
import { FacebookIcon, GithubIcon } from "../icons"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-regular-black-cl py-6 border-regular-divider-cl">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
        <div className="flex flex-col items-center gap-2 md:items-start md:gap-1">
          <a href="/" className="flex items-center gap-2">
            <Image
              src="/vcnzone-logo-white.png"
              alt="App Logo"
              height={22}
              width={22}
              className="h-[22px]"
            />
            <span className="text-[22px] leading-[22px] font-bold text-regular-white-cl">
              VCN ZONE
            </span>
          </a>
          <p className="text-center text-sm text-regular-gray-txtcl md:text-left">
            <span className="text-base">&copy; </span>
            <span>{new Date().getFullYear()} </span>
            <span>Luong Thanh Loi. All rights reserved.</span>
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/codevcn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-regular-gray-txtcl"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5 fill-current hover:fill-regular-blue-cl" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://fb.com/lthloi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-regular-gray-txtcl"
            aria-label="Facebook"
          >
            <FacebookIcon className="h-5 w-5 fill-current hover:fill-regular-blue-cl" />
            <span className="sr-only">Facebook</span>
          </a>
          <a
            href="mailto:codevoicainay@gmail.com"
            className="text-regular-gray-txtcl hover:text-regular-blue-cl"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <a
            href="#home"
            className="text-sm font-medium text-regular-gray-txtcl hover:text-regular-blue-cl"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-regular-gray-txtcl hover:text-regular-blue-cl"
          >
            About
          </a>
          <a
            href="#blog"
            className="text-sm font-medium text-regular-gray-txtcl hover:text-regular-blue-cl"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-regular-gray-txtcl hover:text-regular-blue-cl"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
