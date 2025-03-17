"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Calendar } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState({
    message: "",
    isError: false,
    isSubmitting: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ message: "", isError: false, isSubmitting: true });

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const message = document.getElementById("message").value;

    // Validate form data
    if (!name || !email || !phone || !service || !date || !time || !message) {
      setFormStatus({
        message: "Please fill out all required fields",
        isError: true,
        isSubmitting: false,
      });
      return;
    }

    // Map service values to match the backend validation
    const serviceMap = {
      consultation: "service1",
      "one-on-one": "service2",
      workshop: "service3",
      emergency: "service3", // Map to an appropriate service on your backend
    };

    // Create request body
    const formData = {
      name,
      email,
      phone,
      service: serviceMap[service] || service,
      date,
      time,
      message,
    };

    try {
      // Send POST request to API endpoint
      const response = await fetch("http://calmpanion-website.test/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(formData),
      });

      // Handle response
      if (response.status === 201) {
        // Success
        setFormStatus({
          message: "Thank you for your submission! We will contact you soon.",
          isError: false,
          isSubmitting: false,
        });
        // Reset form
        e.target.reset();
      } else {
        // Get error details
        const errorData = await response.json();
        setFormStatus({
          message:
            errorData.message || "Something went wrong. Please try again.",
          isError: true,
          isSubmitting: false,
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus({
        message: "Unable to submit form. Please try again later.",
        isError: true,
        isSubmitting: false,
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="relative py-20 overflow-hidden bg-gradient-to-b from-rose-50 to-white md:py-32">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600')] bg-repeat opacity-5"></div>
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">
                Get in <span className="text-rose-500">Touch</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Have questions or ready to start your journey? I'm here to help.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="p-8 bg-white shadow-sm rounded-2xl">
                <h2 className="mb-6 font-serif text-3xl font-medium tracking-tight">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-rose-100">
                      <Mail className="w-6 h-6 text-rose-500" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:hello@calmpanion.com"
                        className="transition-colors text-muted-foreground hover:text-rose-500"
                      >
                        hello@calmpanion.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-rose-100">
                      <Phone className="w-6 h-6 text-rose-500" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a
                        href="tel:+15551234567"
                        className="transition-colors text-muted-foreground hover:text-rose-500"
                      >
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-rose-100">
                      <MapPin className="w-6 h-6 text-rose-500" />
                    </div>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        123 Serenity Lane, Suite 101
                      </p>
                      <p className="text-muted-foreground">
                        Tranquil City, TC 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-rose-100">
                      <Clock className="w-6 h-6 text-rose-500" />
                    </div>
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-muted-foreground">
                        Saturday: 10:00 AM - 4:00 PM
                      </p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="w-full mt-8 overflow-hidden aspect-video rounded-xl">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Office location map"
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div
                id="booking-form"
                className="p-8 bg-white shadow-sm rounded-2xl"
              >
                <h2 className="mb-6 font-serif text-3xl font-medium tracking-tight">
                  Book a Session
                </h2>

                {formStatus.message && (
                  <div
                    className={`mb-6 p-4 rounded-md ${
                      formStatus.isError
                        ? "bg-red-50 text-red-600"
                        : "bg-green-50 text-green-600"
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium"
                      >
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium"
                    >
                      Phone
                    </label>
                    <Input
                      id="phone"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block mb-2 text-sm font-medium"
                    >
                      Service Type
                    </label>
                    <select
                      id="service"
                      className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="consultation">Free Consultation</option>
                      <option value="one-on-one">One-on-One Coaching</option>
                      <option value="workshop">Group Workshop</option>
                      <option value="emergency">Emergency Support</option>
                    </select>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="date"
                        className="block mb-2 text-sm font-medium"
                      >
                        Preferred Date
                      </label>
                      <div className="relative">
                        <Input id="date" type="date" required />
                        <Calendar className="absolute w-4 h-4 -translate-y-1/2 right-3 top-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="time"
                        className="block mb-2 text-sm font-medium"
                      >
                        Preferred Time
                      </label>
                      <select
                        id="time"
                        className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        <option value="">Select a time</option>
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">
                          Afternoon (12PM - 3PM)
                        </option>
                        <option value="evening">Evening (3PM - 6PM)</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me a bit about what you're looking for"
                      rows={5}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-rose-500 hover:bg-rose-600"
                    disabled={formStatus.isSubmitting}
                  >
                    {formStatus.isSubmitting
                      ? "Submitting..."
                      : "Book My Session"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-rose-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Find answers to common questions about my services.
              </p>
            </div>

            <div className="grid gap-8 mt-16 md:grid-cols-2">
              {[
                {
                  question: "How do I know which service is right for me?",
                  answer:
                    "I recommend starting with a free consultation call. I'll listen to your needs and goals, then recommend the most appropriate services. You can also explore my service descriptions to get a better understanding of what each offers.",
                },
                {
                  question: "How long does it typically take to see results?",
                  answer:
                    "Every journey is unique, but many clients report feeling more equipped to handle challenges after just a few sessions. More significant changes in patterns and wellbeing typically emerge after 1-3 months of consistent engagement with my services.",
                },
                {
                  question: "Can I switch between different services?",
                  answer:
                    "Many clients find that their needs evolve over time. I make it easy to adjust your service mix as needed, and I can help recommend changes based on your progress and goals.",
                },
                {
                  question: "Are your services covered by insurance?",
                  answer:
                    "Some of my services may be eligible for insurance coverage, depending on your provider and plan. I can provide you with documentation to submit for potential reimbursement. Contact your insurance provider directly to understand your specific coverage.",
                },
                {
                  question: "What if I need to cancel or reschedule a session?",
                  answer:
                    "I understand that life happens! I request at least 24 hours' notice for cancellations or rescheduling to avoid any fees. You can easily manage your appointments through my online portal or by contacting me directly.",
                },
                {
                  question: "Is everything I share confidential?",
                  answer:
                    "Yes, confidentiality is a cornerstone of my practice. All information shared during sessions is kept strictly confidential, with limited exceptions required by law (such as risk of harm to self or others). I'm happy to discuss my confidentiality policies in more detail during your initial consultation.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="p-6 transition-all duration-300 bg-white shadow-sm rounded-2xl hover:shadow-md"
                >
                  <h3 className="mb-3 text-xl font-medium">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
