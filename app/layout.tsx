import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components";

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
    default: "MobiNest - Premium Mobile Technology & Accessories",
    template: "%s | MobiNest",
  },
  description:
    "Shop the latest smartphones, tablets, and tech accessories from MobiNest. Premium quality, fast shipping, and exceptional customer service.",
  keywords: [
    "smartphones",
    "tablets",
    "mobile phones",
    "tech accessories",
    "electronics",
    "UAE",
  ],
  authors: [{ name: "MobiNest" }],
  creator: "MobiNest",
  publisher: "MobiNest",
  metadataBase: new URL("https://mobinest.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mobinest.com",
    title: "MobiNest - Premium Mobile Technology & Accessories",
    description:
      "Shop the latest smartphones, tablets, and tech accessories from MobiNest.",
    siteName: "MobiNest",
  },
  twitter: {
    card: "summary_large_image",
    title: "MobiNest - Premium Mobile Technology",
    description: "Shop premium mobile technology and accessories",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head />
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
