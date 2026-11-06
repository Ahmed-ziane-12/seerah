"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useI18n } from "@/components/LanguageContext";
import type { SeerahEvent } from "@/data/seerah";

type ExplorerContextValue = {
  activeIndex: number;
  activeEvent: SeerahEvent;
  events: SeerahEvent[];
  setActiveIndex: (index: number) => void;
  goToEvent: (index: number) => void;
};

const ExplorerContext = createContext<ExplorerContextValue | null>(null);

export function ExplorerProvider({ children }: { children: ReactNode }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const { dict } = useI18n();
  const events = dict.events;
  const safeIndex = Math.min(activeIndex, events.length - 1);
  const activeEvent = events[safeIndex];

  const goToEvent = useCallback((index: number) => {
    setActiveIndex(index);

    window.setTimeout(() => {
      const explorer = document.getElementById("explorer");
      explorer?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
    }, 40);
  }, []);

  const value = useMemo(
    () => ({
      activeIndex: safeIndex,
      activeEvent,
      events,
      setActiveIndex,
      goToEvent,
    }),
    [activeEvent, events, goToEvent, safeIndex],
  );

  return <ExplorerContext.Provider value={value}>{children}</ExplorerContext.Provider>;
}

export function useExplorer() {
  const context = useContext(ExplorerContext);

  if (!context) {
    throw new Error("useExplorer must be used inside an ExplorerProvider");
  }

  return context;
}
