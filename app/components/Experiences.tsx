import type { Language } from "@/components/AppShell";
import Image from "next/image";

type ExperiencesProps = {
  language: Language;
};

export default function Experiences({ language }: ExperiencesProps) {
  const content = {
    EN: {
      eyebrow: "Unforgettable Adventures",
      title: "Our Experiences",
      subtitle: "Handpicked journeys through Sri Lanka's most captivating destinations",
      cta: "Learn More ->",
      items: [
        {
          id: 1,
          title: "Ancient Temple Tours",
          description: "Explore sacred temples and spiritual sites",
          image: "/TAMPLE.jpg",
          icon: "Temple",
        },
        {
          id: 2,
          title: "Mountain Hiking",
          description: "Trek through misty highlands and scenic peaks",
          image: "/HIKING.jpg",
          icon: "Mountain",
        },
        {
          id: 3,
          title: "Beach Retreats",
          description: "Relax on pristine, golden beaches",
          image: "/beach.jpg",
          icon: "Beach",
        },
        {
          id: 4,
          title: "Wildlife Safari",
          description: "Discover exotic wildlife in natural habitats",
          image: "/WILDLIFE.jpeg",
          icon: "Safari",
        },
        {
          id: 5,
          title: "Cultural Villages",
          description: "Experience authentic local traditions",
          image: "/culture.jpeg",
          icon: "Culture",
        },
        {
          id: 6,
          title: "Tea Plantations",
          description: "Tour Sri Lanka's famous tea estates",
          image: "/Tea.jpg",
          icon: "Tea",
        },
      ],
    },
    DE: {
      eyebrow: "Unvergessliche Abenteuer",
      title: "Unsere Erlebnisse",
      subtitle: "Handverlesene Reisen durch Sri Lankas faszinierendste Ziele",
      cta: "Mehr erfahren ->",
      items: [
        {
          id: 1,
          title: "Alte Tempeltouren",
          description: "Erkunde heilige Tempel und spirituelle Orte",
          image: "/TAMPLE.jpg",
          icon: "Tempel",
        },
        {
          id: 2,
          title: "Bergwanderungen",
          description: "Wandere durch neblige Hochlaender und malerische Gipfel",
          image: "/HIKING.jpg",
          icon: "Berge",
        },
        {
          id: 3,
          title: "Strand-Auszeiten",
          description: "Entspanne an goldenen, unberuehrten Straenden",
          image: "/beach.jpg",
          icon: "Strand",
        },
        {
          id: 4,
          title: "Wildtier-Safari",
          description: "Entdecke exotische Tiere in natuerlichen Lebensraeumen",
          image: "/WILDLIFE.jpeg",
          icon: "Safari",
        },
        {
          id: 5,
          title: "Kulturelle Doerfer",
          description: "Erlebe authentische lokale Traditionen",
          image: "/culture.jpeg",
          icon: "Kultur",
        },
        {
          id: 6,
          title: "Teeplantagen",
          description: "Besuche Sri Lankas beruehmte Tee-Gueter",
          image: "/tea.jpg",
          icon: "Tee",
        },
      ],
    },
  } as const;

  const t = content[language];

  return (
    <section id="experiences" className="py-20 px-6 bg-cream">
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

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((exp) => (
            <div
              key={exp.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition duration-300 border border-cream"
            >
              {/* Image */}
            <div className="relative h-48 overflow-hidden">
  <Image
    src={exp.image}
    alt={exp.title}
    fill
    className="object-cover group-hover:scale-110 transition duration-500"
  />
</div>


              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-body text-deep-teal mb-2 group-hover:text-gold transition">
                  {exp.title}
                </h3>
                <p className="text-charcoal/70 text-caption mb-4">{exp.description}</p>
                <button
                  type="button"
                  className="text-gold text-caption font-semibold hover:text-terracotta transition"
                >
                  {t.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
