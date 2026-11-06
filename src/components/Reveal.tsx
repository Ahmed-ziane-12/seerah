"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { animate } from "animejs";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 28,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const animation = animate(element, {
      opacity: [0, 1],
      translateY: [distance, 0],
      duration: 900,
      delay,
      ease: "out(3)",
      autoplay: false,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animation.play();
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      animation.pause();
    };
  }, [delay, distance]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
