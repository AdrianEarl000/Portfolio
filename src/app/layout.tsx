import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Improved Metadata Structure
export const metadata: Metadata = {
  title: {
    default: "My Next.js App",
    template: "%s | My Next.js App", // Example: "Dashboard | My Next.js App"
  },
  description: "Built with Next.js 15, Tailwind, and TypeScript",
  icons: {
    icon: "/favicon.ico",
  },
};

// 2. Separate Viewport export (Next.js 14+ standard)
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 3. suppressHydrationWarning is essential for using next-themes
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Optional: <Header /> goes here */}
        
        {/* 4. Semantic Main Tag & Flex-Grow pushes footer down */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Optional: <Footer /> goes here */}
      </body>
    </html>
  );
}