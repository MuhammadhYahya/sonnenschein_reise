import AdminShell from "@/components/admin/AdminShell";

export default function AdminBookingsPage() {
  return (
    <AdminShell
      title="Bookings"
      description="This section will manage pending, confirmed, cancelled, and completed bookings once the operational database is in place."
    >
      <div className="rounded-2xl border border-dashed border-charcoal/20 p-6">
        <p className="text-base leading-7 text-charcoal/70">
          Booking management has not been implemented yet. The recommended next step is modeling
          tours, departures, travelers, booking statuses, and payment records in Prisma.
        </p>
      </div>
    </AdminShell>
  );
}
