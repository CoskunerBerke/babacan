import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { RESTAURANT_DATA } from "@/data/restaurant";

const fontSerif = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
  display: "swap",
});

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FBF8F2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://babacan-kucukpark.vercel.app"
  ),
  title: "Babacan Çiğköfte Küçükpark | Bornova, İzmir",
  description:
    "Babacan Çiğköfte Küçükpark’ı keşfedin. Bornova, İzmir’de çiğköfte keyfi. Çalışma saatleri 10:30–00:30. Sipariş: 0553 918 85 57.",
  keywords: [
    "Babacan Çiğköfte",
    "Babacan Çiğköfte Küçükpark",
    "Küçükpark çiğköfte",
    "Bornova çiğköfte",
    "İzmir çiğköfte",
    "çiğköfte kova",
    "kanka menü çiğköfte",
  ],
  authors: [{ name: "Babacan Çiğköfte Küçükpark" }],
  openGraph: {
    title: "Babacan Çiğköfte Küçükpark | Bornova, İzmir",
    description:
      "Babacan Çiğköfte Küçükpark’ı keşfedin. Bornova, İzmir’de çiğköfte keyfi. Çalışma saatleri 10:30–00:30. Sipariş: 0553 918 85 57.",
    locale: "tr_TR",
    type: "website",
    siteName: "Babacan Çiğköfte Küçükpark",
    images: [
      {
        url: "/images/babacan-citir-kova.jpg",
        width: 1080,
        height: 1080,
        alt: "Babacan Çiğköfte Küçükpark Çıtır Kova Sunumu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Babacan Çiğköfte Küçükpark | Bornova, İzmir",
    description:
      "Babacan Çiğköfte Küçükpark’ı keşfedin. Bornova, İzmir’de çiğköfte keyfi. Çalışma saatleri 10:30–00:30. Sipariş: 0553 918 85 57.",
    images: ["/images/babacan-citir-kova.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: RESTAURANT_DATA.name,
    description:
      "Babacan Çiğköfte Küçükpark’ı keşfedin. Bornova, İzmir’de çiğköfte keyfi. Çalışma saatleri 10:30–00:30.",
    image: "/images/babacan-citir-kova.jpg",
    telephone: "+905539188557",
    servesCuisine: "Turkish, Çiğköfte",
    priceRange: "₺₺",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bornova",
      addressRegion: "İzmir",
      streetAddress: "Kazımdirik, 175. Sk. 15 A",
      postalCode: "35100",
      addressCountry: "TR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        opens: "10:30",
        closes: "00:30",
      },
    ],
    sameAs: [RESTAURANT_DATA.instagramUrl],
    slogan: RESTAURANT_DATA.slogan,
  };

  return (
    <html lang="tr" className={`${fontSerif.variable} ${fontSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-brand-bg text-brand-dark selection:bg-brand-red selection:text-white">
        {children}
      </body>
    </html>
  );
}
