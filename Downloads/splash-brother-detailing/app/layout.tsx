import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Splash Brother Mobile Detailing Lab | Charlotte, NC",
  description:
    "Premium mobile car detailing services in Charlotte, NC. Specializing in brushless washes, interior detailing, ceramic coating, and more. We bring the shine to you!",
  keywords: "car detailing, mobile detailing, Charlotte NC, ceramic coating, paint correction, auto detailing",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
