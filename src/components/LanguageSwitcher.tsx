"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import { Check, ChevronDown, Globe } from "@/components/icons";
import { useI18n } from "@/components/LanguageContext";
import type { Language } from "@/data/seerah";

const OPTIONS: { code: Language; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "ar", label: "العربية", short: "AR" },
];

export function LanguageSwitcher({ dark }: { dark: boolean }) {
  const { lang, setLang, dict } = useI18n();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const current = OPTIONS.find((option) => option.code === lang) ?? OPTIONS[0];

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open || !panelRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    animate(panelRef.current, {
      opacity: [0, 1],
      translateY: [-8, 0],
      scale: [0.97, 1],
      duration: 260,
      ease: "out(3)",
    });
  }, [open]);

  const choose = (code: Language) => {
    setLang(code);
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div ref={wrapperRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`${dict.nav.language}: ${current.label}`}
        className={`flex items-center gap-2 rounded-full border px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors sm:px-4 ${
          dark
            ? "border-ink/15 text-ink/65 hover:border-ink/35 hover:text-ink"
            : "border-parchment/20 text-parchment/65 hover:border-gold/45 hover:text-parchment"
        }`}
      >
        <Globe className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">{current.label}</span>
        <span className="sm:hidden">{current.short}</span>
        <ChevronDown
          className={`h-3 w-3 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          ref={panelRef}
          role="listbox"
          aria-label={dict.nav.chooseLanguage}
          className="absolute end-0 top-[calc(100%+0.6rem)] z-50 w-44 overflow-hidden rounded-2xl border border-ink/10 bg-parchment p-1.5 text-ink shadow-[0_24px_60px_-20px_rgba(11,21,18,0.45)]"
        >
          {OPTIONS.map((option) => {
            const selected = option.code === lang;

            return (
              <button
                key={option.code}
                type="button"
                role="option"
                aria-selected={selected}
                lang={option.code}
                dir={option.code === "ar" ? "rtl" : "ltr"}
                onClick={() => choose(option.code)}
                className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-start text-[11px] transition-colors ${
                  selected
                    ? "bg-ink/[0.06] font-semibold text-ink"
                    : "text-ink/60 hover:bg-ink/[0.04] hover:text-ink"
                }`}
              >
                <span
                  className={
                    option.code === "ar"
                      ? "font-arabic text-[15px] leading-none"
                      : "tracking-[0.06em]"
                  }
                >
                  {option.label}
                </span>
                {selected ? (
                  <Check className="h-3.5 w-3.5 shrink-0 text-clay" />
                ) : (
                  <span className="h-3.5 w-3.5 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
