"use client";

import { motion } from "framer-motion";

import { useLocale } from "@/app/components/locale-provider";

export function StakeholderValueSection() {
  const { copy } = useLocale();

  return (
    <section id="stakeholder-value" className="bg-coby-light py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coby-primary/80">{copy.stakeholder.eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-coby-text sm:text-4xl">{copy.stakeholder.title}</h2>
        </header>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {copy.stakeholder.columns.map((item, index) => (
            <motion.article
              key={item.title}
              className="rounded-3xl border border-coby-border bg-coby-surface p-6 shadow-soft"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.42, delay: index * 0.08 }}
            >
              <h3 className="text-lg font-semibold text-coby-text">{item.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-coby-muted">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coby-primary" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
