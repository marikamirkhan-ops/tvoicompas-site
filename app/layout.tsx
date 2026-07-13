import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://tvoicompas-site.vercel.app"),

  title: "Твой Компас — экскурсии по Кавказу",

  description:
    "Однодневные экскурсии по Северному Кавказу. Джилы-Су, Бермамыт, Домбай, Эльбрус, Архыз и другие направления. Комфортные внедорожники, мини-группы и выезд из любой точки КМВ.",

  verification: {
    yandex: "bd1b65c4b92c3e8b",
  },

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "Твой Компас — экскурсии по Кавказу",
    description:
      "Однодневные экскурсии по Северному Кавказу. Комфортные внедорожники, мини-группы и выезд из любой точки КМВ.",
    url: "https://tvoicompass.ru",
    siteName: "Твой Компас",
    images: [
      {
        url: "/og-image.png",
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
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
<body className="min-h-full flex flex-col">
  {children}

  <Script
    id="yandex-metrika"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        (function(m,e,t,r,i,k,a){
          m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j=0; j<document.scripts.length; j++) {
            if (document.scripts[j].src === r) { return; }
          }
          k=e.createElement(t),
          a=e.getElementsByTagName(t)[0],
          k.async=1,
          k.src=r,
          a.parentNode.insertBefore(k,a)
        })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=110549974', 'ym');

        ym(110549974, 'init', {
          ssr:true,
          webvisor:true,
          clickmap:true,
          ecommerce:"dataLayer",
          referrer: document.referrer,
          url: location.href,
          accurateTrackBounce:true,
          trackLinks:true
        });
      `,
    }}
  />
</body>
    </html>
  );
}