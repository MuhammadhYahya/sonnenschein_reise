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

export type Language = "EN" | "DE";

export default function AppShell() {
  const [language, setLanguage] = useState<Language>("EN");

  const handleSetLanguage = (next: Language) => {
    setLanguage(next);
  };

  return (
    <>
      <Navigation language={language} onSetLanguage={handleSetLanguage} />
      <Hero language={language} />
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
