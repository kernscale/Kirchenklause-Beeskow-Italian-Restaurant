export type FeatureFlags = {
  smoothScroll: boolean;
  viewportBottomFade: boolean;
  marqueeStrip: boolean;
  editorialGridGlow: boolean;
};

export type NavItem = {
  title: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  locale: string;
  url: string;
  navItems: NavItem[];
  headerCta: { label: string; href: string };
  contact: {
    email: string;
    phone: string;
    city: string;
    address: string;
    mapsUrl: string;
  };
  openingHours: {
    daily: string;
  };
  priceRange: string;
  category: string;
  features: FeatureFlags;
};

export const siteConfig: SiteConfig = {
  name: "Kirchenklause Beeskow Italian Restaurant",
  locale: "de",
  url: "https://kirchenklause-beeskow.de",
  navItems: [
    { title: "Speisekarte", href: "#menu" },
    { title: "Standort", href: "#location" },
  ],
  headerCta: {
    label: "Tisch anfragen",
    href: "#location",
  },
  contact: {
    email: "kontakt@kirchenklause-beeskow.de",
    phone: "0162 2589562",
    city: "15848 Beeskow",
    address: "Kirchgasse 11",
    mapsUrl: "https://www.google.com/maps/place/Kirchenklause+Beeskow+Italian+Restaurant/@52.1716976,14.2278927,2602m/data=!3m1!1e3!4m6!3m5!1s0x4707ed489ebf4665:0x7eb3d23459df927a!8m2!3d52.171657!4d14.2477425!16s%2Fg%2F1w96ffzq?entry=ttu",
  },
  openingHours: {
    daily: "Täglich 11:00-23:00",
  },
  priceRange: "€20-30",
  category: "Italian restaurant",
  features: {
    smoothScroll: true,
    viewportBottomFade: true,
    marqueeStrip: true,
    editorialGridGlow: true,
  },
};
