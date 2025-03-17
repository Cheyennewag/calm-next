import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Award, Clock, Star } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden warm-gradient-2 py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600')] bg-repeat opacity-5"></div>
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">
                About <span className="text-rose-600">Calmpanion</span>
              </h1>
              <p className="mt-6 text-lg text-amber-900/70 md:text-xl">
                Your trusted companion for finding peace and balance in everyday life.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 warm-pattern">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl mb-6">My Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I founded Calmpanion in 2018 with a simple yet powerful mission: to help people find peace in their
                    everyday lives. After experiencing the transformative effects of mindfulness and professional
                    support during a challenging period in my own life, I wanted to create a service that combined
                    personalized care with accessibility.
                  </p>
                  <p>
                    What began as a small practice has grown into a dedicated service committed to supporting
                    individuals on their journey toward mental wellbeing. I believe that everyone deserves access to
                    tools and guidance that can help them navigate life's challenges with confidence and tranquility.
                  </p>
                  <p>
                    Today, I serve clients across the country, offering a range of services designed to meet people
                    where they are and help them get to where they want to be. My approach is always personalized,
                    compassionate, and focused on long-term wellbeing.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-amber-100 to-rose-200 p-2">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Calmpanion founder"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 rounded-full bg-white p-4 shadow-lg">
                  <Heart className="h-10 w-10 text-rose-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="warm-gradient-3 py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">My Values</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                These core principles guide everything I do at Calmpanion.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Compassion",
                  description: "I approach every interaction with genuine care and understanding.",
                  icon: <Heart className="h-10 w-10 text-rose-400" />,
                  color: "from-rose-50 to-rose-100",
                },
                {
                  title: "Personalization",
                  description: "I recognize that each person's journey is unique and tailor my support accordingly.",
                  icon: <Star className="h-10 w-10 text-amber-400" />,
                  color: "from-amber-50 to-amber-100",
                },
                {
                  title: "Excellence",
                  description: "I am committed to providing the highest quality of service and continuous improvement.",
                  icon: <Award className="h-10 w-10 text-orange-400" />,
                  color: "from-orange-50 to-orange-100",
                },
                {
                  title: "Consistency",
                  description: "I believe in being a reliable presence that my clients can count on.",
                  icon: <Clock className="h-10 w-10 text-rose-400" />,
                  color: "from-rose-50 to-rose-100",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className={`warm-card p-8 hover-lift border border-${value.color.split(" ")[1].replace("to-", "")}/30`}
                >
                  <div
                    className={`mb-4 rounded-full bg-gradient-to-br ${value.color} p-3 w-fit transition-colors duration-300`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-medium">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 warm-dots">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">About Me</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Learn more about my background and approach to wellbeing.
              </p>
            </div>

            <div className="mt-16 grid gap-12 md:grid-cols-2 items-center">
              <div className="relative">
                <div className="aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-amber-100 to-rose-200 p-2">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Calmpanion founder"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4">Emma Wilson</h3>
                <p className="text-rose-500 font-medium mb-4">Founder & Wellbeing Coach</p>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    With over 15 years of experience in mental health and wellbeing, I've dedicated my career to helping
                    people find balance and peace in their lives. I hold certifications in mindfulness coaching,
                    cognitive behavioral techniques, and trauma-informed care.
                  </p>
                  <p>
                    My approach combines evidence-based practices with intuitive guidance, creating a supportive
                    environment where clients feel safe to explore their challenges and work toward their goals. I
                    believe in meeting each person where they are and providing the tools and support they need to
                    thrive.
                  </p>
                  <p>
                    When I'm not working with clients, you can find me practicing what I preach – hiking in nature,
                    meditating, reading, or spending quality time with loved ones. I believe that maintaining my own
                    wellbeing is essential to helping others with theirs.
                  </p>
                </div>
                <div className="mt-6">
                  <Button
                    className="rounded-full bg-gradient-to-r from-rose-400 to-rose-600 hover:from-rose-500 hover:to-rose-700 shadow-md transform hover:-translate-y-1 transition-all duration-300"
                    asChild
                  >
                    <Link href="/contact#booking-form">Book a Session With Me</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="warm-gradient-4 py-20">
          <div className="container text-center">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">Join My Journey</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Ready to take the first step toward a more peaceful and balanced life?
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="xl"
                  variant="gradient"
                  className="rounded-full transform hover:-translate-y-1 btn-glow"
                  asChild
                >
                  <Link href="/contact#booking-form">Contact Me Today</Link>
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="rounded-full border-2 border-amber-200 hover:bg-amber-50 text-amber-900 transform hover:-translate-y-1"
                  asChild
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

