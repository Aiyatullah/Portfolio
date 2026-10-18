"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

export default function SceneLoader() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    try {
      const c = document.createElement("canvas");
      setOk(!!(c.getContext("webgl2") || c.getContext("webgl")));
    } catch {
      setOk(false);
    }
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(60% 50% at 75% 35%, rgb(200 255 61 / 0.10), transparent 70%), radial-gradient(50% 50% at 20% 80%, rgb(80 150 255 / 0.10), transparent 70%)",
        }}
      />
      {ok && <Scene />}
    </>
  );
}
