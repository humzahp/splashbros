"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const packages = [
  {
    name: "Basic Detail",
    price: "$75",
    description: "Perfect for regular maintenance",
    features: [
      "Exterior hand wash",
      "Wheel & tire cleaning",
      "Window cleaning",
      "Interior vacuum",
      "Dashboard wipe down",
    ],
  },
  {
    name: "Full Interior + Exterior",
    price: "$150",
    description: "Complete inside and out",
    features: [
      "Everything in Basic Detail",
      "Deep interior cleaning",
      "Leather conditioning",
      "Door jamb cleaning",
      "Engine bay cleaning",
      "Wax application",
    ],
    popular: true,
  },
  {
    name: "Ceramic Coating",
    price: "Starting at $300",
    description: "Ultimate protection",
    features: [
      "Paint correction",
      "Professional ceramic coating",
      "Multi-year protection",
      "Hydrophobic finish",
      "Enhanced gloss",
      "UV protection",
    ],
  },
]

export function PricingSection() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Pricing Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Choose the perfect package for your vehicle's needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-card border rounded-lg p-8 ${
                  pkg.popular ? "border-primary shadow-lg scale-105" : "border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                  <div className="text-4xl font-bold text-primary">{pkg.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button onClick={scrollToBooking} className="w-full" variant={pkg.popular ? "default" : "outline"}>
                  Book This Package
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
