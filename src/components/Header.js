"use client";

import { BellIcon, SearchIcon, UserIcon, MenuIcon } from "./Icons";
import Image from "next/image";

export default function Header({ isOpen }) {
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
        <h1 className="text-xl font-semibold text-white">Dashboard</h1>
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
