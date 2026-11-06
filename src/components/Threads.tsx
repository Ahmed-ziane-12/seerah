"use client";

import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import { useExplorer } from "@/components/ExplorerContext";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/components/LanguageContext";
import { ArrowUpRight, StarMark } from "@/components/icons";

const ACCENTS = {
  gold: {
    text: "text-gold",
    bg: "bg-gold",
    border: "border-gold/45",
    glow: "bg-gold/10",
  },
  sage: {
    text: "text-[#a9c0ad]",
    bg: "bg-[#a9c0ad]",
    border: "border-[#a9c0ad]/45",
    glow: "bg-[#a9c0ad]/10",
  },
  clay: {
    text: "text-[#d08a68]",
    bg: "bg-[#d08a68]",
    border: "border-[#d08a68]/45",
    glow: "bg-[#d08a68]/10",
  },
  sand: {
    text: "text-[#dac29a]",
    bg: "bg-[#dac29a]",
    border: "border-[#dac29a]/45",
    glow: "bg-[#dac29a]/10",
  },
} as const;

export function Threads() {
  const [activeThread, setActiveThread] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const { goToEvent } = useExplorer();
  const { dict, lang } = useI18n();
  const threads = dict.threadItems;
  const thread = threads[activeThread];
  const accent = ACCENTS[thread.accent];

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    animate(panel.querySelectorAll("[data-thread-anim]"), {
      opacity: [0, 1],
      translateY: [18, 0],
      duration: 680,
      delay: stagger(65),
      ease: "out(3)",
    });
  }, [activeThread]);

  return (
    <section
      id="threads"
      className="relative scroll-mt-24 overflow-hidden bg-ink py-24 text-parchment sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_92%_12%,rgba(200,162,98,0.08),transparent_36%),radial-gradient(ellipse_at_5%_86%,rgba(73,106,86,0.24),transparent_40%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-0 h-[520px] w-[520px] text-parchment/[0.045] [mask-image:radial-gradient(circle,black,transparent_70%)]"
      >
        <defs>
          <pattern
            id="thread-orbit-pattern"
            width="72"
            height="72"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="36" cy="36" r="1.2" fill="currentColor" />
            <circle cx="36" cy="36" r="17" fill="none" stroke="currentColor" strokeWidth=".45" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#thread-orbit-pattern)" />
      </svg>

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.24em] text-parchment/38">
                <span className="text-gold">02</span>
                <span className="h-px w-9 bg-parchment/18" />
                {dict.threads.kicker}
              </div>
              <h2 className="mt-6 font-display text-[clamp(3.2rem,6.5vw,6.3rem)] font-light leading-[0.9] tracking-[-0.045em]">
                {dict.threads.headingLine1}
                <br />
                <span className="italic text-gold">{dict.threads.headingLine2}</span>
              </h2>
            </div>
            <p className="max-w-[330px] text-sm font-light leading-[1.8] text-parchment/45 lg:pb-2">
              {dict.threads.intro}
            </p>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-14 sm:mt-20">
          <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:gap-14">
            <div>
              <p className="mb-4 text-[8px] font-bold uppercase tracking-[0.22em] text-parchment/28">
                {dict.threads.choose}
              </p>
              <div className="border-b border-parchment/12">
                {threads.map((item, index) => {
                  const isActive = index === activeThread;
                  const itemAccent = ACCENTS[item.accent];

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveThread(index)}
                      aria-pressed={isActive}
                      className={`group relative flex w-full flex-col border-t border-parchment/12 py-5 ps-5 pe-1 text-start transition-colors ${
                        isActive ? "bg-parchment/[0.025]" : "hover:bg-parchment/[0.015]"
                      }`}
                    >
                      <span
                        className={`absolute bottom-0 start-0 top-0 w-px transition-colors duration-500 ${
                          isActive ? itemAccent.bg : "bg-transparent"
                        }`}
                      />
                      <span className="flex items-center justify-between">
                        <span
                          className={`text-[8px] font-bold tracking-[0.18em] transition-colors ${
                            isActive ? itemAccent.text : "text-parchment/22"
                          }`}
                        >
                          0{index + 1}
                        </span>
                        <ArrowUpRight
                          className={`h-3.5 w-3.5 transition-all duration-300 ${
                            isActive
                              ? `${itemAccent.text} translate-x-0 opacity-100`
                              : "-translate-x-1 text-parchment/20 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                          }`}
                        />
                      </span>
                      <span className="mt-2 flex items-center justify-between gap-4">
                        <span
                          className={`font-display text-[2rem] font-light leading-none transition-colors duration-300 ${
                            isActive
                              ? "text-parchment"
                              : "text-parchment/48 group-hover:text-parchment/72"
                          }`}
                        >
                          {item.title}
                        </span>
                        {lang !== "ar" && (
                          <span
                            className={`font-arabic text-lg transition-colors duration-300 ${
                              isActive ? "text-parchment/32" : "text-parchment/12"
                            }`}
                          >
                            {item.arabic}
                          </span>
                        )}
                      </span>
                      <span
                        className={`mt-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                          isActive ? "text-parchment/38" : "text-parchment/16"
                        }`}
                      >
                        {item.eyebrow}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 flex items-start gap-3 text-[10px] font-light leading-relaxed text-parchment/28">
                <StarMark className="mt-0.5 h-4 w-4 shrink-0 text-gold/45" />
                {dict.threads.note}
              </div>
            </div>

            <div
              ref={panelRef}
              className="relative min-h-[470px] overflow-hidden rounded-[28px] border border-parchment/12 bg-[#0f1b16] p-7 sm:p-10"
            >
              <div
                className={`pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full blur-[90px] ${accent.glow}`}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-10 right-4 select-none font-arabic text-[9rem] leading-none text-parchment/[0.025] sm:text-[11rem]"
              >
                {thread.arabic}
              </div>

              <div
                data-thread-anim
                className="relative flex items-center justify-between gap-4"
              >
                <span
                  className={`text-[8px] font-bold uppercase tracking-[0.2em] ${accent.text}`}
                >
                  {dict.threads.counter.replace(
                    "{current}",
                    String(activeThread + 1).padStart(2, "0"),
                  )}
                </span>
                <span className="text-[8px] font-semibold uppercase tracking-[0.17em] text-parchment/26">
                  {thread.eyebrow}
                </span>
              </div>

              <div data-thread-anim className="relative mt-7 flex items-start gap-4">
                <span
                  className={`mt-3 h-2 w-2 shrink-0 rounded-full ${accent.bg} shadow-[0_0_16px_currentColor]`}
                />
                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-parchment/26">
                    {dict.threads.panelLabel}
                  </p>
                  <h3 className="mt-2 font-display text-[3.6rem] font-light leading-none tracking-[-0.035em] sm:text-[4.4rem]">
                    {thread.title}
                  </h3>
                </div>
              </div>

              <p
                data-thread-anim
                className="relative mt-6 max-w-[650px] text-[13px] font-light leading-[1.85] text-parchment/55 sm:text-sm"
              >
                {thread.description}
              </p>

              <div
                data-thread-anim
                className={`relative mt-7 border-s ps-5 sm:ps-6 ${accent.border}`}
              >
                <p
                  lang="ar"
                  dir="rtl"
                  className={`font-arabic text-right text-[1.35rem] leading-[1.9] sm:text-[1.55rem] ${accent.text}`}
                >
                  {thread.quote.arabic}
                </p>
                {thread.quote.translation && (
                  <p className="mt-2 max-w-[560px] text-[11px] font-light italic leading-relaxed text-parchment/43">
                    “{thread.quote.translation}”
                  </p>
                )}
                <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.17em] text-parchment/24">
                  {thread.quote.source}
                </p>
              </div>

              <div
                data-thread-anim
                className="relative mt-8 border-t border-parchment/10 pt-5"
              >
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-parchment/28">
                  {dict.threads.trace}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {thread.moments.map((id) => {
                    const index = dict.events.findIndex((event) => event.id === id);
                    const event = dict.events[index];
                    if (!event) return null;

                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => goToEvent(index)}
                        className="group flex items-center gap-2 rounded-full border border-parchment/12 px-3 py-2 text-[8px] font-medium uppercase tracking-[0.1em] text-parchment/42 transition-colors hover:border-parchment/30 hover:text-parchment"
                      >
                        <span className={accent.text}>{event.year}</span>
                        <span>{event.shortTitle}</span>
                        <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
