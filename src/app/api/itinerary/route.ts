import { NextResponse } from "next/server";
import { findCityCatalog, listCityNames } from "@/lib/cities";
import { PlannerError } from "@/lib/errors";
import { createItinerary } from "@/lib/plan";
import { parsePreferences } from "@/lib/preferences";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ cities: listCityNames() });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Send the trip details as JSON." }, { status: 400 });
  }

  const parsed = parsePreferences(body);
  if ("error" in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  try {
    const city = findCityCatalog(parsed.prefs.destination);
    const itinerary = createItinerary(city, parsed.prefs);
    return NextResponse.json(itinerary);
  } catch (error) {
    if (error instanceof PlannerError) {
      return NextResponse.json({ error: error.message }, { status: 422 });
    }
    console.error(error);
    return NextResponse.json(
      { error: "I couldn't build the itinerary just now. Try again." },
      { status: 500 },
    );
  }
}
