"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, ExternalLink, MapPin, Mail, Moon, Phone, Sun } from "lucide-react";
import Link from "next/link";
import { useSyncExternalStore } from "react";

import { FadeIn } from "@/components/ui/animations";
import { siteConfig } from "@/config/site";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "Speisekarte", href: "/speisekarte" },
      { label: "Über Uns", href: "/ueber-uns" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
  },
];

export function Footer() {
  const theme = useSyncExternalStore(
    (onStoreChange) => {
      if (typeof window === "undefined") {
        return () => {};
      }

      const handleThemeChange = () => onStoreChange();
      window.addEventListener("mudder-theme-change", handleThemeChange);
      window.addEventListener("storage", handleThemeChange);

      return () => {
        window.removeEventListener("mudder-theme-change", handleThemeChange);
        window.removeEventListener("storage", handleThemeChange);
      };
    },
    () => {
      const current = document.documentElement.getAttribute("data-theme");
      return current === "light" ? "light" : "dark";
    },
    () => "dark",
  );

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.setAttribute("data-theme", nextTheme);
    root.style.colorScheme = nextTheme;
    localStorage.setItem("mudder-theme", nextTheme);
    window.dispatchEvent(new Event("mudder-theme-change"));
  };

  const isDark = theme === "dark";

  return (
    <footer className="relative bg-panel-strong/80">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent via-background/50 to-panel-strong/80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 py-16 md:grid-cols-4 md:gap-8">
          <FadeIn className="md:col-span-2">
            <Link href="/" className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-accent/20">
                <UtensilsCrossed className="h-4 w-4 text-accent-strong" />
              </span>
              <span className="font-display text-xl tracking-tight text-foreground">{siteConfig.name}</span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Familiengeführtes Restaurant mit regionalen Spezialitäten in Neubrandenburg.
            </p>

            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                {siteConfig.contact.address}, {siteConfig.contact.city}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-3.5 w-3.5 text-accent" />
                {siteConfig.contact.email}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-3.5 w-3.5 text-accent" />
                {siteConfig.contact.phone}
              </div>
            </div>
          </FadeIn>

          {footerLinks.map((group) => (
            <FadeIn key={group.title} delay={0.1}>
              <h4 className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/70 py-6 md:flex-row">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <p className="text-xs text-muted-foreground/80">
              &copy; {new Date().getFullYear()} {siteConfig.name}. Alle Rechte vorbehalten.
            </p>
            <p className="text-xs text-muted-foreground/70">Made by Kernscale</p>
          </div>
          <div className="flex items-center gap-4">
            <motion.button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label={isDark ? "Zu Light Mode wechseln" : "Zu Dark Mode wechseln"}
            >
              {isDark ? <Sun className="h-3.5 w-3.5 text-accent" /> : <Moon className="h-3.5 w-3.5 text-accent" />}
              <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
            </motion.button>
            <motion.a
              href="https://www.mudder-schulten-stuben.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/30 hover:text-accent"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Original-Website öffnen"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
