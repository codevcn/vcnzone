import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/materials/card"
import { Code2, Laptop, Lightbulb, Rocket } from "lucide-react"

type TCardItemProps = {
  title: string
  description: string
  icon: React.JSX.Element
}

const CardItem = ({ description, icon, title }: TCardItemProps) => {
  return (
    <Card className="border-none bg-regular-slightgray-cl">
      <CardHeader className="pb-2">
        {icon}
        <CardTitle className="text-xl text-regular-white-cl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-regular-gray-txtcl">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

const techsStack = [
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
]

type TechStackItemProps = {
  tech: string
}

const TechStackItem = ({ tech }: TechStackItemProps) => {
  return (
    <div className="rounded-full bg-regular-slightgray-cl px-4 py-2 text-sm font-medium shadow-sm">
      {tech}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-regular-darkgray-cl">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-regular-blue-cl px-3 py-1 text-base text-white">
              About Me
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-regular-white-cl">
              Web Developer & Problem Solver
            </h2>
            <p className="max-w-[900px] text-regular-gray-txtcl md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a passionate web developer with expertise in modern JavaScript frameworks and
              libraries. I love building responsive, user-friendly web applications with clean code
              and optimal performance.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <CardItem
            icon={<Code2 className="h-12 w-12 text-regular-blue-cl" />}
            title="Clean Code"
            description="I write maintainable, readable, and efficient code following best practices."
          />
          <CardItem
            icon={<Laptop className="h-12 w-12 text-regular-blue-cl" />}
            title="Responsive Design"
            description="Creating websites that work flawlessly across all devices and screen sizes."
          />
          <CardItem
            icon={<Lightbulb className="h-12 w-12 text-regular-blue-cl" />}
            title="Problem Solving"
            description="I enjoy tackling complex problems and finding elegant solutions."
          />
          <CardItem
            icon={<Rocket className="h-12 w-12 text-regular-blue-cl" />}
            title="Performance"
            description="Optimizing applications for speed and efficiency is my priority."
          />
        </div>
        <div className="mx-auto max-w-3xl space-y-4 text-center text-regular-white-cl">
          <h3 className="text-2xl font-bold">My Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techsStack.map((tech) => (
              <TechStackItem key={tech} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
