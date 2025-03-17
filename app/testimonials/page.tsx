import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Quote } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden warm-gradient-2 py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600')] bg-repeat opacity-5"></div>
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">
                Client <span className="text-rose-600">Testimonials</span>
              </h1>
              <p className="mt-6 text-lg text-amber-900/70 md:text-xl">
                Hear from people who have found peace and balance with Calmpanion.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 warm-pattern">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "Calmpanion has been a life-changing experience for me. The personalized approach and genuine care have helped me find peace I didn't think was possible.",
                  author: "Sarah J.",
                  role: "Working Professional",
                  image: "/placeholder.svg?height=100&width=100",
                  color: "bg-gradient-to-br from-rose-50 to-rose-100",
                  borderColor: "border-rose-200",
                },
                {
                  quote:
                    "I was skeptical at first, but the team at Calmpanion truly understands what it means to provide support. I feel heard, understood, and empowered.",
                  author: "Michael T.",
                  role: "Parent of Three",
                  image: "/placeholder.svg?height=100&width=100",
                  color: "bg-gradient-to-br from-amber-50 to-amber-100",
                  borderColor: "border-amber-200",
                },
                {
                  quote:
                    "The tools and techniques I've learned through Calmpanion have transformed how I handle stress and anxiety. I'm grateful for their guidance every day.",
                  author: "Elena R.",
                  role: "Graduate Student",
                  image: "/placeholder.svg?height=100&width=100",
                  color: "bg-gradient-to-br from-orange-50 to-orange-100",
                  borderColor: "border-orange-200",
                },
                {
                  quote:
                    "After trying several other services, I finally found what I was looking for with Calmpanion. Their holistic approach addresses all aspects of wellbeing.",
                  author: "James L.",
                  role: "Entrepreneur",
                  image: "/placeholder.svg?height=100&width=100",
                  color: "bg-gradient-to-br from-rose-50 to-rose-100",
                  borderColor: "border-rose-200",
                },
                {
                  quote:
                    "The group workshops have been incredible. Not only do I learn valuable skills, but I've also connected with others on similar journeys.",
                  author: "Priya K.",
                  role: "Teacher",
                  image: "/placeholder.svg?height=100&width=100",
                  color: "bg-gradient-to-br from-amber-50 to-amber-100",
                  borderColor: "border-amber-200",
                },
                {
                  quote:
                    "As someone who travels frequently, the digital resources have been a game-changer. I can maintain my practice no matter where I am.",
                  author: "David W.",
                  role: "Sales Executive",
                  image: "/placeholder.svg?height=100&width=100",
                  color: "bg-gradient-to-br from-orange-50 to-orange-100",
                  borderColor: "border-orange-200",
                },
                {
                  quote:
                    "My family has seen such positive changes since I started working with Calmpanion. The ripple effects of personal growth are real!",
                  author: "Sophia C.",
                  role: "Healthcare Worker",
                  image: "/placeholder.svg?height=100&width=100",
                  color: "bg-gradient-to-br from-rose-50 to-rose-100",
                  borderColor: "border-rose-200",
                },
                {
                  quote:
                    "The consistency and quality of care at Calmpanion is unmatched. Every session leaves me feeling more centered and capable.",
                  author: "Marcus J.",
                  role: "IT Professional",
                  image: "/placeholder.svg?height=100&width=100",
                  color: "bg-gradient-to-br from-amber-50 to-amber-100",
                  borderColor: "border-amber-200",
                },
                {
                  quote:
                    "I appreciate how my coach adapts our sessions based on what I need that day. Sometimes it's practical tools, other times it's just a listening ear.",
                  author: "Olivia P.",
                  role: "Artist",
                  image: "/placeholder.svg?height=100&width=100",
                  color: "bg-gradient-to-br from-orange-50 to-orange-100",
                  borderColor: "border-orange-200",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className={`${testimonial.color} ${testimonial.borderColor} rounded-2xl p-8 shadow-sm transition-all duration-300 hover:shadow-md hover-lift border`}
                >
                  <div className="mb-6 text-amber-400">
                    <Quote className="h-8 w-8 opacity-50" />
                  </div>
                  <p className="mb-6 italic text-muted-foreground">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-amber-100 to-rose-200 p-0.5">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={100}
                        height={100}
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="warm-gradient-3 py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">Client Success Stories</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Dive deeper into how Calmpanion has helped transform lives.
              </p>
            </div>

            <div className="mt-16 grid gap-12 md:grid-cols-2">
              {[
                {
                  title: "Finding Balance as a Working Parent",
                  description:
                    "How Jennifer reclaimed her sense of self while juggling career and family responsibilities.",
                  image: "/placeholder.svg?height=300&width=500",
                  color: "bg-gradient-to-br from-rose-200/50 to-rose-300/50",
                },
                {
                  title: "Overcoming Anxiety After a Major Life Change",
                  description:
                    "Mark's journey to rebuilding confidence and peace following an unexpected career shift.",
                  image: "/placeholder.svg?height=300&width=500",
                  color: "bg-gradient-to-br from-amber-200/50 to-amber-300/50",
                },
                {
                  title: "Building Resilience Through Chronic Illness",
                  description: "Aisha's story of finding mental strength while navigating health challenges.",
                  image: "/placeholder.svg?height=300&width=500",
                  color: "bg-gradient-to-br from-orange-200/50 to-orange-300/50",
                },
                {
                  title: "Reconnecting with Purpose in Retirement",
                  description: "How Robert discovered new meaning and joy in his post-career chapter.",
                  image: "/placeholder.svg?height=300&width=500",
                  color: "bg-gradient-to-br from-rose-200/50 to-rose-300/50",
                },
              ].map((story, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md hover-lift border border-amber-100/50"
                >
                  <div className={`aspect-video overflow-hidden ${story.color}`}>
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      width={500}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 mix-blend-overlay"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-medium">{story.title}</h3>
                    <p className="text-muted-foreground">{story.description}</p>
                    <Button variant="link" className="mt-4 p-0 text-rose-500 hover:text-rose-600">
                      <Link href="#">Read Full Story</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 warm-dots">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">Client Results</h2>
              <p className="mt-4 text-lg text-muted-foreground">The impact of our work together, by the numbers.</p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-4">
              {[
                {
                  stat: "94%",
                  description: "of clients report reduced stress levels after 3 months",
                  color: "from-rose-50 to-rose-100",
                  borderColor: "border-rose-200",
                },
                {
                  stat: "87%",
                  description: "experience improved sleep quality",
                  color: "from-amber-50 to-amber-100",
                  borderColor: "border-amber-200",
                },
                {
                  stat: "91%",
                  description: "report better relationships with family and friends",
                  color: "from-orange-50 to-orange-100",
                  borderColor: "border-orange-200",
                },
                {
                  stat: "96%",
                  description: "would recommend Calmpanion to others",
                  color: "from-rose-50 to-rose-100",
                  borderColor: "border-rose-200",
                },
              ].map((result, index) => (
                <div
                  key={index}
                  className={`rounded-2xl bg-gradient-to-br ${result.color} p-8 text-center shadow-sm transition-all duration-300 hover:shadow-md hover-lift border ${result.borderColor}`}
                >
                  <div className="text-4xl font-bold text-rose-500 mb-2">{result.stat}</div>
                  <p className="text-muted-foreground">{result.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="warm-gradient-4 py-20">
          <div className="container text-center">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
                Ready to Write Your Success Story?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Join the many clients who have found peace and balance with Calmpanion.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-amber-400 to-rose-500 hover:from-amber-500 hover:to-rose-600 shadow-md transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Link href="/contact">Get Started Today</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-amber-200 hover:bg-amber-50 text-amber-900"
                >
                  <Link href="/services">Explore My Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

