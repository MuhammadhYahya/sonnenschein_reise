import type { Language } from "@/components/AppShell";

type ReviewsProps = {
  language: Language;
};

export default function Reviews({ language }: ReviewsProps) {
  const content = {
    EN: {
      eyebrow: "Loved by Travelers",
      title: "Guest Reviews",
      subtitle: "Hear from travelers who've experienced our journeys",
      reviews: [
        {
          id: 1,
          name: "Sarah Johnson",
          location: "United States",
          rating: 5,
          text: "Sonnenschein Reise crafted an unforgettable journey through Sri Lanka. Every detail was perfectly planned, and our guide was incredibly knowledgeable and warm. Highly recommended!",
          avatar: "SJ",
        },
        {
          id: 2,
          name: "Marco Rossi",
          location: "Italy",
          rating: 5,
          text: "The best travel experience I've ever had. From the temples to the tea plantations, everything was beautifully curated. The guides are true locals who share genuine stories.",
          avatar: "MR",
        },
        {
          id: 3,
          name: "Emma Wilson",
          location: "Australia",
          rating: 5,
          text: "Absolutely magical! We felt like we experienced the real Sri Lanka, not just tourist spots. The attention to sustainability and local communities was truly impressive.",
          avatar: "EW",
        },
        {
          id: 4,
          name: "David Chen",
          location: "Singapore",
          rating: 5,
          text: "Professional, authentic, and immersive. Sonnenschein Reise goes beyond typical tours. Worth every penny. Can't wait to return!",
          avatar: "DC",
        },
      ],
    },
    DE: {
      eyebrow: "Von Reisenden Geliebt",
      title: "Gaestebewertungen",
      subtitle: "Erfahrungen von Reisenden, die unsere Reisen erlebt haben",
      reviews: [
        {
          id: 1,
          name: "Sarah Johnson",
          location: "USA",
          rating: 5,
          text: "Sonnenschein Reise hat eine unvergessliche Reise durch Sri Lanka geschaffen. Jedes Detail war perfekt geplant, und unser Guide war unglaublich kompetent und herzlich.",
          avatar: "SJ",
        },
        {
          id: 2,
          name: "Marco Rossi",
          location: "Italien",
          rating: 5,
          text: "Die beste Reiseerfahrung, die ich je hatte. Von Tempeln bis zu Teeplantagen war alles hervorragend kuratiert. Die Guides sind echte Einheimische.",
          avatar: "MR",
        },
        {
          id: 3,
          name: "Emma Wilson",
          location: "Australien",
          rating: 5,
          text: "Absolut magisch! Wir haben das echte Sri Lanka erlebt, nicht nur Touristenspots. Die Nachhaltigkeit und die lokalen Communities waren beeindruckend.",
          avatar: "EW",
        },
        {
          id: 4,
          name: "David Chen",
          location: "Singapur",
          rating: 5,
          text: "Professionell, authentisch und intensiv. Sonnenschein Reise geht weit ueber typische Touren hinaus. Jeden Cent wert.",
          avatar: "DC",
        },
      ],
    },
  } as const;

  const t = content[language];

  return (
    <section id="reviews" className="py-20 px-6 bg-deep-teal/10">
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

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(review.rating)
                  .fill(null)
                  .map((_, i) => (
                    <span key={i} className="text-gold text-body">
                      *
                    </span>
                  ))}
              </div>

              {/* Review Text */}
              <p className="text-charcoal/80 text-body mb-6 leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 text-deep-teal flex items-center justify-center text-caption font-semibold">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-body">{review.name}</p>
                  <p className="text-charcoal/60 text-caption">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
