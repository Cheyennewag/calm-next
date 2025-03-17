import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Calendar, Clock, ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Sample blog posts data
const blogPosts = [
  {
    id: "finding-calm-in-chaos",
    title: "Finding Calm in Chaos: 5 Mindfulness Techniques for Busy Lives",
    excerpt:
      "Discover practical mindfulness techniques that can be integrated into even the busiest schedules to help you find moments of calm throughout your day.",
    date: "June 15, 2023",
    readTime: "7 min read",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Mindfulness",
    featured: true,
  },
  {
    id: "sleep-better-naturally",
    title: "How to Improve Your Sleep Naturally",
    excerpt:
      "Struggling with sleep? Learn evidence-based strategies to improve your sleep quality without medication, from establishing a bedtime routine to creating the optimal sleep environment.",
    date: "May 22, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Wellness",
  },
  {
    id: "boundaries-relationships",
    title: "Setting Healthy Boundaries in Relationships",
    excerpt:
      "Explore why boundaries are essential for healthy relationships and learn practical steps for establishing and maintaining boundaries with compassion.",
    date: "April 10, 2023",
    readTime: "6 min read",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Relationships",
  },
  {
    id: "morning-routine-wellbeing",
    title: "The Morning Routine That Changed My Life",
    excerpt:
      "Discover the science-backed morning routine that transformed my wellbeing and how you can adapt it to fit your own lifestyle and goals.",
    date: "March 5, 2023",
    readTime: "5 min read",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Habits",
  },
  {
    id: "managing-anxiety-workplace",
    title: "Managing Anxiety in the Workplace",
    excerpt:
      "Practical strategies for recognizing and managing anxiety at work, from quick in-the-moment techniques to longer-term approaches for stress reduction.",
    date: "February 18, 2023",
    readTime: "9 min read",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Mental Health",
  },
  {
    id: "self-compassion-practice",
    title: "The Power of Self-Compassion",
    excerpt:
      "Learn why self-compassion is essential for wellbeing and how to develop a more compassionate relationship with yourself through simple daily practices.",
    date: "January 30, 2023",
    readTime: "7 min read",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Self-Care",
  },
]

export default function BlogPage() {
  // Get featured post
  const featuredPost = blogPosts.find((post) => post.featured)
  // Get other posts
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden warm-gradient-2 py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600')] bg-repeat opacity-5"></div>
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">
                The Calmpanion <span className="text-rose-600">Blog</span>
              </h1>
              <p className="mt-6 text-lg text-amber-900/70 md:text-xl">
                Insights, tips, and resources to support your wellbeing journey.
              </p>
            </div>
          </div>
        </section>

        {featuredPost && (
          <section className="py-20 warm-pattern">
            <div className="container">
              <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl mb-12 text-center">
                Featured Article
              </h2>
              <div className="rounded-2xl bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-amber-100/50">
                <div className="aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-amber-100 to-rose-200">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    width={1200}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105 mix-blend-overlay"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-700">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-medium mb-3">
                    <Link href={`/blog/${featuredPost.id}`} className="hover:text-rose-500 transition-colors">
                      {featuredPost.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <Button
                    variant="link"
                    className="p-0 text-rose-500 hover:text-rose-600 flex items-center gap-2"
                    asChild
                  >
                    <Link href={`/blog/${featuredPost.id}`}>
                      Read Full Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="warm-gradient-3 py-20">
          <div className="container">
            <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl mb-12 text-center">
              Recent Articles
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="group rounded-2xl bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover-lift border border-amber-100/50"
                >
                  <div
                    className={`aspect-video overflow-hidden bg-gradient-to-br ${
                      index % 3 === 0
                        ? "from-rose-200/50 to-rose-300/50"
                        : index % 3 === 1
                          ? "from-amber-200/50 to-amber-300/50"
                          : "from-orange-200/50 to-orange-300/50"
                    }`}
                  >
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 mix-blend-overlay"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="inline-block rounded-full bg-rose-100 px-2 py-1 text-xs font-medium text-rose-700">
                        {post.category}
                      </span>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-medium mb-2">
                      <Link href={`/blog/${post.id}`} className="hover:text-rose-500 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                      <Button variant="link" className="p-0 text-rose-500 hover:text-rose-600 text-sm" asChild>
                        <Link href={`/blog/${post.id}`}>Read More</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 warm-dots">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">Blog Categories</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Explore articles by topic to find exactly what you're looking for.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {["Mindfulness", "Mental Health", "Self-Care", "Relationships", "Wellness", "Habits"].map(
                (category, index) => (
                  <Link
                    key={category}
                    href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`group rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md text-center border ${
                      index % 3 === 0
                        ? "bg-gradient-to-br from-rose-50 to-rose-100 border-rose-200"
                        : index % 3 === 1
                          ? "bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200"
                          : "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200"
                    }`}
                  >
                    <Heart
                      className={`h-8 w-8 mx-auto mb-3 ${
                        index % 3 === 0 ? "text-rose-400" : index % 3 === 1 ? "text-amber-400" : "text-orange-400"
                      }`}
                    />
                    <h3 className="text-lg font-medium group-hover:text-rose-500 transition-colors">{category}</h3>
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="warm-gradient-4 py-20">
          <div className="container text-center">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">Subscribe to My Newsletter</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Get the latest articles, resources, and wellbeing tips delivered straight to your inbox.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="bg-gradient-to-r from-amber-400 to-rose-500 hover:from-amber-500 hover:to-rose-600">
                  Subscribe
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">I respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

