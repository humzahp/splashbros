import { Award, MapPin, Droplets, Shield } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              About Splash Brother Mobile Detailing Lab
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Your trusted partner for premium mobile car detailing in Charlotte, North Carolina
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Splash Brother Mobile Detailing Lab is a locally owned business offering premium mobile car detailing
                services in Charlotte, NC. We specialize in brushless and touchless washes, interior detailing, window
                tinting, and undercarriage cleaning.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Our team uses professional-grade tools and spot-free water to deliver showroom-quality results at your
                home, office, or car lot. We're committed to excellence and customer satisfaction in every detail.
              </p>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="/professional-car-detailing-equipment-and-clean-car.jpg"
                alt="Professional detailing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Local & Mobile</h3>
              <p className="text-sm text-muted-foreground">Serving Charlotte and surrounding areas</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Spot-Free Water</h3>
              <p className="text-sm text-muted-foreground">Professional-grade purified water system</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">Showroom-quality results guaranteed</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Trusted Service</h3>
              <p className="text-sm text-muted-foreground">Locally owned and operated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
