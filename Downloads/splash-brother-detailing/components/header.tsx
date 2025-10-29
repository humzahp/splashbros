"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Droplet } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Droplet className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-foreground leading-none">Splash Brother</span>
              <span className="text-xs text-muted-foreground">Mobile Detailing Lab</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection("booking")} size="sm">
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-foreground">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              <Button onClick={() => scrollToSection("booking")} className="w-full">
                Book Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
