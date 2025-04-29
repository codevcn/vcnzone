"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/materials/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#2BA6FF]">Loi Dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="text-sm font-medium hover:text-[#2BA6FF] transition-colors">
            Home
          </a>
          <a href="#about" className="text-sm font-medium hover:text-[#2BA6FF] transition-colors">
            About
          </a>
          <a href="#blog" className="text-sm font-medium hover:text-[#2BA6FF] transition-colors">
            Blog
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-[#2BA6FF] transition-colors">
            Contact
          </a>
        </nav>

        <Button
          variant="outline"
          className="hidden md:flex border-[#2BA6FF] text-[#2BA6FF] hover:bg-[#2BA6FF] hover:text-white"
        >
          Subscribe
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-white p-4">
          <nav className="flex flex-col gap-4 p-4 bg-white border border-solid border-gray-200 rounded-md">
            <a
              href="#home"
              className="text-lg font-medium p-2 hover:bg-slate-100 rounded-md hover:text-[#2BA6FF]"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-lg font-medium p-2 hover:bg-slate-100 rounded-md hover:text-[#2BA6FF]"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#blog"
              className="text-lg font-medium p-2 hover:bg-slate-100 rounded-md hover:text-[#2BA6FF]"
              onClick={toggleMenu}
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-lg font-medium p-2 hover:bg-slate-100 rounded-md hover:text-[#2BA6FF]"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <Button className="mt-4 w-full bg-[#2BA6FF] hover:bg-[#2BA6FF]/90">Subscribe</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
