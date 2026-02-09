import Link from "next/link";
import type { Language } from "@/components/AppShell";

type FooterProps = {
  language: Language;
};

export default function Footer({ language }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const content = {
    EN: {
      brand: "Sonnenschein Reise",
      blurb: "Crafting unforgettable journeys through the Pearl of the Indian Ocean since 2011.",
      company: "Company",
      info: "Information",
      legal: "Legal",
      companyLinks: [
        { label: "About Us", href: "#about" },
        { label: "Our Tours", href: "#packages" },
        { label: "Blog", href: "#blog" },
        { label: "Careers", href: "#contact" },
      ],
      infoLinks: [
        { label: "Contact Us", href: "#contact" },
        { label: "FAQ", href: "#contact" },
        { label: "Travel Tips", href: "#blog" },
        { label: "Visa Info", href: "#contact" },
      ],
      legalLinks: [
        { label: "Privacy Policy", href: "#contact" },
        { label: "Terms & Conditions", href: "#contact" },
        { label: "Cookie Policy", href: "#contact" },
        { label: "Disclaimer", href: "#contact" },
      ],
      bottom: `(c) ${currentYear} Sonnenschein Reise. All rights reserved.`,
      bottomLinks: [
        { label: "Privacy", href: "#contact" },
        { label: "Terms", href: "#contact" },
        { label: "Sitemap", href: "#home" },
      ],
    },
    DE: {
      brand: "Sonnenschein Reise",
      blurb:
        "Unvergessliche Reisen durch die Perle des Indischen Ozeans seit 2011.",
      company: "Unternehmen",
      info: "Informationen",
      legal: "Rechtliches",
      companyLinks: [
        { label: "Ueber Uns", href: "#about" },
        { label: "Unsere Touren", href: "#packages" },
        { label: "Blog", href: "#blog" },
        { label: "Karriere", href: "#contact" },
      ],
      infoLinks: [
        { label: "Kontakt", href: "#contact" },
        { label: "FAQ", href: "#contact" },
        { label: "Reisetipps", href: "#blog" },
        { label: "Visa-Info", href: "#contact" },
      ],
      legalLinks: [
        { label: "Datenschutz", href: "#contact" },
        { label: "AGB", href: "#contact" },
        { label: "Cookie-Richtlinie", href: "#contact" },
        { label: "Haftungsausschluss", href: "#contact" },
      ],
      bottom: `(c) ${currentYear} Sonnenschein Reise. Alle Rechte vorbehalten.`,
      bottomLinks: [
        { label: "Datenschutz", href: "#contact" },
        { label: "AGB", href: "#contact" },
        { label: "Sitemap", href: "#home" },
      ],
    },
  } as const;

  const t = content[language];

  return (
    <footer className="bg-charcoal text-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-heading-lg mb-4">{t.brand}</h3>
            <p className="text-cream/70 text-caption mb-6">{t.blurb}</p>
            <div className="flex gap-3">
              {["f", "i", "t"].map((icon) => (
                <button
                  type="button"
                  key={icon}
                  className="w-8 h-8 bg-gold/20 hover:bg-gold text-gold hover:text-charcoal rounded-full flex items-center justify-center transition text-caption font-bold"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-caption uppercase tracking-widest mb-4 text-gold">
              {t.company}
            </h4>
            <ul className="space-y-3 text-body">
              {t.companyLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-cream/70 hover:text-gold transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold text-caption uppercase tracking-widest mb-4 text-gold">
              {t.info}
            </h4>
            <ul className="space-y-3 text-body">
              {t.infoLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-cream/70 hover:text-gold transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-caption uppercase tracking-widest mb-4 text-gold">
              {t.legal}
            </h4>
            <ul className="space-y-3 text-body">
              {t.legalLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-cream/70 hover:text-gold transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-caption text-cream/60">
          <p>{t.bottom}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {t.bottomLinks.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-gold transition">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
