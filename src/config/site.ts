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

const defaultSiteUrl = "https://kirchenklause-beeskow-italian-resta.vercel.app";
const resolvedSiteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl).replace(/\/$/, "");

export const siteConfig: SiteConfig = {
  name: "Mudder-Schulten-Stuben",
  locale: "de",
  url: resolvedSiteUrl,
  navItems: [
    { title: "Speisekarte", href: "#menu" },
    { title: "Standort", href: "#location" },
  ],
  headerCta: {
    label: "Reservierung anfragen",
    href: "#location",
  },
  contact: {
    email: "kls.wichmann@t-online.de",
    phone: "0395 5823766",
    city: "17033 Neubrandenburg",
    address: "Vierte Ringstr. 425",
    mapsUrl:
      "https://www.google.de/maps/dir//Mudder+Schulten+Stuben+4.Ringstra%C3%9Fe+425/@53.5561663,13.2479502,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47abc3721e9a2adf:0x69484adc39cc84ac!2m2!1d13.26524!2d53.55569",
  },
  openingHours: {
    daily: "Täglich durchgehend warme Küche von 11:30 bis 21:30 Uhr",
  },
  priceRange: "€€",
  category: "Regionales Restaurant",
  features: {
    smoothScroll: true,
    viewportBottomFade: true,
    marqueeStrip: true,
    editorialGridGlow: true,
  },
};
