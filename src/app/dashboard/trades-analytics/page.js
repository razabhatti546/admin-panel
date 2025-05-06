"use client";

import { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function TradesAnalyticsPage() {
  // State for time period selection
  const [timePeriod, setTimePeriod] = useState("6 Months");

  // Mock data for different time periods
  const chartDatasets = {
    "1 Month": {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      profit: [90, 120, 80, 150, 100, 70, 130],
      loss: [40, 60, 30, 50, 20, 40, 60],
      totalValue: "2,145,62.00",
      percentChange: "+3.2%",
    },
    "3 Months": {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      profit: [120, 180, 140, 190, 130, 90, 160],
      loss: [50, 80, 40, 70, 30, 60, 80],
      totalValue: "3,874,21.00",
      percentChange: "+4.1%",
    },
    "6 Months": {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      profit: [150, 220, 180, 230, 170, 100, 250],
      loss: [70, 120, 60, 90, 40, 80, 120],
      totalValue: "5,987,34.00",
      percentChange: "+5%",
    },
    "1 Year": {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      profit: [200, 280, 240, 320, 220, 180, 290],
      loss: [90, 150, 80, 130, 60, 100, 140],
      totalValue: "8,624,93.00",
      percentChange: "+7.8%",
    },
  };

  // Commission Earned chart data
  const commissionChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Commission",
        data: [500, 1800, 5000, 6000, 10000, 12000],
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#10B981",
        pointBorderColor: "#10B981",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  // Commission chart options
  const commissionChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: "#9CA3AF",
        },
        offset: false,
        border: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
        min: 0,
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#1F2937",
        titleColor: "#F9FAFB",
        bodyColor: "#F9FAFB",
        borderColor: "#4B5563",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function (context) {
            return `$${context.parsed.y.toLocaleString()}`;
          },
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        hitRadius: 8,
      },
    },
  };

  // Get current chart data based on selected time period
  const currentChartData = {
    labels: chartDatasets[timePeriod].labels,
    datasets: [
      {
        label: "Profit",
        data: chartDatasets[timePeriod].profit,
        backgroundColor: "#10B981", // Green color for profit
        barPercentage: 0.5,
        borderRadius: 4,
      },
      {
        label: "Loss",
        data: chartDatasets[timePeriod].loss,
        backgroundColor: "#EF4444", // Red color for loss
        barPercentage: 0.5,
        borderRadius: 4,
      },
    ],
  };

  // Handler for dropdown change
  const handleTimeChange = (e) => {
    setTimePeriod(e.target.value);
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: "#9CA3AF", // Gray color for x-axis labels
        },
      },
      y: {
        grid: {
          color: "#374151", // Dark grid lines
          drawBorder: false,
        },
        ticks: {
          color: "#9CA3AF", // Gray color for y-axis labels
          maxTicksLimit: 5,
        },
        min: 0,
        max: 300,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "#9CA3AF",
          boxWidth: 12,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        backgroundColor: "#1F2937",
        titleColor: "#F9FAFB",
        bodyColor: "#F9FAFB",
        borderColor: "#4B5563",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
      },
    },
  };

  return (
    <div className="p-6 bg-black">
      {/* Stat Cards */}

      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Trades Overview Chart - 2 columns width */}
        <div className="col-span-2 bg-stone-900 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-white text-lg font-bold">Trades Overview</h2>
              <p className="text-gray-400 text-sm">Last {timePeriod}</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-green-500 font-bold text-lg">
                {chartDatasets[timePeriod].percentChange}
              </div>
              <select
                value={timePeriod}
                onChange={handleTimeChange}
                className="bg-stone-800 text-gray-300 text-sm rounded-lg p-2 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-yellow-500"
              >
                <option>1 Month</option>
                <option>3 Months</option>
                <option>6 Months</option>
                <option>1 Year</option>
              </select>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <h3 className="text-green-500 text-2xl font-bold">
              {chartDatasets[timePeriod].totalValue}
            </h3>
          </div>

          <div className="h-60">
            <Bar data={currentChartData} options={chartOptions} />
          </div>
        </div>

        {/* Commission Earned Chart - 1 column width */}
        <div className="col-span-1 bg-stone-900 rounded-lg p-6">
          <div className="flex flex-col mb-4">
            <h2 className="text-white text-lg font-bold">Commission Earned</h2>
            <p className="text-gray-400 text-sm">This Month</p>
          </div>

          <div className="flex items-center mb-4">
            <h3 className="text-green-500 text-2xl font-bold">$10,000.00</h3>
            <span className="text-green-500 text-sm font-medium ml-2">+9%</span>
          </div>

          <div className="h-60">
            <Line data={commissionChartData} options={commissionChartOptions} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Total Active Trades */}
        <div className=" flex flex-col bg-black border border-gray-700 rounded-lg p-4 flex justify-between items-center">
          <div className="flex items-center justify-between w-full">
            <div className="w-10 h-10 rounded-md bg-amber-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <p className="text-white text-xl font-bold mt-1">30K</p>
          </div>
          <p className="text-white font-bold mt-8 text-md  w-full">
            T.No of Active Trades
          </p>
        </div>

        {/* Active Positive Trades */}
        <div className=" flex flex-col bg-black border border-gray-700 rounded-lg p-4 flex justify-between items-center">
          <div className="flex items-center justify-between w-full">
            <div className="w-10 h-10 rounded-md bg-green-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-white text-xl font-bold mt-1">30K</p>
          </div>
          <p className="text-white font-bold mt-8 text-md  w-full">
            Active Positive Trades
          </p>
        </div>

        {/* Negative Trades */}
        <div className=" flex flex-col bg-black border border-gray-700 rounded-lg p-4 flex justify-between items-center">
          <div className="flex items-center justify-between w-full">
            <div className="w-10 h-10 rounded-md bg-red-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-white text-xl font-bold mt-1">5K</p>
          </div>
          <p className="text-white font-bold mt-8 text-md  w-full">
            Negative Trades
          </p>
        </div>
      </div>

      {/* Traders List Table */}
      <div className="bg-black mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-lg font-bold">Traders list</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search User"
              className="bg-stone-900 border border-gray-700 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400 absolute right-3 top-2.5"
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
              <tr className="border-b border-gray-700">
                <th className="py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  User Id
                </th>
                <th className="py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Referral Id
                </th>
                <th className="py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Name
                </th>
                <th className="py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Total Trades
                </th>
                <th className="py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  No of Success Trades
                </th>
                <th className="py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Commission Earned
                </th>
                <th className="py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Estimated Profit
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  userId: "11",
                  referralId: "HEIST23154",
                  name: "Ahmed Ali",
                  totalTrades: "1500k",
                  successTrades: "1005k",
                  commission: "$10,000",
                  profit: "$10,000",
                },
                {
                  userId: "11",
                  referralId: "HEIST23154",
                  name: "Ahmed Ali",
                  totalTrades: "1500k",
                  successTrades: "1005k",
                  commission: "$10,000",
                  profit: "$10,000",
                },
                {
                  userId: "11",
                  referralId: "HEIST23154",
                  name: "Ahmed Ali",
                  totalTrades: "1500k",
                  successTrades: "1005k",
                  commission: "$10,000",
                  profit: "$10,000",
                },
                {
                  userId: "11",
                  referralId: "HEIST23154",
                  name: "Ahmed Ali",
                  totalTrades: "1500k",
                  successTrades: "1005k",
                  commission: "$10,000",
                  profit: "$10,000",
                },
              ].map((trader, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="py-4 text-sm text-white">{trader.userId}</td>
                  <td className="py-4 text-sm text-white">
                    {trader.referralId}
                  </td>
                  <td className="py-4 text-sm">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center text-xs text-white mr-2">
                        {trader.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className="text-white">{trader.name}</span>
                    </div>
                  </td>
                  <td className="py-4 text-sm text-white">
                    {trader.totalTrades}
                  </td>
                  <td className="py-4 text-sm text-white">
                    {trader.successTrades}
                  </td>
                  <td className="py-4 text-sm text-green-500 font-medium">
                    {trader.commission}
                  </td>
                  <td className="py-4 text-sm text-green-500 font-medium">
                    {trader.profit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
