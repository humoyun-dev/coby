"use client";

import { motion } from "framer-motion";

import { useLocale } from "@/app/components/locale-provider";

export function SolutionArchitectureSection() {
  const { copy } = useLocale();

  return (
    <section id="architecture" className="bg-coby-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coby-primary/80">{copy.architecture.eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-coby-text sm:text-4xl">{copy.architecture.title}</h2>
        </header>

        <div className="relative mt-10 rounded-3xl border border-coby-border bg-coby-surfaceMuted p-6 sm:p-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {copy.architecture.flow.map((step, index) => (
              <motion.article
                key={step}
                className="relative rounded-2xl border border-coby-border bg-coby-surface px-4 py-5 text-center shadow-soft"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-coby-primary/75">
                  {copy.architecture.stageLabel} {index + 1}
                </p>
                <h3 className="mt-2 text-sm font-semibold text-coby-text">{step}</h3>
              </motion.article>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-x-8 top-1/2 hidden -translate-y-1/2 lg:block" aria-hidden>
            <div className="relative h-px bg-coby-primary/25">
              <motion.span
                className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-coby-primary"
                animate={{ x: [0, 760, 0], opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
