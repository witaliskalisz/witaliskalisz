import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Witalis — Premium diagnostyka zdrowia w Kaliszu";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #0a0e1a 0%, #142141 50%, #0a0e1a 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          color: "white",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -150,
            right: -150,
            width: 700,
            height: 700,
            background:
              "radial-gradient(circle, rgba(34,211,238,0.35) 0%, transparent 60%)",
            borderRadius: 9999,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -100,
            width: 600,
            height: 600,
            background:
              "radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 60%)",
            borderRadius: 9999,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 14, zIndex: 1 }}>
          <div
            style={{
              width: 56,
              height: 56,
              background: "linear-gradient(135deg, #3b82f6, #22d3ee)",
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 38,
              fontWeight: 700,
              color: "white",
            }}
          >
            W
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 32, fontWeight: 600 }}>Witalis</div>
            <div
              style={{
                fontSize: 13,
                opacity: 0.6,
                letterSpacing: 3,
                textTransform: "uppercase",
                marginTop: 2,
              }}
            >
              Diagnostyka premium
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 30, zIndex: 1 }}>
          <div style={{ fontSize: 76, fontWeight: 600, lineHeight: 1.05, maxWidth: 1000 }}>
            Zobacz, czego naprawdę
            <br />potrzebuje{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60a5fa, #22d3ee)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Twoje ciało.
            </span>
          </div>
          <div
            style={{
              fontSize: 26,
              opacity: 0.7,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Premium diagnostyka krwi, nietolerancji i niedoborów. Taka, jakiej używają
            zawodnicy La Liga — w Kaliszu.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            opacity: 0.6,
            zIndex: 1,
          }}
        >
          <div>witalis.kalisz.pl · ul. Babina 6 · 62-800 Kalisz</div>
          <div>881 353 444</div>
        </div>
      </div>
    ),
    size
  );
}
