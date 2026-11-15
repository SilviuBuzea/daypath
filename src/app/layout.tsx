import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Fraunces, Outfit } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

const SITE = "https://daypath-pi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Daypath",
    template: "%s",
  },
  description:
    "Free neighborhood-aware day plans — sights, meals, and a place to sleep, ordered so you don’t zigzag across town. No account needed.",
  applicationName: "Daypath",
  openGraph: {
    title: "Daypath",
    description:
      "Free neighborhood-aware day plans — sights, meals, and a place to sleep, without zigzagging. No account needed.",
    url: SITE,
    siteName: "Daypath",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daypath",
    description:
      "Free neighborhood-aware day plans — sights, meals, and a place to sleep, without zigzagging. No account needed.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${fraunces.variable} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
