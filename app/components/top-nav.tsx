"use client";

import { useLocale } from "@/app/components/locale-provider";
import { localeOptions, type Locale } from "@/app/lib/i18n";

export function TopNav() {
  const { locale, setLocale, copy } = useLocale();

  const navLinks = [
    { href: "#problem-data", label: copy.nav.problem },
    { href: "#architecture", label: copy.nav.architecture },
    { href: "#stakeholder-value", label: copy.nav.stakeholders },
    { href: "#technology", label: copy.nav.technology },
    { href: "#governance", label: copy.nav.governance },
    { href: "#roadmap", label: copy.nav.roadmap },
    { href: "#partners", label: copy.nav.partners },
    { href: "#faq", label: copy.nav.faq }
  ] as const;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-coby-border/35 bg-coby-dark/88 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-coby-primary text-sm font-bold text-white">C</span>
          <span className="text-sm font-semibold tracking-[0.14em] text-coby-heroText">COBY</span>
        </a>

        <ul className="hidden items-center gap-5 text-xs font-medium uppercase tracking-[0.08em] text-coby-heroMuted lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-coby-heroText">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <label htmlFor="language" className="sr-only">
            {copy.nav.languageLabel}
          </label>
          <select
            id="language"
            value={locale}
            onChange={(event) => setLocale(event.target.value as Locale)}
            className="h-9 rounded-xl border border-coby-border bg-coby-surfaceMuted px-2 text-xs font-semibold text-coby-text outline-none transition-colors"
            aria-label={copy.nav.languageLabel}
          >
            {localeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <a
            href="#contact"
            className="inline-flex h-9 items-center rounded-xl border border-coby-primary/45 bg-coby-primary px-4 text-xs font-semibold text-white transition-colors hover:bg-coby-accent"
          >
            {copy.nav.startPartnership}
          </a>
        </div>
      </div>
    </nav>
  );
}
