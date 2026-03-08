import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Speisekarte",
  description:
    "Speisekarte der Kirchenklause Beeskow Italian Restaurant: Antipasti, Pasta, Pizza, Dolci und Getränke.",
  alternates: {
    canonical: "/speisekarte",
  },
};

export default function SpeisekarteLayout({ children }: { children: ReactNode }) {
  return children;
}
