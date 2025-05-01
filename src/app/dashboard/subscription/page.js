export default function SubscriptionPage() {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
        Subscription Management
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Manage your subscription plans and user subscriptions.
      </p>

      <div className="mb-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-5 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h3 className="font-medium text-lg">Current Subscriber Count</h3>
            <p className="text-3xl font-bold mt-2">1,245</p>
            <p className="text-sm opacity-80 mt-1">+12% from last month</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50">
              View Reports
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Basic Plan
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                $9.99
                <span className="text-sm font-normal text-gray-500">
                  /month
                </span>
              </p>
            </div>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              324 subscribers
            </span>
          </div>
          <div className="mt-4">
            <button className="w-full py-2 bg-yellow-500 text-black rounded font-medium hover:bg-yellow-400">
              Manage Plan
            </button>
          </div>
        </div>

        <div className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Pro Plan
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                $24.99
                <span className="text-sm font-normal text-gray-500">
                  /month
                </span>
              </p>
            </div>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              542 subscribers
            </span>
          </div>
          <div className="mt-4">
            <button className="w-full py-2 bg-yellow-500 text-black rounded font-medium hover:bg-yellow-400">
              Manage Plan
            </button>
          </div>
        </div>

        <div className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Premium Plan
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                $49.99
                <span className="text-sm font-normal text-gray-500">
                  /month
                </span>
              </p>
            </div>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              379 subscribers
            </span>
          </div>
          <div className="mt-4">
            <button className="w-full py-2 bg-yellow-500 text-black rounded font-medium hover:bg-yellow-400">
              Manage Plan
            </button>
          </div>
        </div>
      </div>

      <h3 className="text-md font-medium text-gray-800 dark:text-white mb-4">
        Recent Subscriptions
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                User
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Plan
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Start Date
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
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {[
              {
                user: "John Smith",
                email: "john@example.com",
                plan: "Premium",
                startDate: "2023-04-12",
                status: "Active",
              },
              {
                user: "Emma Watson",
                email: "emma@example.com",
                plan: "Pro",
                startDate: "2023-04-10",
                status: "Active",
              },
              {
                user: "Michael Brown",
                email: "michael@example.com",
                plan: "Basic",
                startDate: "2023-04-05",
                status: "Expired",
              },
              {
                user: "Sarah Davis",
                email: "sarah@example.com",
                plan: "Pro",
                startDate: "2023-04-02",
                status: "Active",
              },
              {
                user: "David Wilson",
                email: "david@example.com",
                plan: "Premium",
                startDate: "2023-03-28",
                status: "Pending",
              },
            ].map((subscription, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        {subscription.user.charAt(0)}
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {subscription.user}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {subscription.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {subscription.plan}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {subscription.startDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      subscription.status === "Active"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : subscription.status === "Expired"
                        ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    }`}
                  >
                    {subscription.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-yellow-500 hover:text-yellow-600 mr-3">
                    Edit
                  </button>
                  <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
