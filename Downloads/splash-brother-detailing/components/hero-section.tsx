"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function HeroSection() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/luxury-car-with-water-droplets-and-shine-effect.jpg" alt="Detailed car" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Premium Mobile Detailing in Charlotte, NC</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight text-balance">
            Don't Drive Dirty — We Bring the Shine to You!
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professional mobile car detailing services delivered to your home, office, or car lot. Experience
            showroom-quality results without leaving your location.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={scrollToBooking} className="text-base px-8">
              Book Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("services")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-base px-8"
            >
              View Services
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
