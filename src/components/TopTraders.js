"use client";

export default function TopTraders() {
  // Sample data for top traders
  const topTraders = [
    {
      id: 1,
      name: "Ahmed Ali",
      commission: 500,
      bgColor: "from-amber-700 to-amber-900",
    },
    {
      id: 2,
      name: "Ahmed Ali",
      commission: 500,
      bgColor: "from-blue-700 to-blue-900",
    },
    {
      id: 3,
      name: "Ahmed Ali",
      commission: 500,
      bgColor: "from-green-700 to-green-900",
    },
    {
      id: 4,
      name: "Ahmed Ali",
      commission: 500,
      bgColor: "from-purple-700 to-purple-900",
    },
    {
      id: 5,
      name: "Ahmed Ali",
      commission: 500,
      bgColor: "from-red-700 to-red-900",
    },
  ];

  return (
    <div className="p-4 bg-black border  border-gray-800 rounded-lg shadow">
      <h2 className="text-white text-lg font-medium mb-3">Top 5 Traders</h2>

      <div className="space-y-3">
        {topTraders.map((trader) => (
          <div key={trader.id} className="flex items-center">
            {/* Avatar with initials */}
            <div className="w-9 h-9 relative mr-3 shrink-0">
              <div
                className={`w-full h-full bg-gradient-to-br ${trader.bgColor} rounded-full overflow-hidden border border-gray-700 flex items-center justify-center`}
              >
                <span className="text-sm font-medium text-white">
                  {trader.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
            </div>

            {/* Trader details */}
            <div className="flex-1">
              <p className="text-white text-sm font-medium">{trader.name}</p>
              <p className="text-green-500 text-xs">
                Commission Earn: ${trader.commission}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
