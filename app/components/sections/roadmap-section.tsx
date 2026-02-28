"use client";

import { motion } from "framer-motion";

import { useLocale } from "@/app/components/locale-provider";

export function RoadmapSection() {
  const { copy } = useLocale();

  return (
    <section id="roadmap" className="bg-coby-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coby-primary/80">{copy.roadmap.eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-coby-text sm:text-4xl">{copy.roadmap.title}</h2>
        </header>

        <div className="relative mt-10 rounded-3xl border border-coby-border bg-coby-surfaceMuted p-6 sm:p-8">
          <div className="hidden lg:block">
            <div className="absolute left-10 right-10 top-[78px] h-px bg-coby-primary/25" aria-hidden />
          </div>

          <ol className="grid gap-4 lg:grid-cols-3 lg:gap-6">
            {copy.roadmap.phases.map((phase, index) => (
              <motion.li
                key={`${phase.year}-${phase.title}`}
                className="relative rounded-2xl border border-coby-border bg-coby-surface p-5 shadow-soft"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.42, delay: index * 0.08 }}
              >
                <span className="inline-flex rounded-xl bg-coby-primary px-3 py-1 text-xs font-semibold text-white">{phase.year}</span>
                <h3 className="mt-3 text-lg font-semibold text-coby-text">{phase.title}</h3>
                <p className="mt-2 text-sm text-coby-muted">{phase.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {copy.roadmap.kpis.map((kpi, index) => (
            <motion.article
              key={kpi.label}
              className="rounded-2xl border border-coby-border bg-coby-dark p-5 text-white"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <p className="text-2xl font-semibold tracking-tight text-coby-accent">{kpi.metric}</p>
              <p className="mt-2 text-sm text-coby-heroMuted">{kpi.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
