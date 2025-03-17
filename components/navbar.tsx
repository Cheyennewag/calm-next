"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path || (path !== "/" && pathname?.startsWith(path));
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-rose-400" />
          <span className="text-xl font-semibold tracking-wide">
            Calmpanion
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.path) ? "text-rose-500" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="items-center hidden gap-4 md:flex">
          <Button
            variant="whatsapp"
            size="sm"
            className="relative gap-2 overflow-hidden transform rounded-full hover:-translate-y-1 group"
            asChild
          >
            <a href="https://wa.me/+971556967875">
              <span className="absolute inset-0 w-full h-full transition-opacity duration-300 rounded-full opacity-0 bg-gradient-to-r from-rose-300 to-rose-500 group-hover:opacity-100"></span>
              <span className="relative flex items-center">
                <MessageCircle className="w-4 h-4 mr-1" />
                <span>WhatsApp Me</span>
              </span>
            </a>
          </Button>
          <Button
            variant="booking"
            className="relative overflow-hidden transform rounded-full hover:-translate-y-1 group"
            asChild
          >
            <Link href="/contact#booking-form">
              <span className="absolute inset-0 w-full h-full transition-opacity duration-300 rounded-full opacity-0 bg-gradient-to-r from-rose-400 to-rose-600 group-hover:opacity-100"></span>
              <span className="relative">Book a Session</span>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t md:hidden">
          <div className="container flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary py-2 ${
                  isActive(link.path) ? "text-rose-500" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              className="gap-2 mt-2 rounded-full"
              variant="whatsapp"
              asChild
            >
              <a
                href="https://wa.me/15551234567"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>WhatsApp Me</span>
              </a>
            </Button>
            <Button className="mt-2 rounded-full" variant="booking" asChild>
              <Link
                href="/contact#booking-form"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Book a Session</span>
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
