import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy · Daypath",
  description: "How Daypath handles your information.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-accent uppercase">
        <Link href="/" className="hover:underline">
          Daypath
        </Link>
      </p>
      <h1 className="mt-3 font-serif text-4xl tracking-tight">Privacy</h1>
      <p className="mt-2 text-sm text-muted">Last updated: November 2026</p>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-ink">
        <p>
          Daypath is built to work without accounts. We do not ask you to sign up, and we do not store
          your itineraries on our servers.
        </p>
        <section>
          <h2 className="font-serif text-2xl">What stays on your device</h2>
          <p className="mt-2 text-muted">
            Preferences and trips you save are kept in your browser’s local storage on that device
            only. Clearing site data removes them.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">Share links</h2>
          <p className="mt-2 text-muted">
            When you share a trip, the plan is encoded in the link itself. Anyone with the link can
            open that plan. We do not host a private trip database — treat share links like anything
            else you’d send to a friend.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">Analytics</h2>
          <p className="mt-2 text-muted">
            The live site uses Vercel Analytics for anonymous page-view counts (visits and paths). It
            does not identify you personally and is not used for advertising.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">Contact</h2>
          <p className="mt-2 text-muted">
            Questions:{" "}
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
