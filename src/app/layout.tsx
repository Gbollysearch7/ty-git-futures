import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const clashDisplay = localFont({
  src: [
    { path: "../fonts/ClashDisplay-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ClashDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/ClashDisplay-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/ClashDisplay-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-clash",
  display: "swap",
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

export const metadata: Metadata = {
  title: "TradersYard Futures | Static Drawdown Prop Firm | Get Funded Today",
  description:
    "The ONLY futures prop firm with full static drawdown. Pay once ($194), pass in 0 days, keep 90% profits. No monthly fees. No trailing drawdown.",
  keywords: [
    "futures prop firm",
    "static drawdown",
    "prop trading",
    "funded trader",
    "futures trading",
    "TradersYard",
    "get funded",
    "no monthly fees",
  ],
  openGraph: {
    title: "TradersYard Futures | The Only Static Drawdown Prop Firm",
    description:
      "Pay once. Get funded in one day. Keep 90% of your profits. No trailing drawdown. No monthly fees.",
    url: "https://futures.tradersyard.com",
    siteName: "TradersYard",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TradersYard Futures | Static Drawdown Prop Firm",
    description:
      "The ONLY futures prop firm with full static drawdown. Pay once, get funded, keep 90% profits.",
    creator: "@TradersYard",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TradersYard",
              url: "https://tradersyard.com",
              description:
                "The only futures prop firm with full static drawdown. One-time fees, 90% profit split, instant payouts.",
              sameAs: [
                "https://twitter.com/TradersYard",
                "https://instagram.com/tradersyard",
                "https://youtube.com/@tradersyard",
                "https://discord.gg/2j2zYnTHYp",
              ],
            }),
          }}
        />
      </head>
      <body className={`${clashDisplay.variable} font-sans font-medium leading-relaxed`}>
        {children}
      </body>
    </html>
  );
}
