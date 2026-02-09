import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Cormorant_Garamond, Karla } from "next/font/google";
import "./globals.css";

/* ================================
   Fonts
================================ */

const karla = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-karla",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-cormorant",
});


/* ================================
   Metadata
================================ */

export const metadata: Metadata = {
  title: "Sonnenschein Reise - Discover Sri Lanka",
  description:
    "Authentic Sri Lanka travel experiences, curated journeys, and cultural adventures.",
};

/* ================================
   Root Layout
================================ */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${karla.variable} ${cormorant.variable}`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

