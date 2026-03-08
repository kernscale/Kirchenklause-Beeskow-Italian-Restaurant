"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

import { FadeIn, MagneticButton, WordReveal, ParallaxImage } from "@/components/ui/animations";
import { siteConfig } from "@/config/site";

export function LocationCTASection() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="glass-sheen relative overflow-hidden rounded-3xl border border-border/70">
          <div className="absolute inset-0 z-0">
            <ParallaxImage src="/images/interior-kirchenklause.jpg" alt="Innenbereich der Kirchenklause" className="h-full w-full" speed={0.1} />
            <div className="absolute inset-0 bg-[var(--overlay-dark)] backdrop-blur-[2px]" />
            <motion.div
              className="pointer-events-none absolute -left-20 top-1/3 h-56 w-56 rounded-full bg-accent/15 blur-3xl"
              animate={reduceMotion ? undefined : { x: [0, 130, -40, 0], y: [0, -24, 16, 0] }}
              transition={reduceMotion ? undefined : { duration: 15, ease: "easeInOut", repeat: Infinity }}
            />
          </div>

          <div className="relative z-10 p-10 md:p-20">
            <div className="max-w-xl">
              <FadeIn>
                <span className="eyebrow editorial-line text-accent">Besuche uns</span>
              </FadeIn>

              <WordReveal
                text="Wir freuen uns auf dich."
                as="h2"
                className="mt-6 font-display text-4xl tracking-tight text-on-image md:text-6xl"
                delay={0.1}
              />
              <p className="mt-4 max-w-md text-balance text-on-image/80">
                Italienische Küche in der Kirchgasse 11 in 15848 Beeskow.
              </p>

              <FadeIn delay={0.3}>
                <div className="mt-10 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
                      <MapPin className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-on-image/90">{siteConfig.contact.address}</p>
                      <p className="text-sm text-on-image/70">{siteConfig.contact.city}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
                      <Clock className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-on-image/90">{siteConfig.openingHours.daily}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5} className="mt-10">
                <MagneticButton>
                  <Link
                    href="/kontakt"
                    className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 font-medium text-black transition-all hover:bg-accent-strong hover:shadow-[0_0_40px_rgba(210,169,109,0.3)]"
                  >
                    Route planen
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </MagneticButton>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
