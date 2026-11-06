"use client";

import { useI18n } from "@/components/LanguageContext";
import { ArrowUpRight, StarMark } from "@/components/icons";

export function Footer() {
  const { dict, lang } = useI18n();

  const footerLinks = [
    { href: "#explorer", label: dict.footer.links.timeline },
    { href: "#threads", label: dict.footer.links.connections },
    { href: "#world", label: dict.footer.links.world },
    { href: "#top", label: dict.footer.links.top },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink text-parchment">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <div className="flex flex-col gap-10 border-b border-parchment/10 pb-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[330px]">
            <a href="#top" className="group flex w-fit items-center gap-3">
              <StarMark className="h-10 w-10 text-gold transition-transform duration-700 group-hover:rotate-45" />
              <span className="flex flex-col">
                <span
                  className={`font-display font-medium leading-none ${
                    lang === "ar"
                      ? "text-[2rem] tracking-normal"
                      : "text-[1.85rem] tracking-[0.12em]"
                  }`}
                >
                  {dict.nav.wordmark}
                </span>
                <span className="mt-1.5 text-[8px] font-semibold uppercase leading-none tracking-[0.28em] text-parchment/55">
                  {dict.nav.subtitle}
                </span>
              </span>
            </a>
            <p className="mt-5 text-[11px] font-light leading-[1.8] text-parchment/55">
              {dict.footer.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-14 gap-y-3 sm:flex sm:gap-16 lg:pt-2">
            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-gold/90">
                {dict.footer.explore}
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {footerLinks.slice(0, 3).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="w-fit text-[10px] font-medium uppercase tracking-[0.12em] text-parchment/55 transition-colors hover:text-parchment"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-gold/90">
                {dict.footer.about}
              </p>
              <div className="mt-4 flex flex-col gap-3 text-[10px] font-medium uppercase tracking-[0.12em] text-parchment/55">
                <span>{dict.footer.livingAtlas}</span>
                <span>{dict.footer.stack}</span>
                <span>{dict.footer.motion}</span>
              </div>
            </div>
          </div>

          <a
            href="#explorer"
            className="group flex w-fit items-center gap-4 rounded-full border border-parchment/15 py-2 ps-5 pe-2 text-[9px] font-semibold uppercase tracking-[0.17em] text-parchment/55 transition-colors hover:border-gold/40 hover:text-parchment"
          >
            {dict.footer.enter}
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gold text-ink">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>

        <div className="flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-parchment/50">
            {dict.footer.copyright}
          </p>
          <p className="max-w-[430px] text-[9px] font-light leading-relaxed tracking-[0.04em] text-parchment/50">
            {dict.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
