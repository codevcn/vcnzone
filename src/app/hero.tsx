import { GithubIcon } from "@/components/icons"
import { Button } from "@/components/materials/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32 bg-regular-black-cl">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 pl-6">
            <div className="space-y-2">
              <h1 className="text-3xl text-regular-white-cl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Lương Thành Lợi
              </h1>
              <p className="text-xl text-regular-gray-txtcl">Web Developer & Software Engineer</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a href="#contact">
                <Button className="bg-transparent border-2 border-regular-blue-cl text-regular-white-cl hover:bg-regular-blue-cl hover:text-regular-white-cl">
                  <span>Contact Me </span>
                  <span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Button>
              </a>
              <a href="https://github.com/codevcn" target="_blank" rel="noopener noreferrer">
                <Button className="bg-transparent border-2 border-regular-blue-cl text-regular-white-cl hover:bg-regular-blue-cl hover:text-regular-white-cl">
                  <GithubIcon className="mr-2 h-4 w-4 fill-current" />
                  <span> GitHub</span>
                </Button>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] overflow-hidden rounded-full border-4 border-regular-blue-cl bg-regular-slightgray-cl">
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-regular-blue-cl">
                LTL
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
