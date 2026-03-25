import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzhinweise der Mudder-Schulten-Stuben.",
  alternates: {
    canonical: "/datenschutz",
  },
};

export default function DatenschutzPage() {
  return (
    <main className="pb-20 pt-32">
      <section className="mx-auto max-w-4xl px-5 md:px-8">
        <h1 className="font-display text-5xl tracking-tight text-foreground md:text-6xl">Datenschutz</h1>
        <div className="mt-8 rounded-2xl border border-border/70 bg-panel p-8 text-foreground/80 md:p-10 space-y-4">
          <p>
            Verantwortliche Stelle laut veröffentlichten Angaben auf der Mudder-Schulten-Stuben Website:
          </p>
          <p>
            Mudder-Schulten-Stuben, Vierte Ringstr. 425, 17033 Neubrandenburg, Inhaber Henry Wichmann,
            Telefon 0395 5823766, E-Mail kls.wichmann@t-online.de.
          </p>
          <p>
            Die vollständige Datenschutzerklärung ist auf der Originalseite abrufbar:
            https://www.mudder-schulten-stuben.de/?page_id=329
          </p>
          <p className="text-sm text-foreground/60">
            Hinweis: Für einen produktiven Live-Betrieb sollte der finale Datenschutztext rechtlich geprüft werden.
          </p>
        </div>
      </section>
    </main>
  );
}
