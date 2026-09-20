import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.devinemedicalgroup.com"),
  title: {
    default:
      "Devine Medical Group | Hospital, Nursing Home & Rehab in Mt Darwin",
    template: "%s | Devine Medical Group",
  },
  description:
    "Devine Medical Group provides quality hospital care, nursing home services, and rehabilitation in Mt Darwin, Zimbabwe.",
  keywords: [
    "Devine Medical Group",
    "Mt Darwin hospital",
    "nursing home Zimbabwe",
    "rehabilitation centre Zimbabwe",
  ],
  openGraph: {
    title: "Devine Medical Group",
    description:
      "Quality hospital care, nursing home services, and rehabilitation in Mt Darwin, Zimbabwe.",
    url: "https://www.devinemedicalgroup.com",
    siteName: "Devine Medical Group",
    locale: "en_ZW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devine Medical Group",
    description:
      "Quality hospital care, nursing home services, and rehabilitation in Mt Darwin, Zimbabwe.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased bg-[#FAF7F1] text-[#161F2E]">
        <Navbar />
        <main id="top">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
