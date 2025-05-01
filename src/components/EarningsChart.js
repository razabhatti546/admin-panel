"use client";

import { useState, useEffect } from "react";
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

// Polyfill for roundRect
function setupRoundedRect() {
  if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function (
      x,
      y,
      width,
      height,
      radius
    ) {
      if (width < 2 * radius) radius = width / 2;
      if (height < 2 * radius) radius = height / 2;
      this.beginPath();
      this.moveTo(x + radius, y);
      this.arcTo(x + width, y, x + width, y + height, radius);
      this.arcTo(x + width, y + height, x, y + height, radius);
      this.arcTo(x, y + height, x, y, radius);
      this.arcTo(x, y, x + width, y, radius);
      this.closePath();
      return this;
    };
  }
}

export default function EarningsChart() {
  const [dateRange, setDateRange] = useState("02 May - 08 May");

  // Setup roundRect polyfill when component mounts
  useEffect(() => {
    setupRoundedRect();
  }, []);

  // Sample data for the chart
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dataPoints = [5000, 20000, 15000, 10000, 18000, 25000, 32000];

  // Highlighted point (like in the image)
  const highlightedPointIndex = 3; // Thursday
  const highlightedValue = dataPoints[highlightedPointIndex];
  const highlightedDate = "23 Aug 2024";

  const data = {
    labels,
    datasets: [
      {
        data: dataPoints,
        borderColor: "#10b981", // Green line color
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(16, 185, 129, 0.4)");
          gradient.addColorStop(1, "rgba(16, 185, 129, 0)");
          return gradient;
        },
        tension: 0.4, // Makes the line curved
        fill: true,
        pointRadius: 0, // Hide all points by default
        pointHoverRadius: 6,
        pointBackgroundColor: "#10b981",
        pointHoverBackgroundColor: "#10b981",
        pointBorderColor: "#fff",
        pointHoverBorderColor: "#fff",
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
      },
    ],
  };

  // Custom point styling to show only the highlighted point
  const plugins = [
    {
      id: "highlightedPoint",
      afterDatasetsDraw(chart) {
        const { ctx, scales } = chart;
        const dataset = chart.data.datasets[0];
        const meta = chart.getDatasetMeta(0);

        // Only draw the highlighted point
        if (meta.data[highlightedPointIndex]) {
          const { x, y } = meta.data[highlightedPointIndex].getCenterPoint();

          // Draw the outer white circle
          ctx.beginPath();
          ctx.arc(x, y, 8, 0, 2 * Math.PI);
          ctx.fillStyle = "#fff";
          ctx.fill();

          // Draw the inner green circle
          ctx.beginPath();
          ctx.arc(x, y, 6, 0, 2 * Math.PI);
          ctx.fillStyle = "#10b981";
          ctx.fill();

          // Draw the tooltip box
          const boxWidth = 90;
          const boxHeight = 46;
          const boxX = x - boxWidth / 2;
          const boxY = y - boxHeight - 10;

          // Draw tooltip container - using manual rounded rect for better compatibility
          ctx.beginPath();
          if (ctx.roundRect) {
            ctx.roundRect(boxX, boxY, boxWidth, boxHeight, 8);
          } else {
            // Fallback if roundRect is not available
            const radius = 8;
            ctx.moveTo(boxX + radius, boxY);
            ctx.lineTo(boxX + boxWidth - radius, boxY);
            ctx.quadraticCurveTo(
              boxX + boxWidth,
              boxY,
              boxX + boxWidth,
              boxY + radius
            );
            ctx.lineTo(boxX + boxWidth, boxY + boxHeight - radius);
            ctx.quadraticCurveTo(
              boxX + boxWidth,
              boxY + boxHeight,
              boxX + boxWidth - radius,
              boxY + boxHeight
            );
            ctx.lineTo(boxX + radius, boxY + boxHeight);
            ctx.quadraticCurveTo(
              boxX,
              boxY + boxHeight,
              boxX,
              boxY + boxHeight - radius
            );
            ctx.lineTo(boxX, boxY + radius);
            ctx.quadraticCurveTo(boxX, boxY, boxX + radius, boxY);
          }
          ctx.fillStyle = "#fff";
          ctx.fill();

          // Draw date text
          ctx.font = "11px Inter, sans-serif";
          ctx.fillStyle = "#000";
          ctx.textAlign = "center";
          ctx.fillText(highlightedDate, x, boxY + 18);

          // Draw value text
          ctx.font = "bold 14px Inter, sans-serif";
          ctx.fillStyle = "#10b981";
          ctx.fillText(`$${highlightedValue.toLocaleString()}`, x, boxY + 36);
        }
      },
    },
  ];

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
            size: 12,
          },
        },
        border: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 50000,
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
            size: 12,
          },
          callback: function (value) {
            if (value === 0) return "$0";
            return `$${value / 1000}k`;
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
        enabled: false, // Disable default tooltips
      },
    },
    interaction: {
      mode: "nearest",
      intersect: false,
      axis: "x",
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
  };

  return (
    <div className="p-6 bg-black border border-gray-800 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-white text-lg font-medium">
            Total Commission Earn through Trades
          </h2>
          <div className="flex items-baseline space-x-2 mt-1">
            <span className="text-[#10b981] text-4xl font-bold">$10,000K</span>
            <span className="text-green-500 text-sm">+5%</span>
          </div>
          <span className="text-gray-400 text-xs">Last 7 Days</span>
        </div>
        <button className="px-4 py-2 bg-black border border-gray-700 rounded-full text-gray-300 text-sm">
          {dateRange} <span className="ml-1">▼</span>
        </button>
      </div>
      <div className="mt-8 h-[300px]">
        <Line data={data} options={options} plugins={plugins} />
      </div>
    </div>
  );
}
