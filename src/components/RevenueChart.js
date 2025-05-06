"use client";

import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function RevenueChart() {
  const [highlightedPointInfo] = useState({
    date: "23 Aug 2024",
    value: 55000,
  });

  // Data for the revenue chart
  const monthsLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dataPoints = [
    30000, 35000, 45000, 40000, 48000, 55000, 50000, 55000, 45000, 50000, 58000,
    60000,
  ];

  // Highlighted point (August)
  const highlightedPointIndex = 7; // August (8th month, 0-indexed is 7)

  const data = {
    labels: monthsLabels,
    datasets: [
      {
        data: dataPoints,
        borderColor: "#10b981", // Green line color
        backgroundColor: "transparent",
        tension: 0.4, // Makes the line curved
        pointRadius: (ctx) => {
          const index = ctx.dataIndex;
          return index === highlightedPointIndex ? 6 : 0; // Only show the highlighted point
        },
        pointBackgroundColor: "#10b981",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: "#9ca3af",
          font: {
            size: 10,
          },
        },
        border: {
          display: false,
        },
      },
      y: {
        position: "left",
        min: 0,
        max: 70000,
        border: {
          display: false,
        },
        grid: {
          color: "#2d3748",
          drawBorder: false,
        },
        ticks: {
          color: "#9ca3af",
          font: {
            size: 10,
          },
          callback: function (value) {
            if (value === 0) return "0";
            return value / 1000 + "k";
          },
          padding: 10,
          stepSize: 10000,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
    interaction: {
      mode: "nearest",
      intersect: false,
      axis: "x",
    },
  };

  // Custom tooltip plugin
  const tooltipPlugin = {
    id: "customTooltip",
    afterDraw(chart) {
      const { ctx } = chart;
      const meta = chart.getDatasetMeta(0);
      const point = meta.data[highlightedPointIndex];

      if (point) {
        const { x, y } = point.getCenterPoint();

        // Draw tooltip box
        const padding = 8;
        const tooltipWidth = 80;
        const tooltipHeight = 46;

        ctx.save();

        // Draw tooltip background
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.roundRect(
          x - tooltipWidth / 2,
          y - tooltipHeight - 10,
          tooltipWidth,
          tooltipHeight,
          4
        );
        ctx.fill();

        // Draw date text
        ctx.fillStyle = "#000";
        ctx.textAlign = "center";
        ctx.font = "10px sans-serif";
        ctx.fillText(highlightedPointInfo.date, x, y - tooltipHeight + 15);

        // Draw value text
        ctx.fillStyle = "#10b981";
        ctx.font = "bold 12px sans-serif";
        ctx.fillText(
          `$${highlightedPointInfo.value.toLocaleString()}`,
          x,
          y - tooltipHeight + 35
        );

        ctx.restore();
      }
    },
  };

  return (
    <div className="h-full w-full flex-grow p-4 bg-black border border-gray-800 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-medium">Yearly overview</h2>
        <div className="text-xl font-bold text-green-500">
          $5500 <span className="text-xs text-green-400">+4%</span>
        </div>
      </div>
      <div className="h-[220px] w-full">
        <Line data={data} options={options} plugins={[tooltipPlugin]} />
      </div>
    </div>
  );
}
