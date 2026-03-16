import AdminShell from "@/components/admin/AdminShell";

const dashboardCards = [
  {
    label: "Open inquiries",
    value: "0",
    detail: "Travel requests waiting for staff follow-up.",
  },
  {
    label: "Pending bookings",
    value: "0",
    detail: "Bookings created but not yet confirmed.",
  },
  {
    label: "Published tours",
    value: "0",
    detail: "Tours that will later be synced from the CMS.",
  },
];

export default function AdminPage() {
  return (
    <AdminShell
      title="Operations Dashboard"
      description="This is the first admin entry point. Right now it is a scaffold, but it establishes the internal area where inquiry management, bookings, customers, and reporting will live."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {dashboardCards.map((card) => (
          <section
            key={card.label}
            className="rounded-2xl border border-charcoal/10 bg-[#fffaf5] p-6"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-charcoal/50">
              {card.label}
            </p>
            <p className="mt-4 font-serif text-5xl text-deep-teal">{card.value}</p>
            <p className="mt-4 text-sm leading-6 text-charcoal/70">{card.detail}</p>
          </section>
        ))}
      </div>

      <section className="mt-8 rounded-2xl border border-dashed border-charcoal/20 p-6">
        <h3 className="font-serif text-2xl text-deep-teal">What comes next</h3>
        <p className="mt-3 max-w-3xl text-charcoal/70">
          The next implementation milestone is wiring a real inquiry form, storing submissions
          in the database, and surfacing them here for staff review.
        </p>
      </section>
    </AdminShell>
  );
}
