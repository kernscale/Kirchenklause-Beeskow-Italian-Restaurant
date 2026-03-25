"use client";

import { useRef } from "react";

import { FadeIn, ImageReveal, StaggerContainer, StaggerItem, AnimatedCounter, WordReveal } from "@/components/ui/animations";

const stats = [
  { value: 60, suffix: "+", label: "Sitzplätze im Sommergarten" },
  { value: 33, suffix: "+", label: "Jahre Familienbetrieb" },
  { value: 7, suffix: "/7", label: "Tage warme Küche" },
];

export function HighlightsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <FadeIn>
              <span className="eyebrow editorial-line text-accent">Was uns ausmacht</span>
            </FadeIn>
            <WordReveal
              text="Regionale Küche mit Geschichte an der Neubrandenburger Stadtmauer."
              as="h2"
              className="mt-6 font-display text-4xl leading-tight tracking-tight text-foreground md:text-5xl"
              delay={0.1}
            />
            <FadeIn delay={0.3}>
              <p className="mt-6 max-w-md text-balance leading-relaxed text-foreground/55">
                Die Mudder-Schulten-Stuben verbinden saisonale Spezialitäten, traditionelle Rezepte und persönliche Betreuung.
              </p>
            </FadeIn>

            <StaggerContainer className="mt-12 grid grid-cols-3 gap-6" delay={0.4}>
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="text-center md:text-left">
                    <span className="font-display text-3xl text-accent md:text-4xl">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </span>
                    <p className="mt-1 text-xs uppercase tracking-wider text-foreground/40">{stat.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <div className="relative">
            <ImageReveal src="/images/mudder/IMG_1918.jpg" alt="Innenbereich der Mudder-Schulten-Stuben" className="aspect-[4/5] rounded-2xl" />
            <FadeIn delay={0.5} direction="left" className="absolute -bottom-8 -left-8 md:-left-16">
              <div className="rounded-2xl border border-border/70 bg-panel-strong p-5 shadow-2xl backdrop-blur-xl">
                <p className="font-display text-lg text-foreground">Vierte Ringstr. 425</p>
                <p className="text-sm text-foreground/40">17033 Neubrandenburg</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
