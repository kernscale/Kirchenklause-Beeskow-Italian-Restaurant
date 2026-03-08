import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Über Uns",
  description:
    "Erfahre mehr über die Kirchenklause Beeskow Italian Restaurant, unsere Küche, Werte und den Standort in der Kirchgasse 11.",
  alternates: {
    canonical: "/ueber-uns",
  },
};

export default function UeberUnsLayout({ children }: { children: ReactNode }) {
  return children;
}
