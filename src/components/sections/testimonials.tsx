"use client";

import { motion } from "framer-motion";

import { FadeIn, StaggerContainer, StaggerItem, WordReveal } from "@/components/ui/animations";

const insights = [
  {
    title: "Historischer Standort",
    text: "Die Räume waren seit 1986 gastronomisch genutzt und liegen direkt an der erhaltenen Stadtmauer.",
  },
  {
    title: "Familiengeführt",
    text: "Familie Wichmann betreibt die Gastronomie seit 1993, seit 2015 unter der Leitung von Henry Wichmann.",
  },
  {
    title: "Regionale Ausrichtung",
    text: "Die Küche setzt auf saisonale und regionale Spezialitäten mit mecklenburgischem Charakter.",
  },
  {
    title: "Gastlichkeit",
    text: "Aufmerksamer Service und ein Sommergarten mit rund 60 Sitzplätzen prägen den Aufenthalt.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[80vw] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-panel-strong/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-40 -translate-y-1/2 bg-gradient-to-r from-transparent via-accent/8 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-16 text-center">
          <FadeIn>
            <span className="eyebrow text-accent">Hausprofil</span>
          </FadeIn>
          <WordReveal
            text="Mudder-Schulten-Stuben auf einen Blick"
            as="h2"
            className="mx-auto mt-4 max-w-4xl font-display text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl"
            delay={0.1}
          />
        </div>

        <StaggerContainer className="grid gap-6 md:grid-cols-2" stagger={0.1}>
          {insights.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                className="testimonial-card group relative h-full rounded-2xl border p-6 backdrop-blur-sm"
                style={{
                  backgroundColor: "var(--testimonial-bg)",
                  borderColor: "var(--testimonial-border)",
                }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display text-2xl text-foreground">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed [color:var(--testimonial-text)]">{item.text}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
