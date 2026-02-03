import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-semibold">🐎 Alfaris</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Where heritage meets excellence. Experience the finest Arabian
              horses in an atmosphere of quiet luxury.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">
              Explore
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/horses"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Our Horses
              </Link>
              <Link
                to="/booking"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Book an Experience
              </Link>
              <Link
                to="/boarding"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                VIP Boarding
              </Link>
              <Link
                to="/shop"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Boutique
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">
              Services
            </h4>
            <nav className="flex flex-col gap-2">
              <span className="text-sm text-primary-foreground/80">
                Private Lessons
              </span>
              <span className="text-sm text-primary-foreground/80">
                Trail Rides
              </span>
              <span className="text-sm text-primary-foreground/80">
                Horse Training
              </span>
              <span className="text-sm text-primary-foreground/80">
                Event Hosting
              </span>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+1 (234) 567-890</span>
              </a>
              <a
                href="mailto:info@al-faris.com"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@al-faris.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  123 Heritage Lane
                  <br />
                  Countryside, ST 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Al-Faris Arabian Horse Farm. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="#"
              className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
