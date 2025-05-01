import Hero from "@/app/hero"
import About from "@/app/about"
import BlogPosts from "@/app/blog-posts"
import Contact from "@/app/contact"
import { PagesLayout } from "@/components/layout/pages-layout"
import { ScrollingButtons } from "./scroll-page"

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <PagesLayout>
          <Hero />
          <About />
          <BlogPosts />
          <Contact />
        </PagesLayout>
      </div>
      <ScrollingButtons />
    </>
  )
}
