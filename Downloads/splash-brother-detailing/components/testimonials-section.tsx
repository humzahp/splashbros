import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Michael Johnson",
    rating: 5,
    text: "Absolutely incredible service! My car looks brand new. The team was professional, punctual, and the attention to detail was outstanding. Highly recommend!",
    vehicle: "BMW 5 Series",
  },
  {
    name: "Sarah Williams",
    rating: 5,
    text: "Best mobile detailing service in Charlotte! They came to my office and did an amazing job. The ceramic coating has kept my car looking pristine for months.",
    vehicle: "Tesla Model 3",
  },
  {
    name: "David Martinez",
    rating: 5,
    text: "I've used several detailing services, but Splash Brother is by far the best. The touchless wash is gentle on my paint, and the results are always perfect.",
    vehicle: "Mercedes-Benz C-Class",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Don't just take our word for it — hear from satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed">"{testimonial.text}"</p>

                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.vehicle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
