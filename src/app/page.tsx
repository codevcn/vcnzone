import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import BlogPosts from "@/components/blog-posts"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <BlogPosts />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
