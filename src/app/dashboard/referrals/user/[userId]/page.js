"use client";

import ReferralDetail from "@/components/ReferralDetail";

export default function ReferralDetailPage({ params }) {
  const { userId } = params;

  return (
    <div className="bg-black ">
      <ReferralDetail userId={userId} />
    </div>
  );
}
