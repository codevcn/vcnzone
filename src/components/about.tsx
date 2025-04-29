import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Laptop, Lightbulb, Rocket } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#2BA6FF] px-3 py-1 text-sm text-white">About Me</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Web Developer & Problem Solver</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a passionate web developer with expertise in modern JavaScript frameworks and libraries. I love
              building responsive, user-friendly web applications with clean code and optimal performance.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-2 border-[#2BA6FF]/10 hover:border-[#2BA6FF]/30 transition-all">
            <CardHeader className="pb-2">
              <Code2 className="h-12 w-12 text-[#2BA6FF]" />
              <CardTitle className="text-xl">Clean Code</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                I write maintainable, readable, and efficient code following best practices.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border-2 border-[#2BA6FF]/10 hover:border-[#2BA6FF]/30 transition-all">
            <CardHeader className="pb-2">
              <Laptop className="h-12 w-12 text-[#2BA6FF]" />
              <CardTitle className="text-xl">Responsive Design</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Creating websites that work flawlessly across all devices and screen sizes.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border-2 border-[#2BA6FF]/10 hover:border-[#2BA6FF]/30 transition-all">
            <CardHeader className="pb-2">
              <Lightbulb className="h-12 w-12 text-[#2BA6FF]" />
              <CardTitle className="text-xl">Problem Solving</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>I enjoy tackling complex problems and finding elegant solutions.</CardDescription>
            </CardContent>
          </Card>
          <Card className="border-2 border-[#2BA6FF]/10 hover:border-[#2BA6FF]/30 transition-all">
            <CardHeader className="pb-2">
              <Rocket className="h-12 w-12 text-[#2BA6FF]" />
              <CardTitle className="text-xl">Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Optimizing applications for speed and efficiency is my priority.</CardDescription>
            </CardContent>
          </Card>
        </div>
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h3 className="text-2xl font-bold">My Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React",
              "TypeScript",
              "JavaScript",
              "HTML",
              "CSS",
              "Tailwind CSS",
              "Redux",
              "Node.js",
              "Next.js",
              "Git",
            ].map((tech) => (
              <div
                key={tech}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm border border-[#2BA6FF]/20"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
