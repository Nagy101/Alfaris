import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export default function SEO({ title, description, keywords, image }: SEOProps) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const siteName = t("common.brandName");
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const metaDescription = description || t("hero.subheadline");

    // Update document title
    document.title = fullTitle;

    // Update meta tags
    const metaTags = [
      { name: "description", content: metaDescription },
      {
        name: "keywords",
        content:
          keywords ||
          "Arabian horses, horse boarding, equestrian, riding lessons",
      },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: metaDescription },
      { property: "og:type", content: "website" },
      {
        property: "og:locale",
        content: i18n.language === "ar" ? "ar_SA" : "en_US",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: metaDescription },
    ];

    if (image) {
      metaTags.push(
        { property: "og:image", content: image },
        { name: "twitter:image", content: image },
      );
    }

    metaTags.forEach(({ name, property, content }) => {
      const selector = name
        ? `meta[name="${name}"]`
        : `meta[property="${property}"]`;
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");
        if (name) element.setAttribute("name", name);
        if (property) element.setAttribute("property", property);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    });
  }, [title, description, keywords, image, t, i18n.language]);

  return null;
}
