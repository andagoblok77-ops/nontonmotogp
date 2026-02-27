import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "../../components/Navbar";
import Footer from "../../components/Footer";
import Script from "next/script";
import "plyr/dist/plyr.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nontonmotogp.my.id"),

  title: {
    default: "NONTONMotoGP  - Live Streaming & Berita MotoGP 2026",
    template: "%s | NONTONMotoGP",
  },

  description:
    "Nonton live streaming MotoGP 2026, jadwal race terbaru, klasemen pembalap, hasil balapan, dan berita MotoGP update setiap hari. Kunjungi juga LIVEMotoGP.NET untuk pengalaman streaming tanpa gangguan.",
  keywords: [
    "NONTONMotoGP",
    "Live MotoGP",
    "Streaming MotoGP 2026",
    "Jadwal MotoGP",
    "Klasemen MotoGP",
    "Hasil Race MotoGP",
    "Berita MotoGP",
  ],

  authors: [{ name: "NONTONMotoGP Team" }],
  creator: "NONTONMotoGP",
  publisher: "NONTONMotoGP",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://nontonmotogp.my.id",
    siteName: "NONTONMotoGP",
    title: "NONTONMotoGP  - Live Streaming & Berita MotoGP 2026",
    description:
      "Nonton live streaming MotoGP 2026, jadwal race terbaru, klasemen pembalap, hasil balapan, dan berita MotoGP update setiap hari. Kunjungi juga LIVEMotoGP.NET untuk pengalaman streaming tanpa gangguan.",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Live Streaming MotoGP 2026",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NONTONMotoGP - Live Streaming MotoGP 2026",
    description:
      "Nonton live streaming MotoGP 2026, jadwal race terbaru, klasemen pembalap, hasil balapan, dan berita MotoGP update setiap hari. Kunjungi juga LIVEMotoGP.NET untuk pengalaman streaming tanpa gangguan.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/og-image.png",
    apple: "/og-image.png",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <script src="https://welcomingexpulsion.com/01/40/c7/0140c7f2b4b2a1bb3e8b3837c856198a.js"></script> */}
        {process.env.VERCEL_ENV  === "production" && (
          <>
            <Script
              src="https://welcomingexpulsion.com/51/48/e2/5148e28760207581ad14bab0f4a1d522.js"
              strategy="afterInteractive"
            />
          </>
        )}

        <Navbar />

        {children}

        <Footer />
        {process.env.VERCEL_ENV  === "production" && (
          <>
            <Script
              src="https://welcomingexpulsion.com/06/19/49/0619497655609265fcd9736cdcc0ffa7.js"
              strategy="afterInteractive"
            />
          </>
        )}
      </body>
    </html>
  );
}
