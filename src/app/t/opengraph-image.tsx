import { ImageResponse } from "next/og";

export const alt = "Shared Daypath itinerary";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function ShareOpenGraphImage() {
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
          <div style={{ fontSize: 58, lineHeight: 1.1, maxWidth: 980 }}>
            Someone shared a city plan with you.
          </div>
          <div style={{ fontSize: 28, color: "#6e655c", maxWidth: 860, lineHeight: 1.35 }}>
            Neighborhood days so you don’t zigzag across town. Free to open — no account needed.
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#6e655c" }}>daypath-pi.vercel.app</div>
      </div>
    ),
    { ...size },
  );
}
