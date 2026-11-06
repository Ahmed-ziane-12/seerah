"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createTimeline, animate, stagger } from "animejs";
import { useI18n } from "@/components/LanguageContext";
import { ArrowDown, ArrowRight, ArrowUpRight, EightPointStar, StarMark } from "@/components/icons";

const ORBIT_RADIUS = 42;

export function Hero() {
  const { dict, lang } = useI18n();
  const [activeIndex, setActiveIndex] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const compassRef = useRef<HTMLDivElement>(null);
  const events = dict.events;
  const activeEvent = events[activeIndex] ?? events[0];

  const points = useMemo(
    () =>
      events.map((event, index) => {
        const angle = ((-90 + index * (360 / events.length)) * Math.PI) / 180;
        return {
          event,
          x: 50 + ORBIT_RADIUS * Math.cos(angle),
          y: 50 + ORBIT_RADIUS * Math.sin(angle),
          angle,
        };
      }),
    [events],
  );

  const activePoint = points[activeIndex] ?? points[0];

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const targets = root.querySelectorAll<HTMLElement>("[data-hero]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((target) => {
        target.style.opacity = "1";
        target.style.transform = "none";
      });
      return;
    }

    const intro = createTimeline({
      defaults: { ease: "out(3)" },
    });

    intro
      .add(root.querySelector("[data-hero='rule']")!, {
        scaleX: [0, 1],
        opacity: [0, 1],
        duration: 800,
      })
      .add(
        root.querySelector("[data-hero='eyebrow']")!,
        { opacity: [0, 1], translateY: [14, 0], duration: 650 },
        "-=500",
      )
      .add(
        root.querySelectorAll("[data-hero='title-line']"),
        {
          opacity: [0, 1],
          translateY: [66, 0],
          rotate: [1.5, 0],
          duration: 1100,
          delay: stagger(120),
        },
        "-=400",
      )
      .add(
        root.querySelectorAll("[data-hero='copy']"),
        { opacity: [0, 1], translateY: [18, 0], duration: 720 },
        "-=800",
      )
      .add(
        root.querySelectorAll("[data-hero='action']"),
        {
          opacity: [0, 1],
          translateY: [16, 0],
          duration: 620,
          delay: stagger(90),
        },
        "-=450",
      )
      .add(
        root.querySelectorAll("[data-hero='stat']"),
        {
          opacity: [0, 1],
          translateY: [16, 0],
          duration: 600,
          delay: stagger(80),
        },
        "-=350",
      )
      .add(
        root.querySelector("[data-hero='compass']")!,
        { opacity: [0, 1], scale: [0.94, 1], duration: 1200 },
        "-=900",
      )
      .add(
        root.querySelectorAll("[data-hero='ring']"),
        {
          opacity: [0, 1],
          scale: [0.82, 1],
          duration: 1000,
          delay: stagger(90),
        },
        "-=1100",
      )
      .add(
        root.querySelectorAll("[data-hero='compass-point']"),
        {
          opacity: [0, 1],
          scale: [0, 1],
          duration: 500,
          delay: stagger(45, { from: "center" }),
        },
        "-=900",
      );

    return () => {
      intro.pause();
    };
  }, []);

  useEffect(() => {
    const root = compassRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    animate(root.querySelectorAll("[data-compass-copy]"), {
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 480,
      delay: stagger(45),
      ease: "out(3)",
    });
    animate(root.querySelector("[data-compass-ping]")!, {
      scale: [1.9, 1],
      opacity: [0.55, 1],
      duration: 720,
      ease: "out(3)",
    });
    animate(root.querySelector("[data-compass-path]")!, {
      strokeDashoffset: [100, 0],
      opacity: [0, 0.7],
      duration: 800,
      ease: "inOut(3)",
    });
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-parchment"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_38%,rgba(47,78,63,0.5),transparent_44%),radial-gradient(ellipse_at_15%_95%,rgba(38,56,45,0.42),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,8,0.6),transparent_22%,transparent_72%,rgba(4,10,8,0.7))]" />

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full text-gold/[0.11] [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_72%)]"
      >
        <defs>
          <pattern
            id="hero-star-pattern"
            width="88"
            height="88"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(0)"
          >
            <path
              d="M44 8 50 38 80 44 50 50 44 80 38 50 8 44 38 38 44 8Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.55"
            />
            <circle cx="44" cy="44" r="1.5" fill="currentColor" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-star-pattern)" />
      </svg>

      <div className="pointer-events-none absolute left-1/2 top-[16%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gold/[0.035] blur-[100px]" />

      <div className="relative mx-auto grid w-full max-w-[1440px] flex-1 grid-cols-1 items-center gap-14 px-5 pb-16 pt-32 sm:px-8 sm:pt-36 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8 lg:px-12 lg:pb-20 lg:pt-28 xl:gap-14">
        <div className="relative z-10 max-w-[700px]">
          <div className="flex items-center gap-4">
            <span
              data-hero="rule"
              className="h-px w-10 origin-left bg-gold/70 opacity-0"
            />
            <p
              data-hero="eyebrow"
              className="flex items-center gap-2.5 text-[9px] font-semibold uppercase leading-none tracking-[0.26em] text-gold opacity-0 sm:text-[10px]"
            >
              <StarMark className="h-4 w-4" />
              {dict.hero.eyebrow}
            </p>
          </div>

          <h1
            className={`mt-8 font-display font-light tracking-[-0.055em] ${
              lang === "ar"
                ? "text-[clamp(3.6rem,8.4vw,8.6rem)]"
                : "text-[clamp(4.4rem,10.2vw,9.2rem)] leading-[0.82]"
            }`}
          >
            <span
              data-hero="title-line"
              className="block opacity-0"
            >
              {dict.hero.titleLine1}
            </span>
            <span
              data-hero="title-line"
              className={`mt-2 block italic text-gold opacity-0 ${
                lang === "ar" ? "leading-[1.15]" : ""
              }`}
            >
              {dict.hero.titleLine2}
            </span>
          </h1>

          <p
            data-hero="copy"
            className="mt-8 max-w-[520px] text-[15px] font-light leading-[1.75] text-parchment/62 opacity-0 sm:text-[17px]"
          >
            {dict.hero.copy}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              data-hero="action"
              href="#explorer"
              className="group flex items-center justify-between gap-8 whitespace-nowrap rounded-full bg-gold px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-ink opacity-0 transition-colors hover:bg-gold-2 sm:justify-start"
            >
              {dict.hero.primaryCta}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              data-hero="action"
              href="#threads"
              className="group flex items-center gap-3 whitespace-nowrap px-2 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-parchment/55 opacity-0 transition-colors hover:text-parchment"
            >
              {dict.hero.secondaryCta}
              <ArrowRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-1 rtl-flip" />
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 border-t border-parchment/12 pt-6">
            {[
              { value: "570—632", label: dict.hero.statLife, ltr: true },
              { value: "23", label: dict.hero.statRevelation, ltr: true },
              {
                value: String(events.length).padStart(2, "0"),
                label: dict.hero.statMoments,
                ltr: true,
              },
            ].map((stat, index) => (
              <div
                key={index}
                data-hero="stat"
                className={`pr-3 opacity-0 ${index === 0 ? "" : "border-s border-parchment/12 ps-4 sm:ps-6"}`}
              >
                <p
                  className={`font-display leading-none text-parchment ${
                    index === 0
                      ? lang === "ar"
                        ? "text-[1.4rem] sm:text-[2rem]"
                        : "text-[1.65rem] sm:text-[2rem]"
                      : lang === "ar"
                        ? "text-[1.8rem] sm:text-[2.5rem]"
                        : "text-[2rem] sm:text-[2.5rem]"
                  }`}
                >
                  <span
                    dir={stat.ltr ? "ltr" : undefined}
                    className="inline-block whitespace-nowrap"
                  >
                    {stat.value}
                  </span>
                </p>
                <p className="mt-2 max-w-[110px] text-[8px] font-semibold uppercase leading-[1.5] tracking-[0.16em] text-parchment/35 sm:text-[9px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          data-hero="compass"
          className="relative mx-auto w-full max-w-[590px] opacity-0 lg:translate-x-4"
        >
          <div className="flex items-center justify-between px-2 pb-4 text-[8px] font-semibold uppercase tracking-[0.22em] text-parchment/32 sm:px-6">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
              {dict.hero.compassEyebrow}
            </span>
            <span className="hidden sm:block">{dict.hero.compassHint}</span>
          </div>

          <div
            ref={compassRef}
            className="relative mx-auto aspect-square w-full max-w-[560px]"
          >
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(200,162,98,0.08),transparent_66%)]" />

            <div
              data-hero="ring"
              className="absolute inset-[2%] rounded-full border border-parchment/10 opacity-0"
            />
            <div
              data-hero="ring"
              className="absolute inset-[11%] rounded-full border border-gold/16 opacity-0"
            />
            <div
              data-hero="ring"
              className="absolute inset-[22%] rounded-full border border-parchment/8 opacity-0"
            />

            <svg
              viewBox="0 0 100 100"
              className="pointer-events-none absolute inset-0 h-full w-full text-gold/25"
              aria-hidden="true"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.22"
                strokeDasharray="0.4 2.2"
                className="animate-[orbit-spin_90s_linear_infinite] origin-center"
              />
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.2"
                strokeOpacity="0.7"
              />
              <circle
                cx="50"
                cy="50"
                r="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.2"
                strokeDasharray="0.35 1.8"
                strokeOpacity="0.55"
              />
              <path
                data-compass-path
                d={`M ${50 + 19 * Math.cos(activePoint.angle)} ${
                  50 + 19 * Math.sin(activePoint.angle)
                } L ${activePoint.x} ${activePoint.y}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.35"
                strokeDasharray="100"
                strokeDashoffset="100"
                pathLength="100"
                opacity="0"
              />
            </svg>

            <div className="absolute inset-[31%] flex items-center justify-center rounded-full border border-gold/20 bg-[#0d1914]/90 shadow-[0_0_90px_rgba(200,162,98,0.08)] backdrop-blur-sm">
              <EightPointStar className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] text-gold/[0.12]" />
              <div className="relative z-10 w-[76%] text-center">
                <p
                  data-compass-copy
                  className="text-[7px] font-semibold uppercase leading-none tracking-[0.2em] text-parchment/38 sm:text-[8px]"
                >
                  {dict.hero.compassLife}
                </p>
                <div className="mt-3 flex items-start justify-center">
                  <span
                    data-compass-copy
                    className="font-display text-[clamp(2.6rem,9vw,4.9rem)] font-light leading-[0.8] tracking-[-0.04em] text-parchment"
                  >
                    {activeEvent.year}
                  </span>
                  <span className="ml-1 mt-1 text-[7px] font-semibold tracking-[0.12em] text-gold sm:text-[9px]">
                    {dict.common.ce}
                  </span>
                </div>
                <div className="mx-auto my-3 h-px w-7 bg-gold/55" />
                <p
                  data-compass-copy
                  className="mx-auto max-w-[125px] text-[9px] font-medium uppercase leading-[1.45] tracking-[0.12em] text-gold-2 sm:text-[10px]"
                >
                  {activeEvent.shortTitle}
                </p>
                <p
                  data-compass-copy
                  className="mt-2 hidden text-[8px] font-medium uppercase tracking-[0.1em] text-parchment/26 sm:block"
                >
                  {activeEvent.date}
                </p>
              </div>
            </div>

            {points.map(({ event, x, y }, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={event.id}
                  type="button"
                  data-hero="compass-point"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  aria-label={`${event.year}: ${event.title}`}
                  aria-pressed={active}
                  className="group absolute z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center opacity-0 focus-visible:outline-none"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <span className="relative grid h-7 w-7 place-items-center">
                    <span
                      className={`absolute inset-0 rounded-full border transition-all duration-500 ${
                        active
                          ? "scale-100 border-gold/35 opacity-100"
                          : "scale-50 border-parchment/20 opacity-0 group-hover:scale-90 group-hover:opacity-60"
                      }`}
                    />
                    <span
                      data-compass-ping={active ? "" : undefined}
                      className={`relative block rounded-full transition-all duration-500 ${
                        active
                          ? "h-2.5 w-2.5 bg-gold shadow-[0_0_18px_rgba(200,162,98,0.7)]"
                          : "h-1.5 w-1.5 bg-parchment/38 group-hover:bg-parchment/80"
                      }`}
                    />
                  </span>
                  <span
                    className={`mt-0.5 text-[7px] font-semibold tracking-[0.12em] transition-colors duration-300 sm:text-[8px] ${
                      active
                        ? "text-gold"
                        : "text-parchment/28 group-hover:text-parchment/65"
                    }`}
                  >
                    {event.year}
                  </span>
                </button>
              );
            })}

          </div>
        </div>
      </div>

      <div className="relative border-t border-parchment/10">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-4 text-[8px] font-semibold uppercase tracking-[0.18em] text-parchment/30 sm:px-8 sm:py-5 sm:text-[9px] lg:px-12">
          <span>{dict.hero.timelineBarStart}</span>
          <span className="hidden items-center gap-3 md:flex">
            <span className="h-px w-16 bg-parchment/15" />
            {dict.hero.timelineBarPlaces}
          </span>
          <a
            href="#explorer"
            className="group flex items-center gap-2.5 text-parchment/45 transition-colors hover:text-gold"
          >
            {dict.hero.scroll}
            <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
