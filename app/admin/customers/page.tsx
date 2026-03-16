import AdminShell from "@/components/admin/AdminShell";

export default function AdminCustomersPage() {
  return (
    <AdminShell
      title="Customers"
      description="This area is reserved for traveler records, repeat customers, notes, and future communication history."
    >
      <div className="rounded-2xl border border-dashed border-charcoal/20 p-6">
        <p className="text-base leading-7 text-charcoal/70">
          Customer records will appear here once inquiries and bookings are persisted and linked to
          traveler profiles.
        </p>
      </div>
    </AdminShell>
  );
}
