import type { Metadata } from "next";
import { Archivo, Fraunces, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";

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
    default: "Kirchenklause Beeskow Italian Restaurant | Italienisches Restaurant in Beeskow",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Kirchenklause Beeskow Italian Restaurant in der Kirchgasse 11. Italienische Küche, Steinofenpizza, Pasta und Desserts. Täglich geöffnet von 11:00 bis 23:00.",
  keywords: [
    "Kirchenklause Beeskow",
    "Italienisches Restaurant Beeskow",
    "Pizza Beeskow",
    "Pasta Beeskow",
    "Restaurant Kirchgasse 11",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Kirchenklause Beeskow Italian Restaurant",
    description: "Italienisches Restaurant in Beeskow mit täglicher Öffnung von 11:00 bis 23:00.",
    images: [
      {
        url: "/images/hero-kirchenklause-hq.jpg",
        width: 1200,
        height: 900,
        alt: "Kirchenklause Beeskow Italian Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kirchenklause Beeskow Italian Restaurant",
    description: "Italienisches Restaurant in Beeskow: Pizza, Pasta, Antipasti und Desserts.",
    images: ["/images/hero-kirchenklause-hq.jpg"],
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
    const key = "kirchenklause-theme";
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
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
