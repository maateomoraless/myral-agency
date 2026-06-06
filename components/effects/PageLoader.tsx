"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [phase, setPhase] = useState(0);
  const [visible, setVisible] = useState(true);
  const [letters, setLetters] = useState([false, false, false, false, false]);
  const [fontFamily, setFontFamily] = useState("Georgia, serif");
  const [fontSize, setFontSize] = useState(80);
  const [fontWeight, setFontWeight] = useState(800);
  const [letterSpacing, setLetterSpacing] = useState("-2px");
  const [rotation, setRotation] = useState(0);
  const [dotVisible, setDotVisible] = useState(false);
  const [dotScale, setDotScale] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [textBounce, setTextBounce] = useState(false);
  const [gridVisible, setGridVisible] = useState(false);
  const [toolbarVisible, setToolbarVisible] = useState(false);
  const [fontLabel, setFontLabel] = useState("Georgia");
  const [sizeLabel, setSizeLabel] = useState("80");
  const [btnBLit, setBtnBLit] = useState(false);
  const [fontSelectorLit, setFontSelectorLit] = useState(false);

  const t = (ms: number) => new Promise((r) => setTimeout(r, ms));

  useEffect(() => {
    const fonts: [string, string][] = [
      ["Georgia, serif", "Georgia"],
      ["Courier New, monospace", "Courier New"],
      ['"Times New Roman", serif', "Times New"],
      ["Impact, sans-serif", "Impact"],
      ["Arial Black, sans-serif", "Arial Black"],
      ["Syne, sans-serif", "Syne 800"],
    ];

    async function animate() {
      await t(300);
      setGridVisible(true);
      await t(400);
      setToolbarVisible(true);
      await t(400);

      for (let i = 0; i < 5; i++) {
        setLetters((prev) => {
          const n = [...prev];
          n[i] = true;
          return n;
        });
        await t(95);
      }
      await t(300);
      setPhase(1);

      for (let i = 0; i < fonts.length; i++) {
        setFontFamily(fonts[i][0]);
        setFontLabel(fonts[i][1]);
        await t(150);
      }
      setFontSelectorLit(true);
      await t(350);

      const sizes = [48, 36, 96, 64, 80];
      for (const s of sizes) {
        setFontSize(s);
        setSizeLabel(String(s));
        await t(140);
      }
      await t(200);

      const weights = [300, 400, 600, 700, 800];
      for (const w of weights) {
        setFontWeight(w);
        await t(130);
      }
      setBtnBLit(true);
      await t(300);

      const spacings = ["4px", "8px", "0px", "-4px", "-2px"];
      for (const sp of spacings) {
        setLetterSpacing(sp);
        await t(120);
      }
      await t(200);

      setRotation(-5);
      await t(250);
      setRotation(3);
      await t(200);
      setRotation(0);
      await t(300);

      setDotVisible(true);
      await t(100);
      setDotScale(1);
      await t(600);

      setFontFamily("Syne, sans-serif");
      setFontWeight(800);
      setFontSize(80);
      setLetterSpacing("-2px");
      setFontLabel("Syne 800");
      setSizeLabel("80");
      setTextBounce(true);
      await t(400);
      setTextBounce(false);
      await t(500);

      setFadeOut(true);
      await t(800);
      setVisible(false);
    }

    animate();
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#05050b",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.8s ease",
        fontFamily: "DM Sans, sans-serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@300;400;600;700;800&family=DM+Sans:wght@300;400&display=swap"
        rel="stylesheet"
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(245,230,20,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: gridVisible ? 1 : 0,
          transition: "opacity 1.2s",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 40,
          display: "flex",
          alignItems: "center",
          gap: 4,
          background: "#13131a",
          border: "1px solid #2a2a3a",
          borderRadius: 8,
          padding: "7px 14px",
          opacity: toolbarVisible ? 1 : 0,
          transition: "opacity 0.4s",
        }}
      >
        <div
          style={{
            padding: "3px 8px",
            borderRadius: 4,
            fontSize: 11,
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
            border: `1px solid ${btnBLit ? "#F5E614" : "#2a2a3a"}`,
            background: btnBLit ? "rgba(245,230,20,0.15)" : "transparent",
            color: btnBLit ? "#F5E614" : "#555",
            transition: "all 0.2s",
          }}
        >
          B
        </div>
        <div style={{ width: 1, height: 14, background: "#2a2a3a", margin: "0 4px" }} />
        <div
          style={{
            padding: "2px 6px",
            borderRadius: 4,
            fontSize: 10,
            border: "1px solid #2a2a3a",
            background: "#1a1a28",
            color: "#666",
            fontFamily: "Arial, sans-serif",
            minWidth: 28,
            textAlign: "center",
          }}
        >
          {sizeLabel}
        </div>
        <div style={{ width: 1, height: 14, background: "#2a2a3a", margin: "0 4px" }} />
        <div
          style={{
            padding: "2px 10px",
            borderRadius: 4,
            fontSize: 10,
            border: `1px solid ${fontSelectorLit ? "#F5E614" : "#2a2a3a"}`,
            background: "#1a1a28",
            color: fontSelectorLit ? "#F5E614" : "#666",
            fontFamily: "Arial, sans-serif",
            minWidth: 76,
            textAlign: "center",
            transition: "all 0.25s",
          }}
        >
          {fontLabel}
        </div>
        <div style={{ width: 1, height: 14, background: "#2a2a3a", margin: "0 4px" }} />
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: 3,
            background: "#F5E614",
            boxShadow: fontSelectorLit ? "0 0 0 3px rgba(245,230,20,0.35)" : "none",
            transition: "box-shadow 0.3s",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.3s ease",
          animation: textBounce ? "page-loader-bounce 0.4s cubic-bezier(0.34,1.56,0.64,1)" : undefined,
        }}
      >
          <div
            style={{
              fontSize: fontSize,
              fontWeight: fontWeight,
              fontFamily: fontFamily,
              letterSpacing: letterSpacing,
              color: "#f0ede8",
              lineHeight: 1,
              display: "flex",
              transition: "font-size 0.15s, font-weight 0.15s, letter-spacing 0.2s, font-family 0.08s",
            }}
          >
            {"MYRAL".split("").map((letter, i) => (
              <span
                key={i}
                style={{
                  opacity: letters[i] ? 1 : 0,
                  transform: letters[i] ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.1s, transform 0.1s",
                  display: "inline-block",
                }}
              >
                {letter}
              </span>
            ))}
            {phase === 0 && (
              <span
                style={{
                  display: "inline-block",
                  width: 3,
                  height: fontSize,
                  background: "#F5E614",
                  marginLeft: 3,
                  verticalAlign: "top",
                  animation: "blink 0.55s infinite",
                }}
              />
            )}
          </div>
          {dotVisible && (
            <span
              style={{
                fontSize: fontSize,
                fontWeight: 800,
                fontFamily: "Syne, sans-serif",
                color: "#F5E614",
                lineHeight: 1,
                display: "inline-block",
                marginLeft: 2,
                transform: `scale(${dotScale}) rotate(${dotScale === 0 ? -180 : 0}deg)`,
                opacity: dotVisible ? 1 : 0,
                transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s",
              }}
            >
              .
            </span>
          )}
      </div>

      <style>{`
        @keyframes blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }
        @keyframes page-loader-bounce {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
