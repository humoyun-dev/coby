"use client";

import { useLocale } from "@/app/components/locale-provider";

export function SiteFooter() {
  const { copy } = useLocale();

  return (
    <footer id="contact" className="bg-coby-dark text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-white/12 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">{copy.footer.newsletterTitle}</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/72">{copy.footer.newsletterDescription}</p>

          <form className="mt-5 flex flex-col gap-3 sm:flex-row" aria-label="Newsletter subscription">
            <label htmlFor="newsletter-email" className="sr-only">
              {copy.footer.emailLabel}
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder={copy.footer.emailPlaceholder}
              className="h-11 w-full rounded-2xl border border-white/18 bg-white/8 px-4 text-sm text-white placeholder:text-white/45 focus:border-coby-accent focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-2xl bg-coby-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-coby-accent"
            >
              {copy.footer.subscribe}
            </button>
          </form>
        </section>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <section>
            <h3 className="text-lg font-semibold">{copy.footer.company}</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              {copy.footer.companyLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold">{copy.footer.technology}</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              {copy.footer.technologyLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold">{copy.footer.contacts}</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>
                {copy.footer.emailLabel}: <a href="mailto:hello@coby.uz">hello@coby.uz</a>
              </li>
              <li>
                {copy.footer.phoneLabel}: <a href="tel:+998900000000">+998 90 000 00 00</a>
              </li>
              <li>{copy.footer.location}</li>
            </ul>
          </section>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            (c) {new Date().getFullYear()} COBY. {copy.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition-colors hover:text-white/80">
              {copy.footer.terms}
            </a>
            <a href="#" className="transition-colors hover:text-white/80">
              {copy.footer.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
