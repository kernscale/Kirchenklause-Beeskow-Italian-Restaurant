"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { FadeIn, StaggerContainer, StaggerItem, WordReveal } from "@/components/ui/animations";

const featuredItems = [
  {
    name: "Gemischte Fischplatte",
    desc: "Zander · Seelachs · Fisch-Rahm-Sauce",
    price: "Preis auf Anfrage",
    image: "/images/mudder/IMG_1876.jpg",
  },
  {
    name: "Rumpsteak 200 g",
    desc: "Kräuterbutter · frische Champignons",
    price: "Preis auf Anfrage",
    image: "/images/mudder/IMG_1897.jpg",
  },
  {
    name: "Kloppschinken",
    desc: "Traditionell mecklenburgisch",
    price: "Preis auf Anfrage",
    image: "/images/mudder/IMG_1946.jpg",
  },
  {
    name: "Wildschweinbraten",
    desc: "Böhmische Sauce · Apfelrotkohl",
    price: "Preis auf Anfrage",
    image: "/images/mudder/IMG_1952.jpg",
  },
];

export function MenuPreviewSection() {
  return (
    <section className="relative py-32" id="menu">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeIn>
              <span className="eyebrow editorial-line text-accent">Speisekarte</span>
            </FadeIn>
            <WordReveal
              text="Ausgewählte Empfehlungen"
              as="h2"
              className="mt-4 font-display text-4xl tracking-tight text-foreground md:text-6xl"
              delay={0.1}
            />
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-foreground/60 md:text-base">
              Ein kleiner Ausblick auf Suppen, Fisch-, Fleisch- und Wildgerichte aus unserer Küche.
            </p>
          </div>
          <FadeIn delay={0.3}>
            <Link
              href="/speisekarte"
              className="group inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent-strong"
            >
              Komplette Karte
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredItems.map((item) => (
            <StaggerItem key={item.name}>
              <motion.div
                className="glass-sheen group relative overflow-hidden rounded-2xl border border-border/70 bg-panel [transform-style:preserve-3d]"
                whileHover={{ y: -10, rotateX: 3, rotateY: -3, transition: { duration: 0.3 } }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--overlay-dark)] via-transparent to-transparent" />
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg text-foreground">{item.name}</h3>
                      <p className="mt-1 text-sm text-foreground/40">{item.desc}</p>
                    </div>
                    <span className="whitespace-nowrap font-display text-sm text-accent">{item.price}</span>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-accent/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
