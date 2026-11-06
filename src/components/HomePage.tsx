"use client";

import { LanguageProvider, useI18n } from "@/components/LanguageContext";
import { ExplorerProvider } from "@/components/ExplorerContext";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Explorer } from "@/components/Explorer";
import { Threads } from "@/components/Threads";
import { World } from "@/components/World";
import { Closing } from "@/components/Closing";
import { Footer } from "@/components/Footer";

export function HomePage() {
  return (
    <LanguageProvider>
      <ExplorerProvider>
        <PageShell />
      </ExplorerProvider>
    </LanguageProvider>
  );
}

function PageShell() {
  const { dict } = useI18n();

  return (
    <div className="min-h-screen bg-parchment">
      <a
        href="#explorer"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:text-[10px] focus:font-bold focus:uppercase focus:tracking-[0.16em] focus:text-ink"
      >
        {dict.common.skip}
      </a>
      <Nav />
      <main>
        <Hero />
        <Explorer />
        <Threads />
        <World />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}
