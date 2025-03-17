import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden warm-gradient-2 py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600')] bg-repeat opacity-5"></div>
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">
                Simple, Transparent <span className="text-rose-600">Pricing</span>
              </h1>
              <p className="mt-6 text-lg text-amber-900/70 md:text-xl">
                Straightforward pricing options designed to fit your needs and budget.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 warm-pattern">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">Choose Your Plan</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                I offer flexible pricing options to ensure you get the support you need at a price that works for you.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  tier: "Essential",
                  price: "$99",
                  period: "per month",
                  description: "Perfect for individuals just starting their wellbeing journey.",
                  features: [
                    "2 one-on-one sessions per month",
                    "Access to digital resources",
                    "Email support",
                    "Monthly progress check-in",
                  ],
                  buttonText: "Get Started",
                  buttonVariant: "outline",
                  color: "from-rose-50 to-rose-100",
                  borderColor: "border-rose-200",
                },
                {
                  tier: "Premium",
                  price: "$199",
                  period: "per month",
                  description: "My most popular plan for comprehensive support.",
                  features: [
                    "4 one-on-one sessions per month",
                    "Access to all digital resources",
                    "Priority email support",
                    "Weekly progress check-ins",
                    "Access to group workshops",
                  ],
                  buttonText: "Get Started",
                  buttonVariant: "default",
                  highlighted: true,
                  color: "from-amber-50 to-amber-100",
                  borderColor: "border-amber-200",
                },
                {
                  tier: "Ultimate",
                  price: "$349",
                  period: "per month",
                  description: "Maximum support for those seeking intensive guidance.",
                  features: [
                    "8 one-on-one sessions per month",
                    "Access to all digital resources",
                    "24/7 priority support",
                    "Weekly progress check-ins",
                    "Access to all group workshops",
                    "Customized wellness program",
                  ],
                  buttonText: "Get Started",
                  buttonVariant: "outline",
                  color: "from-orange-50 to-orange-100",
                  borderColor: "border-orange-200",
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`group  index) => (
                <div
                  key={index}
                  className={\`group rounded-2xl bg-gradient-to-br ${plan.highlighted ? plan.color : "from-white to-white"} p-8 shadow-sm transition-all duration-300 hover:shadow-md hover-lift ${plan.highlighted ? plan.borderColor : "border border-transparent"}`}
                >
                  <h3 className="text-xl font-medium">{plan.tier}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="ml-1 text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">{plan.description}</p>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`mt-8 w-full rounded-full ${plan.highlighted ? "bg-gradient-to-r from-amber-400 to-rose-500 hover:from-amber-500 hover:to-rose-600" : ""}`}
                    variant={plan.buttonVariant as "default" | "outline"}
                    asChild
                  >
                    <Link href="/contact#booking-form">{plan.buttonText}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="warm-gradient-3 py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">Single Sessions</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Not ready to commit to a monthly plan? Try a single session to get started.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:mx-auto lg:max-w-4xl">
              {[
                {
                  title: "Initial Consultation",
                  price: "Free",
                  duration: "15 minutes",
                  description: "A brief call to discuss your needs and see if we're a good fit.",
                  buttonText: "Book Consultation",
                  color: "from-rose-50 to-rose-100",
                  borderColor: "border-rose-200",
                },
                {
                  title: "Single Coaching Session",
                  price: "$75",
                  duration: "60 minutes",
                  description: "One-time session to address a specific challenge or goal.",
                  buttonText: "Book Session",
                  highlighted: true,
                  color: "from-amber-50 to-amber-100",
                  borderColor: "border-amber-200",
                },
                {
                  title: "Emergency Support",
                  price: "$95",
                  duration: "60 minutes",
                  description: "Same-day or next-day support for urgent situations.",
                  buttonText: "Book Emergency Session",
                  color: "from-orange-50 to-orange-100",
                  borderColor: "border-orange-200",
                },
              ].map((session, index) => (
                <div
                  key={index}
                  className={`group rounded-2xl bg-gradient-to-br ${session.color} p-8 shadow-sm transition-all duration-300 hover:shadow-md hover-lift ${session.borderColor}`}
                >
                  <h3 className="text-xl font-medium">{session.title}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">{session.price}</span>
                    <span className="ml-2 text-muted-foreground">/ {session.duration}</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">{session.description}</p>
                  <Button
                    className={`mt-8 w-full rounded-full ${session.highlighted ? "bg-gradient-to-r from-amber-400 to-rose-500 hover:from-amber-500 hover:to-rose-600" : ""}`}
                    variant={session.highlighted ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/contact#booking-form">{session.buttonText}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 warm-dots">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Answers to common questions about pricing and services.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {[
                {
                  question: "Do you offer refunds?",
                  answer:
                    "I want you to be completely satisfied with my services. If you're not happy with your first session, I offer a full refund. For monthly plans, you can cancel at any time, but refunds are not provided for sessions already completed.",
                },
                {
                  question: "Can I change my plan later?",
                  answer:
                    "You can upgrade, downgrade, or cancel your plan at any time. Changes will take effect at the start of your next billing cycle.",
                },
                {
                  question: "Do you accept insurance?",
                  answer:
                    "Currently, I don't directly accept insurance. However, I can provide you with documentation that you may submit to your insurance provider for potential reimbursement as an out-of-network provider.",
                },
                {
                  question: "Are there any hidden fees?",
                  answer:
                    "No hidden fees whatsoever. The price you see is the price you pay. I believe in complete transparency when it comes to pricing.",
                },
                {
                  question: "Do you offer discounts?",
                  answer:
                    "I offer discounts for students, seniors, and those experiencing financial hardship. Please contact me directly to discuss your situation.",
                },
                {
                  question: "What forms of payment do you accept?",
                  answer:
                    "I accept all major credit cards, PayPal, and bank transfers. Payment is due at the time of booking for single sessions, or at the beginning of each month for subscription plans.",
                },
              ].map((faq, index) => (
                <div key={index} className="warm-card p-6 border border-amber-100/50">
                  <h3 className="mb-3 text-xl font-medium">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="warm-gradient-4 py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">Need a Custom Solution?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                I understand that everyone's needs are unique. If you don't see a plan that fits your requirements,
                let's discuss a custom solution.
              </p>
              <div className="mt-8">
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-amber-400 to-rose-500 hover:from-amber-500 hover:to-rose-600 shadow-md transform hover:-translate-y-1 transition-all duration-300"
                  asChild
                >
                  <Link href="/contact#booking-form">Contact Me for Custom Pricing</Link>
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

