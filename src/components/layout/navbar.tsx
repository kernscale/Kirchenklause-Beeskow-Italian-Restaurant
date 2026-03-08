"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import { siteConfig } from "@/config/site";
import { MagneticButton } from "@/components/ui/animations";
import { getLenisInstance } from "@/lib/lenis-store";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Speisekarte", href: "/speisekarte" },
  { title: "Über Uns", href: "/ueber-uns" },
  { title: "Kontakt", href: "/kontakt" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const lenis = getLenisInstance();

    if (lenis) {
      if (isOpen) {
        lenis.stop();
      } else {
        lenis.start();
      }

      return () => {
        lenis.start();
      };
    }

    // Fallback for cases where Lenis is intentionally disabled (e.g. reduced-motion).
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-500 ${
          isScrolled ? "border-b border-border/70 bg-background/70 backdrop-blur-2xl" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <motion.span
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-accent/20"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <UtensilsCrossed className="h-4 w-4 text-accent-strong" />
            </motion.span>
            <span className="font-display text-lg tracking-tight text-foreground">{siteConfig.name}</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} className="relative px-4 py-2 text-sm">
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {link.title}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full border border-border/70 bg-panel"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <MagneticButton>
              <Link
                href="/kontakt"
                className="hidden rounded-full border border-accent/40 bg-accent px-5 py-2.5 text-sm font-medium text-black transition-all hover:bg-accent-strong hover:shadow-[0_0_30px_rgba(210,169,109,0.3)] md:inline-flex"
              >
                Tisch anfragen
              </Link>
            </MagneticButton>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-panel md:hidden"
              aria-label="Menu"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-background/95 px-8 pt-24 backdrop-blur-2xl"
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 36px) 32px)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 36px) 32px)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 36px) 32px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-4 font-display text-4xl transition-colors ${
                      pathname === link.href ? "text-accent" : "text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    {link.title}
                  </Link>
                  <div className="h-px bg-panel" />
                </motion.div>
              ))}
            </nav>

            <motion.div
              className="mt-auto pb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm text-foreground/40">
                {siteConfig.contact.address}, {siteConfig.contact.city}
              </p>
              <p className="mt-1 text-sm text-foreground/40">{siteConfig.openingHours.daily}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
