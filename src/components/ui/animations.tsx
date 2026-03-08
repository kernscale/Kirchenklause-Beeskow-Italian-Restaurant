"use client";

import { motion, useReducedMotion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

/* ───── shared easing ───── */
const smoothEase = [0.16, 1, 0.3, 1] as [number, number, number, number];
const snappyEase = [0.22, 0.68, 0, 1.04] as [number, number, number, number];

/* ───── Fade-in on scroll ───── */
export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
}) {
  const reduceMotion = Boolean(useReducedMotion());
  const offsets = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
    none: { x: 0, y: 0 },
  };

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-8% 0px" }}
      transition={{ duration: 0.85, delay, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ───── Stagger container ───── */
export function StaggerContainer({
  children,
  className,
  stagger = 0.08,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const reduceMotion = Boolean(useReducedMotion());
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-5% 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: smoothEase } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ───── Text reveal (character-by-character) ───── */
export function TextReveal({
  text,
  className,
  delay = 0,
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}) {
  const reduceMotion = Boolean(useReducedMotion());
  const words = text.split(" ");

  if (reduceMotion) return <Tag className={className}>{text}</Tag>;

  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.035, delayChildren: delay } },
        }}
        aria-label={text}
      >
        {words.map((word, wi) => (
          <span key={wi} className="inline-block mr-[0.25em]">
            {word.split("").map((char, ci) => (
              <motion.span
                key={ci}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 50, rotateX: -90 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: { duration: 0.6, ease: snappyEase },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

/* ───── Line reveal (word-by-word) ───── */
export function WordReveal({
  text,
  className,
  delay = 0,
  as: Tag = "p",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}) {
  const reduceMotion = Boolean(useReducedMotion());
  const words = text.split(" ");

  if (reduceMotion) return <Tag className={className}>{text}</Tag>;

  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.04, delayChildren: delay } },
        }}
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "100%" },
                visible: { y: "0%", transition: { duration: 0.55, ease: smoothEase } },
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

/* ───── Parallax image container ───── */
export function ParallaxImage({
  src,
  alt,
  className,
  speed = 0.15,
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}) {
  const reduceMotion = Boolean(useReducedMotion());
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);
  const smoothY = useSpring(y, { damping: 25, stiffness: 100 });

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <motion.img
        src={src}
        alt={alt}
        className="h-[120%] w-full object-cover"
        style={reduceMotion ? {} : { y: smoothY }}
        loading="lazy"
      />
    </div>
  );
}

/* ───── Image reveal with clip-path ───── */
export function ImageReveal({
  src,
  alt,
  className,
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = Boolean(useReducedMotion());
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="h-full"
        initial={reduceMotion ? {} : { clipPath: "inset(100% 0% 0% 0%)" }}
        animate={
          isInView && !reduceMotion
            ? { clipPath: "inset(0% 0% 0% 0%)" }
            : reduceMotion
            ? {}
            : undefined
        }
        transition={{ duration: 1.1, delay, ease: smoothEase }}
      >
        <motion.img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          initial={reduceMotion ? {} : { scale: 1.3 }}
          animate={isInView && !reduceMotion ? { scale: 1 } : reduceMotion ? {} : undefined}
          transition={{ duration: 1.6, delay, ease: smoothEase }}
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}

/* ───── Horizontal scroll-linked progress line ───── */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[2px] origin-left bg-gradient-to-r from-accent to-accent-strong"
      style={{ scaleX }}
    />
  );
}

/* ───── Magnetic hover effect ───── */
export function MagneticButton({
  children,
  className,
  strength = 0.3,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduceMotion = Boolean(useReducedMotion());
  const ref = useRef<HTMLDivElement>(null);

  if (reduceMotion) return <div className={className}>{children}</div>;

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = `translate(0px, 0px)`;
    ref.current.style.transition = `transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)`;
  };

  const handleEnter = () => {
    if (!ref.current) return;
    ref.current.style.transition = `transform 0.15s ease-out`;
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      onMouseEnter={handleEnter}
    >
      {children}
    </div>
  );
}

/* ───── Counter animation ───── */
export function AnimatedCounter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <CountUp target={value} />
          {suffix}
        </motion.span>
      ) : (
        <>0{suffix}</>
      )}
    </motion.span>
  );
}

function CountUp({ target }: { target: number }) {
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  if (isInView) spring.set(target);

  return (
    <motion.span ref={ref}>
      {Math.round(spring.get()) || target}
    </motion.span>
  );
}
