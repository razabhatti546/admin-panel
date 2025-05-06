"use client";

import dynamic from "next/dynamic";

const SubscriptionStats = dynamic(() => import("./SubscriptionStats"), {
  ssr: false,
});

export default function ClientSubscriptionStats() {
  return <SubscriptionStats />;
}
