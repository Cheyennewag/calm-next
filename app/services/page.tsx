import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Calendar, Video, FileText } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden warm-gradient-2 py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600')] bg-repeat opacity-5"></div>
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">
                My <span className="text-rose-600">Services</span>
              </h1>
              <p className="mt-6 text-lg text-amber-900/70 md:text-xl">
                Comprehensive support tailored to your unique needs and goals.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 warm-pattern">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl mb-6">How I Can Help</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    At Calmpanion, I offer a range of services designed to support your mental wellbeing journey.
                    Whether you're seeking one-on-one guidance, group support, or resources you can access on your own
                    time, I have options to meet your needs.
                  </p>
                  <p>
                    My approach is always personalized, recognizing that each person's path to wellbeing is unique. I
                    work with you to understand your specific challenges and goals, then recommend the services that
                    will be most beneficial for you.
                  </p>
                  <p>
                    All of my services are provided with years of experience and a passion for helping others find peace
                    and balance in their lives.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-amber-100 to-rose-200 p-2">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Calmpanion services"
                    width={600}
                    height={400}
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

        <section id="one-on-one" className="warm-gradient-3 py-20">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="order-2 md:order-1">
                <h2 className="font-serif text-3xl font-medium tracking-tight mb-6">One-on-One Coaching</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    My personalized coaching sessions are designed to provide focused support for your specific needs
                    and goals. Whether you're dealing with stress, anxiety, life transitions, or simply seeking greater
                    balance, I'm here to help.
                  </p>
                  <p>
                    During our sessions, I'll listen deeply to understand your challenges, help you identify patterns
                    that may be holding you back, and work with you to develop practical strategies for positive change.
                    My approach combines evidence-based techniques with intuitive guidance, creating a supportive
                    environment where you can explore, grow, and thrive.
                  </p>
                  <p>
                    Sessions are available in-person at my office or virtually via secure video call, giving you the
                    flexibility to choose what works best for you.
                  </p>
                  <div className="pt-4">
                    <Button
                      className="rounded-full bg-gradient-to-r from-amber-400 to-rose-500 hover:from-amber-500 hover:to-rose-600 shadow-md transform hover:-translate-y-1 transition-all duration-300"
                      asChild
                    >
                      <Link href="/contact#booking-form">Book a Session</Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-amber-100 to-rose-200 p-2">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="One-on-One Coaching"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="workshops" className="py-20 warm-dots">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <div className="aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-orange-100 to-amber-200 p-2">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Group Workshops"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-serif text-3xl font-medium tracking-tight mb-6">Group Workshops</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    My group workshops offer a unique opportunity to learn and grow alongside others on similar
                    journeys. These interactive sessions combine education, discussion, and practical exercises in a
                    supportive community environment.
                  </p>
                  <p>
                    I offer workshops on a variety of topics, including stress management, mindfulness, building
                    resilience, improving relationships, and more. Each workshop is carefully designed to provide
                    valuable insights and practical tools that you can immediately apply to your life.
                  </p>
                  <p>
                    Workshops are held both in-person and virtually, with limited group sizes to ensure everyone
                    receives personal attention and has the opportunity to participate fully.
                  </p>
                  <div className="pt-4">
                    <Button
                      className="rounded-full bg-gradient-to-r from-orange-400 to-amber-500 hover:from-orange-500 hover:to-amber-600 shadow-md transform hover:-translate-y-1 transition-all duration-300"
                      asChild
                    >
                      <Link href="/contact#booking-form">Join a Workshop</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resources" className="warm-gradient-3 py-20">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="order-2 md:order-1">
                <h2 className="font-serif text-3xl font-medium tracking-tight mb-6">Digital Resources</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    My digital resources library provides tools and guides that you can access anytime, anywhere to
                    support your wellbeing journey. These resources are perfect for self-guided learning and practice
                    between sessions or as a standalone option for those who prefer to work at their own pace.
                  </p>
                  <p>
                    The library includes guided meditations, workbooks, video tutorials, articles, and more, covering a
                    wide range of topics related to mental wellbeing and personal growth. All resources are
                    evidence-based and designed to be practical and accessible.
                  </p>
                  <p>
                    New resources are added regularly, and subscribers receive priority access to all new materials as
                    they become available.
                  </p>
                  <div className="pt-4">
                    <Button
                      className="rounded-full bg-gradient-to-r from-rose-400 to-amber-500 hover:from-rose-500 hover:to-amber-600 shadow-md transform hover:-translate-y-1 transition-all duration-300"
                      asChild
                    >
                      <Link href="/pricing">Access Resources</Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-rose-100 to-amber-200 p-2">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Digital Resources"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="py-20 warm-pattern">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <div className="aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-amber-100 to-orange-200 p-2">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Wellness Programs"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-serif text-3xl font-medium tracking-tight mb-6">Wellness Programs</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    My structured wellness programs are designed to address specific aspects of wellbeing, such as
                    stress management, sleep improvement, or building resilience. These comprehensive programs combine
                    one-on-one coaching, digital resources, and practical exercises to create a holistic approach to
                    your wellbeing.
                  </p>
                  <p>
                    Each program follows a carefully designed curriculum that builds progressively over time, allowing
                    you to develop new skills and habits in a sustainable way. Programs typically run for 6-12 weeks,
                    with regular check-ins to monitor progress and adjust as needed.
                  </p>
                  <p>
                    I offer both standard programs and customized options tailored to your specific needs and goals. All
                    programs include ongoing support to help you navigate challenges and celebrate successes along the
                    way.
                  </p>
                  <div className="pt-4">
                    <Button
                      className="rounded-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 shadow-md transform hover:-translate-y-1 transition-all duration-300"
                      asChild
                    >
                      <Link href="/contact#booking-form">Explore Programs</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 warm-dots">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">How It Works</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                My simple process makes it easy to get the support you need.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Initial Consultation",
                  description: "Schedule a free 15-minute call to discuss your needs and goals.",
                  icon: <Calendar className="h-10 w-10 text-rose-400" />,
                  color: "from-rose-50 to-rose-100",
                },
                {
                  step: "2",
                  title: "Personalized Plan",
                  description: "I'll create a customized plan based on your unique situation.",
                  icon: <FileText className="h-10 w-10 text-amber-400" />,
                  color: "from-amber-50 to-amber-100",
                },
                {
                  step: "3",
                  title: "Regular Sessions",
                  description: "Engage in ongoing support through your preferred service format.",
                  icon: <Video className="h-10 w-10 text-orange-400" />,
                  color: "from-orange-50 to-orange-100",
                },
                {
                  step: "4",
                  title: "Progress & Adjustment",
                  description: "We'll regularly review your progress and adjust as needed.",
                  icon: <Heart className="h-10 w-10 text-rose-400" />,
                  color: "from-rose-50 to-rose-100",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className={`warm-card p-8 hover-lift border border-${step.color.split(" ")[1].replace("to-", "")}/30`}
                >
                  <div
                    className={`mb-4 rounded-full bg-gradient-to-br ${step.color} p-3 w-12 h-12 flex items-center justify-center transition-colors duration-300`}
                  >
                    <span className="text-xl font-bold text-rose-500">{step.step}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-medium">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="warm-gradient-4 py-20">
          <div className="container text-center">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
                Ready to Begin Your Journey?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Take the first step toward a more peaceful and balanced life.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-rose-400 to-rose-600 hover:from-rose-500 hover:to-rose-700 shadow-md transform hover:-translate-y-1 transition-all duration-300"
                  asChild
                >
                  <Link href="/contact#booking-form">Book a Session</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-amber-200 hover:bg-amber-50 text-amber-900"
                  asChild
                >
                  <Link href="/pricing">View Pricing</Link>
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

