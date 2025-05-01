import ClientEarningsChart from "../../components/ClientEarningsChart";
import ClientSubscriptionOverview from "../../components/ClientSubscriptionOverview";
import ClientTopTraders from "../../components/ClientTopTraders";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
      {/* Left side content (3/4 width on large screens) */}
      <div className="lg:col-span-3 grid gap-4">
        {/* Metric Cards in top left */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-black rounded-lg border border-gray-800 p-5">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-700/60 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-500"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="text-xl font-bold text-white mb-1">30K</div>
            </div>
            <div className="flex mt-5">
              <div className="text-white text-lg">Active Trades</div>
            </div>
          </div>

          <div className="bg-black rounded-lg border border-gray-800 p-5">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-700/60 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-400"
                >
                  <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                  <line x1="2" y1="10" x2="22" y2="10"></line>
                </svg>
              </div>
              <div className="text-xl font-bold text-white mb-1">10K</div>
            </div>
            <div className="flex mt-5">
              <div className="text-white text-lg">Active Subscriptions</div>
            </div>
          </div>

          <div className="bg-black rounded-lg border border-gray-800 p-5">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-red-700/60 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-400"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="M7 15h0M2 9.5h20"></path>
                </svg>
              </div>
              <div className="text-xl font-bold text-white mb-1">20K</div>
            </div>
            <div className="flex mt-5">
              <div className="text-white text-lg">Pending Subscriptions</div>
            </div>
          </div>
        </div>

        {/* Earnings Chart - full width below metric cards */}
        <ClientEarningsChart />
      </div>

      {/* Right side content (1/4 width on large screens) */}
      <div className="flex flex-col gap-4">
        {/* Subscription Overview in top right corner */}
        <div className="w-full">
          <ClientSubscriptionOverview />
        </div>

        {/* Top Traders list below subscription overview */}
        <div className="w-full">
          <ClientTopTraders />
        </div>
      </div>
    </div>
  );
}
