import type React from "react"
import "./globals.css"
import { Playfair_Display } from "next/font/google"
import type { Metadata } from "next"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Calmpanion | Your Partner for Peace and Wellbeing",
  description: "Find peace and balance in your everyday life with personalized support from Calmpanion.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable}`}>{children}</body>
    </html>
  )
}



import './globals.css'