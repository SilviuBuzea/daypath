import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms · Daypath",
  description: "Terms of use for Daypath.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-accent uppercase">
        <Link href="/" className="hover:underline">
          Daypath
        </Link>
      </p>
      <h1 className="mt-3 font-serif text-4xl tracking-tight">Terms of use</h1>
      <p className="mt-2 text-sm text-muted">Last updated: November 2026</p>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-ink">
        <p>
          Daypath is a free planning tool. It suggests itineraries from curated city catalogs. It is
          not a booking service, travel agency, or guarantee of opening hours, prices, or availability.
        </p>
        <section>
          <h2 className="font-serif text-2xl">Your responsibility</h2>
          <p className="mt-2 text-muted">
            Always check official sources before you go — tickets, hours, transport, and local rules
            change. Use Daypath as a starting plan, not as authoritative advice.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">Content</h2>
          <p className="mt-2 text-muted">
            Place descriptions are curated for planning convenience. Names and details may be
            incomplete or out of date. Maps links open third-party services (such as Google Maps)
            under their own terms.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">Availability</h2>
          <p className="mt-2 text-muted">
            The service is provided as-is, without warranties. It may change or go offline. We are
            not liable for travel decisions, missed bookings, or losses arising from use of the site.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">Contact</h2>
          <p className="mt-2 text-muted">
            <a
              href="mailto:silviupetrisor96@gmail.com"
              className="text-ink underline-offset-2 hover:underline"
            >
              silviupetrisor96@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
