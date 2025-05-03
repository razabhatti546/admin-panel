"use client";

import ReferralOverview from "@/components/ReferralOverview";
import YearlyOverview from "@/components/YearlyOverview";
import ReferralTable from "@/components/ReferralTable";

export default function ReferralsPage() {
  return (
    <div className=" bg-black min-h-screen">
      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
        <div className="md:col-span-4">
          <ReferralOverview />
        </div>
        <div className="md:col-span-8">
          <YearlyOverview />
        </div>
      </div>

      {/* Referral Table */}
      <div className="mb-6">
        <ReferralTable />
      </div>
    </div>
  );
}
