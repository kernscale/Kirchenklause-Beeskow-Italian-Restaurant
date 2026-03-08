import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

const routes = ["", "/speisekarte", "/ueber-uns", "/kontakt", "/impressum", "/datenschutz"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
