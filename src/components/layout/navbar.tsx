"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/materials/button"
import Image from "next/image"
import { ScrollingProgressBar } from "@/app/scroll-page"
import { CustomSheet } from "@/components/materials/sheet"

const LogoSection = () => {
  return (
    <a href="/" className="flex items-center gap-2">
      <Image
        src="/vcnzone-logo-white.png"
        alt="App Logo"
        height={28}
        width={28}
        className="h-[28px]"
      />
      <span className="text-[28px] leading-[28px] font-bold">VCN ZONE</span>
    </a>
  )
}

const NavSection = () => {
  return (
    <nav className="hidden md:flex gap-6">
      <a href="#home" className="text-sm font-medium hover:text-regular-blue-cl transition-colors">
        Home
      </a>
      <a href="#about" className="text-sm font-medium hover:text-regular-blue-cl transition-colors">
        About
      </a>
      <a href="#blog" className="text-sm font-medium hover:text-regular-blue-cl transition-colors">
        Blog
      </a>
      <a
        href="#contact"
        className="text-sm font-medium hover:text-regular-blue-cl transition-colors"
      >
        Contact
      </a>
    </nav>
  )
}

const MobileButtonSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((pre) => !pre)
  }

  return (
    <>
      <Button className="hidden bg-transparent border-2 border-regular-blue-cl md:flex text-regular-white-cl hover:bg-regular-blue-cl hover:text-regular-white-cl">
        Subscribe
      </Button>
      <CustomSheet
        open={isMenuOpen}
        onOpenChange={setIsMenuOpen}
        pannelProps={{ className: "min-w-[300px]" }}
        trigger={
          <Button className="md:hidden border-none" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </Button>
        }
        body={
          <div>
            <nav className="flex flex-col gap-3">
              <a
                href="#home"
                className="text-md text-center text-regular-white-cl font-medium p-2 rounded-md hover:text-regular-blue-cl"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-md text-center text-regular-white-cl font-medium p-2 rounded-md hover:text-regular-blue-cl"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#blog"
                className="text-md text-center text-regular-white-cl font-medium p-2 rounded-md hover:text-regular-blue-cl"
                onClick={toggleMenu}
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-md text-center text-regular-white-cl font-medium p-2 rounded-md hover:text-regular-blue-cl"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <Button className="mt-2 w-full text-md text-regular-white-cl hover:bg-regular-blue-cl">
                Subscribe
              </Button>
            </nav>
          </div>
        }
      />
    </>
  )
}

export default function Navbar() {
  return (
    <header className="sticky top-0 left-0 z-50 w-full text-regular-white-cl border-b border-regular-bordercl bg-regular-black-cl backdrop-blur supports-[backdrop-filter]:bg-regular-navbar-blur-bgcl">
      <ScrollingProgressBar />
      <div className="container flex h-16 items-center justify-between">
        <LogoSection />
        <NavSection />
        <MobileButtonSection />
      </div>
    </header>
  )
}
