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
import DateRangeSelector from "./DateRangeSelector";

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
  const [chartData, setChartData] = useState({
    labels: [],
    dataPoints: [],
    totalEarnings: 0,
    percentageChange: 0,
  });

  // Setup roundRect polyfill when component mounts
  useEffect(() => {
    setupRoundedRect();
  }, []);

  // Update chart data when date range changes
  useEffect(() => {
    // This would typically be an API call based on the dateRange
    // For now we'll use mock data
    const mockDataSets = {
      "02 May - 08 May": {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        dataPoints: [5000, 20000, 15000, 10000, 18000, 25000, 32000],
        totalEarnings: 10000,
        percentageChange: 5,
      },
      "09 May - 15 May": {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        dataPoints: [8000, 12000, 19000, 22000, 17000, 23000, 28000],
        totalEarnings: 12500,
        percentageChange: 7.5,
      },
      "16 May - 22 May": {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        dataPoints: [10000, 16000, 22000, 19000, 21000, 26000, 30000],
        totalEarnings: 15000,
        percentageChange: 10,
      },
      "23 May - 29 May": {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        dataPoints: [12000, 18000, 24000, 28000, 22000, 30000, 35000],
        totalEarnings: 18000,
        percentageChange: 12,
      },
      "Last 7 Days": {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        dataPoints: [15000, 22000, 18000, 25000, 30000, 27000, 34000],
        totalEarnings: 20000,
        percentageChange: 8,
      },
      "Last 30 Days": {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
        dataPoints: [80000, 95000, 75000, 105000, 120000],
        totalEarnings: 120000,
        percentageChange: 15,
      },
      "This Month": {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        dataPoints: [65000, 82000, 94000, 110000],
        totalEarnings: 110000,
        percentageChange: 9.5,
      },
      "Last Month": {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        dataPoints: [60000, 75000, 85000, 95000],
        totalEarnings: 95000,
        percentageChange: 7,
      },
    };

    // Set the chart data based on the selected date range
    setChartData(mockDataSets[dateRange] || mockDataSets["02 May - 08 May"]);
  }, [dateRange]);

  // Handle date range change
  const handleDateRangeChange = (newRange) => {
    setDateRange(newRange);
  };

  // Highlighted point (like in the image)
  const highlightedPointIndex = Math.floor(chartData.dataPoints.length / 2); // Middle point
  const highlightedValue = chartData.dataPoints[highlightedPointIndex] || 0;
  const highlightedDate = "23 Aug 2024"; // This would typically be derived from the actual date

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        data: chartData.dataPoints,
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
        max: Math.max(...chartData.dataPoints) * 1.5 || 50000,
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
          stepSize: Math.max(...chartData.dataPoints) / 5 || 10000,
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
    <div className="p-6  bg-black border border-gray-800 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-white text-lg font-medium">
            Total Commission Earn through Trades
          </h2>
          <div className="flex items-baseline space-x-2 mt-1">
            <span className="text-[#10b981] text-4xl font-bold">
              ${(chartData.totalEarnings / 1000).toFixed(0)}K
            </span>
            <span className="text-green-500 text-sm">
              +{chartData.percentageChange}%
            </span>
          </div>
          <span className="text-gray-400 text-xs">
            {dateRange.includes("Last") || dateRange.includes("Month")
              ? dateRange
              : "Last 7 Days"}
          </span>
        </div>
        <DateRangeSelector
          selectedRange={dateRange}
          onRangeChange={handleDateRangeChange}
        />
      </div>
      <div className="mt-8 h-[300px]">
        <Line data={data} options={options} plugins={plugins} />
      </div>
    </div>
  );
}
