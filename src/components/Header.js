"use client";

import { BellIcon, SearchIcon, UserIcon, MenuIcon } from "./Icons";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header({ isOpen }) {
  const pathname = usePathname();

  // Function to get page title from pathname
  const getPageTitle = () => {
    if (pathname === "/dashboard") return "Dashboard";
    if (pathname.includes("/dashboard/trades-analytics"))
      return "Trades Analytics";
    if (pathname.includes("/dashboard/subscription"))
      return "Subscription Management";
    if (pathname.includes("/dashboard/user-management"))
      return "User Management";
    if (pathname.includes("/dashboard/referrals")) return "Referrals";
    if (pathname.includes("/dashboard/strategies")) return "Strategies";
    if (pathname.includes("/dashboard/trades")) return "Trades";
    if (pathname.includes("/dashboard/settings")) return "Settings";
    return "Dashboard"; // Default title
  };

  return (
    <header
      className={`
      fixed top-0 right-0 z-50 h-16
      transition-all duration-300 ease-in-out
      bg-black border-b border-gray-800
      flex items-center justify-between
      px-4 md:px-6
      w-full ${isOpen ? "md:pl-64" : "md:pl-16"}
    `}
    >
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-white">{getPageTitle()}</h1>
      </div>

      <div className="flex items-center space-x-4">
        <button className="px-3 py-1.5 bg-black hover:bg-red-700 text-red-900 font-bold hover:text-white text-sm rounded-md transition-colors">
          Logout
        </button>

        <div className="flex items-center space-x-2">
          <div className="flex flex-col items-end text-right">
            <span className="text-white text-sm font-semibold">Ahmed Ali</span>
            <span className="text-yellow-500 text-xs">Admin</span>
          </div>
          <div className="h-10 w-10 rounded-full bg-white overflow-hidden border-2 border-yellow-500">
            {/* Placeholder profile image, use Next.js Image component if you have the image */}
            <div className="h-full w-full bg-gray-300 flex items-center justify-center text-black font-semibold">
              AA
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
