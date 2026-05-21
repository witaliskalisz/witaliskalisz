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
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          color: "white",
          fontFamily: "system-ui, sans-serif",
          background:
            "linear-gradient(135deg, #0a0e1a 0%, #142141 50%, #0a0e1a 100%)",
        }}
      >
        {/* Top brand block */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #3b82f6, #22d3ee)",
              fontSize: 40,
              fontWeight: 700,
              color: "white",
            }}
          >
            W
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ fontSize: 34, fontWeight: 600, lineHeight: 1 }}>Witalis</div>
            <div
              style={{
                display: "flex",
                fontSize: 13,
                color: "rgba(255,255,255,0.55)",
                letterSpacing: 3,
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              Diagnostyka premium
            </div>
          </div>
        </div>

        {/* Headline + subline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 600,
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            Zobacz, czego naprawdę potrzebuje Twoje ciało.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Funkcjonalna diagnostyka: mikroskopia żywej kropli krwi, testy nietolerancji IgG
            i analiza niedoborów. W Kaliszu od 2018 roku.
          </div>
        </div>

        {/* Footer line */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          <div style={{ display: "flex" }}>
            witalis.kalisz.pl · ul. Babina 6 · 62-800 Kalisz
          </div>
          <div style={{ display: "flex" }}>881 353 444</div>
        </div>
      </div>
    ),
    size
  );
}
