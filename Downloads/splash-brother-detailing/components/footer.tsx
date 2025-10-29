import { Facebook, Instagram, Twitter, Droplet } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Droplet className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl font-bold text-foreground leading-none">Splash Brother</span>
                  <span className="text-xs text-muted-foreground">Mobile Detailing Lab</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 max-w-sm">
                Premium mobile car detailing services in Charlotte, NC. We bring showroom-quality results to your
                location.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#booking" className="hover:text-primary transition-colors">
                    Book Now
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Business Hours</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Mon - Sat: 8am - 6pm</li>
                <li>Sunday: 9am - 6pm</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Splash Brother Mobile Detailing Lab. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
