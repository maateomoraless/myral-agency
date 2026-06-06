"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition() {
  const pathname = usePathname();
  const [width, setWidth] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);
    setWidth(0);
    const t1 = setTimeout(() => setWidth(100), 50);
    const t2 = setTimeout(() => setOpacity(0), 400);
    const t3 = setTimeout(() => setWidth(0), 650);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "2px",
        width: `${width}%`,
        background: "#F5E614",
        zIndex: 9998,
        opacity: opacity,
        transition: width === 100 ? "width 0.35s ease-in" : "none",
        pointerEvents: "none",
        boxShadow: "0 0 8px rgba(245,230,20,0.6)",
      }}
    />
  );
}
