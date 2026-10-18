"use client";

import { useState } from "react";
import CommandPalette from "./CommandPalette";
import Cursor from "./Cursor";
import Nav from "./Nav";
import SceneLoader from "./SceneLoader";

export default function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="grain">
      <SceneLoader />
      <div aria-hidden className="vignette" />
      <Cursor />
      <Nav onPalette={() => setOpen(true)} />
      <CommandPalette open={open} setOpen={setOpen} />
      <main>{children}</main>
    </div>
  );
}
