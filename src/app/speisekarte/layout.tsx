import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Speisekarte",
  description:
    "Speisekarte der Mudder-Schulten-Stuben: Suppen, Fischgerichte, Fleischgerichte, Wildgerichte und Chefempfehlungen.",
  alternates: {
    canonical: "/speisekarte",
  },
};

export default function SpeisekarteLayout({ children }: { children: ReactNode }) {
  return children;
}
