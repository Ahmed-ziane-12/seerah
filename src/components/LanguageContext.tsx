"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { ar } from "@/data/ar";
import { en } from "@/data/en";
import type { Dictionary, Language } from "@/data/seerah";

const STORAGE_KEY = "seerah-language";
const CHANGE_EVENT = "seerah-language-change";

const DICTIONARIES: Record<Language, Dictionary> = { en, ar };

type LanguageContextValue = {
  lang: Language;
  dir: "ltr" | "rtl";
  dict: Dictionary;
  setLang: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function subscribe(callback: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (!event.key || event.key === STORAGE_KEY) callback();
  };

  window.addEventListener("storage", onStorage);
  window.addEventListener(CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function getSnapshot(): Language {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (fromUrl === "ar" || fromUrl === "en") return fromUrl;

  return window.localStorage.getItem(STORAGE_KEY) === "ar" ? "ar" : "en";
}

function getServerSnapshot(): Language {
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = useCallback((next: Language) => {
    const url = new URL(window.location.href);
    url.searchParams.delete("lang");
    window.history.replaceState(null, "", url);

    window.localStorage.setItem(STORAGE_KEY, next);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    root.dataset.language = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.title = DICTIONARIES[lang].meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", DICTIONARIES[lang].meta.description);
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      dir: lang === "ar" ? "rtl" : "ltr",
      dict: DICTIONARIES[lang],
      setLang,
    }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useI18n must be used inside a LanguageProvider");
  }

  return context;
}
