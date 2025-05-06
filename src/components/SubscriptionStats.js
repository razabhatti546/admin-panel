"use client";

import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function SubscriptionStats() {
  const totalUsers = 30000;
  const basicPlan = 15000;
  const proPlan = 10000;
  const premiumPlan = 5000;

  // Chart data
  const chartData = {
    datasets: [
      {
        data: [basicPlan, proPlan, premiumPlan],
        backgroundColor: [
          "rgba(249, 191, 59, 1)", // Yellow for basic plan
          "rgba(59, 130, 246, 1)", // Blue for pro plan
          "rgba(168, 85, 247, 1)", // Purple for premium plan
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
        Subscription overview
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
            <div className="w-1 h-8 bg-yellow-500 mr-2"></div>
            <div>
              <div className="text-xs text-gray-400">Basic Plan</div>
              <div className="text-base font-bold text-white">15k</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1 h-8 bg-blue-500 mr-2"></div>
            <div>
              <div className="text-xs text-gray-400">Pro Plan</div>
              <div className="text-base font-bold text-white">10k</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1 h-8 bg-purple-500 mr-2"></div>
            <div>
              <div className="text-xs text-gray-400">Premium Plan</div>
              <div className="text-base font-bold text-white">5k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
