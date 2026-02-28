import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coby.uz"),
  title: {
    default: "COBY | Sustainable Recycling Infrastructure for Uzbekistan",
    template: "%s | COBY"
  },
  description:
    "COBY is a climate-tech recycling infrastructure platform in Uzbekistan. AI-assisted material classification converts plastic and aluminum deposits into EcoCoin incentives integrated with Korzinka and 365 brand products.",
  keywords: [
    "COBY Uzbekistan",
    "recycling infrastructure",
    "EcoCoin",
    "Korzinka integration",
    "ESG reporting",
    "reverse vending Uzbekistan"
  ],
  openGraph: {
    title: "COBY | Sustainable Recycling Infrastructure for Uzbekistan",
    description:
      "Institutional climate-tech platform connecting smart recycling devices, secure event data, and retail-integrated EcoCoin incentives.",
    url: "https://coby.uz",
    siteName: "COBY",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/coby-machine.svg",
        width: 1200,
        height: 1200,
        alt: "COBY machine render"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "COBY | Climate-Tech Recycling Infrastructure",
    description: "AI-powered recycling platform with EcoCoin retail incentives via Korzinka and 365 brand products.",
    images: ["/images/coby-machine.svg"]
  },
  alternates: {
    canonical: "https://coby.uz"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-coby-light text-coby-text antialiased transition-colors duration-300`}>{children}</body>
    </html>
  );
}
