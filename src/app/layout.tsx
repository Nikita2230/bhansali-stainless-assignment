import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

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
    default: "Stainless Steel Flanges | Bhansali Stainless",
    template: "%s | Bhansali Stainless",
  },
  description:
    "Stainless steel flanges in grades 304, 316 and 316L for industrial buyers across UAE, Saudi Arabia and the GCC.",
  keywords: [
    "stainless steel flanges",
    "SS 304 flanges",
    "SS 316 flanges",
    "SS 316L flanges",
    "stainless steel exporter",
    "UAE stainless steel supplier",
    "Saudi Arabia stainless steel supplier",
    "GCC industrial flanges",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Stainless Steel Flanges | Bhansali Stainless",
    description:
      "B2B stainless steel flange supply for UAE, Saudi Arabia and GCC industrial buyers.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
