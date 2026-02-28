"use client";

import { motion } from "framer-motion";

import { useLocale } from "@/app/components/locale-provider";
import { AnimatedDecimal } from "@/app/components/ui/animated-decimal";

export function ProblemDataSection() {
  const { copy } = useLocale();

  return (
    <section id="problem-data" className="bg-coby-darkSecondary py-16 text-coby-heroText sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coby-accent/80">{copy.problem.eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{copy.problem.title}</h2>
        </header>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-3xl border border-coby-heroText/12 bg-coby-dark/42 p-8 shadow-[0_16px_40px_rgba(0,0,0,0.28)]">
            <p className="text-xs uppercase tracking-[0.18em] text-coby-heroMuted/80">{copy.problem.annualLabel}</p>
            <p className="mt-3 text-5xl font-semibold tracking-tight text-coby-heroText sm:text-6xl">
              <AnimatedDecimal value={13.1} suffix="B" />
            </p>
            <p className="mt-2 text-base text-coby-heroMuted">{copy.problem.annualUnits}</p>
          </article>

          <div className="grid gap-4">
            {copy.problem.dataPoints.map((item, index) => (
              <motion.article
                key={item.title}
                className="rounded-3xl border border-coby-heroText/12 bg-coby-dark/55 p-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-coby-heroMuted">{item.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
