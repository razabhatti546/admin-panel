export default function StrategiesPage() {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
        Strategies
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        Manage your trading strategies here. Create, edit, and optimize your
        strategies.
      </p>

      <div className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600"
          >
            <h3 className="font-medium text-gray-900 dark:text-white">
              Strategy {item}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              This is a sample trading strategy description. Performance: +
              {item * 5}%
            </p>
            <div className="mt-4 flex justify-end space-x-2">
              <button className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded">
                Edit
              </button>
              <button className="px-3 py-1 text-xs bg-yellow-500 text-black rounded">
                Activate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
