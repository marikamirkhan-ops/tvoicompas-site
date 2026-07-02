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

export const metadata = {
  title: "Твой Компас — экскурсии по Кавказу",

  description:
    "Однодневные экскурсии по Северному Кавказу. Джилы-Су, Бермамыт, Домбай, Эльбрус, Архыз и другие направления. Комфортные внедорожники, мини-группы и выезд из любой точки КМВ.",

  icons: {
  icon: "/favicon.png",
},

  openGraph: {
    title: "Твой Компас — экскурсии по Кавказу",

    description:
      "Однодневные экскурсии по Северному Кавказу. Комфортные внедорожники, мини-группы и выезд из любой точки КМВ.",

    url: "https://tvoicompas-site.vercel.app",

    siteName: "Твой Компас",

    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Твой Компас",
      },
    ],

    locale: "ru_RU",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
