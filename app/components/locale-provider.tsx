"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import type { Locale } from "@/app/lib/i18n";
import { translations } from "@/app/lib/i18n";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: (typeof translations)[Locale];
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const DEFAULT_LOCALE: Locale = "uz";

function isLocale(value: string): value is Locale {
  return value === "uz" || value === "ru" || value === "en";
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const saved = localStorage.getItem("coby-locale");
    if (saved && isLocale(saved)) {
      setLocaleState(saved);
      return;
    }

    const browser = navigator.language.toLowerCase();
    if (browser.startsWith("ru")) {
      setLocaleState("ru");
    } else if (browser.startsWith("en")) {
      setLocaleState("en");
    } else {
      setLocaleState("uz");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("coby-locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale: setLocaleState,
      copy: translations[locale]
    }),
    [locale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
