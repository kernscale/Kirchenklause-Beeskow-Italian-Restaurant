"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { FadeIn, TextReveal } from "@/components/ui/animations";
import { homeContent } from "@/content/home";

const categories = [
  { key: "all", label: "Alles" },
  { key: "antipasti", label: "Antipasti" },
  { key: "pasta", label: "Pasta" },
  { key: "pizza", label: "Pizza" },
  { key: "dolci", label: "Dolci" },
  { key: "drink", label: "Getränke" },
] as const;

const menuImages: Record<string, string> = {
  "Bruschetta Classica": "/images/menu-bruschetta.jpg",
  "Insalata Mista": "/images/menu-insalata.jpg",
  "Spaghetti Carbonara": "/images/menu-carbonara.jpg",
  "Gnocchi al Pesto": "/images/menu-gnocchi.jpg",
  "Pizza Margherita": "/images/menu-pizza.jpg",
  "Pizza Salame": "/images/menu-pizza-salame.jpg",
  "Tiramisu": "/images/menu-tiramisu.jpg",
  "Panna Cotta": "/images/menu-panna-cotta.jpg",
  "Aperol Spritz": "/images/menu-aperol.jpg",
  "San Pellegrino": "/images/menu-sanpellegrino.jpg",
};

export default function SpeisekartePage() {
  const [active, setActive] = useState<string>("all");

  const filtered = active === "all" ? homeContent.menu : homeContent.menu.filter((item) => item.category === active);

  return (
    <main className="pt-32 pb-20">
      <section className="mx-auto mb-20 max-w-7xl px-5 md:px-8">
        <FadeIn>
          <span className="eyebrow editorial-line text-accent">Kirchenklause Beeskow</span>
        </FadeIn>
        <TextReveal
          text="Speisekarte"
          as="h1"
          className="mt-6 font-display text-6xl tracking-tight text-foreground md:text-8xl"
          delay={0.2}
        />
        <FadeIn delay={0.5}>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/50">
            Klassische italienische Küche mit frischen Zutaten und hausgemachten Details.
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto mb-12 max-w-7xl px-5 md:px-8">
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active === cat.key
                    ? "text-black"
                    : "border border-border/70 text-foreground/60 hover:border-border/80 hover:text-foreground"
                }`}
              >
                {active === cat.key && (
                  <motion.div
                    layoutId="menu-filter"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <motion.div
              key={item.name}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <motion.div
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-panel"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                {menuImages[item.name] && (
                  <div className="aspect-[16/10] overflow-hidden">
                    <motion.img
                      src={menuImages[item.name]}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl text-foreground">{item.name}</h3>
                      <p className="mt-1 text-sm text-foreground/40">{item.description}</p>
                    </div>
                    <span className="whitespace-nowrap font-display text-xl text-accent">{item.price}</span>
                  </div>

                  <div className="mt-4">
                    <span className="inline-flex rounded-full border border-border/70 bg-panel px-3 py-1 text-xs text-foreground/40">
                      {categories.find((c) => c.key === item.category)?.label}
                    </span>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-accent/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-5 md:px-8">
        <FadeIn>
          <div className="rounded-2xl border border-border/70 bg-panel p-10 text-center md:p-16">
            <p className="font-display text-2xl text-foreground md:text-3xl">Allergien oder Sonderwünsche?</p>
            <p className="mt-3 text-foreground/40">Sprich unser Team an - wir beraten dich gerne persönlich.</p>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
