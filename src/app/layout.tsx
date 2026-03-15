import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashok Verma — Alchemetryx | Digital Analytics Strategist",
  description: "15 years converting digital noise into strategic intelligence. Founder of Alchemetryx Consulting. GA4 Certified. Helping UK-based owner-led SMEs see what matters.",
  keywords: ["Digital Analytics", "GA4", "Alchemetryx", "Ashok Verma", "BookMyShow", "Marketing Analytics"],
  authors: [{ name: "Ashok Verma" }],
  metadataBase: new URL('https://ashok.alchemetryx.com'),
  openGraph: {
    title: "Ashok Verma — Alchemetryx",
    description: "Turning Data Into Clarity",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Ashok Verma - Alchemetryx" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashok Verma — Alchemetryx",
    description: "Turning Data Into Clarity",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Ashok Verma - Alchemetryx" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
