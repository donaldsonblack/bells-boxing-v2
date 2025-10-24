import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas"
});

export const metadata: Metadata = {
  title: "Bells Boxing",
  description: "Elite boxing training and fitness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1PZLJ2KETP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1PZLJ2KETP');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${bebasNeue.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
