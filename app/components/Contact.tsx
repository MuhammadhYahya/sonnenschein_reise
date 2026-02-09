import type { Language } from "@/components/AppShell";

type ContactProps = {
  language: Language;
};

export default function Contact({ language }: ContactProps) {
  const content = {
    EN: {
      eyebrow: "Get in Touch",
      title: "Ready for Your Adventure?",
      body:
        "Contact our travel experts today to craft your perfect Sri Lankan journey. We're here to answer all your questions and create a personalized itinerary.",
      phone: "Phone",
      email: "Email",
      address: "Address",
      formTitle: "Full Name",
      formEmail: "Email Address",
      formDuration: "Trip Duration",
      formMessage: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Tell us about your dream trip...",
      durationPlaceholder: "Select duration...",
      durations: ["5 Days", "7 Days", "10 Days", "14 Days"],
      submit: "Send Inquiry",
      social: ["Facebook", "Instagram", "Twitter"],
    },
    DE: {
      eyebrow: "Kontakt",
      title: "Bereit fuer dein Abenteuer?",
      body:
        "Kontaktiere unsere Reiseexperten, um deine perfekte Sri Lanka Reise zu gestalten. Wir beantworten deine Fragen und erstellen eine persoenliche Reiseroute.",
      phone: "Telefon",
      email: "E-Mail",
      address: "Adresse",
      formTitle: "Vollstaendiger Name",
      formEmail: "E-Mail Adresse",
      formDuration: "Reisedauer",
      formMessage: "Nachricht",
      namePlaceholder: "Dein Name",
      emailPlaceholder: "dein@email.com",
      messagePlaceholder: "Erzaehl uns von deiner Traumreise...",
      durationPlaceholder: "Dauer waehlen...",
      durations: ["5 Tage", "7 Tage", "10 Tage", "14 Tage"],
      submit: "Anfrage senden",
      social: ["Facebook", "Instagram", "Twitter"],
    },
  } as const;

  const t = content[language];

  return (
    <section id="contact" className="py-20 px-6 bg-deep-teal text-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - CTA */}
          <div className="flex flex-col justify-center">
            <span className="text-gold text-caption font-semibold uppercase tracking-widest mb-4">
              {t.eyebrow}
            </span>
            <h2 className="font-serif text-heading-lg text-4xl sm:text-5xl lg:text-6xl mb-6">
              {t.title}
            </h2>
            <p className="text-cream/90 text-body mb-8 leading-relaxed">{t.body}</p>

            {/* Quick Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="text-heading-lg">Phone</div>
                <div>
                  <p className="text-cream/70 text-caption">{t.phone}</p>
                  <p className="text-body font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-heading-lg">Email</div>
                <div>
                  <p className="text-cream/70 text-caption">{t.email}</p>
                  <p className="text-body font-semibold">info@sonnenschein-reise.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-heading-lg">Address</div>
                <div>
                  <p className="text-cream/70 text-caption">{t.address}</p>
                  <p className="text-body font-semibold">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {t.social.map((social) => (
                <button
                  type="button"
                  key={social}
                  className="bg-cream/10 hover:bg-gold text-cream hover:text-deep-teal px-4 py-2 rounded-full text-caption font-semibold transition"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-cream/10 backdrop-blur p-8 rounded-lg border border-cream/20">
            <form className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-caption font-semibold mb-2">
                  {t.formTitle}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder={t.namePlaceholder}
                  className="w-full bg-cream/10 border border-cream/30 rounded-lg px-4 py-3 text-cream placeholder-cream/50 focus:outline-none focus:border-gold transition"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-caption font-semibold mb-2">
                  {t.formEmail}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder={t.emailPlaceholder}
                  className="w-full bg-cream/10 border border-cream/30 rounded-lg px-4 py-3 text-cream placeholder-cream/50 focus:outline-none focus:border-gold transition"
                />
              </div>

              <div>
                <label htmlFor="contact-duration" className="block text-caption font-semibold mb-2">
                  {t.formDuration}
                </label>
                <select
                  id="contact-duration"
                  name="duration"
                  defaultValue=""
                  className="w-full bg-cream/10 border border-cream/30 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold transition"
                >
                  <option value="" disabled className="bg-deep-teal">
                    {t.durationPlaceholder}
                  </option>
                  {t.durations.map((d) => (
                    <option key={d} className="bg-deep-teal">
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-caption font-semibold mb-2">
                  {t.formMessage}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder={t.messagePlaceholder}
                  rows={4}
                  className="w-full bg-cream/10 border border-cream/30 rounded-lg px-4 py-3 text-cream placeholder-cream/50 focus:outline-none focus:border-gold transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold/90 text-deep-teal px-6 py-3 rounded-lg text-caption font-semibold transition"
              >
                {t.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
