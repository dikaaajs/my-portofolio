"use client";

import Aurora from "@/public/background/Aurora/Aurora";

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-950">
      {/* <LanyardWrapper /> */}
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
    </div>
  );
}
