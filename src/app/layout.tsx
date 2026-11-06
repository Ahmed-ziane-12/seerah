import type { Metadata, Viewport } from "next";
import {
  Amiri,
  Cormorant_Garamond,
  IBM_Plex_Sans_Arabic,
  Manrope,
} from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

/** Classical Naskh for display type and Qur'anic quotation. */
const arabicDisplay = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

/** Contemporary Arabic text face, paired with Manrope. */
const arabicSans = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seerah — An Interactive Historical Explorer",
  description:
    "Explore the life of Prophet Muhammad ﷺ through time. Navigate the events, people, places, revelations and civilisations that shaped the world of the Seerah.",
  keywords: [
    "Seerah",
    "Prophet Muhammad",
    "Islamic history",
    "interactive timeline",
    "Qur'an",
    "Makkah",
    "Madinah",
  ],
  openGraph: {
    title: "Seerah — An Interactive Historical Explorer",
    description:
      "A chronological atlas of the life of Prophet Muhammad ﷺ and the world around him.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1512",
  colorScheme: "light",
};

const languageScript = `(function(){try{var p=new URLSearchParams(window.location.search).get("lang");var s=window.localStorage.getItem("seerah-language");var l=(p==="ar"||p==="en")?p:s;if(l==="ar"||l==="en"){document.documentElement.lang=l;document.documentElement.dir=l==="ar"?"rtl":"ltr";}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${arabicDisplay.variable} ${arabicSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-parchment font-sans text-ink">
        <script dangerouslySetInnerHTML={{ __html: languageScript }} />
        <noscript>
          <style>{`[data-hero],[data-detail],[data-connection],[data-thread-anim]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
