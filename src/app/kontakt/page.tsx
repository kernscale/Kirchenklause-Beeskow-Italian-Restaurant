"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";

import { FadeIn, TextReveal, MagneticButton } from "@/components/ui/animations";
import { siteConfig } from "@/config/site";

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    value: `${siteConfig.contact.address}, ${siteConfig.contact.city}`,
    href: siteConfig.contact.mapsUrl,
  },
  {
    icon: Clock,
    label: "Öffnungszeiten",
    value: siteConfig.openingHours.daily,
  },
  {
    icon: Phone,
    label: "Telefon",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
];

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="pb-20 pt-32">
      <section className="mx-auto mb-20 max-w-7xl px-5 md:px-8">
        <FadeIn>
          <span className="eyebrow editorial-line text-accent">Kontakt</span>
        </FadeIn>
        <TextReveal
          text="Sag Hallo."
          as="h1"
          className="mt-6 font-display text-6xl tracking-tight text-foreground md:text-8xl"
          delay={0.2}
        />
        <FadeIn delay={0.5}>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/50">
            Fragen, Reservierungswunsch oder Feedback? Schreib uns direkt. Wir sind täglich in Beeskow erreichbar.
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <div className="rounded-2xl border border-border/70 bg-panel p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                    <Send className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground">Danke!</h3>
                  <p className="mt-2 text-foreground/40">Wir melden uns bald bei dir.</p>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <h3 className="mb-8 font-display text-2xl text-foreground">Schreib uns</h3>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-foreground/30">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-xl border border-border/70 bg-panel px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-foreground/20 focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                        placeholder="Dein Name"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-foreground/30">E-Mail</label>
                      <input
                        type="email"
                        required
                        className="w-full rounded-xl border border-border/70 bg-panel px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-foreground/20 focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                        placeholder="deine@email.de"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-foreground/30">Betreff</label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-border/70 bg-panel px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-foreground/20 focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                      placeholder="Worum geht es?"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-foreground/30">Nachricht</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full resize-none rounded-xl border border-border/70 bg-panel px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-foreground/20 focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                      placeholder="Deine Nachricht..."
                    />
                  </div>

                  <MagneticButton>
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 font-medium text-black transition-all hover:bg-accent-strong hover:shadow-[0_0_40px_rgba(210,169,109,0.3)]"
                    >
                      Absenden
                      <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </button>
                  </MagneticButton>
                  <p className="text-sm text-foreground/50">Wir antworten in der Regel innerhalb von 24 Stunden.</p>
                </form>
              )}
            </div>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                {contactInfo.map((info, i) => {
                  const Icon = info.icon;
                  const cardContent = (
                    <>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-accent/10 transition-colors group-hover:bg-accent/20">
                        <Icon className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.15em] text-foreground/30">{info.label}</p>
                        <p className="mt-1 text-foreground/80">{info.value}</p>
                      </div>
                    </>
                  );

                  return (
                    info.href ? (
                      <a
                        key={i}
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-4 rounded-xl border border-border/70 bg-panel p-5 transition-all hover:border-accent/20 hover:bg-accent/5"
                      >
                        {cardContent}
                      </a>
                    ) : (
                      <div
                        key={i}
                        className="group flex items-start gap-4 rounded-xl border border-border/70 bg-panel p-5 transition-all hover:border-accent/20 hover:bg-accent/5"
                      >
                        {cardContent}
                      </div>
                    )
                  );
                })}
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border/70">
                <iframe
                  src="https://www.google.com/maps?q=Kirchgasse+11,+15848+Beeskow&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "var(--map-filter)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kirchenklause Beeskow Standort"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
