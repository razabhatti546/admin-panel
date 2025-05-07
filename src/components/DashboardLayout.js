"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Try to get the sidebar state from localStorage on component mount
  useEffect(() => {
    const savedState = localStorage.getItem("sidebarState");
    if (savedState !== null) {
      setIsSidebarOpen(savedState === "open");
    }
  }, []);

  const toggleSidebar = () => {
    const newState = !isSidebarOpen;
    setIsSidebarOpen(newState);
    // Save state to localStorage
    localStorage.setItem("sidebarState", newState ? "open" : "closed");
  };

  // Add keyboard shortcut for toggling sidebar
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle sidebar with Ctrl+B (similar to VS Code)
      if (e.ctrlKey && e.key === "b") {
        toggleSidebar();
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSidebarOpen]);

  return (
    <div className="h-screen bg-black">
      <Header isOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main
        className={`
        pt-20 pb-4 px-4 md:px-6
        transition-all duration-300 ease-in-out bg-black
        ${isSidebarOpen ? "md:ml-64" : "md:ml-16"}
      `}
      >
        {children}
      </main>
    </div>
  );
}
