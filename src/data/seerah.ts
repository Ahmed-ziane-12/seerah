export type EraId = "dawn" | "revelation" | "migration" | "completion";

export type Language = "en" | "ar";

export type Quote = {
  arabic: string;
  /** Omitted in Arabic, where the verse is already shown in its original language. */
  translation?: string;
  source: string;
};

export type SeerahEvent = {
  id: string;
  year: string;
  yearNumber: number;
  phase: EraId;
  date: string;
  title: string;
  shortTitle: string;
  description: string;
  place: string;
  people: string[];
  revelation: string;
  widerWorld: string;
  themes: string[];
  quote?: Quote;
};

export type Era = {
  id: EraId;
  label: string;
  range: string;
  description: string;
};

export type Thread = {
  id: string;
  title: string;
  arabic: string;
  eyebrow: string;
  description: string;
  quote: Quote;
  moments: string[];
  accent: "gold" | "sage" | "clay" | "sand";
};

export type WorldContext = {
  id: string;
  name: string;
  dates: string;
  symbol: string;
  description: string;
  connectedMoment: string;
  connectedYear: string;
  connectedEventId: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    timeline: string;
    connections: string;
    world: string;
    begin: string;
    menuOpen: string;
    menuClose: string;
    primaryAria: string;
    mobileAria: string;
    wordmark: string;
    subtitle: string;
    language: string;
    chooseLanguage: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    copy: string;
    primaryCta: string;
    secondaryCta: string;
    statLife: string;
    statRevelation: string;
    statMoments: string;
    compassEyebrow: string;
    compassHint: string;
    compassLife: string;
    timelineBarStart: string;
    timelineBarPlaces: string;
    scroll: string;
  };
  explorer: {
    kicker: string;
    headingLine1: string;
    headingLine2: string;
    intro: string;
    moveThrough: string;
    panelLabel: string;
    panelMoments: string;
    momentsCount: string;
    erasCount: string;
    connected: string;
    place: string;
    people: string;
    revelation: string;
    widerWorld: string;
    previous: string;
    next: string;
    followThread: string;
    footnote: string;
    ce: string;
  };
  threads: {
    kicker: string;
    headingLine1: string;
    headingLine2: string;
    intro: string;
    choose: string;
    counter: string;
    panelLabel: string;
    trace: string;
    note: string;
  };
  world: {
    kicker: string;
    headingLine1: string;
    headingLine2: string;
    intro: string;
    badge: string;
    contextLabel: string;
    connectedMoment: string;
    exploreAria: string;
    footnote: string;
    openAtlas: string;
    ce: string;
  };
  closing: {
    eyebrow: string;
    headingLine1: string;
    headingLine2: string;
    copy: string;
    continue: string;
    startFirst: string;
    lastExplored: string;
  };
  footer: {
    description: string;
    explore: string;
    about: string;
    livingAtlas: string;
    stack: string;
    motion: string;
    enter: string;
    copyright: string;
    disclaimer: string;
    links: {
      timeline: string;
      connections: string;
      world: string;
      top: string;
    };
  };
  common: {
    skip: string;
    ce: string;
    language: string;
    english: string;
    arabic: string;
  };
  eras: Era[];
  events: SeerahEvent[];
  threadItems: Thread[];
  worldContext: WorldContext[];
};
