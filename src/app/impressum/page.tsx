import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Kirchenklause Beeskow Italian Restaurant in der Kirchgasse 11, 15848 Beeskow.",
  alternates: {
    canonical: "/impressum",
  },
};

export default function ImpressumPage() {
  return (
    <main className="pb-20 pt-32">
      <section className="mx-auto max-w-4xl px-5 md:px-8">
        <h1 className="font-display text-5xl tracking-tight text-foreground md:text-6xl">Impressum</h1>
        <div className="mt-8 rounded-2xl border border-border/70 bg-panel p-8 text-foreground/80 md:p-10">
          <p className="font-medium text-foreground">{siteConfig.name}</p>
          <p className="mt-2">{siteConfig.contact.address}</p>
          <p>{siteConfig.contact.city}</p>
          <p className="mt-4">E-Mail: {siteConfig.contact.email}</p>
          <p>Telefon: {siteConfig.contact.phone}</p>
          <p className="mt-6 text-sm text-foreground/60">
            Hinweis: Bitte ergänze hier bei Bedarf die rechtlich erforderlichen Angaben
            (z. B. Betreiber, Rechtsform, vertretungsberechtigte Person, USt-IdNr.).
          </p>
        </div>
      </section>
    </main>
  );
}
