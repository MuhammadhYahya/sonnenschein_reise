"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Language } from "@/components/AppShell";

type NavigationProps = {
  language: Language;
  onSetLanguage: (language: Language) => void;
};

export default function Navigation({ language, onSetLanguage }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const labels = {
    EN: {
      experiences: "Experiences",
      packages: "Packages",
      reviews: "Reviews",
      blog: "Blog",
      contact: "Contact",
      menu: "Menu",
      close: "Close",
    },
    DE: {
      experiences: "Erlebnisse",
      packages: "Pakete",
      reviews: "Bewertungen",
      blog: "Blog",
      contact: "Kontakt",
      menu: "Menu",
      close: "Schliessen",
    },
  } as const;

  const t = labels[language];
  const navTextClass = isScrolled ? "text-[#8d8f84]" : "text-white";
  const navBgClass = "bg-transparent backdrop-blur-md";
  const switchBaseClass = isScrolled
    ? "border-forest/20 bg-cream/80 text-forest"
    : "border-white/30 bg-forest/50 text-white";
  const inactiveTextClass = isScrolled ? "text-forest/70" : "text-white/90";

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div
        className={`w-full px-6 py-2 md:py-0 flex items-center justify-between transition-colors duration-300 text-body ${navBgClass}`}
      >

       <Link
  href="/"
  className="flex items-center gap-3 h-14 sm:h-16 md:h-20"
  onClick={(event) => {
    event.preventDefault();
    setIsMenuOpen(false);
    window.history.replaceState(null, "", "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
>
  <Image
    src="/logo.png"
    alt="Sonnenschein Reise Logo"
    width={160}
    height={80}
    className="h-full w-auto object-contain"
  />
</Link>


        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 ">
          <a href="#experiences" className={`text-body ${navTextClass} hover:text-white transition`}>
            {t.experiences}
          </a>
          <a href="#packages" className={`text-body ${navTextClass} hover:text-white transition`}>
            {t.packages}
          </a>
          <a href="#reviews" className={`text-body ${navTextClass} hover:text-white transition`}>
            {t.reviews}
          </a>
          <a href="#blog" className={`text-body ${navTextClass} hover:text-white transition `}>
            {t.blog}
          </a>
          <a href="#contact" className={`text-body ${navTextClass} hover:text-white transition `}>
            {t.contact}
          </a>
        </div>

        {/* Language Switcher */}
{/* Language Switcher */}
<div className="flex items-center gap-4">

  {/* ===== Language Toggle ===== */}
  <div
    className="relative flex items-center text-xs font-semibold tracking-[0.2em]"
    role="group"
    aria-label="Language switcher"
  >
    {/* Sliding active background */}
    <span
      className={`absolute top-0 bottom-0 w-[46px] rounded-full bg-sand transition-all duration-300 ${
        language === "EN" ? "left-0" : "left-[46px]"
      }`}
    />

    <button
      type="button"
      onClick={() => onSetLanguage("EN")}
      className={`relative z-10 rounded-full px-3 py-1 transition ${
        language === "EN"
          ? "text-charcoal"
          : `${inactiveTextClass} hover:text-white`
      }`}
      aria-pressed={language === "EN"}
    >
      EN
    </button>

    <button
      type="button"
      onClick={() => onSetLanguage("DE")}
      className={`relative z-10 rounded-full px-3 py-1 transition ${
        language === "DE"
          ? "text-charcoal"
          : `${inactiveTextClass} hover:text-white`
      }`}
      aria-pressed={language === "DE"}
    >
      DE
    </button>
  </div>

  {/* ===== Mobile Menu Button ===== */}
  <button
    type="button"
    className={`md:hidden group relative flex h-10 w-10 items-center justify-center rounded-full transition ${navTextClass}`}
    aria-expanded={isMenuOpen}
    aria-controls="mobile-menu"
    aria-label={isMenuOpen ? t.close : t.menu}
    onClick={() => setIsMenuOpen((open) => !open)}
  >
    <span className="sr-only">{isMenuOpen ? t.close : t.menu}</span>

    <div className="relative h-5 w-5">
      <span
        className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-300 ${
          isMenuOpen ? "translate-y-2 rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition-opacity duration-300 ${
          isMenuOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition-transform duration-300 ${
          isMenuOpen ? "-translate-y-2 -rotate-45" : ""
        }`}
      />
    </div>
  </button>

</div>


      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-[#1F1F1F]">
          <div className="flex flex-col gap-4">
            <a
              href="#experiences"
              onClick={handleNavClick}
              className="text-body text-white/90 hover:text-white transition"
            >
              {t.experiences}
            </a>
            <a
              href="#packages"
              onClick={handleNavClick}
              className="text-body text-white/90 hover:text-white transition"
            >
              {t.packages}
            </a>
            <a
              href="#reviews"
              onClick={handleNavClick}
              className="text-body text-white/90 hover:text-white transition"
            >
              {t.reviews}
            </a>
            <a
              href="#blog"
              onClick={handleNavClick}
              className="text-body text-white/90 hover:text-white transition"
            >
              {t.blog}
            </a>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="text-body text-white/90 hover:text-white transition"
            >
              {t.contact}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
