"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { FadeIn, StaggerContainer, StaggerItem, WordReveal } from "@/components/ui/animations";

const reviews = [
  {
    name: "Giulia R.",
    text: "Sehr gute Pizza, knuspriger Boden und freundlicher Service. Wir kommen wieder.",
    rating: 5,
  },
  {
    name: "Stefan K.",
    text: "Carbonara und Bruschetta waren top. Gemütliche Stimmung am Abend.",
    rating: 5,
  },
  {
    name: "Maria L.",
    text: "Tolle Adresse in Beeskow. Faire Preise und große Portionen.",
    rating: 5,
  },
  {
    name: "Daniel P.",
    text: "Wir waren als Familie da und alle Gerichte kamen gleichzeitig und heiß an den Tisch.",
    rating: 5,
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
            <span className="eyebrow text-accent">Bewertungen</span>
          </FadeIn>
          <WordReveal
            text="Stimmen aus Beeskow"
            as="h2"
            className="mx-auto mt-4 max-w-4xl font-display text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl"
            delay={0.1}
          />
        </div>

        <StaggerContainer className="grid gap-6 md:grid-cols-2" stagger={0.1}>
          {reviews.map((review, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="testimonial-card group relative h-full rounded-2xl border p-6 backdrop-blur-sm"
                style={{
                  backgroundColor: "var(--testimonial-bg)",
                  borderColor: "var(--testimonial-border)",
                }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <Quote className="pointer-events-none absolute right-5 top-5 h-8 w-8 text-accent/25" />
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: review.rating }).map((_, si) => (
                    <Star key={si} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="mb-6 text-sm leading-relaxed [color:var(--testimonial-text)]">&ldquo;{review.text}&rdquo;</p>

                <div className="mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                      <span className="text-xs font-medium text-accent">{review.name.charAt(0)}</span>
                    </div>
                    <span className="text-sm font-medium [color:var(--testimonial-meta)]">{review.name}</span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
