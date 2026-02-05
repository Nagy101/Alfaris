import { Link } from "react-router-dom";
import { Award, Calendar, Home, ShoppingBag } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const services = [
  {
    titleKey: "services.horseCollection.title",
    descriptionKey: "services.horseCollection.description",
    icon: Award,
    path: "/horses",
    image:
      "https://images.unsplash.com/photo-1534773728080-33d31da27ae5?w=800&q=85",
  },
  {
    titleKey: "services.bookRide.title",
    descriptionKey: "services.bookRide.description",
    icon: Calendar,
    path: "/booking",
    image:
      "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&q=85",
  },
  {
    titleKey: "services.vipBoarding.title",
    descriptionKey: "services.vipBoarding.description",
    icon: Home,
    path: "/boarding",
    image:
      "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=800&q=85",
  },
  {
    titleKey: "services.boutique.title",
    descriptionKey: "services.boutique.description",
    icon: ShoppingBag,
    path: "/shop",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85",
  },
];

export default function ServicesSection() {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-4">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 stagger-children">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.path}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-background border border-border hover-lift",
                "min-h-[320px] flex flex-col justify-end p-8",
              )}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={t(service.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/90 text-accent-foreground mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-primary-foreground mb-2">
                  {t(service.titleKey)}
                </h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  {t(service.descriptionKey)}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-accent text-sm font-medium">
                  {t("common.learnMore")}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
