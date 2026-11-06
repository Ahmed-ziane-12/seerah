# Seerah — An Interactive Historical Explorer

A chronological, interconnected exploration of the life of Prophet Muhammad ﷺ and the world in which Islam emerged.

The home page is built as a single interactive experience:

- A celestial **time compass** in the hero for moving through pivotal moments.
- A **chronological atlas** with eras, a navigable timeline, event details, Qur'anic references, places, people and wider-world context.
- **Threads through time** that reveal recurring themes such as mercy, revelation, community and justice.
- A **wider world** section connecting the Seerah to Byzantium, Persia, Aksum and pre-Islamic Arabia.
- Cross-links between sections, so a moment selected in one place can be opened directly in the explorer.

## Tech stack

- [Next.js 16](https://nextjs.org/) — App Router
- TypeScript
- Tailwind CSS v4
- [Anime.js v4](https://animejs.com/) — entrance animations, transitions and content reveals
- Cormorant Garamond, Manrope and Noto Naskh Arabic via `next/font`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run lint
```

## Project structure

```text
src/
  app/
    globals.css        Theme tokens, base styles and keyframes
    layout.tsx         Fonts, metadata and root layout
    page.tsx           Home route
  components/
    HomePage.tsx       Page composition and explorer state provider
    Hero.tsx           Hero and time compass
    Explorer.tsx       Chronological atlas
    Threads.tsx        Thematic connections
    World.tsx          Wider-world context cards
    Closing.tsx        Final call to action
    Nav.tsx            Responsive navigation
    Footer.tsx         Footer
  data/
    seerah.ts          Events, eras, threads and world context
```

## A note on the content

This is an educational overview of a widely accepted Seerah outline. Dates follow the Hijri calendar where indicated. The life of the Prophet ﷺ is studied through a rich tradition of scholarship; readers are encouraged to consult classical Seerah works and qualified teachers for detailed study.
