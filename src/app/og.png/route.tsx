import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { formatNumber, getStats } from "@/lib/stats";

export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

const font = (weight: number) =>
  readFile(join(process.cwd(), `node_modules/@fontsource/raleway/files/raleway-latin-${weight}-normal.woff`));

const maintained = ["Vovk.ts", "uicast", "standard-tool"];

const Heart = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#e34c26"
      d="M12 21s-7.5-4.6-9.6-9.3C.9 8.2 3.1 4 7 4c2.2 0 3.7 1.2 5 3 1.3-1.8 2.8-3 5-3 3.9 0 6.1 4.2 4.6 7.7C19.5 16.4 12 21 12 21z"
    />
  </svg>
);

const Star = () => (
  <svg width={30} height={30} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#000" d="M12 2l3 6.9 7.5.7-5.7 5 1.7 7.4L12 18.2 5.5 22l1.7-7.4-5.7-5 7.5-.7z" />
  </svg>
);

// Lucide's "download" icon (ISC license), as on the page.
const Download = () => (
  <svg width={30} height={30} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="none"
      stroke="#000"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
    />
  </svg>
);

export async function GET() {
  const [regular, black, stats] = await Promise.all([font(400), font(900), getStats()]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#fff",
        padding: "72px 80px 64px",
        fontFamily: "Raleway",
        color: "#000",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 108, fontWeight: 900, letterSpacing: -4, lineHeight: 1 }}>Open Source</div>
          <div style={{ fontSize: 108, fontWeight: 900, letterSpacing: -4, lineHeight: 1 }}>Projects</div>
          <div style={{ display: "flex", fontSize: 36, marginTop: 34 }}>
            by&nbsp;<span style={{ color: "#2e83e5" }}>Andrey Gubanov</span>
          </div>
          <div style={{ fontSize: 26, marginTop: 14, color: "#9b9b9b" }}>since 2011</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", marginTop: 14 }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 44, fontWeight: 900 }}>
            <Star />
            <span style={{ marginLeft: 12 }}>{formatNumber(stats.totalStars)}</span>
          </div>
          <div style={{ fontSize: 22, color: "#9b9ba2", marginTop: 4 }}>GitHub stars</div>
          <div style={{ display: "flex", alignItems: "center", fontSize: 44, fontWeight: 900, marginTop: 30 }}>
            <Download />
            <span style={{ marginLeft: 12 }}>{formatNumber(stats.totalDownloads)}</span>
          </div>
          <div style={{ fontSize: 22, color: "#9b9ba2", marginTop: 4 }}>npm installs a week</div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", fontSize: 34, fontWeight: 900, color: "#2e83e5" }}>
          {maintained.map((name) => (
            <div key={name} style={{ display: "flex", alignItems: "center", marginRight: 40 }}>
              <Heart size={28} />
              <span style={{ marginLeft: 10 }}>{name}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#9b9b9b" }}>opensource.gubanov.eu</div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Raleway", data: regular, weight: 400, style: "normal" },
        { name: "Raleway", data: black, weight: 900, style: "normal" },
      ],
    },
  );
}
