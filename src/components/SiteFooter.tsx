import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="no-print mx-auto w-full max-w-3xl px-4 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-4 sm:px-6">
      <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
        <Link href="/cities" className="text-ink underline-offset-2 hover:underline">
          Cities
        </Link>
        <Link href="/privacy" className="text-ink underline-offset-2 hover:underline">
          Privacy
        </Link>
        <Link href="/terms" className="text-ink underline-offset-2 hover:underline">
          Terms
        </Link>
        <a
          href="mailto:silviupetrisor96@gmail.com"
          className="text-ink underline-offset-2 hover:underline"
        >
          Support
        </a>
      </nav>
      <p className="mt-3 text-sm text-muted">
        Free itineraries · no account · plans stay on your device or in a link you share.
      </p>
    </footer>
  );
}
