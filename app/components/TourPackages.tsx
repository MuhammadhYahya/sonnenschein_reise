import type { Language } from "@/components/AppShell";

type TourPackagesProps = {
  language: Language;
};

export default function TourPackages({ language }: TourPackagesProps) {
  const content = {
    EN: {
      eyebrow: "Choose Your Adventure",
      title: "Tour Packages",
      subtitle: "Select the perfect package for your Sri Lanka adventure",
      featuredBadge: "Most Popular",
      select: "Select Package",
      packages: [
        {
          id: 1,
          name: "Explorer",
          duration: "5 Days",
          price: "$899",
          description: "Perfect for first-time visitors",
          highlights: ["Beach relaxation", "Temple tour", "Local cuisine", "Wildlife spotting"],
          featured: false,
        },
        {
          id: 2,
          name: "Wanderer",
          duration: "10 Days",
          price: "$1,599",
          description: "Our most popular choice",
          highlights: [
            "Highland trek",
            "Tea plantations",
            "Beach & cultural sites",
            "Sunset experience",
            "Local market visit",
          ],
          featured: true,
        },
        {
          id: 3,
          name: "Luxury Journey",
          duration: "14 Days",
          price: "$2,799",
          description: "The ultimate Sri Lanka experience",
          highlights: [
            "Private guide",
            "Luxury accommodations",
            "All experiences included",
            "Spa & wellness",
            "Gourmet dining",
          ],
          featured: false,
        },
      ],
    },
    DE: {
      eyebrow: "Waehle Dein Abenteuer",
      title: "Reisepakete",
      subtitle: "Waehle das perfekte Paket fuer dein Sri Lanka Abenteuer",
      featuredBadge: "Beliebt",
      select: "Paket waehlen",
      packages: [
        {
          id: 1,
          name: "Entdecker",
          duration: "5 Tage",
          price: "$899",
          description: "Ideal fuer den ersten Besuch",
          highlights: ["Strand-Entspannung", "Tempeltour", "Lokale Kueche", "Wildlife-Spotting"],
          featured: false,
        },
        {
          id: 2,
          name: "Wanderer",
          duration: "10 Tage",
          price: "$1,599",
          description: "Unsere beliebteste Wahl",
          highlights: [
            "Hochland-Trekking",
            "Teeplantagen",
            "Strand und Kultur",
            "Sonnenuntergang",
            "Lokaler Marktbesuch",
          ],
          featured: true,
        },
        {
          id: 3,
          name: "Luxusreise",
          duration: "14 Tage",
          price: "$2,799",
          description: "Das ultimative Sri Lanka Erlebnis",
          highlights: [
            "Privater Guide",
            "Luxusunterkuenfte",
            "Alle Erlebnisse inklusive",
            "Spa und Wellness",
            "Gourmet-Dining",
          ],
          featured: false,
        },
      ],
    },
  } as const;

  const t = content[language];

  return (
    <section id="packages" className="py-20 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-caption font-semibold uppercase tracking-widest">
            {t.eyebrow}
          </span>
          <h2 className="font-serif text-heading-lg text-4xl sm:text-5xl lg:text-6xl text-deep-teal mt-4 mb-6">
            {t.title}
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto text-body">{t.subtitle}</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 ${
                pkg.featured
                  ? "bg-gradient-to-b from-gold/20 to-gold/10 border-2 border-gold shadow-2xl md:scale-105"
                  : "bg-white border border-cream shadow-lg"
              }`}
            >
              {/* Featured Badge */}
              {pkg.featured && (
                <div className="bg-gold text-deep-teal text-center py-2 text-caption font-bold uppercase tracking-widest">
                  {t.featuredBadge}
                </div>
              )}

              {/* Content */}
              <div className="p-8">
                <h3 className="font-serif text-heading-lg text-deep-teal mb-2">{pkg.name}</h3>
                <p className="text-charcoal/70 text-caption mb-4">{pkg.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-heading-xl font-serif text-gold mb-1">{pkg.price}</div>
                  <p className="text-charcoal/60 text-caption">{pkg.duration}</p>
                </div>

                {/* Highlights */}
                <ul className="mb-8 space-y-3">
                  {pkg.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-charcoal/80 text-body">
                      <span className="text-gold mr-3">+</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  type="button"
                  className={`w-full py-3 rounded-full text-caption font-semibold transition ${
                    pkg.featured
                      ? "bg-gold text-deep-teal hover:bg-gold/90"
                      : "bg-deep-teal text-cream hover:bg-deep-teal/90"
                  }`}
                >
                  {t.select}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
