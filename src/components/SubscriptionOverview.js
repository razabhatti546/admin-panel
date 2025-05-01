"use client";

import { useState, useEffect } from "react";

export default function SubscriptionOverview() {
  // Animation state
  const [animationComplete, setAnimationComplete] = useState(false);

  // Values for full and half payment
  const totalUsers = 30000;
  const fullPaymentUsers = 5000;
  const halfPaymentUsers = 5000;

  // Calculate percentages
  const fullPaymentPercentage = (fullPaymentUsers / totalUsers) * 100;
  const halfPaymentPercentage = (halfPaymentUsers / totalUsers) * 100;

  // Calculate stroke dasharray and dashoffset for gradient arc
  const radius = 55;
  const circumference = 2 * Math.PI * radius;

  // Arc spans from -135° to 135° (270° total)
  const arcLength = (270 / 360) * circumference;

  // Apply animation when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full p-4 bg-black border border-gray-800 rounded-lg shadow flex flex-col">
      <h2 className="text-white text-lg font-medium mb-3">
        Subscription Overview
      </h2>

      <div className="flex-grow flex flex-col items-center justify-center">
        {/* SVG for circular progress */}
        <div className="relative w-full max-w-[180px] mx-auto aspect-square flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 120 120">
            {/* Background arc - semi-transparent */}
            <path
              d="M 60,60 m 0,-55 a 55,55 0 1 1 0,110 a 55,55 0 1 1 0,-110"
              stroke="#333"
              strokeWidth="6"
              strokeDasharray={arcLength}
              strokeDashoffset="0"
              strokeLinecap="round"
              style={{
                transform: "rotate(135deg)",
                transformOrigin: "center",
                fill: "none",
              }}
            />

            {/* Progress arc with gradient - left side (blue) */}
            <path
              d="M 60,60 m 0,-55 a 55,55 0 0 1 0,110"
              stroke="url(#blueGradient)"
              strokeWidth="6"
              strokeDasharray={arcLength / 2}
              strokeDashoffset={
                animationComplete
                  ? arcLength / 2 -
                    (arcLength / 2) * (fullPaymentPercentage / 33.33)
                  : arcLength / 2
              }
              strokeLinecap="round"
              style={{
                transform: "rotate(135deg)",
                transformOrigin: "center",
                fill: "none",
                transition: "stroke-dashoffset 1s ease-in-out",
              }}
            />

            {/* Progress arc with gradient - right side (purple) */}
            <path
              d="M 60,60 m 0,-55 a 55,55 0 0 0 0,110"
              stroke="url(#purpleGradient)"
              strokeWidth="6"
              strokeDasharray={arcLength / 2}
              strokeDashoffset={
                animationComplete
                  ? arcLength / 2 -
                    (arcLength / 2) * (halfPaymentPercentage / 33.33)
                  : arcLength / 2
              }
              strokeLinecap="round"
              style={{
                transform: "rotate(-45deg)",
                transformOrigin: "center",
                fill: "none",
                transition: "stroke-dashoffset 1s ease-in-out",
              }}
            />

            {/* Gradients definition */}
            <defs>
              <linearGradient
                id="blueGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#1E40AF" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
              <linearGradient
                id="purpleGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#7E22CE" />
                <stop offset="100%" stopColor="#D946EF" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="flex items-center justify-center mb-1">
              <svg
                width="24"
                height="24"
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
        <div className="flex justify-between w-full mt-4">
          <div className="flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-800 to-blue-500 mr-2"></div>
            <div>
              <div className="text-xs text-gray-400">Full Payment</div>
              <div className="text-base font-bold text-white">5k</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-purple-800 to-purple-500 mr-2"></div>
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
