import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = (() => {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  if (!raw) return "https://gpsmanipur.com";

  const withProtocol = raw.startsWith("http://") || raw.startsWith("https://")
    ? raw
    : `https://${raw}`;

  return withProtocol.replace(/\/+$/, "");
})();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "GPS Manipur | Centralised Board & Competitive Exam Prep",
  description:
    "GPS Manipur is a centralized education platform for 10th and 12th board students and competitive exam aspirants, with curated notes, PYQs, solved PYQs, and exam guides.",
  openGraph: {
    title: "GPS Manipur | Centralised Board & Competitive Exam Prep",
    description:
      "GPS Manipur is a centralized education platform for 10th and 12th board students and competitive exam aspirants, with curated notes, PYQs, solved PYQs, and exam guides.",
    url: siteUrl,
    siteName: "GPS Manipur",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/social_placeholder.jpeg",
        width: 1280,
        height: 606,
        alt: "GPS Manipur — Board & Competitive Exam Prep",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GPS Manipur | Centralised Board & Competitive Exam Prep",
    description:
      "GPS Manipur is a centralized education platform for 10th and 12th board students and competitive exam aspirants, with curated notes, PYQs, solved PYQs, and exam guides.",
    images: ["/social_placeholder.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} light`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
          <Toaster position="top-right" richColors closeButton />
        </Providers>
      </body>
    </html>
  );
}
