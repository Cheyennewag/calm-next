import Link from "next/link";
import { Heart, Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t warm-gradient-1">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-rose-400" />
              <span className="text-xl font-semibold tracking-wide">
                Calmpanion
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Your trusted companion for finding peace and balance in everyday
              life.
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 text-sm transition-colors text-muted-foreground hover:text-rose-500"
              >
                <Phone className="w-4 h-4" />
                <span>+971 55 696 7875</span>
              </a>
              <a
                href="https://wa.me/15551234567"
                className="flex items-center gap-2 text-sm transition-colors text-muted-foreground hover:text-rose-500"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Me</span>
              </a>
              <a
                href="mailto:hello@calmpanion.com"
                className="flex items-center gap-2 text-sm transition-colors text-muted-foreground hover:text-rose-500"
              >
                <Mail className="w-4 h-4" />
                <span>support@calmpanion.me</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#one-on-one"
                  className="text-sm transition-colors text-muted-foreground hover:text-rose-500"
                >
                  One-on-One Coaching
                </Link>
              </li>
              <li>
                <Link
                  href="/services#workshops"
                  className="text-sm transition-colors text-muted-foreground hover:text-rose-500"
                >
                  Group Workshops
                </Link>
              </li>
              <li>
                <Link
                  href="/services#resources"
                  className="text-sm transition-colors text-muted-foreground hover:text-rose-500"
                >
                  Digital Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/services#programs"
                  className="text-sm transition-colors text-muted-foreground hover:text-rose-500"
                >
                  Wellness Programs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase">
              Pages
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm transition-colors text-muted-foreground hover:text-rose-500"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm transition-colors text-muted-foreground hover:text-rose-500"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm transition-colors text-muted-foreground hover:text-rose-500"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-sm transition-colors text-muted-foreground hover:text-rose-500"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm transition-colors text-muted-foreground hover:text-rose-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm transition-colors text-muted-foreground hover:text-rose-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm transition-colors text-muted-foreground hover:text-rose-500"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-sm transition-colors text-muted-foreground hover:text-rose-500"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-12 text-center border-t border-amber-100">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Calmpanion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
