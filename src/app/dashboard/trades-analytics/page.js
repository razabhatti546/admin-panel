export default function TradesAnalyticsPage() {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
        Trades Analytics
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        View statistics and performance metrics for your trading activities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Total Trades
          </h3>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
            1,245
          </p>
          <p className="text-xs text-green-500 mt-1">+12% from last month</p>
        </div>

        <div className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Win Rate
          </h3>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
            64.5%
          </p>
          <p className="text-xs text-green-500 mt-1">+2.3% from last month</p>
        </div>

        <div className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Profit Factor
          </h3>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
            2.41
          </p>
          <p className="text-xs text-green-500 mt-1">+0.15 from last month</p>
        </div>

        <div className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Net Profit
          </h3>
          <p className="text-2xl font-semibold text-yellow-500 mt-1">$24,521</p>
          <p className="text-xs text-green-500 mt-1">+$2,145 from last month</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
          <h3 className="text-md font-medium text-gray-800 dark:text-white mb-4">
            Performance Over Time
          </h3>
          <div className="h-80 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded">
            <p className="text-gray-500 dark:text-gray-400">
              Chart: Performance Over Time
            </p>
          </div>
        </div>

        <div className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
          <h3 className="text-md font-medium text-gray-800 dark:text-white mb-4">
            Asset Distribution
          </h3>
          <div className="h-80 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded">
            <p className="text-gray-500 dark:text-gray-400">
              Chart: Asset Distribution
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-md font-medium text-gray-800 dark:text-white mb-4">
          Top Performing Strategies
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Strategy
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Win Rate
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Trades
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Profit
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  ROI
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {[
                {
                  name: "Trend Following",
                  winRate: "72%",
                  trades: 345,
                  profit: "$6,412",
                  roi: "+18.2%",
                },
                {
                  name: "Breakout Strategy",
                  winRate: "65%",
                  trades: 230,
                  profit: "$4,821",
                  roi: "+14.6%",
                },
                {
                  name: "Mean Reversion",
                  winRate: "58%",
                  trades: 412,
                  profit: "$3,945",
                  roi: "+11.8%",
                },
                {
                  name: "Volatility Breakout",
                  winRate: "67%",
                  trades: 156,
                  profit: "$2,832",
                  roi: "+9.4%",
                },
                {
                  name: "Range Trading",
                  winRate: "61%",
                  trades: 278,
                  profit: "$2,124",
                  roi: "+7.8%",
                },
              ].map((strategy, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {strategy.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {strategy.winRate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {strategy.trades}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-yellow-500">
                    {strategy.profit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">
                    {strategy.roi}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="text-md font-medium text-gray-800 dark:text-white mb-4">
          Recent Performance
        </h3>
        <div className="h-80 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded">
          <p className="text-gray-500 dark:text-gray-400">
            Chart: Daily/Weekly Performance
          </p>
        </div>
      </div>
    </div>
  );
}
