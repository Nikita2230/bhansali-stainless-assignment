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
  metadataBase: new URL(
    "https://bhansali-stainless-assignment.vercel.app"
  ),

  title: {
    default: "Stainless Steel Flanges | Bhansali Stainless",
    template: "%s | Bhansali Stainless",
  },

  description:
    "Stainless steel flanges in grades 304, 316 and 316L for industrial buyers across UAE, Saudi Arabia and the GCC.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Stainless Steel Flanges | Bhansali Stainless",
    description:
      "B2B stainless steel flange supply for UAE, Saudi Arabia and GCC industrial buyers.",
    url: "/",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}{gtmId && <GoogleTagManager gtmId={gtmId} />}</body>
    </html>
  );
}
