import Image from "next/image";
import type { Language } from "@/components/AppShell";

type HeroProps = {
  language: Language;
};

export default function Hero({ language }: HeroProps) {
  const content = {
    EN: {
      titleLine1: "Discover the",
      titleEmphasis: "Pearl of the Indian Ocean",
      subtitle:
        "Curated journeys through Sri Lanka's ancient wonders, lush highlands, and pristine beaches",
      cta: "Plan Your Journey",
      alt: "Sri Lanka landscape",
    },
    DE: {
      titleLine1: "Entdecke die",
      titleEmphasis: "Perle des Indischen Ozeans",
      subtitle:
        "Sorgfaeltig kuratierte Reisen durch Sri Lankas alte Wunder, gruenen Hochlaender und unberuehrte Straende",
      cta: "Plane Deine Reise",
      alt: "Landschaft in Sri Lanka",
    },
  } as const;

  const t = content[language];

  return (
    <section
      className="relative overflow-hidden bg-background py-10 lg:py-28"
      id="home"
    >
      {/* Decorative background */}
      <div className="bg-gold pointer-events-none absolute inset-0 opacity-80" />

      <div className="relative grid w-full grid-cols-1 gap-10 px-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-start lg:px-10">
        {/* ================= IMAGE SIDE ================= */}
        <div className="relative z-10">
          <div className="hero-image-arc-organic relative h-[400px] sm:h-[480px] lg:h-[600px]">
            <Image
              src="/HERO.jpg"
              alt={t.alt}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/35 via-transparent to-emerald-200/15" />
          </div>

          {/* Location Badge */}
          <div className="absolute left-6 top-6 z-30 rounded-full bg-cream/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-forest shadow-lg">
            Sonnenschein Reise
          </div>
        </div>

        {/* ================= TEXT / CARD SIDE ================= */}
        <div className="relative z-20 lg:-ml-16 lg:mt-14">
          <div className="ml-auto max-w-xl rounded-3xl border border-white/30 bg-cream/80 p-8 shadow-2xl backdrop-blur-md lg:p-10">
            <p className="text-xs uppercase tracking-[0.35em] text-forest/70">
              Sonnenschein Reise
            </p>

            <h1 className="mt-4 font-serif text-4xl leading-tight text-forest sm:text-5xl lg:text-6xl">
              {t.titleLine1}{" "}
              <span className="text-terracotta">{t.titleEmphasis}</span>
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-charcoal/80">
              {t.subtitle}
            </p>

            {/* CTA */}
            <button className="group mt-8 inline-flex items-center gap-3 rounded-full bg-terracotta px-8 py-3 text-sm font-semibold uppercase tracking-wider text-cream transition hover:scale-105 hover:bg-terracotta/90">
              {t.cta}

              <span className="transition group-hover:translate-x-1">-&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
