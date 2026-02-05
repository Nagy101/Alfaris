import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { horses } from "@/data/mockData";
import { cn } from "@/lib/utils";

export default function Horses() {
  const { t } = useTranslation();
  const publicHorses = horses.filter((h) => h.visibility === "public");

  return (
    <div className="min-h-screen pt-24 pb-16 animate-fade-in">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-foreground mb-4">
            {t("horses.title")}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("horses.subtitle")}
          </p>
        </div>

        {/* Horse Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 stagger-children">
          {publicHorses.map((horse) => (
            <Link
              key={horse.id}
              to={`/horses/${horse.id}`}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover-lift"
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={horse.images[0]}
                  alt={horse.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                loading="lazy"
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <p className="text-xs uppercase tracking-wider text-accent font-medium mb-1">
                    {horse.breed} • {horse.gender}
                  </p>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-primary-foreground mb-1">
                  {horse.name}
                </h3>
                <div className="flex items-center gap-4 text-primary-foreground/80 text-sm">
                  <span>{horse.age} years</span>
                  <span>•</span>
                  <span>{horse.color}</span>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 mt-4">
                  <span className="inline-flex items-center gap-2 text-accent text-sm font-medium">
                    {t("horses.viewDetails")}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              {horse.status === "available" && horse.price && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full bg-secondary/90 text-secondary-foreground text-xs font-medium backdrop-blur-sm">
                    {t("horses.available")}
                  </span>
                </div>
              )}
              {horse.status === "sold" && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full bg-muted/90 text-muted-foreground text-xs font-medium backdrop-blur-sm">
                    {t("horses.sold")}
                  </span>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
