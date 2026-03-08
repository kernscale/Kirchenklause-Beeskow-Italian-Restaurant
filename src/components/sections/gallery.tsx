"use client";

import { motion } from "framer-motion";

import { FadeIn, StaggerContainer, StaggerItem, WordReveal } from "@/components/ui/animations";

const images = [
  { src: "/images/gallery-1.jpg", alt: "Restaurantbereich", span: "col-span-2 row-span-2" },
  { src: "/images/gallery-2.jpg", alt: "Pasta und Tellerpräsentation", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-3.jpg", alt: "Pizza aus dem Ofen", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-4.jpg", alt: "Innenbereich", span: "col-span-1 row-span-2" },
  { src: "/images/gallery-5.jpg", alt: "Dessert und Kaffee", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-6.jpg", alt: "Abendstimmung", span: "col-span-1 row-span-1" },
];

export function GallerySection() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-16 text-center">
          <FadeIn>
            <span className="eyebrow text-accent">Galerie</span>
          </FadeIn>
          <WordReveal
            text="Eindrücke aus der Kirchenklause"
            as="h2"
            className="mt-4 font-display text-4xl tracking-tight text-foreground md:text-6xl"
            delay={0.1}
          />
        </div>

        <StaggerContainer className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {images.map((img, i) => (
            <StaggerItem key={i} className={img.span}>
              <motion.div
                className="group relative h-full w-full overflow-hidden rounded-xl md:rounded-2xl"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-transparent transition-colors duration-500 group-hover:bg-[var(--gallery-hover)]" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="text-sm font-medium text-on-image">{img.alt}</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
