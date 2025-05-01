export default function ReferralsPage() {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
        Referrals
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Manage your referral program and track referral earnings.
      </p>

      <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-900/30 rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">
              Your Referral Link
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Share this link to earn rewards when users sign up
            </p>
          </div>
          <div className="mt-3 md:mt-0 flex flex-col sm:flex-row gap-2">
            <div className="relative">
              <input
                type="text"
                readOnly
                value="https://platform.com/ref/user123"
                className="py-2 pl-3 pr-16 rounded-lg border border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white w-full sm:w-64"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-2 py-1 text-xs text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded">
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Total Referrals
          </h3>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
            124
          </p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Active Referrals
          </h3>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
            87
          </p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Total Earnings
          </h3>
          <p className="text-2xl font-semibold text-yellow-500 mt-1">
            $1,245.65
          </p>
        </div>
      </div>

      <h3 className="text-md font-medium text-gray-800 dark:text-white mb-4">
        Recent Referrals
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Commission
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {[
              {
                name: "John Smith",
                date: "2023-04-12",
                status: "Active",
                commission: "$45.00",
              },
              {
                name: "Emma Watson",
                date: "2023-04-10",
                status: "Active",
                commission: "$32.50",
              },
              {
                name: "Michael Brown",
                date: "2023-04-05",
                status: "Inactive",
                commission: "$12.75",
              },
              {
                name: "Sarah Davis",
                date: "2023-04-02",
                status: "Active",
                commission: "$28.20",
              },
              {
                name: "David Wilson",
                date: "2023-03-28",
                status: "Active",
                commission: "$35.60",
              },
            ].map((referral, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {referral.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {referral.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      referral.status === "Active"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {referral.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-yellow-500">
                  {referral.commission}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
