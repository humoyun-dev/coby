"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { useLocale } from "@/app/components/locale-provider";

function LineIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
      <path d="M4 12H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 7H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
      <path d="M7 17H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function TechnologySection() {
  const { copy } = useLocale();

  return (
    <section id="technology" className="bg-coby-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <figure className="overflow-hidden rounded-3xl border border-coby-border bg-coby-surfaceMuted p-4 shadow-panel">
          <Image src="/images/3Dcutaway.png" alt="COBY 3D cutaway" width={1536} height={1024} className="h-auto w-full" />
        </figure>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coby-primary/80">{copy.technology.eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-coby-text sm:text-4xl">{copy.technology.title}</h2>

          <ul className="mt-6 space-y-3">
            {copy.technology.bullets.map((item, index) => (
              <motion.li
                key={item}
                className="group relative overflow-hidden rounded-2xl border border-coby-border bg-coby-surfaceMuted px-4 py-3 text-sm text-coby-text"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <motion.span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-px w-full origin-left bg-coby-primary/65"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: 0.18 + index * 0.06 }}
                />
                <span className="inline-flex items-center gap-2">
                  <span className="text-coby-primary">
                    <LineIcon />
                  </span>
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
