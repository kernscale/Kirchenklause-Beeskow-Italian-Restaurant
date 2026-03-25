"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { FadeIn, WordReveal, TextReveal, ImageReveal, StaggerContainer, StaggerItem, ParallaxImage } from "@/components/ui/animations";

const values = [
  {
    title: "Regionalität",
    desc: "Die Küche orientiert sich an regionalen Produkten und saisonalen Speisen.",
  },
  {
    title: "Gastfreundschaft",
    desc: "Aufmerksamer Service und ein familiärer Umgang prägen den Besuch.",
  },
  {
    title: "Beständigkeit",
    desc: "Ein traditionsreicher Standort mit kontinuierlicher Weiterentwicklung des Hauses.",
  },
];

const timeline = [
  { year: "1986", event: "In den Räumen startet eine Gastronomie, damals als Weinstuben am Wall." },
  { year: "1993", event: "Familie Wichmann übernimmt den Betrieb und richtet ihn regional aus." },
  { year: "2015", event: "Henry Wichmann übernimmt die Leitung der Mudder-Schulten-Stuben." },
  { year: "Heute", event: "Saisonale Spezialitäten und Gastlichkeit direkt an der Stadtmauer." },
];

const topFacts = [
  "Familiengeführt seit 1993",
  "Leitung seit 2015: Henry Wichmann",
  "Sommergarten mit 60 Sitzplätzen",
  "Vierte Ringstr. 425, Neubrandenburg",
];

export default function UeberUnsPage() {
  return (
    <main className="pb-20 pt-32">
      <section className="relative mx-auto mb-24 max-w-7xl px-5 md:px-8">
        <div className="grid items-stretch gap-12 md:grid-cols-[1fr_1.05fr] md:gap-14">
          <div className="section-frame h-full p-7 md:p-10">
            <FadeIn>
              <span className="eyebrow editorial-line text-accent">Unsere Geschichte</span>
            </FadeIn>
            <TextReveal
              text="Wer wir sind."
              as="h1"
              className="mt-6 font-display text-5xl leading-[1.05] tracking-tight text-foreground md:text-7xl"
              delay={0.2}
            />
            <FadeIn delay={0.6}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/55">
                Die Mudder-Schulten-Stuben verbinden regionale Küche und familiäre Gastlichkeit an einem historischen Standort in Neubrandenburg.
              </p>
            </FadeIn>

            <FadeIn delay={0.7}>
              <div className="mt-8 grid gap-2 sm:grid-cols-2">
                {topFacts.map((fact) => (
                  <span
                    key={fact}
                    className="inline-flex items-center rounded-full border border-border/70 bg-panel px-3 py-1.5 text-xs tracking-[0.04em] text-foreground/75"
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.9} className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-accent-strong"
              >
                Reservierung anfragen
              </Link>
              <Link
                href="/speisekarte"
                className="inline-flex items-center rounded-full border border-border/70 bg-panel px-5 py-2.5 text-sm text-foreground/80 transition-colors hover:border-accent/40 hover:text-foreground"
              >
                Zur Speisekarte
              </Link>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="relative h-full min-h-[420px] md:min-h-[560px]">
              <ImageReveal
                src="/images/mudder/IMG_1918.jpg"
                alt="Innenbereich der Mudder-Schulten-Stuben"
                className="h-full rounded-2xl border border-border/70"
                delay={0.35}
              />
              <div className="absolute bottom-5 left-5 rounded-xl border border-border/70 bg-panel-strong/90 px-4 py-3 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.18em] text-accent">Mudder-Schulten-Stuben</p>
                <p className="mt-1 text-sm text-foreground/80">Mecklenburger Spezialitäten und familiäre Atmosphäre</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="relative overflow-hidden py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
          <FadeIn>
            <blockquote className="font-display text-3xl leading-relaxed text-foreground md:text-5xl md:leading-relaxed">
              &ldquo;Regionale, frische Küche mit gutem Service und aufmerksamer Betreuung unserer Gäste.&rdquo;
            </blockquote>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-8 text-sm uppercase tracking-[0.2em] text-accent">Hausprofil der Mudder-Schulten-Stuben</p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="mb-16 text-center">
          <FadeIn>
            <span className="eyebrow text-accent">Unsere Werte</span>
          </FadeIn>
          <WordReveal
            text="Wofür wir stehen"
            as="h2"
            className="mt-4 font-display text-4xl tracking-tight text-foreground md:text-6xl"
            delay={0.1}
          />
        </div>

        <StaggerContainer className="grid gap-8 md:grid-cols-3" stagger={0.12}>
          {values.map((val, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="relative h-full rounded-2xl border border-border/70 bg-panel p-8"
                whileHover={{
                  borderColor: "rgba(210, 169, 109, 0.15)",
                  transition: { duration: 0.3 },
                }}
              >
                <span className="font-display text-5xl text-accent/20">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-2xl text-foreground">{val.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/40">{val.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="relative h-[50vh] overflow-hidden rounded-3xl">
          <ParallaxImage src="/images/mudder/IMG_1848.jpg" alt="Innenbereich der Mudder-Schulten-Stuben" className="h-full w-full" speed={0.2} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="mb-16 text-center">
          <FadeIn>
            <span className="eyebrow text-accent">Timeline</span>
          </FadeIn>
          <WordReveal
            text="Unsere Reise"
            as="h2"
            className="mt-4 font-display text-4xl tracking-tight text-foreground md:text-6xl"
            delay={0.1}
          />
        </div>

        <div className="relative mx-auto max-w-2xl">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent md:left-1/2" />

          {timeline.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div className={`relative mb-12 flex gap-8 pl-12 md:pl-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background md:left-1/2 md:-translate-x-1/2" />

                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <span className="text-sm font-mono text-accent">{item.year}</span>
                  <p className="mt-1 text-foreground/60">{item.event}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
