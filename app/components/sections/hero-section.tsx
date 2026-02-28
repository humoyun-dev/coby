"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { useLocale } from "@/app/components/locale-provider";

export function HeroSection() {
  const { copy } = useLocale();
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const renderY = useTransform(scrollYProgress, [0, 1], [0, 26]);

  return (
    <header id="hero" ref={ref} className="relative overflow-hidden bg-heroInstitutional text-coby-heroText">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-coby-accent/40 to-transparent" aria-hidden />

      <div className="mx-auto grid min-h-[88vh] w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-5 inline-flex rounded-xl border border-coby-heroText/15 bg-coby-heroText/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-coby-heroMuted">
            {copy.hero.badge}
          </p>
          <h1 className="max-w-2xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-[3.35rem]">
            {copy.hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-coby-heroMuted sm:text-base">{copy.hero.subheadline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex h-11 items-center rounded-2xl bg-coby-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-coby-accent"
            >
              {copy.hero.primaryCta}
            </a>
            <a
              href="#technology"
              className="inline-flex h-11 items-center rounded-2xl border border-coby-heroText/22 bg-coby-heroText/5 px-6 text-sm font-semibold text-coby-heroText transition-colors hover:bg-coby-heroText/10"
            >
              {copy.hero.secondaryCta}
            </a>
          </div>
        </motion.div>

        <motion.figure
          className="relative z-10 mx-auto w-full max-w-[520px]"
          style={{ y: prefersReducedMotion ? 0 : renderY, willChange: "transform" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
        >
          <div className="absolute -inset-x-14 bottom-2 h-20 rounded-full bg-coby-accent/18 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-coby-heroText/12 bg-coby-heroCard/80 p-3 shadow-hero">
            <Image
              src="/images/coby-machine.svg"
              alt="COBY machine render in studio lighting"
              width={1000}
              height={1280}
              className="h-auto w-full"
              priority
            />
          </div>
          <div className="mx-auto mt-2 h-4 w-3/4 rounded-full bg-coby-dark/55 blur-md" aria-hidden />
        </motion.figure>
      </div>
    </header>
  );
}
