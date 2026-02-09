import type { Language } from "@/components/AppShell";
import Image from "next/image";

type BlogProps = {
  language: Language;
};

export default function Blog({ language }: BlogProps) {
  const content = {
    EN: {
      eyebrow: "Travel Insights",
      title: "From Our Blog",
      subtitle: "Stories, tips, and inspiration from our journeys",
      readMore: "Read More ->",
      viewAll: "View All Articles",
      posts: [
        {
          id: 1,
          title: "Hidden Waterfalls of Sri Lanka",
          excerpt:
            "Discover the most breathtaking waterfalls tucked away in Sri Lanka's lush interior.",
          image: "/hiddenwater.jpg",
          date: "Feb 1, 2026",
          category: "Destinations",
        },
        {
          id: 2,
          title: "The Art of Sri Lankan Tea",
          excerpt:
            "Learn about the centuries-old tradition of tea cultivation in the highlands.",
          image: "/the%20art%20of%20tea.jpg",
          date: "Jan 28, 2026",
          category: "Culture",
        },
        {
          id: 3,
          title: "Best Time to Visit Sri Lanka",
          excerpt: "A comprehensive guide to planning your trip based on seasons and weather.",
          image: "/bestseasion.jpg",
          date: "Jan 22, 2026",
          category: "Travel Tips",
        },
      ],
    },
    DE: {
      eyebrow: "Reise-Impulse",
      title: "Aus Unserem Blog",
      subtitle: "Geschichten, Tipps und Inspiration aus unseren Reisen",
      readMore: "Mehr lesen ->",
      viewAll: "Alle Artikel ansehen",
      posts: [
        {
          id: 1,
          title: "Versteckte Wasserfaelle in Sri Lanka",
          excerpt:
            "Entdecke die eindrucksvollsten Wasserfaelle, verborgen im gruenen Landesinneren.",
          image: "/hiddenwater.jpg",
          date: "1. Feb 2026",
          category: "Ziele",
        },
        {
          id: 2,
          title: "Die Kunst des Sri Lankischen Tees",
          excerpt: "Lerne die jahrhundertealte Tradition des Teeanbaus im Hochland kennen.",
          image: "/the%20art%20of%20tea.jpg",
          date: "28. Jan 2026",
          category: "Kultur",
        },
        {
          id: 3,
          title: "Beste Reisezeit fuer Sri Lanka",
          excerpt: "Ein umfassender Guide zur Planung deiner Reise nach Jahreszeiten und Wetter.",
          image: "/bestseasion.jpg",
          date: "22. Jan 2026",
          category: "Reisetipps",
        },
      ],
    },
  } as const;

  const t = content[language];

  return (
    <section id="blog" className="py-20 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-caption font-semibold uppercase tracking-widest">
            {t.eyebrow}
          </span>
          <h2 className="font-serif text-heading-lg  text-4xl sm:text-5xl lg:text-6xl text-deep-teal mt-4 mb-6">
            {t.title}
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto text-body">{t.subtitle}</p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {t.posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition group cursor-pointer border border-cream"
            >
              {/* Image/Icon */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>



              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gold text-caption font-semibold uppercase tracking-widest">
                    {post.category}
                  </span>
                  <span className="text-charcoal/60 text-caption">{post.date}</span>
                </div>
                <h3 className="font-serif text-body text-deep-teal mb-3 group-hover:text-gold transition">
                  {post.title}
                </h3>
                <p className="text-charcoal/70 text-caption mb-4">{post.excerpt}</p>
                <button
                  type="button"
                  className="text-gold text-caption font-semibold hover:text-terracotta transition"
                >
                  {t.readMore}
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            type="button"
            className="border-2 border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-cream px-8 py-3 rounded-full text-caption font-semibold transition"
          >
            {t.viewAll}
          </button>
        </div>
      </div>
    </section>
  );
}
