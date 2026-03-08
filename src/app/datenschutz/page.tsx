import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzhinweise der Kirchenklause Beeskow Italian Restaurant.",
  alternates: {
    canonical: "/datenschutz",
  },
};

export default function DatenschutzPage() {
  return (
    <main className="pb-20 pt-32">
      <section className="mx-auto max-w-4xl px-5 md:px-8">
        <h1 className="font-display text-5xl tracking-tight text-foreground md:text-6xl">Datenschutz</h1>
        <div className="mt-8 rounded-2xl border border-border/70 bg-panel p-8 text-foreground/80 md:p-10">
          <p>
            Diese Website verarbeitet personenbezogene Daten nur im notwendigen Umfang,
            etwa bei Kontaktanfragen über das Formular.
          </p>
          <p className="mt-4">
            Zweck der Verarbeitung, Speicherdauer sowie Rechte betroffener Personen
            sind entsprechend den gesetzlichen Vorgaben zu dokumentieren.
          </p>
          <p className="mt-6 text-sm text-foreground/60">
            Hinweis: Bitte ersetze diesen Platzhalter durch eine rechtlich geprüfte
            Datenschutzerklärung, bevor die Website live geht.
          </p>
        </div>
      </section>
    </main>
  );
}
