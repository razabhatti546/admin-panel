export default function TradesPage() {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
        Trades
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        View and manage your trading activity.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Pair
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Type
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Entry
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Exit
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Profit/Loss
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {[
              {
                pair: "BTC/USD",
                type: "Long",
                entry: "$45,000",
                exit: "$48,000",
                pnl: "+6.7%",
                profit: true,
              },
              {
                pair: "ETH/USD",
                type: "Short",
                entry: "$3,200",
                exit: "$3,000",
                pnl: "+6.3%",
                profit: true,
              },
              {
                pair: "BNB/USD",
                type: "Long",
                entry: "$420",
                exit: "$410",
                pnl: "-2.4%",
                profit: false,
              },
              {
                pair: "SOL/USD",
                type: "Long",
                entry: "$120",
                exit: "$140",
                pnl: "+16.7%",
                profit: true,
              },
              {
                pair: "ADA/USD",
                type: "Short",
                entry: "$1.20",
                exit: "$1.30",
                pnl: "-8.3%",
                profit: false,
              },
            ].map((trade, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {trade.pair}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      trade.type === "Long"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    }`}
                  >
                    {trade.type}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {trade.entry}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {trade.exit}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <span
                    className={
                      trade.profit
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }
                  >
                    {trade.pnl}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
