"use client";

import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function SubscriptionOverview() {
  // Values for full and half payment
  const totalUsers = 10000;
  const fullPaymentUsers = 5000;
  const halfPaymentUsers = 5000;

  // Chart data
  const chartData = {
    datasets: [
      {
        data: [
          fullPaymentUsers,
          halfPaymentUsers,
          totalUsers - fullPaymentUsers - halfPaymentUsers,
        ],
        backgroundColor: [
          "rgba(59, 130, 246, 1)", // Blue for full payment
          "rgba(168, 85, 247, 1)", // Purple for half payment
          "rgba(31, 31, 31, 0.3)", // Dark gray for remaining
        ],
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
        cutout: "92%",
        borderRadius: 0,
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
      <h2 className="text-white text-lg font-medium ">Subscription Overview</h2>

      <div className="flex-grow flex flex-col items-center justify-center">
        {/* Chart Container */}
        <div className="relative w-full max-w-[230px] h-[230px] mx-auto flex items-center justify-center">
          <Doughnut data={chartData} options={chartOptions} />

          {/* Center content */}
          <div className="absolute mt-20 inset-0 flex flex-col items-center justify-center text-white">
            <div className="flex items-center justify-center mb-1">
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="8" r="4" fill="white" />
                <circle cx="18" cy="12" r="2" fill="white" />
                <circle cx="6" cy="12" r="2" fill="white" />
                <circle cx="15" cy="16" r="2" fill="white" />
                <circle cx="9" cy="16" r="2" fill="white" />
              </svg>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400">Total Users</div>
              <div className="text-xl font-bold">30K</div>
            </div>
          </div>
        </div>

        {/* Labels at bottom */}
        <div className="flex justify-between w-full mt-8">
          <div className="flex items-center">
            <div className="w-2 h-8 bg-blue-500 mr-2 rounded-sm"></div>
            <div>
              <div className="text-xs text-gray-400">Full Payment</div>
              <div className="text-base font-bold text-white">5k</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-8 bg-purple-500 mr-2 rounded-sm"></div>
            <div>
              <div className="text-xs text-gray-400">Half Payment</div>
              <div className="text-base font-bold text-white">5k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
