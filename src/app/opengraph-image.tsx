import { ImageResponse } from "next/og";

export const alt = "Daypath — neighborhood-aware city itineraries";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(145deg, #f3ecdf 0%, #fffaf3 45%, #e8d5c4 100%)",
          color: "#221c16",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 28, fontWeight: 600, color: "#c24d2c", letterSpacing: 4 }}>
            DAYPATH
          </div>
          <div style={{ fontSize: 64, lineHeight: 1.1, maxWidth: 900 }}>
            City days that stay in one neighborhood.
          </div>
          <div style={{ fontSize: 28, color: "#6e655c", maxWidth: 820, lineHeight: 1.35 }}>
            Free itineraries with sights, meals, and a place to sleep — ordered so you don’t zigzag.
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#6e655c" }}>No account · Share a link · Open in Maps</div>
      </div>
    ),
    { ...size },
  );
}
