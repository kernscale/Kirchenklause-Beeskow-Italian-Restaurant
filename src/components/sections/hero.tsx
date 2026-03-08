"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { TextReveal, FadeIn, MagneticButton } from "@/components/ui/animations";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.6], [0, -80]);
  const smoothTextY = useSpring(textY, { damping: 25, stiffness: 80 });

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ scale: imageScale, opacity: imageOpacity }}>
        <Image src="/images/hero-kirchenklause-hq.jpg" alt="Kirchenklause Beeskow Italian Restaurant" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--overlay-dark)] via-[var(--overlay-soft)] to-[var(--overlay-bottom)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--overlay-dark)] via-transparent to-transparent" />
      </motion.div>

      <div className="noise-overlay pointer-events-none absolute inset-0 z-10" />

      <motion.div
        className="relative z-20 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-end px-5 pb-20 md:px-8 md:pb-32"
        style={{ y: smoothTextY }}
      >
        <div className="max-w-3xl">
          <TextReveal
            text="Italienische Küche."
            as="h1"
            className="mt-6 font-display text-6xl leading-[1.05] tracking-tight text-on-image md:text-8xl lg:text-9xl"
            delay={0.3}
          />
          <TextReveal
            text="Mitten in Beeskow."
            as="h1"
            className="font-display text-6xl leading-[1.05] tracking-tight text-on-image md:text-8xl lg:text-9xl"
            delay={0.6}
          />

          <FadeIn delay={1} className="mt-8">
            <p className="max-w-md text-balance text-lg leading-relaxed text-on-image/80">
              Pizza, Pasta, Antipasti und Dolci in der Kirchgasse 11.
            </p>
          </FadeIn>

          <FadeIn delay={1.05} className="mt-4 flex flex-wrap gap-2">
            <span className="ambient-drift rounded-full border border-on-image/35 bg-[var(--overlay-soft)] px-3 py-1 text-xs text-on-image/85">
              Täglich 11:00-23:00
            </span>
            <span className="ambient-drift rounded-full border border-on-image/35 bg-[var(--overlay-soft)] px-3 py-1 text-xs text-on-image/85 [animation-delay:1.4s]">
              €20-30
            </span>
          </FadeIn>

          <FadeIn delay={1.2} className="mt-10 flex flex-wrap gap-4">
            <MagneticButton>
              <Link
                href="/speisekarte"
                className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 font-medium text-black transition-all hover:bg-accent-strong hover:shadow-[0_0_40px_rgba(210,169,109,0.3)]"
              >
                Jetzt Speisekarte ansehen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-3 rounded-full border border-on-image/40 bg-[var(--overlay-soft)] px-7 py-4 font-medium text-on-image backdrop-blur-sm transition-all hover:border-on-image/60 hover:bg-[var(--overlay-dark)]"
              >
                Route & Kontakt
              </Link>
            </MagneticButton>
          </FadeIn>
        </div>
      </motion.div>
    </section>
  );
}
