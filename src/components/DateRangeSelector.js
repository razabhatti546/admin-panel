"use client";

import { useState, useRef, useEffect } from "react";

export default function DateRangeSelector({ selectedRange, onRangeChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const dateRanges = [
    "02 May - 08 May",
    "09 May - 15 May",
    "16 May - 22 May",
    "23 May - 29 May",
    "Last 7 Days",
    "Last 30 Days",
    "This Month",
    "Last Month",
  ];

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleRangeSelect = (range) => {
    onRangeChange(range);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-black border border-gray-700 rounded-full text-gray-300 text-sm flex items-center"
      >
        {selectedRange} <span className="ml-1.5">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-gray-900 border border-gray-700 rounded-md shadow-lg z-10">
          <ul className="py-1">
            {dateRanges.map((range) => (
              <li key={range}>
                <button
                  onClick={() => handleRangeSelect(range)}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    selectedRange === range
                      ? "bg-gray-800 text-yellow-500"
                      : "text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  {range}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
