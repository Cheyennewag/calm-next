import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Sun, Star } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="relative py-20 overflow-hidden warm-gradient-2 md:py-32">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600')] bg-repeat opacity-5"></div>
          <div className="container relative grid gap-12 md:grid-cols-2 md:items-center">
            <div className="flex flex-col gap-6 text-center md:text-left">
              <h1 className="font-serif text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
                Empowering you to feel{" "}
                <span className="text-rose-600">Calm, Confident,</span>
                <span> and in</span>
                <span className="text-rose-600"> Control.</span>
              </h1>
              <p className="font-serif text-lg text-amber-900/70 md:text-xl">
                From my years as an anesthesia assistant and Procedural Sedation
                and Analgesia Specialist in the Netherlands, I’ve witnessed
                firsthand the profound impact fear and anxiety can have on
                individuals facing medical procedures. Driven by a deep
                conviction to alleviate this anxiety, I created Calmpanion—a
                solution aimed at transforming the patient experience through
                empathy and support.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                <Button
                  size="lg"
                  variant="gradient"
                  className="transform rounded-full hover:-translate-y-1"
                  asChild
                >
                  <Link href="/contact#booking-form">Get Started</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 rounded-full border-amber-200 hover:bg-amber-50 text-amber-900"
                  asChild
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center w-full max-w-lg mx-auto md:max-w-2xl">
              {/* Achterste afbeelding (kleiner, verder naar links en lager) */}
              <div className="relative w-full max-w-sm overflow-hidden rounded-lg shadow-lg md:translate-x-70 md:translate-y-10">
                <Image
                  src="/pexels-jessbaileydesign-796656.jpg?height=500&width=500"
                  alt="Tweede afbeelding"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Voorste afbeelding (groter en overlappend) */}
              <div className="absolute top-[-100px] w-full max-w-sm overflow-hidden rounded-lg shadow-xl md:translate-x-40 left-30">
                <Image
                  src="/Maryam-zittend-rood-roze-outfit.jpg?height=500&width=500"
                  alt="Calmpanion support"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 warm-pattern">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
                Your Companion for Calm & Wellbeing
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                I believe everyone deserves a peaceful mind and a balanced life.
                My approach combines modern techniques with personalized care to
                help you find tranquility in today's busy world.
              </p>
            </div>

            <div className="grid gap-8 mt-16 md:grid-cols-3">
              {[
                {
                  title: "Personalized Support",
                  description:
                    "I create customized plans that address your specific needs and goals, ensuring you receive the most effective support.",
                  icon: <Heart className="w-10 h-10 text-rose-400" />,
                  color: "from-rose-50 to-rose-100",
                },
                {
                  title: "Professional Guidance",
                  description:
                    "With years of experience, I help you navigate life's challenges with confidence and proven techniques.",
                  icon: <Star className="w-10 h-10 text-amber-400" />,
                  color: "from-amber-50 to-amber-100",
                },
                {
                  title: "Ongoing Partnership",
                  description:
                    "I'm with you every step of the way, providing continuous support and adjusting my approach as your needs evolve.",
                  icon: <Sun className="w-10 h-10 text-orange-400" />,
                  color: "from-orange-50 to-orange-100",
                },
              ].map((feature, index) => (
                <div key={index} className="p-8 warm-card hover-lift">
                  <div
                    className={`mb-4 rounded-full bg-gradient-to-br ${feature.color} p-3 w-fit transition-colors duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                size="lg"
                className="transition-all duration-300 transform rounded-full shadow-md bg-gradient-to-r from-amber-300 to-rose-400 hover:from-amber-400 hover:to-rose-500 hover:-translate-y-1"
                asChild
              >
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 warm-gradient-3">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
                My Services
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                I offer a range of services designed to promote mental wellbeing
                and help you find balance in your life.
              </p>
            </div>

            <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "One-on-One Coaching",
                  description:
                    "Personalized sessions focused on your specific needs and goals.",
                  image: "/placeholder.svg?height=300&width=400",
                  color: "bg-gradient-to-br from-rose-200/50 to-rose-300/50",
                },
                {
                  title: "Group Workshops",
                  description:
                    "Learn and grow alongside others in a supportive community environment.",
                  image: "/placeholder.svg?height=300&width=400",
                  color: "bg-gradient-to-br from-amber-200/50 to-amber-300/50",
                },
                {
                  title: "Digital Resources",
                  description:
                    "Access tools and guides to support your journey anytime, anywhere.",
                  image: "/placeholder.svg?height=300&width=400",
                  color:
                    "bg-gradient-to-br from-orange-200/50 to-orange-300/50",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="overflow-hidden transition-all duration-300 bg-white border shadow-sm group rounded-2xl hover:shadow-md hover-lift border-amber-100/50"
                >
                  <div
                    className={`aspect-video overflow-hidden ${service.color}`}
                  >
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 mix-blend-overlay"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-medium">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                    <Button
                      variant="link"
                      className="p-0 mt-4 text-rose-500 hover:text-rose-600"
                      asChild
                    >
                      <Link href="/services">Learn more</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                size="lg"
                variant="warm"
                className="transform rounded-full hover:-translate-y-1"
                asChild
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 warm-dots">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
                What My Clients Say
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Hear from people who have found peace and balance with
                Calmpanion.
              </p>
            </div>

            <div className="grid gap-8 mt-16 md:grid-cols-3">
              {[
                {
                  quote:
                    "Calmpanion has been a life-changing experience for me. The personalized approach and genuine care have helped me find peace I didn't think was possible.",
                  author: "Sarah J.",
                  role: "Working Professional",
                  color:
                    "bg-gradient-to-br from-rose-50 to-rose-100 border-rose-200",
                },
                {
                  quote:
                    "I was skeptical at first, but working with Calmpanion truly helped me feel heard, understood, and empowered.",
                  author: "Michael T.",
                  role: "Parent of Three",
                  color:
                    "bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200",
                },
                {
                  quote:
                    "The tools and techniques I've learned through Calmpanion have transformed how I handle stress and anxiety. I'm grateful for the guidance every day.",
                  author: "Elena R.",
                  role: "Graduate Student",
                  color:
                    "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className={`rounded-2xl ${testimonial.color} p-8 shadow-sm transition-all duration-300 hover:shadow-md hover-lift border`}
                >
                  <div className="mb-6 text-amber-400">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i} className="text-xl">
                          ★
                        </span>
                      ))}
                  </div>
                  <p className="mb-6 italic text-muted-foreground">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                size="lg"
                className="transition-all duration-300 transform rounded-full shadow-md bg-gradient-to-r from-amber-300 to-rose-400 hover:from-amber-400 hover:to-rose-500 hover:-translate-y-1"
                asChild
              >
                <Link href="/testimonials">Read More Testimonials</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 warm-gradient-4">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
                Ready to Begin Your Journey?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Take the first step toward a more peaceful and balanced life.
              </p>
              <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row">
                <Button
                  size="xl"
                  variant="gradient"
                  className="transition-all duration-300 transform rounded-full hover:-translate-y-1 btn-shine"
                  asChild
                >
                  <Link href="/contact#booking-form">Contact Me Today</Link>
                </Button>
                <Button
                  size="xl"
                  variant="warm"
                  className="transition-all duration-300 transform rounded-full hover:-translate-y-1 btn-shine"
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
  );
}
