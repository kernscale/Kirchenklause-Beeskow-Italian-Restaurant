"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { FadeIn, TextReveal } from "@/components/ui/animations";
import { homeContent } from "@/content/home";

const categoryLabelMap: Record<string, string> = {
  suppen: "Suppen",
  fischgerichte: "Fischgerichte",
  gefluegelgerichte: "Geflügelgerichte",
  rind: "Gerichte vom Rind",
  schwein: "Gerichte vom Schwein",
  chefempfehlung: "Chefempfehlung",
  wildgerichte: "Wildgerichte",
};

const menuImages: Record<string, string> = {
  "Klare Fischsuppe": "/images/mudder/IMG_1726.jpg",
  Soljanka: "/images/mudder/IMG_1738.jpg",
  "Schlesische Knoblauchsuppe": "/images/mudder/IMG_1798.jpg",
  Welsfilet: "/images/mudder/IMG_1834.jpg",
  "Gemischte Fischplatte": "/images/mudder/IMG_1835.jpg",
  Dorschfilet: "/images/mudder/IMG_1839.jpg",
  "Forelle, nach Art der Müllerin": "/images/mudder/IMG_1848.jpg",
  Zanderfilet: "/images/mudder/IMG_1859.jpg",
  "Putenbruststeak auf orientalische Art": "/images/mudder/IMG_1876.jpg",
  Rinderroulade: "/images/mudder/IMG_1897.jpg",
  "Rumpsteak 200 g": "/images/mudder/IMG_1917.jpg",
  "Mastochsensteak 250 g": "/images/mudder/IMG_1918.jpg",
  "Steak ou four": "/images/mudder/IMG_1926.jpg",
  Bauernschmaus: "/images/mudder/IMG_1938.jpg",
  "3 Schweinemedaillons": "/images/mudder/IMG_1946.jpg",
  'Steak "Balkan"': "/images/mudder/IMG_1952.jpg",
  "Eisbein, gepökelt": "/images/mudder/IMG_1953.jpg",
  Metzgerplatte: "/images/mudder/bild-01.jpg",
  Kloppschinken: "/images/mudder/bild-02.jpg",
  'Rippenbraten "Mecklenburger Art"': "/images/mudder/bild-03.jpg",
  "Känguru Rückensteak": "/images/mudder/bild-04.jpg",
  Kutscherteller: "/images/mudder/bild-05.jpg",
  Hirschbraten: "/images/mudder/IMG_1848.jpg",
  Wildschweinbraten: "/images/mudder/IMG_1952.jpg",
};

function labelForCategory(category: string): string {
  return categoryLabelMap[category] ?? category;
}

export default function SpeisekartePage() {
  const [active, setActive] = useState<string>("all");
  const availableCategories = Array.from(new Set(homeContent.menu.map((item) => item.category)));

  const categories = [
    { key: "all", label: "Alles" },
    ...availableCategories.map((category) => ({ key: category, label: labelForCategory(category) })),
  ];

  const filtered = active === "all" ? homeContent.menu : homeContent.menu.filter((item) => item.category === active);

  return (
    <main className="pt-32 pb-20">
      <section className="mx-auto mb-20 max-w-7xl px-5 md:px-8">
        <FadeIn>
          <span className="eyebrow editorial-line text-accent">Mudder-Schulten-Stuben</span>
        </FadeIn>
        <TextReveal
          text="Speisekarte"
          as="h1"
          className="mt-6 font-display text-6xl tracking-tight text-foreground md:text-8xl"
          delay={0.2}
        />
        <FadeIn delay={0.5}>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/50">
            Regionale Spezialitäten mit Fokus auf Fisch-, Fleisch- und Wildgerichte. Preise bitte direkt im Restaurant erfragen.
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
              transition={{ duration: 0.5, delay: i * 0.03 }}
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
                    <span className="whitespace-nowrap font-display text-sm text-accent">{item.price}</span>
                  </div>

                  <div className="mt-4">
                    <span className="inline-flex rounded-full border border-border/70 bg-panel px-3 py-1 text-xs text-foreground/40">
                      {labelForCategory(item.category)}
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
            <p className="font-display text-2xl text-foreground md:text-3xl">Reservierung oder Rückfragen?</p>
            <p className="mt-3 text-foreground/40">Bitte telefonisch unter 0395 5823766 oder per E-Mail an kls.wichmann@t-online.de.</p>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
