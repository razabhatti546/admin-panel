"use client";

import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function ReferralOverview() {
  const totalUsers = 30000;
  const registeredUsers = 15000;
  const referralBonus = 15000;

  // Chart data
  const chartData = {
    datasets: [
      {
        data: [registeredUsers, totalUsers - registeredUsers],
        backgroundColor: [
          "rgba(249, 191, 59, 1)", // Yellow for registered users
          "rgb(136, 105, 34)", // Dark gray for remaining
        ],
        borderWidth: 0,
        cutout: "75%",
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="h-full p-4 bg-black border border-gray-800 rounded-lg shadow flex flex-col">
      <h2 className="text-white text-lg font-medium mb-4">
        Referrals overview
      </h2>

      <div className="flex-grow flex flex-col items-center justify-center">
        {/* Chart Container */}
        <div className="relative w-full max-w-[180px] mx-auto aspect-square flex items-center justify-center">
          <Doughnut data={chartData} options={chartOptions} />

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="text-center">
              <div className="text-xs text-gray-400">Total users</div>
              <div className="text-xl font-bold">30k</div>
            </div>
          </div>
        </div>

        {/* Labels at bottom */}
        <div className="flex justify-between w-full mt-8">
          <div className="flex items-center">
            <div
              className="w-1 h-8 mr-2 "
              style={{ backgroundColor: "rgb(136, 105, 34)" }}
            ></div>
            <div>
              <div className="text-xs text-gray-400">Registered Users</div>
              <div className="text-base font-bold text-white">15k</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1 h-8 bg-yellow-500 mr-2 "></div>
            <div>
              <div className="text-xs text-gray-400">Referral Bonus</div>
              <div className="text-base font-bold text-white">15k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
