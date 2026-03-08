import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zur Kirchenklause Beeskow Italian Restaurant: Adresse, Öffnungszeiten, Telefon und Nachricht über das Kontaktformular.",
  alternates: {
    canonical: "/kontakt",
  },
};

export default function KontaktLayout({ children }: { children: ReactNode }) {
  return children;
}
