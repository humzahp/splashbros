import type React from "react"
import { Car, Sparkles, Paintbrush, Sun, Wind, Waves } from "lucide-react"

const services = [
  {
    icon: Car,
    title: "Interior & Exterior Detailing",
    description: "Complete deep cleaning and restoration of your vehicle inside and out",
  },
  {
    icon: Shield,
    title: "Ceramic Coating",
    description: "Long-lasting protection with a brilliant, hydrophobic finish",
  },
  {
    icon: Paintbrush,
    title: "Paint Correction",
    description: "Remove swirls, scratches, and imperfections for a flawless finish",
  },
  {
    icon: Sparkles,
    title: "Premium Hand Wash",
    description: "Gentle, thorough hand washing with premium products",
  },
  {
    icon: Sun,
    title: "Window Tinting",
    description: "Professional tinting for UV protection and enhanced privacy",
  },
  {
    icon: Wind,
    title: "Undercarriage Wash",
    description: "Thorough cleaning to remove dirt, salt, and road grime",
  },
  {
    icon: Waves,
    title: "Touchless Wash",
    description: "Safe, brushless cleaning that protects your paint",
  },
]

function Shield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Professional detailing services tailored to your vehicle's needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
