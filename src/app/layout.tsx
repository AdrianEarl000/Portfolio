import type { Metadata, Viewport } from "next";
import { Bebas_Neue, DM_Sans, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

/* ── FONTS ───────────────────────────────────────────────── */
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

/* ── METADATA ────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "Adrian Earl Abade — Web Developer",
    template: "%s | Adrian Earl Abade",
  },
  description: "Portfolio of Adrian Earl Abade, Web Developer based in Davao City.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#050505" },
    { media: "(prefers-color-scheme: dark)",  color: "#050505" },
  ],
};

/* ── LAYOUT ──────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bebasNeue.variable} ${dmSans.variable} ${shareTechMono.variable}`}
    >
      <body className="antialiased min-h-screen flex flex-col">
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}