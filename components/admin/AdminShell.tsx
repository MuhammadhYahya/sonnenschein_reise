import Link from "next/link";
import { adminNavItems } from "@/lib/constants/admin-nav";

type AdminShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function AdminShell({
  title,
  description,
  children,
}: AdminShellProps) {
  return (
    <div className="min-h-screen bg-[#f5efe6] text-charcoal">
      <div className="mx-auto grid min-h-screen max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="rounded-3xl bg-deep-teal p-6 text-cream shadow-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Admin
          </p>
          <h1 className="mt-3 font-serif text-3xl">Sonnenschein Reise</h1>
          <p className="mt-3 text-sm leading-6 text-cream/75">
            Internal tools for inquiries, bookings, travelers, and future team workflows.
          </p>

          <nav className="mt-8 space-y-3">
            {adminNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-2xl border border-cream/10 bg-cream/5 px-4 py-3 transition hover:bg-cream/10"
              >
                <p className="font-semibold text-cream">{item.label}</p>
                <p className="mt-1 text-sm text-cream/70">{item.description}</p>
              </Link>
            ))}
          </nav>
        </aside>

        <main className="rounded-3xl bg-white p-8 shadow-xl">
          <header className="border-b border-charcoal/10 pb-6">
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
              Operations
            </p>
            <h2 className="mt-3 font-serif text-4xl text-deep-teal">{title}</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-charcoal/70">
              {description}
            </p>
          </header>

          <div className="mt-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
