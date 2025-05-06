"use client";

export default function SubscriptionStatCards() {
  return (
    <div className="flex space-x-4 w-full mb-6">
      <div className="flex-1 bg-green-400/20 border border-none rounded-md py-2 px-3">
        <div className="flex items-center h-full">
          <div className="flex items-center mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-green-200 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-xs text-green-200">Paid Fees</span>
          </div>
          <div className="ml-auto">
            <span className="text-lg font-bold text-green-200">$15000</span>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-red-400/20 border border-none rounded-md py-2 px-3">
        <div className="flex items-center h-full">
          <div className="flex items-center mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-red-300 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-xs text-red-300">Pending Payment Fees</span>
          </div>
          <div className="ml-auto">
            <span className="text-lg font-bold text-red-300">$100</span>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-yellow-400/20 border border-none rounded-md py-2 px-3">
        <div className="flex items-center h-full">
          <div className="flex items-center mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-yellow-300 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="text-xs text-yellow-300">Premium Subscribers</span>
          </div>
          <div className="ml-auto">
            <span className="text-lg font-bold text-yellow-300">100</span>
          </div>
        </div>
      </div>
    </div>
  );
}
