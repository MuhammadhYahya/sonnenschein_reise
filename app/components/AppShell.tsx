"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import About from "@/components/About";
import TourPackages from "@/components/TourPackages";
import Reviews from "@/components/Reviews";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { SiteContentSnapshot } from "@/lib/domain/content";

export type Language = "EN" | "DE";

type AppShellProps = {
  homepageContent: SiteContentSnapshot;
};

export default function AppShell({ homepageContent }: AppShellProps) {
  const [language, setLanguage] = useState<Language>("EN");

  const handleSetLanguage = (next: Language) => {
    setLanguage(next);
  };

  return (
    <>
      <Navigation language={language} onSetLanguage={handleSetLanguage} />
      <Hero language={language} content={homepageContent.hero} />
      <Experiences language={language} />
      <About language={language} />
      <TourPackages language={language} />
      <Reviews language={language} />
      <Blog language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </>
  );
}
