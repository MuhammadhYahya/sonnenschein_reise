import AdminShell from "@/components/admin/AdminShell";

export default function AdminInquiriesPage() {
  return (
    <AdminShell
      title="Inquiries"
      description="This section will hold the inquiry pipeline: new traveler requests, qualification, follow-up, and conversion into bookings."
    >
      <div className="rounded-2xl border border-dashed border-charcoal/20 p-6">
        <p className="text-base leading-7 text-charcoal/70">
          No inquiry records are connected yet. The next backend step is adding a database schema,
          a validated submission endpoint, and an admin list view with statuses.
        </p>
      </div>
    </AdminShell>
  );
}
