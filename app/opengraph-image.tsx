import { ImageResponse } from "next/og";

export const alt = "Saiyed Aiyatullah — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
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
          background: "radial-gradient(circle at 80% 20%, #1b2a05 0%, #07070a 55%)",
          color: "#ececf1",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#c8ff3d", fontSize: 26 }}>
          <div style={{ width: 14, height: 14, borderRadius: 14, background: "#c8ff3d" }} />
          Open to Backend / AI engineering roles
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>Saiyed Aiyatullah</div>
          <div style={{ fontSize: 48, color: "#8b8b98", marginTop: 18 }}>engineers backends for</div>
          <div style={{ fontSize: 48, color: "#c8ff3d" }}>AI products.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#8b8b98" }}>
          <span>Software Engineer · Backend / Full-Stack / AI</span>
          <span>NestJS · Next.js · PostgreSQL · MCP</span>
        </div>
      </div>
    ),
    size,
  );
}
