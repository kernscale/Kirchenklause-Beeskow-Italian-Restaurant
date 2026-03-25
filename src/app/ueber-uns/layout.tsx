import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Über Uns",
  description:
    "Mehr über die Mudder-Schulten-Stuben: Standort an der Stadtmauer, familiengeführt seit 1993 und regionale Küche in Neubrandenburg.",
  alternates: {
    canonical: "/ueber-uns",
  },
};

export default function UeberUnsLayout({ children }: { children: ReactNode }) {
  return children;
}
