import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PattySource — Premium Jamaican Patties for UK Businesses",
  description:
    "PattySource supplies authentic Jamaican patties wholesale to pubs, restaurants, cafés, convenience stores, and event organisers across the UK. Competitive pricing, reliable delivery.",
  keywords:
    "Jamaican patties wholesale UK, Caribbean food supplier, patty distributor, beef patty wholesale, chicken patty supplier",
  openGraph: {
    title: "PattySource — Premium Jamaican Patties for UK Businesses",
    description:
      "Authentic Caribbean flavours supplied to pubs, shops, cafés & events across the UK.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
