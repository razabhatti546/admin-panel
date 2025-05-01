"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HomeIcon,
  ChartBarIcon,
  UsersIcon,
  CogIcon,
  MenuIcon,
  XIcon,
} from "./Icons";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const [activeItem, setActiveItem] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: HomeIcon, href: "/dashboard" },
  ];

  return (
    <aside
      className={`
        fixed left-0 top-0 z-40 h-screen
        transition-all duration-300 ease-in-out
        bg-black border-r border-gray-800
        ${isOpen ? "w-64" : "w-16"}
      `}
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        <div className="flex items-center justify-between mb-6 px-2">
          <h2
            className={`text-white text-xl font-semibold ${
              !isOpen && "sr-only"
            }`}
          >
            Menu
          </h2>
          <button
            className="text-gray-400 hover:text-white p-1 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
            onClick={toggleSidebar}
            aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            {isOpen ? (
              <XIcon className="w-5 h-5" />
            ) : (
              <MenuIcon className="w-5 h-5" />
            )}
          </button>
        </div>

        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`
                  flex items-center p-2 rounded-lg 
                  ${
                    activeItem === item.id || item.highlight
                      ? "bg-black text-yellow-500"
                      : "text-gray-300 hover:bg-gray-800"
                  }
                  ${isOpen ? "" : "justify-center"}
                `}
                onClick={() => setActiveItem(item.id)}
              >
                <item.icon
                  className={`w-5 h-5 ${
                    activeItem === item.id || item.highlight
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                />
                {isOpen && (
                  <span
                    className={`ml-3 whitespace-nowrap ${
                      activeItem === item.id || item.highlight
                        ? "text-yellow-500 font-medium"
                        : "text-gray-300"
                    }`}
                  >
                    {item.name}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Collapse/Expand handle on the edge of the sidebar */}
      <div
        className="absolute h-20 w-6 top-15 -right-3 z-50 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
        onClick={toggleSidebar}
      >
        <div className="absolute w-10 h-10 rounded-full bg-black border border-yellow-500 flex items-center justify-center">
          {isOpen ? (
            <span className="text-yellow-500 text-xs">&lt;</span>
          ) : (
            <span className="text-yellow-500 text-xs">&gt;</span>
          )}
        </div>
      </div>
    </aside>
  );
}
