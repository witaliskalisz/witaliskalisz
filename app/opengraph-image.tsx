import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Witalis — Prywatna diagnostyka zdrowia w Kaliszu";

export default async function OGImage() {
  const logo = await readFile(join(process.cwd(), "public", "logo-mark.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

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
          fontFamily: "system-ui, sans-serif",
          background:
            "linear-gradient(135deg, #ffffff 0%, #fff4f4 55%, #ffe6e6 100%)",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={84} height={84} alt="" />
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: "#14171F", lineHeight: 1 }}>
              Witalis
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 15,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#9aa1ad",
                lineHeight: 1,
              }}
            >
              Mikroskopia żywej kropli krwi · Kalisz
            </div>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 700, color: "#14171F", lineHeight: 1.05, maxWidth: 1040 }}>
            Zobacz, czego naprawdę potrzebuje
          </div>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 700, color: "#D81E24", lineHeight: 1.05 }}>
            Twoje ciało.
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#5B6472", maxWidth: 980, lineHeight: 1.4, marginTop: 10 }}>
            Mikroskopowe badanie żywej kropli krwi · testy nietolerancji pokarmowych · analiza
            niedoborów Analizatorem Quantum · biorezonans. W Kaliszu od 2016.
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 22, color: "#14171F" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ display: "flex", width: 8, height: 32, borderRadius: 6, background: "#D81E24" }} />
            <div style={{ display: "flex" }}>witaliskalisz.pl · ul. Babina 6, Kalisz</div>
          </div>
          <div style={{ display: "flex", fontWeight: 700 }}>tel. 881 353 444</div>
        </div>
      </div>
    ),
    size
  );
}
