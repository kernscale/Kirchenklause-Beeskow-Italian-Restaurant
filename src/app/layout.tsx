import type { Metadata } from "next";
import { Archivo, Fraunces, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";

import { InitialLoadGate } from "@/components/layout/initial-load-gate";
import { LenisProvider } from "@/components/layout/lenis-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/sections/footer";
import { ScrollProgress } from "@/components/ui/animations";
import { siteConfig } from "@/config/site";
import "./globals.css";

const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Mudder-Schulten-Stuben | Restaurant in Neubrandenburg",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Mudder-Schulten-Stuben in Neubrandenburg: regionale und saisonale Spezialitäten, familiengeführt seit 1993. Warme Küche täglich von 11:30 bis 21:30 Uhr.",
  keywords: [
    "Mudder-Schulten-Stuben",
    "Restaurant Neubrandenburg",
    "Vierte Ringstr. 425",
    "Mecklenburger Spezialitäten",
    "Regionale Küche Neubrandenburg",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Mudder-Schulten-Stuben",
    description: "Regionale Spezialitäten in Neubrandenburg. Warme Küche täglich von 11:30 bis 21:30 Uhr.",
    images: [
      {
        url: "/images/mudder/IMG_1938.jpg",
        width: 1200,
        height: 800,
        alt: "Mudder-Schulten-Stuben",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mudder-Schulten-Stuben",
    description: "Familiengeführtes Restaurant in Neubrandenburg mit regionaler Küche.",
    images: ["/images/mudder/IMG_1938.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
  try {
    const key = "mudder-theme";
    const root = document.documentElement;
    const stored = localStorage.getItem(key);
    const theme = stored === "light" || stored === "dark" ? stored : "dark";
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;
  } catch {}
})();`}
        </Script>
      </head>
      <body className={`${archivo.variable} ${fraunces.variable} ${plexMono.variable} bg-background text-foreground antialiased`}>
        <LenisProvider>
          <InitialLoadGate>
            <ScrollProgress />
            <Navbar />
            {children}
            <Footer />
          </InitialLoadGate>
        </LenisProvider>
      </body>
    </html>
  );
}
