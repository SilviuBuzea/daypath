import type { Metadata } from "next";
import Planner from "@/components/Planner";
import { decodeSharePayload } from "@/lib/share";

type Props = { searchParams: Promise<{ t?: string }> };

const SITE = "https://daypath-pi.vercel.app";

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { t } = await searchParams;
  const payload = t ? decodeSharePayload(t) : null;
  if (!payload) {
    return {
      title: "Shared trip · Daypath",
      description: "Open a Daypath itinerary shared with you.",
      openGraph: {
        title: "Shared trip · Daypath",
        description: "Open a Daypath itinerary shared with you.",
        url: `${SITE}/t`,
        type: "website",
      },
    };
  }

  const destination = payload.prefs.destination.trim() || "your trip";
  const days = payload.prefs.days;
  const title = `${days}-day plan · ${destination} · Daypath`;
  const description = `A neighborhood-aware Daypath itinerary for ${destination}. Free to open — no account needed.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE}/t`,
      type: "website",
      siteName: "Daypath",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default function SharedTripPage() {
  return <Planner />;
}
