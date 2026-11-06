"use client";

import { useExplorer } from "@/components/ExplorerContext";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/components/LanguageContext";
import { ArrowUpRight, StarMark } from "@/components/icons";

export function Closing() {
  const { activeIndex, activeEvent, goToEvent } = useExplorer();
  const { dict } = useI18n();

  return (
    <section className="relative overflow-hidden bg-[#efe8db] pb-20 pt-6 text-parchment sm:pb-28">
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-[30px] bg-ink px-5 py-20 text-center sm:rounded-[40px] sm:px-10 sm:py-24 lg:py-28">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(200,162,98,0.13),transparent_40%),radial-gradient(ellipse_at_50%_110%,rgba(64,96,78,0.3),transparent_50%)]" />

            <svg
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 text-gold/[0.09] animate-[orbit-spin_140s_linear_infinite]"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth=".18" strokeDasharray=".4 2" />
              <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth=".18" />
              <circle cx="50" cy="50" r="27" fill="none" stroke="currentColor" strokeWidth=".18" strokeDasharray=".35 1.8" />
              <circle cx="50" cy="1" r=".9" fill="#c8a262" />
            </svg>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

            <div className="relative z-10 mx-auto max-w-[800px]">
              <div className="flex items-center justify-center gap-3 text-[8px] font-bold uppercase tracking-[0.24em] text-gold">
                <StarMark className="h-4 w-4" />
                {dict.closing.eyebrow}
                <StarMark className="h-4 w-4" />
              </div>

              <h2 className="mx-auto mt-7 max-w-[760px] font-display text-[clamp(3.4rem,7.2vw,7.1rem)] font-light leading-[0.87] tracking-[-0.05em]">
                {dict.closing.headingLine1}
                <br />
                <span className="italic text-gold">{dict.closing.headingLine2}</span>
              </h2>

              <p className="mx-auto mt-7 max-w-[460px] text-[13px] font-light leading-[1.8] text-parchment/50 sm:text-sm">
                {dict.closing.copy}
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => goToEvent(activeIndex)}
                  className="group flex w-full items-center justify-between gap-8 whitespace-nowrap rounded-full bg-gold px-6 py-4 text-[10px] font-bold uppercase tracking-[0.19em] text-ink transition-colors hover:bg-gold-2 sm:w-auto sm:justify-start"
                >
                  {dict.closing.continue}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
                <button
                  type="button"
                  onClick={() => goToEvent(1)}
                  className="group flex w-full items-center gap-3 justify-center rounded-full border border-parchment/18 px-5 py-4 text-[9px] font-semibold uppercase tracking-[0.16em] text-parchment/55 transition-colors hover:border-gold/45 hover:text-parchment sm:w-auto"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {dict.closing.startFirst}
                </button>
              </div>

              <p className="mt-8 text-[8px] font-semibold uppercase tracking-[0.2em] text-parchment/20">
                {dict.closing.lastExplored
                  .replace("{year}", activeEvent.year)
                  .replace("{title}", activeEvent.shortTitle)}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
