"use client";

import dynamic from "next/dynamic";

const RevenueChart = dynamic(() => import("./RevenueChart"), {
  ssr: false,
});

export default function ClientRevenueChart() {
  return <RevenueChart />;
}
