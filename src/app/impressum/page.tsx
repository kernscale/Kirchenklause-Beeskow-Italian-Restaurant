import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Mudder-Schulten-Stuben, Vierte Ringstr. 425, 17033 Neubrandenburg.",
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
          <p className="font-medium text-foreground">Mudder-Schulten-Stuben</p>
          <p className="mt-2">Vierte Ringstr. 425</p>
          <p>17033 Neubrandenburg</p>

          <p className="mt-4"><strong>Inhaber:</strong> Henry Wichmann</p>
          <p><strong>Telefon:</strong> 0395 5823766</p>
          <p><strong>E-Mail:</strong> kls.wichmann@t-online.de</p>

          <p className="mt-6 text-sm text-foreground/60">
            Plattform der EU-Kommission zur Online-Streitbeilegung: https://ec.europa.eu/consumers/odr
          </p>
        </div>
      </section>
    </main>
  );
}
