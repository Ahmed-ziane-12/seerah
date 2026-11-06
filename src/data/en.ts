import type { Dictionary } from "@/data/seerah";

export const en: Dictionary = {
  meta: {
    title: "Seerah — An Interactive Historical Explorer",
    description:
      "Explore the life of Prophet Muhammad ﷺ through time. Navigate the events, people, places, revelations and civilisations that shaped the world of the Seerah.",
  },
  nav: {
    timeline: "The timeline",
    connections: "Connections",
    world: "The wider world",
    begin: "Begin exploring",
    menuOpen: "Open navigation",
    menuClose: "Close navigation",
    primaryAria: "Primary navigation",
    mobileAria: "Mobile navigation",
    wordmark: "SEERAH",
    subtitle: "Historical Explorer",
    language: "Language",
    chooseLanguage: "Choose a language",
  },
  hero: {
    eyebrow: "An interactive historical explorer",
    titleLine1: "The Seerah,",
    titleLine2: "in time.",
    copy: "Trace the life of Prophet Muhammad ﷺ through the events, people, places and revelations that shaped a civilisation — and the world around him.",
    primaryCta: "Explore the timeline",
    secondaryCta: "Discover the connections",
    statLife: "Life of the Prophet ﷺ",
    statRevelation: "Years of revelation",
    statMoments: "Pivotal moments",
    compassEyebrow: "A life in moments",
    compassHint: "Hover to travel",
    compassLife: "The Prophet's life",
    timelineBarStart: "570 · The Year of the Elephant",
    timelineBarPlaces: "Makkah · Madinah · Arabia",
    scroll: "Scroll to explore",
  },
  explorer: {
    kicker: "The chronological atlas",
    headingLine1: "Follow the thread",
    headingLine2: "of time.",
    intro:
      "Select a moment to see the people, places and revelations gathered around it. Every date opens onto a wider world.",
    moveThrough: "Move through 62 years in {count} moments",
    panelLabel: "The Seerah",
    panelMoments: "{count} moments that carry the story",
    momentsCount: "{count} moments",
    erasCount: "04 eras",
    connected: "Connected to this moment",
    place: "Place",
    people: "People",
    revelation: "Revelation",
    widerWorld: "Wider world",
    previous: "Previous",
    next: "Next",
    followThread: "follow the thread",
    footnote:
      "A widely accepted outline of the Seerah. Dates follow the Hijri calendar where indicated; the life of the Prophet ﷺ is studied across a rich tradition of scholarship.",
    ce: "CE",
  },
  threads: {
    kicker: "Threads through time",
    headingLine1: "History is a web,",
    headingLine2: "not a line.",
    intro:
      "Every event belongs to several stories at once. Pull a thread and watch the same moment change meaning.",
    choose: "Choose a thread",
    counter: "Thread {current} / 04",
    panelLabel: "A thread through the Seerah",
    trace: "Trace this thread in the timeline",
    note: "The same event can belong to the story of mercy, of community, or of revelation. The connections are the history.",
  },
  world: {
    kicker: "The wider world",
    headingLine1: "A message born into",
    headingLine2: "a world in motion.",
    intro:
      "The Seerah did not unfold in isolation. Empires, trade routes, sanctuaries and tribal alliances shaped the world that received the message.",
    badge: "Four worlds, one historical moment",
    contextLabel: "Context {count}",
    connectedMoment: "Connected moment",
    exploreAria: "Explore {moment} in the timeline",
    footnote:
      "The timeline connects every moment to the wider world — the empires, economies and communities that formed its context.",
    openAtlas: "Open the chronological atlas",
    ce: "CE",
  },
  closing: {
    eyebrow: "Begin the journey",
    headingLine1: "Begin with a",
    headingLine2: "single moment.",
    copy: "A date is only the beginning. Follow its people, its place, its revelation — and the world that made it possible.",
    continue: "Continue exploring",
    startFirst: "Start with the first revelation",
    lastExplored: "Last explored · {year} CE · {title}",
  },
  footer: {
    description:
      "An interactive chronological exploration of the life of Prophet Muhammad ﷺ and the historical world surrounding him.",
    explore: "Explore",
    about: "About",
    livingAtlas: "A living historical atlas",
    stack: "TypeScript · Tailwind",
    motion: "Motion by Anime.js",
    enter: "Enter the explorer",
    copyright: "© 2026 Seerah · An ongoing study companion",
    disclaimer:
      "Presented as an educational overview. For detailed study, consult the classical Seerah works and qualified scholarship.",
    links: {
      timeline: "Timeline",
      connections: "Connections",
      world: "Wider world",
      top: "Back to top",
    },
  },
  common: {
    skip: "Skip to the explorer",
    ce: "CE",
    language: "Language",
    english: "English",
    arabic: "Arabic",
  },
  eras: [
    {
      id: "dawn",
      label: "The Dawn",
      range: "570—609",
      description: "Makkah before the call",
    },
    {
      id: "revelation",
      label: "The Revelation",
      range: "610—621",
      description: "The message begins",
    },
    {
      id: "migration",
      label: "The City",
      range: "622—629",
      description: "A community takes shape",
    },
    {
      id: "completion",
      label: "The Completion",
      range: "630—632",
      description: "Makkah and the farewell",
    },
  ],
  events: [
    {
      id: "birth",
      year: "570",
      yearNumber: 570,
      phase: "dawn",
      date: "The Year of the Elephant",
      title: "Born in Makkah",
      shortTitle: "The birth",
      description:
        "Muhammad ﷺ is born in Makkah to Aminah bint Wahb and Abdullah ibn Abd al-Muttalib, who had passed away before his birth. His grandfather Abd al-Muttalib and later his uncle Abu Talib become his guardians.",
      place: "Makkah, Hijaz",
      people: ["Aminah bint Wahb", "Abd al-Muttalib", "Halimah al-Sa'diyyah"],
      revelation:
        "The Qur'an would later describe him as a mercy to the worlds (21:107).",
      widerWorld:
        "The Byzantine and Sasanian empires dominate the region. Abraha's campaign against Makkah is remembered as the Year of the Elephant.",
      themes: ["Mercy", "Lineage", "Makkah"],
    },
    {
      id: "first-revelation",
      year: "610",
      yearNumber: 610,
      phase: "revelation",
      date: "Ramadan · Age forty",
      title: "The first revelation",
      shortTitle: "First revelation",
      description:
        "While retreating in the Cave of Hira, the Prophet ﷺ is visited by Jibril and receives the first words of the Qur'an. He returns to Khadijah, who comforts him and becomes the first to believe in his message.",
      place: "Cave of Hira, Jabal al-Nur",
      people: ["Jibril (Gabriel)", "Khadijah bint Khuwaylid", "Waraqah ibn Nawfal"],
      revelation: "Surah al-Alaq, 96:1–5",
      widerWorld:
        "Makkah is a thriving pilgrimage and trade centre. The Prophet ﷺ had long withdrawn to Hira to reflect away from the city's idolatry.",
      themes: ["Revelation", "Knowledge", "Mercy"],
      quote: {
        arabic: "ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ",
        translation: "Read in the name of your Lord who created.",
        source: "Qur'an 96:1",
      },
    },
    {
      id: "public-call",
      year: "613",
      yearNumber: 613,
      phase: "revelation",
      date: "The fourth year of prophethood",
      title: "The call goes public",
      shortTitle: "The public call",
      description:
        "After three years of private invitation, the Prophet ﷺ gathers the people of Quraysh and calls them openly to worship Allah alone. Some respond; others turn away. The early community begins to take shape.",
      place: "Mount as-Safa, Makkah",
      people: ["Abu Bakr as-Siddiq", "Ali ibn Abi Talib", "Khadijah bint Khuwaylid"],
      revelation: "Surah ash-Shu'ara, 26:214",
      widerWorld:
        "Makkah's social order is tied to the Kaaba and the tribal authority of Quraysh. An open call to abandon inherited religion meets immediate resistance.",
      themes: ["Courage", "Community", "Tawhid"],
      quote: {
        arabic: "وَأَنذِرْ عَشِيرَتَكَ ٱلْأَقْرَبِينَ",
        translation: "And warn your nearest kindred.",
        source: "Qur'an 26:214",
      },
    },
    {
      id: "abyssinia",
      year: "615",
      yearNumber: 615,
      phase: "revelation",
      date: "The fifth year of prophethood",
      title: "Refuge in Abyssinia",
      shortTitle: "Abyssinia",
      description:
        "As persecution intensifies in Makkah, a group of Muslims migrates across the Red Sea to Abyssinia. The Christian king, the Negus, receives them and refuses to surrender them to Quraysh. It is the first migration made for the sake of the faith.",
      place: "Aksum, Abyssinia",
      people: ["Ja'far ibn Abi Talib", "Uthman ibn Affan", "The Negus of Aksum"],
      revelation:
        "Ja'far is remembered for reciting verses from Surah Maryam before the Negus, moving him to protect the migrants.",
      widerWorld:
        "Aksum is a Christian kingdom with trade and diplomatic links across the Red Sea. Its court becomes the first sanctuary for the early Muslim community.",
      themes: ["Refuge", "Courage", "Justice"],
    },
    {
      id: "year-of-sorrow",
      year: "619",
      yearNumber: 619,
      phase: "revelation",
      date: "The tenth year of prophethood",
      title: "The Year of Sorrow",
      shortTitle: "Year of Sorrow",
      description:
        "Khadijah bint Khuwaylid, the Prophet's ﷺ wife and first supporter, passes away, followed shortly by his protecting uncle Abu Talib. The loss leaves him exposed to the hostility of Quraysh. He travels to Ta'if seeking support and is rejected.",
      place: "Makkah and Ta'if",
      people: ["Khadijah bint Khuwaylid", "Abu Talib", "The people of Ta'if"],
      revelation:
        "The Meccan surahs of consolation and steadfastness speak directly to this season of loss and endurance.",
      widerWorld:
        "Abu Talib's clan protection had shielded the Prophet ﷺ. His death changes the political balance in Makkah and intensifies the pressure on the believers.",
      themes: ["Steadfastness", "Loss", "Mercy"],
    },
    {
      id: "night-journey",
      year: "620",
      yearNumber: 620,
      phase: "revelation",
      date: "c. 620 CE · The twelfth year of prophethood",
      title: "The Night Journey",
      shortTitle: "Isra & Mi'raj",
      description:
        "In a single night, the Prophet ﷺ is taken from the Sacred Mosque to Masjid al-Aqsa and then through the heavens. The five daily prayers are prescribed during this journey, and the event becomes a defining sign of his prophethood.",
      place: "Makkah · Jerusalem · the heavens",
      people: ["Jibril (Gabriel)", "The Prophet ﷺ"],
      revelation:
        "Surah al-Isra, 17:1; the Ascension is described in the hadith tradition.",
      widerWorld:
        "By linking the community to Jerusalem and the earlier prophets, the journey places the new message within a shared sacred landscape.",
      themes: ["Revelation", "Prayer", "Jerusalem"],
      quote: {
        arabic:
          "سُبْحَٰنَ ٱلَّذِىٓ أَسْرَىٰ بِعَبْدِهِۦ لَيْلًا مِّنَ ٱلْمَسْجِدِ ٱلْحَرَامِ إِلَىٰ ٱلْمَسْجِدِ ٱلْأَقْصَى",
        translation:
          "Exalted is He who took His servant by night from the Sacred Mosque to the Farthest Mosque.",
        source: "Qur'an 17:1",
      },
    },
    {
      id: "hijrah",
      year: "622",
      yearNumber: 622,
      phase: "migration",
      date: "1 AH · The beginning of the Hijri calendar",
      title: "The Hijrah to Madinah",
      shortTitle: "The Hijrah",
      description:
        "After years of persecution, the Prophet ﷺ and the early Muslims migrate to Yathrib, later known as Madinah, where they are welcomed. The Hijrah marks the beginning of the Islamic calendar and the formation of a new community bound by faith.",
      place: "Makkah to Madinah",
      people: ["Abu Bakr as-Siddiq", "Ali ibn Abi Talib", "The Ansar", "The Muhajirun"],
      revelation:
        "The Qur'an recalls Allah's protection of the Prophet ﷺ during the journey (9:40).",
      widerWorld:
        "Yathrib's tribes seek a trusted arbiter. The agreements that follow reshape the city's political and social life.",
      themes: ["Migration", "Community", "Covenant"],
    },
    {
      id: "badr",
      year: "624",
      yearNumber: 624,
      phase: "migration",
      date: "17 Ramadan · 2 AH",
      title: "The Battle of Badr",
      shortTitle: "Badr",
      description:
        "A small Muslim force meets a much larger Quraysh army at the wells of Badr. The believers prevail, a turning point that strengthens the young community and reshapes its standing in Arabia.",
      place: "Badr, south-west of Madinah",
      people: ["Hamza ibn Abd al-Muttalib", "Ali ibn Abi Talib", "Abu Bakr", "Umar ibn al-Khattab"],
      revelation: "Surah Al Imran, 3:123; Surah al-Anfal",
      widerWorld:
        "Control of caravan routes and tribal prestige define power in Arabia. Badr becomes a byword for an unexpected victory.",
      themes: ["Justice", "Sacrifice", "Victory"],
      quote: {
        arabic: "وَلَقَدْ نَصَرَكُمُ ٱللَّهُ بِبَدْرٍ وَأَنتُمْ أَذِلَّةٌ",
        translation:
          "And Allah had certainly given you victory at Badr while you were weak.",
        source: "Qur'an 3:123",
      },
    },
    {
      id: "hudaybiyyah",
      year: "628",
      yearNumber: 628,
      phase: "migration",
      date: "6 AH · A peace that opened the way",
      title: "The Treaty of Hudaybiyyah",
      shortTitle: "Hudaybiyyah",
      description:
        "The Prophet ﷺ and his companions set out for Umrah but are halted at Hudaybiyyah. A ten-year truce is agreed with Quraysh. The companions initially see it as a setback, yet the peace allows the message to spread widely.",
      place: "Hudaybiyyah, near Makkah",
      people: ["Uthman ibn Affan", "Suhayl ibn Amr", "The companions"],
      revelation: "Surah al-Fath, 48:1",
      widerWorld:
        "The truce gives the Muslims room to engage neighbouring tribes and states. Conversions accelerate across the peninsula.",
      themes: ["Diplomacy", "Patience", "Foresight"],
      quote: {
        arabic: "إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا",
        translation: "Indeed, We have granted you a clear victory.",
        source: "Qur'an 48:1",
      },
    },
    {
      id: "opening-of-makkah",
      year: "630",
      yearNumber: 630,
      phase: "completion",
      date: "8 AH · The city returns to Tawhid",
      title: "The opening of Makkah",
      shortTitle: "Makkah opens",
      description:
        "Following a breach of the treaty, the Prophet ﷺ enters Makkah with a large force and takes the city almost without bloodshed. He grants a general amnesty, and the Kaaba is cleansed of idols.",
      place: "Makkah",
      people: ["Abu Sufyan", "The people of Quraysh", "The Muhajirun and Ansar"],
      revelation: "Surah an-Nasr, 110:1–3",
      widerWorld:
        "The balance of power in western Arabia shifts. In the years that follow, many tribes enter Islam.",
      themes: ["Mercy", "Forgiveness", "Tawhid"],
      quote: {
        arabic: "إِذَا جَاءَ نَصْرُ ٱللَّهِ وَٱلْفَتْحُ",
        translation: "When the victory of Allah has come and the conquest...",
        source: "Qur'an 110:1",
      },
    },
    {
      id: "farewell",
      year: "632",
      yearNumber: 632,
      phase: "completion",
      date: "10–11 AH · Arafah and Madinah",
      title: "The farewell and the passing",
      shortTitle: "The farewell",
      description:
        "At Arafah, during his final pilgrimage, the Prophet ﷺ delivers the Farewell Sermon, affirming the sanctity of life, property and honour, and the equality of people. He passes away in Madinah, leaving the community and the message to continue.",
      place: "Arafah and Madinah",
      people: ["The companions", "The family of the Prophet ﷺ"],
      revelation: "Surah al-Ma'idah, 5:3",
      widerWorld:
        "The community he leaves is no longer a persecuted minority, but a growing polity across Arabia.",
      themes: ["Completion", "Justice", "Legacy"],
      quote: {
        arabic: "ٱلْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِى",
        translation:
          "This day I have perfected for you your religion and completed My favour upon you.",
        source: "Qur'an 5:3",
      },
    },
  ],
  threadItems: [
    {
      id: "mercy",
      title: "Mercy",
      arabic: "الرحمة",
      eyebrow: "The centre of the message",
      description:
        "The Qur'an describes the Prophet ﷺ as a mercy to the worlds. Mercy is not a footnote to the story: it appears in the care shown to the vulnerable, the restraint shown to enemies, and the amnesty granted at the opening of Makkah.",
      quote: {
        arabic: "وَمَا أَرْسَلْنَـٰكَ إِلَّا رَحْمَةً لِّلْعَـٰلَمِينَ",
        translation: "And We have not sent you except as a mercy to the worlds.",
        source: "Qur'an 21:107",
      },
      moments: ["birth", "year-of-sorrow", "opening-of-makkah"],
      accent: "gold",
    },
    {
      id: "revelation",
      title: "Revelation",
      arabic: "الوحي",
      eyebrow: "Guidance in real time",
      description:
        "The Qur'an was revealed across roughly twenty-three years, responding to events, questions and crises as they arose. Reading the Seerah chronologically reveals how scripture and circumstance meet.",
      quote: {
        arabic: "شَهْرُ رَمَضَانَ ٱلَّذِىٓ أُنزِلَ فِيهِ ٱلْقُرْآنُ",
        translation: "The month of Ramadan is that in which the Qur'an was revealed.",
        source: "Qur'an 2:185",
      },
      moments: ["first-revelation", "night-journey", "badr", "hudaybiyyah"],
      accent: "sage",
    },
    {
      id: "community",
      title: "Community",
      arabic: "الجماعة",
      eyebrow: "From a few to a nation",
      description:
        "The first believers gathered around a shared faith, then built a community through migration, mutual support and covenant. The story moves from a small circle in Makkah to a city bound by a common civic life.",
      quote: {
        arabic: "إِنَّمَا ٱلْمُؤْمِنُونَ إِخْوَةٌ",
        translation: "The believers are but brothers.",
        source: "Qur'an 49:10",
      },
      moments: ["public-call", "hijrah", "farewell"],
      accent: "clay",
    },
    {
      id: "justice",
      title: "Justice",
      arabic: "العدل",
      eyebrow: "A covenant for a city",
      description:
        "Justice runs through the Madinan agreements, the conduct of war, and the final sermon at Arafah. The Prophet ﷺ placed the protection of life, property, honour and fair treatment at the heart of public life.",
      quote: {
        arabic: "كُونُوا۟ قَوَّٰمِينَ لِلَّهِ شُهَدَآءَ بِٱلْقِسْطِ",
        translation: "Be persistently standing firm for Allah, witnesses in justice.",
        source: "Qur'an 5:8",
      },
      moments: ["hijrah", "hudaybiyyah", "farewell"],
      accent: "sand",
    },
  ],
  worldContext: [
    {
      id: "byzantium",
      name: "Byzantine Empire",
      dates: "330–1453",
      symbol: "BYZ",
      description:
        "A Christian empire ruling from Constantinople. Under Heraclius it was locked in an exhausting war with Persia, and its territories in Syria and Egypt would soon become part of the new Islamic world.",
      connectedMoment: "The Night Journey",
      connectedYear: "c. 620",
      connectedEventId: "night-journey",
    },
    {
      id: "sasanian",
      name: "Sasanian Persia",
      dates: "224–651",
      symbol: "PER",
      description:
        "The great rival of Byzantium, stretching from Mesopotamia to the Iranian plateau. The long war between the two empires would leave both weakened on the eve of the Islamic expansion.",
      connectedMoment: "The Treaty of Hudaybiyyah",
      connectedYear: "628",
      connectedEventId: "hudaybiyyah",
    },
    {
      id: "aksum",
      name: "Aksum & Abyssinia",
      dates: "c. 100–940",
      symbol: "AKS",
      description:
        "A Christian kingdom across the Red Sea. Its ruler, the Negus, received the first Muslim migrants and offered them protection when they were persecuted in Makkah.",
      connectedMoment: "Refuge in Abyssinia",
      connectedYear: "615",
      connectedEventId: "abyssinia",
    },
    {
      id: "arabia",
      name: "Pre-Islamic Arabia",
      dates: "570–632",
      symbol: "ARB",
      description:
        "A world of tribes, caravan cities and pilgrimage. Makkah's sanctuary, the poetry of the Arabs, and the shifting alliances of the peninsula form the immediate stage of the Seerah.",
      connectedMoment: "Born in Makkah",
      connectedYear: "570",
      connectedEventId: "birth",
    },
  ],
};
