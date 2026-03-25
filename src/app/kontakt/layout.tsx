import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zur Mudder-Schulten-Stuben: Vierte Ringstr. 425 in 17033 Neubrandenburg, Telefon 0395 5823766 und E-Mail kls.wichmann@t-online.de.",
  alternates: {
    canonical: "/kontakt",
  },
};

export default function KontaktLayout({ children }: { children: ReactNode }) {
  return children;
}
