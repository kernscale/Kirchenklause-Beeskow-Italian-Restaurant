import type { Metadata } from "next";

import { HeroSection } from "@/components/sections/hero";
import { HighlightsSection } from "@/components/sections/highlights";
import { MenuPreviewSection } from "@/components/sections/menu-preview";
import { GallerySection } from "@/components/sections/gallery";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { LocationCTASection } from "@/components/sections/location-cta";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Italienisches Restaurant in Beeskow mit Pizza, Pasta und Antipasti",
  description:
    "Kirchenklause Beeskow Italian Restaurant: italienische Klassiker in der Kirchgasse 11, täglich 11:00-23:00. Speisekarte, Öffnungszeiten und Standort.",
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
    image: `${siteConfig.url}/images/hero-kirchenklause-hq.jpg`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: siteConfig.priceRange,
    servesCuisine: ["Italian"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kirchgasse 11",
      addressLocality: "Beeskow",
      postalCode: "15848",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.171657,
      longitude: 14.2477425,
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
        opens: "11:00",
        closes: "23:00",
      },
    ],
    menu: `${siteConfig.url}/speisekarte`,
    sameAs: [siteConfig.contact.mapsUrl],
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
