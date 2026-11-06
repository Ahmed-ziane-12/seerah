"use client";

import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import { ArrowUpRight, CloseIcon, MenuIcon, StarMark } from "@/components/icons";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useI18n } from "@/components/LanguageContext";

export function Nav() {
  const { dict, lang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: "#explorer", label: dict.nav.timeline },
    { href: "#threads", label: dict.nav.connections },
    { href: "#world", label: dict.nav.world },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen || !panelRef.current) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const items = panelRef.current.querySelectorAll("[data-menu-item]");
    animate(panelRef.current, {
      opacity: [0, 1],
      translateY: [-12, 0],
      duration: 420,
      ease: "out(3)",
    });
    animate(items, {
      opacity: [0, 1],
      translateX: [-16, 0],
      delay: stagger(55),
      duration: 520,
      ease: "out(3)",
    });
  }, [menuOpen]);

  const dark = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        dark
          ? "border-b border-ink/10 bg-parchment/92 text-ink backdrop-blur-xl"
          : "border-b border-transparent bg-transparent text-parchment"
      }`}
    >
      <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" className="group flex items-center gap-3">
          <StarMark className="h-9 w-9 text-gold transition-transform duration-700 group-hover:rotate-45" />
          <span className="flex flex-col">
            <span
              className={`font-display font-medium leading-none ${
                lang === "ar"
                  ? "text-[1.9rem] tracking-normal"
                  : "text-[1.65rem] tracking-[0.12em]"
              }`}
            >
              {dict.nav.wordmark}
            </span>
            <span
              className={`mt-1.5 text-[8px] font-semibold uppercase leading-none tracking-[0.28em] ${
                dark ? "text-ink/45" : "text-parchment/45"
              }`}
            >
              {dict.nav.subtitle}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label={dict.nav.primaryAria}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors after:absolute after:-bottom-1.5 after:start-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${
                dark
                  ? "text-ink/62 hover:text-ink"
                  : "text-parchment/62 hover:text-parchment"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher dark={dark} />

          <a
            href="#explorer"
            className={`hidden items-center gap-2 rounded-full border px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 sm:flex ${
              dark
                ? "border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-parchment"
                : "border-parchment/25 text-parchment hover:border-gold hover:bg-gold hover:text-ink"
            }`}
          >
            {dict.nav.begin}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? dict.nav.menuClose : dict.nav.menuOpen}
            className={`grid h-10 w-10 place-items-center rounded-full border transition-colors lg:hidden ${
              dark
                ? "border-ink/20 text-ink"
                : "border-parchment/25 text-parchment"
            }`}
          >
            {menuOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          ref={panelRef}
          className="border-t border-ink/10 bg-parchment px-5 pb-8 pt-5 text-ink sm:px-8 lg:hidden"
        >
          <nav className="flex flex-col" aria-label={dict.nav.mobileAria}>
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                data-menu-item
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-ink/10 py-4 font-display text-3xl font-light"
              >
                <span>{link.label}</span>
                <span className="font-sans text-[10px] tracking-[0.2em] text-ink/35">
                  0{index + 1}
                </span>
              </a>
            ))}
          </nav>
          <a
            href="#explorer"
            data-menu-item
            onClick={() => setMenuOpen(false)}
            className="mt-6 flex items-center justify-between rounded-full bg-ink px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-parchment"
          >
            {dict.nav.begin}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  );
}
