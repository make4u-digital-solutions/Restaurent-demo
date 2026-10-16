import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "AURELIA — Artisanal Mediterranean Cuisine & Wood-Fired Gastronomy",
  description:
    "An intimate dining sanctuary in the heart of the city celebrating seasonal produce, live hearth cooking, and sincere hospitality. Reserve your table.",
  keywords: [
    "Aurelia Restaurant",
    "Fine Dining",
    "Artisanal Mediterranean",
    "Wood-fired cooking",
    "Signature Tasting Menu",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#FAF8F3] text-[#24231F] font-sans selection:bg-[#B85D36]/20 selection:text-[#24231F]">
        {children}
      </body>
    </html>
  );
}
