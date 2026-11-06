"use client";

import { useExplorer } from "@/components/ExplorerContext";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/components/LanguageContext";
import { ArrowUpRight, Globe } from "@/components/icons";

export function World() {
  const { goToEvent } = useExplorer();
  const { dict } = useI18n();

  return (
    <section
      id="world"
      className="relative scroll-mt-24 overflow-hidden bg-[#efe8db] py-24 text-ink sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8rem] top-10 select-none font-display text-[32rem] leading-none text-ink/[0.025]"
      >
        610
      </div>
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-gold/12 blur-[130px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.24em] text-ink/48">
                <span className="text-clay">03</span>
                <span className="h-px w-9 bg-ink/18" />
                {dict.world.kicker}
              </div>
              <h2 className="mt-6 font-display text-[clamp(3.2rem,6.5vw,6.3rem)] font-light leading-[0.9] tracking-[-0.045em]">
                {dict.world.headingLine1}
                <br />
                <span className="italic text-clay">{dict.world.headingLine2}</span>
              </h2>
            </div>
            <div className="max-w-[330px] lg:pb-2">
              <p className="text-sm font-light leading-[1.8] text-ink/58">
                {dict.world.intro}
              </p>
              <div className="mt-6 flex items-center gap-3 text-[8px] font-bold uppercase tracking-[0.18em] text-ink/35">
                <Globe className="h-4 w-4 text-clay" />
                {dict.world.badge}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-20">
          {dict.worldContext.map((context, index) => {
            const eventIndex = dict.events.findIndex(
              (event) => event.id === context.connectedEventId,
            );

            return (
              <Reveal key={context.id} delay={index * 90}>
                <article className="group relative flex h-full min-h-[330px] flex-col overflow-hidden rounded-[24px] border border-ink/12 bg-parchment/55 p-6 transition-all duration-500 hover:border-ink/30 hover:bg-ink hover:text-parchment sm:p-8">
                  <div className="pointer-events-none absolute -right-10 -top-16 h-44 w-44 rounded-full border border-gold/0 transition-colors duration-500 group-hover:border-gold/15" />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 -top-8 font-display text-[8rem] leading-none text-ink/[0.035] transition-colors duration-500 group-hover:text-parchment/[0.04]"
                  >
                    {context.symbol}
                  </div>

                  <div className="relative flex items-center justify-between">
                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-clay">
                      {dict.world.contextLabel.replace(
                        "{count}",
                        String(index + 1).padStart(2, "0"),
                      )}
                    </span>
                    <span className="font-display text-[9px] tracking-[0.18em] text-ink/35 transition-colors group-hover:text-parchment/28">
                      <span dir="ltr" className="inline-block">
                        {context.dates}
                      </span>{" "}
                      {dict.world.ce}
                    </span>
                  </div>

                  <h3 className="relative mt-8 max-w-[270px] font-display text-[2.4rem] font-light leading-[0.95] tracking-[-0.03em]">
                    {context.name}
                  </h3>

                  <p className="relative mt-4 max-w-[450px] text-[12px] font-light leading-[1.75] text-ink/56 transition-colors group-hover:text-parchment/55 sm:text-[13px]">
                    {context.description}
                  </p>

                  <div className="relative mt-auto flex items-end justify-between gap-4 border-t border-ink/10 pt-5 transition-colors group-hover:border-parchment/12">
                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-ink/32 transition-colors group-hover:text-parchment/25">
                        {dict.world.connectedMoment}
                      </p>
                      <p className="mt-1 text-[10px] font-medium tracking-[0.02em] text-ink/65 transition-colors group-hover:text-parchment/65">
                        {context.connectedYear} {dict.world.ce} · {context.connectedMoment}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        if (eventIndex >= 0) goToEvent(eventIndex);
                      }}
                      aria-label={dict.world.exploreAria.replace(
                        "{moment}",
                        context.connectedMoment,
                      )}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/15 text-ink/55 transition-all duration-300 hover:border-ink hover:bg-ink hover:text-parchment group-hover:border-parchment/22 group-hover:text-parchment group-hover:hover:border-gold group-hover:hover:bg-gold group-hover:hover:text-ink"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-col gap-5 border-t border-ink/12 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-[11px] font-light leading-relaxed text-ink/45 sm:text-xs">
              {dict.world.footnote}
            </p>
            <a
              href="#explorer"
              className="group flex w-fit items-center gap-3 text-[9px] font-bold uppercase tracking-[0.18em] text-ink/55 transition-colors hover:text-ink"
            >
              {dict.world.openAtlas}
              <span className="grid h-8 w-8 place-items-center rounded-full border border-ink/15 transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-parchment">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
