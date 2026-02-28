"use client";

import { motion } from "framer-motion";

import { useLocale } from "@/app/components/locale-provider";

export function PartnersSection() {
  const { copy } = useLocale();

  return (
    <section id="partners" className="bg-coby-light py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coby-primary/80">{copy.partners.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-coby-text sm:text-4xl">{copy.partners.title}</h2>
        </header>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {copy.partners.logos.map((logo, index) => (
            <motion.div
              key={logo}
              className="flex h-20 items-center justify-center rounded-2xl border border-coby-border bg-coby-surface text-base font-semibold tracking-wide text-coby-muted grayscale"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
