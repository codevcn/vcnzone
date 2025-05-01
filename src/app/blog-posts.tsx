import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/materials/card"
import { Button } from "@/components/materials/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import type { TPostData } from "@/utils/types/data"

type TPostItemProps = {
  postData: TPostData
}

const PostItem = ({ postData }: TPostItemProps) => {
  const { category, date, excerpt, id, readTime, title } = postData

  return (
    <Card key={id} className="overflow-hidden bg-regular-slightgray-cl border-none">
      <CardHeader className="p-4 md:p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="rounded-full bg-[#2BA6FF]/10 px-2 py-1 text-sm font-medium text-regular-blue-cl">
            {category}
          </span>
          <div className="flex items-center gap-1 text-regular-gray-txtcl">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1 text-regular-gray-txtcl">
            <Clock className="h-3 w-3" />
            <span>{readTime}</span>
          </div>
        </div>
        <CardTitle className="text-xl md:text-2xl text-regular-white-cl">{title}</CardTitle>
        <CardDescription className="line-clamp-2 text-regular-gray-txtcl">
          {excerpt}
        </CardDescription>
      </CardHeader>
      <CardFooter className="p-4 pt-0 md:p-6 md:pt-0">
        <Button className="text-regular-blue-cl hover:bg-regular-blue-cl hover:text-regular-white-cl">
          <span>Read more </span>
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function BlogPosts() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React and TypeScript",
      excerpt:
        "Learn how to set up a new project with React and TypeScript for type-safe development.",
      date: "April 15, 2023",
      readTime: "5 min read",
      category: "React",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS: Tips and Tricks",
      excerpt:
        "Discover advanced techniques to make the most out of Tailwind CSS in your projects.",
      date: "May 22, 2023",
      readTime: "8 min read",
      category: "CSS",
    },
    {
      id: 3,
      title: "State Management with Redux Toolkit",
      excerpt: "A comprehensive guide to managing application state using Redux Toolkit.",
      date: "June 10, 2023",
      readTime: "10 min read",
      category: "Redux",
    },
    {
      id: 4,
      title: "Building Responsive Layouts with Flexbox and Grid",
      excerpt: "Learn how to create modern, responsive layouts using CSS Flexbox and Grid.",
      date: "July 5, 2023",
      readTime: "7 min read",
      category: "CSS",
    },
  ]

  return (
    <section id="blog" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-regular-blue-cl px-3 py-1 text-base text-regular-white-cl">
              Blog
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-regular-white-cl sm:text-5xl">
              Latest Articles
            </h2>
            <p className="max-w-[900px] text-regular-gray-txtcl md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Thoughts, tutorials, and insights about web development and programming.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          {posts.map((post) => (
            <PostItem key={post.id} postData={post} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button className="border-2 border-regular-blue-cl bg-transparent text-regular-white-cl hover:bg-regular-blue-cl hover:text-regular-white-cl">
            <span>View All Posts </span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
