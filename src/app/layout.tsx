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
  title: {
    default: "Restaurant Website Design Qatar | Premium Restaurant Demo",
    template: "%s | Restaurant Website Qatar",
  },
  description:
    "Premium restaurant website demo for Qatar and Doha restaurants with online menu, table reservation, mobile-first design, luxury branding, and SEO-friendly structure.",
  keywords: [
    "restaurant website design Qatar",
    "restaurant website design Doha",
    "restaurant booking website Qatar",
    "online menu website Qatar",
    "restaurant reservation website Doha",
    "cafe website design Qatar",
    "fine dining restaurant website Doha",
    "restaurant web development Qatar",
    "restaurant SEO Qatar",
    "restaurant website demo",
  ],
  authors: [{ name: "Samira Cloud" }],
  creator: "Samira Cloud",
  publisher: "Samira Cloud",
  metadataBase: new URL("https://restaurant.samiracloud.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Restaurant Website Design Qatar | Premium Restaurant Demo",
    description:
      "A premium Next.js restaurant website demo built for Qatar restaurants, cafés, fine dining brands, and reservation-focused food businesses.",
    url: "https://restaurant.samiracloud.com",
    siteName: "Restaurant Website Qatar",
    locale: "en_QA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Website Design Qatar | Premium Restaurant Demo",
    description:
      "Premium restaurant website demo with online menu, booking CTA, mobile-first UI, and SEO structure for Qatar restaurants.",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-primary-bg text-heading">
        {children}
      </body>
    </html>
  );
}