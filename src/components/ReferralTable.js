"use client";

import { useState } from "react";

export default function ReferralTable() {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data for referrals
  const referrals = [
    {
      userId: "11",
      referralId: "HEIST23154",
      name: "Ahmed Ali",
      verifiedReferrals: 30,
      pendingReferrals: 20,
      rewardsReceived: 300,
    },
    {
      userId: "11",
      referralId: "-",
      name: "Ahmed Ali",
      verifiedReferrals: 30,
      pendingReferrals: 20,
      rewardsReceived: 300,
    },
    {
      userId: "11",
      referralId: "HEIST23154",
      name: "Ahmed Ali",
      verifiedReferrals: 30,
      pendingReferrals: 20,
      rewardsReceived: 300,
    },
    {
      userId: "11",
      referralId: "-",
      name: "Ahmed Ali",
      verifiedReferrals: 30,
      pendingReferrals: 20,
      rewardsReceived: 300,
    },
  ];

  // Filter referrals based on search term
  const filteredReferrals = referrals.filter(
    (referral) =>
      referral.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      referral.referralId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      referral.userId.includes(searchTerm)
  );

  return (
    <div className="bg-black">
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-white text-lg font-medium">Referral Lists</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search User"
            className="w-64 pl-8 pr-3 py-1.5 bg-gray-900 border border-gray-700 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-t border-b border-gray-800">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">
                User Id
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">
                Referral Id
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">
                Name
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-400">
                Verified Referrals
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-400">
                Pending Referrals
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-400">
                Rewards Received
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-400">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredReferrals.map((referral, index) => (
              <tr key={index} className="border-b border-gray-800">
                <td className="px-6 py-4 text-sm text-white">
                  {referral.userId}
                </td>
                <td className="px-6 py-4 text-sm text-white">
                  {referral.referralId}
                </td>
                <td className="px-6 py-4 text-sm text-white">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center mr-2 text-sm text-white">
                      {referral.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    {referral.name}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-green-500 text-center">
                  {referral.verifiedReferrals}
                </td>
                <td className="px-6 py-4 text-sm text-red-500 text-center">
                  {referral.pendingReferrals}
                </td>
                <td className="px-6 py-4 text-sm text-white text-center">
                  ${referral.rewardsReceived}
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="bg-yellow-500 text-black rounded-full w-6 h-6 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
