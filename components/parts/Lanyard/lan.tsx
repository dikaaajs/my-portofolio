// components/LanyardWrapper.tsx
"use client";

import dynamic from "next/dynamic";

// Import Lanyard secara dinamis + non-SSR
const Lanyard = dynamic(() => import("./Lanyard"), {
  ssr: false,
});

export default function LanyardWrapper() {
  return <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />;
}
