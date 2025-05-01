"use client";

import dynamic from "next/dynamic";

// Use dynamic import with no SSR for Chart.js components
const EarningsChart = dynamic(() => import("./EarningsChart"), {
  ssr: false,
});

export default function ClientEarningsChart() {
  return <EarningsChart />;
}
