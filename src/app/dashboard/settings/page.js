export default function SettingsPage() {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
        Settings
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Configure your application settings here.
      </p>

      <div className="space-y-6">
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">
            General Settings
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="site-name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Site Name
              </label>
              <input
                type="text"
                id="site-name"
                name="site-name"
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                         shadow-sm focus:border-blue-500 focus:ring-blue-500 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="My Dashboard"
              />
            </div>

            <div>
              <label
                htmlFor="theme"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Theme
              </label>
              <select
                id="theme"
                name="theme"
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                         shadow-sm focus:border-blue-500 focus:ring-blue-500 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">
            Notification Settings
          </h3>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="email-notifications"
                  name="email-notifications"
                  type="checkbox"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="email-notifications"
                  className="font-medium text-gray-700 dark:text-gray-300"
                >
                  Email Notifications
                </label>
                <p className="text-gray-500 dark:text-gray-400">
                  Receive email notifications for important updates.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="push-notifications"
                  name="push-notifications"
                  type="checkbox"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="push-notifications"
                  className="font-medium text-gray-700 dark:text-gray-300"
                >
                  Push Notifications
                </label>
                <p className="text-gray-500 dark:text-gray-400">
                  Receive push notifications in your browser.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 
                       shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 
                       bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent 
                       shadow-sm text-sm font-medium rounded-md text-white 
                       bg-blue-600 hover:bg-blue-700 focus:outline-none 
                       focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
