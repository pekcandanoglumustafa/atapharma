import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atapharma.com.tr"),
  title: {
    default: "ATA Pharma — Hayvan Sağlığı İçin Bilimsel İlaç Üretimi",
    template: "%s | ATA Pharma",
  },
  description:
    "ATA Pharma; inek, koyun, buzağı ve oğlakların bağışıklık sistemini güçlendiren, bilimsel araştırmalarla desteklenen veteriner ilaçları üretir. GMP standartlarında güvenilir çözümler.",
  keywords: [
    "veteriner ilaç",
    "hayvan sağlığı",
    "bağışıklık güçlendirici",
    "veteriner immünoloji",
    "GMP üretim",
    "ATA Pharma",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://atapharma.com.tr",
    siteName: "ATA Pharma",
    title: "ATA Pharma — Hayvan Sağlığı İçin Bilimsel İlaç Üretimi",
    description:
      "İnek, koyun, buzağı ve oğlaklar için bağışıklık güçlendiren, bilimsel temelli veteriner ilaçları.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2 focus:text-forest-900"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
