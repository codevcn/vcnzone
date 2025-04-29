import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Code, Github } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Luong Thanh Loi</h1>
              <p className="text-xl text-muted-foreground">Web Developer & Software Engineer</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-[#2BA6FF] hover:bg-[#2BA6FF]/90">
                <Link href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#2BA6FF] text-[#2BA6FF] hover:bg-[#2BA6FF] hover:text-white"
              >
                <Link href="https://github.com/codevcn" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Code className="h-4 w-4 text-[#2BA6FF]" />
                <span>React</span>
              </div>
              <div className="flex items-center gap-1">
                <Code className="h-4 w-4 text-[#2BA6FF]" />
                <span>TypeScript</span>
              </div>
              <div className="flex items-center gap-1">
                <Code className="h-4 w-4 text-[#2BA6FF]" />
                <span>Tailwind CSS</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] overflow-hidden rounded-full border-4 border-[#2BA6FF] bg-muted">
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-[#2BA6FF]">
                LTL
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
