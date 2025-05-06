"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  ChartBarIcon,
  UsersIcon,
  CogIcon,
  MenuIcon,
  XIcon,
} from "./Icons";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("");

  // Set active item based on current path when component mounts
  useEffect(() => {
    const path = pathname;
    // Check more specific paths first, then more general ones
    if (path.includes("/dashboard/trades-analytics")) {
      setActiveItem("trades-analytics");
    } else if (path.includes("/dashboard/subscription")) {
      setActiveItem("subscription-management");
    } else if (path.includes("/dashboard/user-management")) {
      setActiveItem("user");
    } else if (path.includes("/dashboard/referrals")) {
      setActiveItem("referrals");
    } else if (path.includes("/dashboard/strategies")) {
      setActiveItem("strategies");
    } else if (path.includes("/dashboard/trades")) {
      setActiveItem("trades");
    } else if (path.includes("/dashboard")) {
      setActiveItem("dashboard");
    } else if (path.includes("/dashboard/settings")) {
      setActiveItem("settings");
    }
  }, [pathname]);

  const menuItems = [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: HomeIcon,
      href: "/dashboard",
    },
    {
      id: "strategies",
      name: "Strategies",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          {...props}
        >
          <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
          <path
            fillRule="evenodd"
            d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      ),
      href: "/dashboard/strategies",
    },
    {
      id: "trades",
      name: "Trades",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          {...props}
        >
          <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
        </svg>
      ),
      href: "/dashboard/trades",
    },
    {
      id: "referrals",
      name: "Referrals",
      icon: UsersIcon,
      href: "/dashboard/referrals",
    },
    {
      id: "subscription-management",
      name: "Subscription Management",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          {...props}
        >
          <path
            fillRule="evenodd"
            d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
          <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
        </svg>
      ),
      href: "/dashboard/subscription",
    },
    {
      id: "user",
      name: "User management",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          {...props}
        >
          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
        </svg>
      ),
      href: "/dashboard/user-management",
    },
    {
      id: "trades-analytics",
      name: "Trades Analytics",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          {...props}
        >
          <path
            fillRule="evenodd"
            d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM12.75 12a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V18a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V12z"
            clipRule="evenodd"
          />
          <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
        </svg>
      ),
      href: "/dashboard/trades-analytics",
    },
    {
      id: "settings",
      name: "Settings",
      icon: CogIcon,
      href: "/dashboard/settings",
    },
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
                    activeItem === item.id
                      ? "bg-black text-yellow-500"
                      : "text-gray-300 hover:bg-gray-800"
                  }
                  ${isOpen ? "" : "justify-center"}
                `}
              >
                <item.icon
                  className={`w-5 h-5 ${
                    activeItem === item.id ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
                {isOpen && (
                  <span
                    className={`ml-3 whitespace-nowrap ${
                      activeItem === item.id
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
