"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { useExplorer } from "@/components/ExplorerContext";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/components/LanguageContext";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CompassRose,
  EightPointStar,
  Globe,
  MapPin,
  StarMark,
  Users,
} from "@/components/icons";

export function Explorer() {
  const { dict } = useI18n();
  const { activeIndex, activeEvent, setActiveIndex, events } = useExplorer();
  const contentRef = useRef<HTMLDivElement>(null);
  const connectionsRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const hasMounted = useRef(false);

  const mentionCount = events.length;
  const progress = (activeIndex / (mentionCount - 1)) * 100;

  useEffect(() => {
    const content = contentRef.current;
    const connections = connectionsRef.current;
    const progressBar = progressRef.current;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (progressBar) progressBar.style.width = `${progress}%`;
      return;
    }

    if (content) {
      animate(content.querySelectorAll("[data-detail]"), {
        opacity: [0, 1],
        translateY: [16, 0],
        duration: 680,
        delay: stagger(55),
        ease: "out(3)",
      });
    }

    if (connections) {
      animate(connections.querySelectorAll("[data-connection]"), {
        opacity: [0, 1],
        translateX: [12, 0],
        duration: 600,
        delay: stagger(65),
        ease: "out(3)",
      });
    }

    if (progressBar) {
      animate(progressBar, {
        width: `${progress}%`,
        duration: 950,
        ease: "inOut(3)",
      });
    }
  }, [activeIndex, progress]);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    const container = railRef.current;
    const node = container?.querySelector<HTMLButtonElement>(
      `[data-event-node="${activeIndex}"]`,
    );

    if (!container || !node) return;

    const target =
      node.offsetLeft - container.clientWidth / 2 + node.clientWidth / 2;

    container.scrollTo({
      left: target,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }, [activeIndex]);

  const goPrevious = () => setActiveIndex(Math.max(0, activeIndex - 1));
  const goNext = () => setActiveIndex(Math.min(events.length - 1, activeIndex + 1));

  return (
    <section
      id="explorer"
      className="relative scroll-mt-24 overflow-hidden bg-parchment py-24 text-ink sm:py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-36 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-sage/15 blur-[140px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.24em] text-ink/48">
                <span className="text-gold">01</span>
                <span className="h-px w-9 bg-ink/18" />
                {dict.explorer.kicker}
              </div>
              <h2 className="mt-6 font-display text-[clamp(3.2rem,6.5vw,6.3rem)] font-light leading-[0.9] tracking-[-0.045em]">
                {dict.explorer.headingLine1}
                <br />
                <span className="italic text-clay">{dict.explorer.headingLine2}</span>
              </h2>
            </div>

            <div className="max-w-[330px] lg:pb-2">
              <p className="text-sm font-light leading-[1.8] text-ink/58">
                {dict.explorer.intro}
              </p>
              <div className="mt-6 flex items-center gap-3 text-[8px] font-bold uppercase tracking-[0.18em] text-ink/35">
                <CompassRose className="h-4 w-4 text-clay" />
                {dict.explorer.moveThrough.replace("{count}", String(mentionCount))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-12 sm:mt-16">
          <div className="relative overflow-hidden rounded-[26px] border border-ink/10 bg-ink text-parchment shadow-[0_30px_80px_-30px_rgba(11,21,18,0.5)] sm:rounded-[34px]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_88%_0%,rgba(61,92,72,0.38),transparent_38%),radial-gradient(ellipse_at_0%_100%,rgba(200,162,98,0.08),transparent_34%)]" />

            <svg
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 top-12 h-[440px] w-[440px] text-parchment/[0.055] [mask-image:radial-gradient(circle,black,transparent_72%)]"
            >
              <defs>
                <pattern
                  id="explorer-star-pattern"
                  width="64"
                  height="64"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M32 7 36 28 57 32 36 36 32 57 28 36 7 32 28 28 32 7Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.6"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#explorer-star-pattern)" />
            </svg>

            <div className="relative border-b border-parchment/10 px-5 py-5 sm:px-8 lg:px-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/30 text-gold">
                    <StarMark className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-gold">
                      {dict.explorer.panelLabel} ·{" "}
                      <span dir="ltr" className="inline-block">
                        570—632
                      </span>{" "}
                      {dict.explorer.ce}
                    </p>
                    <p className="mt-1 text-[11px] font-light text-parchment/50">
                      {dict.explorer.panelMoments.replace(
                        "{count}",
                        String(mentionCount),
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-[8px] font-semibold uppercase tracking-[0.2em] text-parchment/30">
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {dict.explorer.momentsCount.replace(
                      "{count}",
                      String(mentionCount).padStart(2, "0"),
                    )}
                  </span>
                  <span className="h-3 w-px bg-parchment/15" />
                  <span>{dict.explorer.erasCount}</span>
                </div>
              </div>
            </div>

            <div className="relative border-b border-parchment/10">
              <div className="flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {dict.eras.map((era, index) => {
                  const isActive = activeEvent.phase === era.id;
                  const firstEventIndex = events.findIndex(
                    (event) => event.phase === era.id,
                  );

                  return (
                    <button
                      key={era.id}
                      type="button"
                      onClick={() => setActiveIndex(firstEventIndex)}
                      aria-pressed={isActive}
                      className={`group relative flex min-w-[170px] flex-1 flex-col items-start gap-1 border-e border-parchment/8 px-5 py-4 text-start transition-colors last:border-e-0 sm:min-w-0 sm:px-7 ${
                        isActive ? "bg-parchment/[0.055]" : "hover:bg-parchment/[0.03]"
                      }`}
                    >
                      <span
                        className={`text-[8px] font-bold tracking-[0.18em] transition-colors ${
                          isActive ? "text-gold" : "text-parchment/22"
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <span
                        className={`text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                          isActive
                            ? "text-parchment"
                            : "text-parchment/45 group-hover:text-parchment/75"
                        }`}
                      >
                        {era.label}
                      </span>
                      <span className="text-[9px] font-light tracking-[0.06em] text-parchment/35">
                        <span dir="ltr" className="inline-block">
                          {era.range}
                        </span>{" "}
                        {dict.explorer.ce}
                      </span>
                      <span
                        className={`absolute inset-x-5 bottom-0 h-px origin-left bg-gold transition-transform duration-500 sm:inset-x-7 rtl:origin-right ${
                          isActive ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              ref={railRef}
              dir="ltr"
              className="relative overflow-x-auto px-5 pt-7 [scrollbar-width:none] sm:px-8 lg:px-10 [&::-webkit-scrollbar]:hidden"
            >
              <div className="min-w-[940px]">
                <div className="relative flex items-start justify-between">
                  <div className="absolute left-0 right-0 top-[41px] h-px bg-parchment/15" />
                  <div
                    ref={progressRef}
                    className="absolute left-0 top-[41px] h-px bg-gold shadow-[0_0_10px_rgba(200,162,98,0.55)]"
                    style={{ width: "0%" }}
                  />

                  {events.map((event, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <button
                        key={event.id}
                        type="button"
                        data-event-node={index}
                        onClick={() => setActiveIndex(index)}
                        aria-pressed={isActive}
                        aria-label={`${event.year}: ${event.title}`}
                        className="group relative z-10 flex w-[82px] flex-col items-center text-center focus-visible:outline-none"
                      >
                        <span
                          className={`text-[9px] font-semibold leading-none tracking-[0.16em] transition-colors duration-300 ${
                            isActive
                              ? "text-gold"
                              : "text-parchment/35 group-hover:text-parchment/70"
                          }`}
                        >
                          {event.year}
                        </span>
                        <span className="mt-[22px] grid h-[18px] w-[18px] place-items-center">
                          <span
                            className={`absolute h-[18px] w-[18px] rounded-full border transition-all duration-500 ${
                              isActive
                                ? "scale-100 border-gold/35 bg-gold/5"
                                : "scale-50 border-transparent"
                            }`}
                          />
                          <span
                            className={`relative rounded-full transition-all duration-500 ${
                              isActive
                                ? "h-2.5 w-2.5 bg-gold shadow-[0_0_0_4px_rgba(11,21,18,0.9),0_0_16px_rgba(200,162,98,0.6)]"
                                : "h-1.5 w-1.5 bg-parchment/25 group-hover:bg-parchment/65"
                            }`}
                          />
                        </span>
                        <span
                          className={`mt-4 max-w-[96px] text-[9px] font-medium uppercase leading-[1.45] tracking-[0.08em] transition-colors duration-300 ${
                            isActive
                              ? "text-parchment/80"
                              : "text-parchment/26 group-hover:text-parchment/55"
                          }`}
                        >
                          {event.shortTitle}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="grid border-t border-parchment/10 lg:grid-cols-[1.35fr_1fr]">
              <div
                ref={contentRef}
                aria-live="polite"
                aria-atomic="false"
                className="relative px-5 py-9 sm:px-8 lg:px-10 lg:py-11"
              >
                <div data-detail className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/[0.06] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.17em] text-gold-2">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {activeEvent.date}
                  </span>
                  <span
                    dir="ltr"
                    className="font-display text-sm tracking-[0.08em] text-parchment/28"
                  >
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(mentionCount).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  data-detail
                  className="mt-6 max-w-[650px] font-display text-[clamp(2.7rem,5vw,4.6rem)] font-light leading-[0.92] tracking-[-0.035em]"
                >
                  {activeEvent.title}
                </h3>

                <p
                  data-detail
                  className="mt-5 max-w-[620px] text-[13px] font-light leading-[1.85] text-parchment/58 sm:text-[14px]"
                >
                  {activeEvent.description}
                </p>

                {activeEvent.quote && (
                  <div
                    data-detail
                    className="mt-7 border-s border-gold/45 ps-5 sm:ps-6"
                  >
                    <p
                      lang="ar"
                      dir="rtl"
                      className="font-arabic text-right text-[1.45rem] font-medium leading-[1.9] text-gold-2 sm:text-[1.7rem]"
                    >
                      {activeEvent.quote.arabic}
                    </p>
                    {activeEvent.quote.translation && (
                      <p className="mt-2 max-w-[540px] text-[11px] font-light italic leading-relaxed text-parchment/48 sm:text-xs">
                        “{activeEvent.quote.translation}”
                      </p>
                    )}
                    <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-parchment/28">
                      {activeEvent.quote.source}
                    </p>
                  </div>
                )}

                <div data-detail className="mt-7 flex flex-wrap gap-2">
                  {activeEvent.themes.map((theme) => (
                    <span
                      key={theme}
                      className="rounded-full border border-parchment/12 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.13em] text-parchment/38"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>

              <aside className="relative border-t border-parchment/10 bg-[#0f1b16] px-5 py-8 sm:px-8 lg:border-s lg:border-t-0 lg:px-8 lg:py-10">
                <div data-connection className="flex items-center justify-between">
                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-gold">
                    {dict.explorer.connected}
                  </p>
                  <EightPointStar className="h-4 w-4 text-gold/30" />
                </div>

                <div className="mt-6 divide-y divide-parchment/8">
                  <Connection
                    icon={<MapPin className="h-3.5 w-3.5" />}
                    label={dict.explorer.place}
                    content={activeEvent.place}
                  />
                  <Connection
                    icon={<Users className="h-3.5 w-3.5" />}
                    label={dict.explorer.people}
                    content={activeEvent.people.join(" · ")}
                  />
                  <Connection
                    icon={<BookOpen className="h-3.5 w-3.5" />}
                    label={dict.explorer.revelation}
                    content={activeEvent.revelation}
                  />
                  <Connection
                    icon={<Globe className="h-3.5 w-3.5" />}
                    label={dict.explorer.widerWorld}
                    content={activeEvent.widerWorld}
                    last
                  />
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-parchment/10 pt-5">
                  <button
                    type="button"
                    onClick={goPrevious}
                    disabled={activeIndex === 0}
                    className="group flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.16em] text-parchment/38 transition-colors hover:text-gold disabled:cursor-not-allowed disabled:opacity-25"
                  >
                    <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1 rtl-flip" />
                    {dict.explorer.previous}
                  </button>
                  <span className="font-display text-[11px] italic tracking-wide text-parchment/20">
                    {dict.explorer.followThread}
                  </span>
                  <button
                    type="button"
                    onClick={goNext}
                    disabled={activeIndex === events.length - 1}
                    className="group flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.16em] text-parchment/38 transition-colors hover:text-gold disabled:cursor-not-allowed disabled:opacity-25"
                  >
                    {dict.explorer.next}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl-flip" />
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </Reveal>

        <p className="mx-auto mt-5 max-w-3xl text-center text-[9px] font-light leading-relaxed tracking-[0.04em] text-ink/35">
          {dict.explorer.footnote}
        </p>
      </div>
    </section>
  );
}

function Connection({
  icon,
  label,
  content,
  last = false,
}: {
  icon: React.ReactNode;
  label: string;
  content: string;
  last?: boolean;
}) {
  return (
    <div
      data-connection
      className={`flex gap-3 py-4 ${last ? "pb-0" : ""}`}
    >
      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-parchment/12 text-gold/65">
        {icon}
      </span>
      <div>
        <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-parchment/30">
          {label}
        </p>
        <p className="mt-1 text-[11px] font-light leading-[1.65] text-parchment/62">
          {content}
        </p>
      </div>
    </div>
  );
}
