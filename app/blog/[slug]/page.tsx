import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, Facebook, Twitter, Linkedin } from "lucide-react"
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
    content: `
      <p>In today's fast-paced world, finding moments of calm can feel like an impossible task. Between work responsibilities, family obligations, and the constant ping of notifications, it's easy to feel overwhelmed and disconnected from ourselves. Yet, it's precisely during these busy times that mindfulness becomes most valuable.</p>
      
      <p>Mindfulness doesn't require hours of meditation or a complete lifestyle overhaul. Even small moments of presence and awareness can make a significant difference in how we experience our day-to-day lives. Here are five practical mindfulness techniques that can be integrated into even the busiest schedules:</p>
      
      <h2>1. The Three-Breath Break</h2>
      
      <p>This simple practice can be done anywhere, anytime, and takes less than a minute. Whether you're switching between tasks, feeling stressed, or simply need a moment to reset, try taking three conscious breaths:</p>
      
      <ul>
        <li>For the first breath, focus on fully inhaling and exhaling, noticing the sensation of your breath.</li>
        <li>With the second breath, allow your body to relax, releasing any tension in your shoulders, jaw, or wherever you tend to hold stress.</li>
        <li>For the third breath, ask yourself: "What's most important right now?" This helps bring clarity and intention to your next action.</li>
      </ul>
      
      <p>This micro-practice can help interrupt the autopilot mode we often operate in and bring us back to the present moment.</p>
      
      <h2>2. Mindful Transitions</h2>
      
      <p>Our days are filled with transitions: waking up, commuting, switching between work tasks, returning home. These transition periods offer natural opportunities for mindfulness.</p>
      
      <p>Try using everyday transitions as mindfulness bells. For example:</p>
      
      <ul>
        <li>When you turn your computer on in the morning, take a moment to set an intention for your workday.</li>
        <li>As you enter your home after work, pause at the threshold and take a deep breath, symbolically leaving work stress behind.</li>
        <li>Before checking your phone, take three conscious breaths to center yourself.</li>
      </ul>
      
      <p>By bringing awareness to these transition moments, we create small pockets of mindfulness throughout our day.</p>
      
      <h2>3. The STOP Practice</h2>
      
      <p>When you notice yourself feeling stressed or overwhelmed, try the STOP practice:</p>
      
      <ul>
        <li><strong>S</strong>top what you're doing.</li>
        <li><strong>T</strong>ake a breath.</li>
        <li><strong>O</strong>bserve what's happening in your body, emotions, and thoughts.</li>
        <li><strong>P</strong>roceed with awareness and kindness.</li>
      </ul>
      
      <p>This brief practice helps interrupt the stress cycle and gives you space to respond thoughtfully rather than react automatically.</p>
      
      <h2>4. Mindful Listening</h2>
      
      <p>How often do you find yourself planning what you'll say next instead of truly listening to someone? Mindful listening involves giving your full attention to the speaker, without planning your response or judging what's being said.</p>
      
      <p>Practice this during your next conversation by:</p>
      
      <ul>
        <li>Making eye contact</li>
        <li>Noticing when your mind wanders and gently bringing it back</li>
        <li>Observing the speaker's tone, facial expressions, and body language</li>
        <li>Resisting the urge to interrupt or immediately fill silences</li>
      </ul>
      
      <p>Not only does this improve your relationships, but it also creates a moment of presence and connection in your day.</p>
      
      <h2>5. Gratitude Moments</h2>
      
      <p>Gratitude is a powerful form of mindfulness that shifts our attention from what's lacking to what's present. Try incorporating brief gratitude moments into your existing routine:</p>
      
      <ul>
        <li>While waiting for your morning coffee to brew, think of one thing you're grateful for today.</li>
        <li>Before eating a meal, take a moment to appreciate the food and everyone involved in bringing it to your table.</li>
        <li>As you brush your teeth at night, reflect on three positive moments from your day, no matter how small.</li>
      </ul>
      
      <p>These small practices help train the mind to notice the good, even during challenging times.</p>
      
      <h2>Integrating Mindfulness Into Your Life</h2>
      
      <p>The key to making mindfulness sustainable is not trying to do all these practices at once, but rather choosing one that resonates with you and integrating it into your existing routine. Start small—even one mindful moment a day can make a difference.</p>
      
      <p>Remember that mindfulness is not about achieving a particular state or eliminating stress completely. It's about developing a different relationship with our experiences—one characterized by awareness, acceptance, and compassion.</p>
      
      <p>In our busy lives, we may not always have time for formal meditation, but we can find moments of calm in the chaos by bringing mindful awareness to the activities we're already doing. These small practices, consistently applied, can help us navigate life's challenges with greater ease and presence.</p>
      
      <p>What mindfulness practice will you try today?</p>
    `,
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
    content: "Full article content here...",
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
    content: "Full article content here...",
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
    content: "Full article content here...",
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
    content: "Full article content here...",
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
    content: "Full article content here...",
  },
]

// Get related posts (excluding the current post)
const getRelatedPosts = (currentPostId: string, category: string) => {
  return blogPosts.filter((post) => post.id !== currentPostId && post.category === category).slice(0, 3)
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Find the post that matches the slug
  const post = blogPosts.find((post) => post.id === params.slug)

  // If post not found, you could redirect or show an error
  if (!post) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 container py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Post not found</h1>
            <p className="mt-4">The blog post you're looking for doesn't exist.</p>
            <Button className="mt-6" asChild>
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Get related posts
  const relatedPosts = getRelatedPosts(post.id, post.category)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <article>
          {/* Hero section with post image and title */}
          <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-gradient-to-br from-amber-200/70 to-rose-300/70">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover mix-blend-overlay"
              priority
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="container">
                <div className="max-w-3xl">
                  <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-700 mb-4">
                    {post.category}
                  </span>
                  <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
                    {post.title}
                  </h1>
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Post content */}
          <div className="container py-12">
            <div className="grid grid-cols-12 gap-8">
              {/* Sidebar for larger screens */}
              <div className="hidden lg:block lg:col-span-1">
                <div className="sticky top-24 flex flex-col items-center gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-amber-500 hover:text-amber-600 hover:bg-amber-50"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Share on Facebook</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-rose-500 hover:text-rose-600 hover:bg-rose-50"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Share on Twitter</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-orange-500 hover:text-orange-600 hover:bg-orange-50"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">Share on LinkedIn</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-amber-500 hover:text-amber-600 hover:bg-amber-50"
                  >
                    <Share2 className="h-5 w-5" />
                    <span className="sr-only">Share</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-rose-500 hover:text-rose-600 hover:bg-rose-50"
                  >
                    <Bookmark className="h-5 w-5" />
                    <span className="sr-only">Bookmark</span>
                  </Button>
                </div>
              </div>

              {/* Main content */}
              <div className="col-span-12 lg:col-span-8">
                {/* Mobile share buttons */}
                <div className="flex items-center justify-between mb-8 lg:hidden">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/blog">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Blog
                    </Link>
                  </Button>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 text-amber-500">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 text-rose-500">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Article content */}
                <div className="prose prose-rose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>

                {/* Author bio */}
                <div className="mt-12 rounded-2xl bg-gradient-to-br from-amber-50 to-rose-100 p-8 border border-amber-200">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-full bg-gradient-to-br from-amber-100 to-rose-200 p-0.5">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Emma Wilson"
                        width={100}
                        height={100}
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Emma Wilson</h3>
                      <p className="text-sm text-muted-foreground">Founder of Calmpanion & Wellbeing Coach</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    With over 15 years of experience in mental health and wellbeing, I've dedicated my career to helping
                    people find balance and peace in their lives. I share insights and practical tips through my blog to
                    support your wellbeing journey.
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {["mindfulness", "stress-relief", "wellbeing", "mental-health", "self-care"].map((tag, index) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag}`}
                      className={`rounded-full px-3 py-1 text-sm hover:bg-rose-100 hover:text-rose-700 transition-colors ${
                        index % 3 === 0
                          ? "bg-rose-50 text-rose-600"
                          : index % 3 === 1
                            ? "bg-amber-50 text-amber-600"
                            : "bg-orange-50 text-orange-600"
                      }`}
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>

                {/* Post navigation */}
                <div className="mt-12 grid grid-cols-2 gap-4 border-t border-b border-amber-100 py-6">
                  <div>
                    <span className="text-sm text-muted-foreground">Previous Article</span>
                    <Link
                      href="/blog/self-compassion-practice"
                      className="block mt-1 font-medium hover:text-rose-500 transition-colors"
                    >
                      The Power of Self-Compassion
                    </Link>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground">Next Article</span>
                    <Link
                      href="/blog/sleep-better-naturally"
                      className="block mt-1 font-medium hover:text-rose-500 transition-colors"
                    >
                      How to Improve Your Sleep Naturally
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sidebar for related content */}
              <div className="col-span-12 lg:col-span-3">
                <div className="sticky top-24">
                  <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 p-6 border border-amber-200">
                    <h3 className="text-lg font-medium mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <div key={relatedPost.id} className="group">
                          <Link
                            href={`/blog/${relatedPost.id}`}
                            className="text-sm font-medium group-hover:text-rose-500 transition-colors"
                          >
                            {relatedPost.title}
                          </Link>
                          <p className="text-xs text-muted-foreground mt-1">{relatedPost.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl bg-gradient-to-br from-rose-50 to-rose-100 p-6 border border-rose-200">
                    <h3 className="text-lg font-medium mb-4">Subscribe to My Newsletter</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the latest articles and wellbeing tips delivered to your inbox.
                    </p>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm mb-2"
                    />
                    <Button className="w-full bg-gradient-to-r from-amber-400 to-rose-500 hover:from-amber-500 hover:to-rose-600">
                      Subscribe
                    </Button>
                  </div>

                  <div className="mt-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 p-6 border border-orange-200">
                    <h3 className="text-lg font-medium mb-4">Need Support?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      I'm here to help you on your wellbeing journey with personalized guidance.
                    </p>
                    <Button
                      className="w-full bg-gradient-to-r from-orange-400 to-amber-500 hover:from-orange-500 hover:to-amber-600"
                      asChild
                    >
                      <Link href="/contact#booking-form">Book a Session</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* More articles section */}
        <section className="warm-gradient-3 py-20">
          <div className="container">
            <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl mb-12 text-center">
              More Articles You Might Enjoy
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {blogPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 3)
                .map((post, index) => (
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
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <Button variant="link" className="p-0 text-rose-500 hover:text-rose-600 text-sm" asChild>
                        <Link href={`/blog/${post.id}`}>Read Article</Link>
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
            <div className="mt-12 text-center">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-amber-400 to-rose-500 hover:from-amber-500 hover:to-rose-600 shadow-md transform hover:-translate-y-1 transition-all duration-300"
                asChild
              >
                <Link href="/blog">View All Articles</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

