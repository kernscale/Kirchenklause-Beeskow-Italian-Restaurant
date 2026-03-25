import type { Metadata } from "next";

import { HeroSection } from "@/components/sections/hero";
import { HighlightsSection } from "@/components/sections/highlights";
import { MenuPreviewSection } from "@/components/sections/menu-preview";
import { GallerySection } from "@/components/sections/gallery";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { LocationCTASection } from "@/components/sections/location-cta";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Restaurant in Neubrandenburg mit regionaler Küche",
  description:
    "Mudder-Schulten-Stuben in der Vierten Ringstr. 425, 17033 Neubrandenburg. Familiengeführt, regionale Spezialitäten und warme Küche täglich von 11:30 bis 21:30 Uhr.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/mudder/IMG_1938.jpg`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: siteConfig.priceRange,
    servesCuisine: ["Deutsch", "Mecklenburgisch", "Regional"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Vierte Ringstr. 425",
      addressLocality: "Neubrandenburg",
      postalCode: "17033",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.55569,
      longitude: 13.26524,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:30",
        closes: "21:30",
      },
    ],
    menu: `${siteConfig.url}/speisekarte`,
    sameAs: [siteConfig.contact.mapsUrl, "https://www.mudder-schulten-stuben.de/"],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <HeroSection />
      <HighlightsSection />
      <MenuPreviewSection />
      <GallerySection />
      <TestimonialsSection />
      <LocationCTASection />
    </main>
  );
}
