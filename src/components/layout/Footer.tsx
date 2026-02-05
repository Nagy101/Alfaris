import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-semibold">
              🐎 {t("common.brandName")}
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {t("footer.aboutText")}
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">
              {t("footer.quickLinks")}
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/horses"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t("nav.horses")}
              </Link>
              <Link
                to="/booking"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t("nav.booking")}
              </Link>
              <Link
                to="/boarding"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t("nav.boarding")}
              </Link>
              <Link
                to="/shop"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t("nav.shop")}
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">
              {t("footer.servicesTitle")}
            </h4>
            <nav className="flex flex-col gap-2">
              <span className="text-sm text-primary-foreground/80">
                {t("footer.services.privateLessons")}
              </span>
              <span className="text-sm text-primary-foreground/80">
                {t("footer.services.trailRides")}
              </span>
              <span className="text-sm text-primary-foreground/80">
                {t("footer.services.horseTraining")}
              </span>
              <span className="text-sm text-primary-foreground/80">
                {t("footer.services.eventHosting")}
              </span>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">
              {t("footer.contact")}
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{t("footer.phone")}</span>
              </a>
              <a
                href="mailto:info@alfaris-arabians.com"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{t("footer.email")}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{t("footer.address")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} {t("common.brandName")}.{" "}
            {t("footer.rights")}
          </p>
          <div className="flex gap-6">
            <Link
              to="#"
              className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              {t("footer.privacyPolicy")}
            </Link>
            <Link
              to="#"
              className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              {t("footer.termsOfService")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
