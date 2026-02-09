import type { Language } from "@/components/AppShell";

type AboutProps = {
  language: Language;
};

export default function About({ language }: AboutProps) {
  const content = {
    EN: {
      eyebrow: "About Us",
      title: "Your Gateway to Sri Lanka",
      paragraph1:
        "Sonnenschein Reise is dedicated to creating unforgettable travel experiences through the Pearl of the Indian Ocean. With over 15 years of expertise, we craft personalized journeys that connect you with Sri Lanka's rich cultural heritage, breathtaking landscapes, and warm-hearted people.",
      paragraph2:
        "Every tour is meticulously planned with attention to authentic encounters, sustainable practices, and exceptional service. We believe travel should transform hearts and minds.",
      cta: "Our Story",
      stats: [
        { label: "Years of Experience", value: "15+" },
        { label: "Happy Travelers", value: "5,000+" },
        { label: "Destinations Covered", value: "25+" },
        { label: "Expert Guides", value: "50+" },
      ],
    },
    DE: {
      eyebrow: "Ueber Uns",
      title: "Dein Tor zu Sri Lanka",
      paragraph1:
        "Sonnenschein Reise steht fuer unvergessliche Reiseerlebnisse durch die Perle des Indischen Ozeans. Mit ueber 15 Jahren Erfahrung gestalten wir persoenliche Reisen, die dich mit Sri Lankas reichem Kulturerbe, atemberaubenden Landschaften und warmherzigen Menschen verbinden.",
      paragraph2:
        "Jede Tour wird mit Blick auf authentische Begegnungen, nachhaltige Praxis und erstklassigen Service geplant. Wir glauben, dass Reisen Herz und Geist veraendern sollten.",
      cta: "Unsere Geschichte",
      stats: [
        { label: "Jahre Erfahrung", value: "15+" },
        { label: "Zufriedene Reisende", value: "5,000+" },
        { label: "Ziele Abgedeckt", value: "25+" },
        { label: "Experten-Guides", value: "50+" },
      ],
    },
  } as const;

  const t = content[language];

  return (
    <section id="about" className="py-20 px-6 bg-deep-teal text-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">
              {t.eyebrow}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mt-4 mb-6 text-cream">
              {t.title}
            </h2>
            <p className="text-cream/90 text-lg mb-6 leading-relaxed">{t.paragraph1}</p>
            <p className="text-cream/90 text-lg mb-8 leading-relaxed">{t.paragraph2}</p>
            <button
              type="button"
              className="bg-gold hover:bg-gold/90 text-deep-teal px-8 py-3 rounded-full font-semibold transition"
            >
              {t.cta}
            </button>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-8">
            {t.stats.map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-cream/10 rounded-lg backdrop-blur">
                <div className="text-5xl sm:text-6xl font-serif text-gold mb-2">
                  {stat.value}
                </div>
                <p className="text-cream/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
