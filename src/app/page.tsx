import Hero from "@/app/hero"
import About from "@/app/about"
import BlogPosts from "@/app/blog-posts"
import Contact from "@/app/contact"
import { PagesLayout } from "@/components/layout/pages-layout"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <PagesLayout>
        <Hero />
        <About />
        <BlogPosts />
        <Contact />
      </PagesLayout>
    </div>
  )
}
