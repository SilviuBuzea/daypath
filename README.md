# Daypath

A small website that builds a personal itinerary from a few questions.

No API keys. No map. No paid services.

You pick a supported city, how long you're staying, a pace, a budget, and what you care about. Daypath lines up sights, meals, and a place to sleep. Each day stays in one part of the city, in walking order, and every stop has nearby alternatives.

## Ready cities

All European capitals, plus Barcelona.

**Deep catalogs (London-level):** Amsterdam, Antalya, Bangkok, Barcelona, Delhi, Dubai, Hong Kong, Istanbul, Kuala Lumpur, London, Macau, Madrid, Mecca, New York, Paris, Rome, Seoul, Shanghai, Singapore, Tokyo.

## Run it

```bash
npm install
npm run dev
```

Open the Local URL printed in the terminal.

## How a day is built

The stay is chosen near the middle of the places you'll visit. Each day gets one neighborhood. Stops inside that day are ordered from closest to furthest, so the path doesn't bounce across town. Lunch and dinner are picked beside that path. If you change a stop, the day is lined up again.

## Free extras

- Google Maps links for each stop, plus “Open this day in Maps”
- Shareable trip links (`?t=…`) — use Share link, no account needed
- Save trips and form choices in your browser (no account)
- City tips, clearer morning/lunch/afternoon/dinner labels, and a cleaner PDF export
