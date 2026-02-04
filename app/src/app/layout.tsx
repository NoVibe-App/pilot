import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "NoVibe",
  description: "Weekly continuity for developers who want to ship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-zinc-50 antialiased`}
      >
        <header className="border-b border-zinc-200 bg-white">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4 text-sm">
            <a className="font-semibold text-zinc-900" href="/">
              NoVibe.app
            </a>
            <nav className="flex items-center gap-4 text-zinc-600">
              <a href="/onboarding">Onboarding</a>
              <a href="/check-in">Check-in</a>
              <a href="/review">Review</a>
              <a href="/history">History</a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
