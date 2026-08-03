import { ImageResponse } from "next/og";
import { personalInfo } from "@/data/personal-info";

export const alt = `${personalInfo.name} — ${personalInfo.shareTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#07070a",
          color: "#f8fafc",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,.42), rgba(37,99,235,.18) 45%, transparent 72%)",
            display: "flex",
            height: 720,
            position: "absolute",
            right: -120,
            top: -180,
            width: 720,
          }}
        />
        <div
          style={{
            border: "1px solid #27272f",
            borderRadius: 36,
            display: "flex",
            flexDirection: "column",
            padding: "64px 72px",
            position: "relative",
            width: 1040,
          }}
        >
          <div style={{ color: "#a855f7", display: "flex", fontSize: 54, fontWeight: 800, letterSpacing: -2 }}>{`<${personalInfo.visualSignature} />`}</div>
          <div style={{ display: "flex", fontSize: 70, fontWeight: 750, letterSpacing: -3, marginTop: 56 }}>{personalInfo.name}</div>
          <div style={{ color: "#94a3b8", display: "flex", fontSize: 34, marginTop: 18 }}>{personalInfo.shareTitle}</div>
          <div
            style={{
              background: "linear-gradient(90deg, #7c3aed, #38bdf8)",
              borderRadius: 999,
              display: "flex",
              height: 8,
              marginTop: 58,
              width: 330,
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
