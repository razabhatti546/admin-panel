"use client";

import { useState } from "react";
import Link from "next/link";

export default function UserManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [userStatus, setUserStatus] = useState("Active");

  // Mock user data
  const users = [
    {
      id: "11",
      name: "Ahmed Ali",
      email: "ahmed@gmail.com",
      status: "Active",
      subscription: "-",
      referralCode: "HEIST23154",
      phoneNumber: "+92 3065340104",
      mobileNumber: "+92 3065340104",
      whatsappNumber: "+92 3065340104",
    },
    {
      id: "11",
      name: "Ahmed Ali",
      email: "ahmed@gmail.com",
      status: "Disable",
      subscription: "-",
      referralCode: "HEIST23154",
      phoneNumber: "+92 3065340104",
      mobileNumber: "+92 3065340104",
      whatsappNumber: "+92 3065340104",
    },
  ];

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.includes(searchTerm)
  );

  const handleEditClick = (user) => {
    setCurrentUser(user);
    setUserStatus(user.status);
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setCurrentUser(null);
  };

  const handleUpdateUser = () => {
    // In a real app, this would send updated user data to an API
    console.log("Updating user:", currentUser, "with status:", userStatus);
    setShowEditModal(false);
    setCurrentUser(null);
  };

  return (
    <div className="p-6 bg-black text-white min-h-screen relative">
      {/* Header with User Profile */}

      {/* User Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 max-w-[500px]">
        {/* Active Users Card */}
        <div className="bg-green-400/20 h-[70px] rounded-lg p-2 flex items-center justify-between border border-stone-800">
          <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          </div>
          <div className="flex justify-between w-full ml-5 items-center">
            <p className="text-gray-400 text-sm w-[30px]">Active User</p>
            <p className="text-white font-bold text-xl">15000</p>
          </div>
        </div>

        {/* Blocked Users Card */}
        <div className="bg-red-400/20 rounded-lg p-4 flex items-center justify-between border border-stone-800">
          <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex justify-between w-full ml-5 items-center">
            <p className="text-gray-400 text-sm w-[30px]">Blocked User</p>
            <p className="text-white font-bold text-xl">100</p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search User"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-black border border-stone-700 rounded-md py-2 px-4 text-white w-full focus:outline-none focus:border-yellow-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400 absolute right-3 top-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-400">Filter by</span>
          </div>
          <button className="flex items-center gap-2 text-white bg-yellow-500 hover:bg-yellow-600 px-3 py-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span>Add New User</span>
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-stone-800">
            <tr>
              <th className="py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                User Id
              </th>
              <th className="py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Full name
              </th>
              <th className="py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Email
              </th>
              <th className="py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Active Subscription
              </th>
              <th className="py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800">
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <td className="py-4 text-sm">{user.id}</td>
                <td className="py-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center text-xs">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <span>{user.name}</span>
                  </div>
                </td>
                <td className="py-4 text-sm">{user.email}</td>
                <td className="py-4 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      user.status === "Active"
                        ? "text-green-500 bg-green-500/10"
                        : "text-red-500 bg-red-500/10"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-4 text-sm">{user.subscription}</td>
                <td className="py-4 text-sm">
                  <div className="flex items-center gap-2">
                    <button
                      className="text-yellow-500 hover:text-yellow-400"
                      onClick={() => handleEditClick(user)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                    <button className="text-red-500 hover:text-red-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit User Modal */}
      {showEditModal && currentUser && (
        <div className="fixed inset-0 flex items-center justify-end z-50 mr-2">
          <div
            className="fixed inset-0 backdrop-blur-sm bg-black/30"
            onClick={handleCloseModal}
          ></div>
          <div className="bg-stone-900 mr-2 rounded-xl w-full max-w-md relative z-10">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4">
              <h3 className="text-lg font-medium text-white">Edit User</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  />
                </svg>
              </button>
            </div>

            {/* Profile Image */}
            <div className="px-6 py-2">
              <p className="text-sm text-gray-400 mb-2">Profile Image</p>
              <div className="flex items-center gap-4 mt-2">
                <div className="w-16 h-16 rounded-full bg-stone-700 flex items-center justify-center text-lg">
                  {currentUser.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <button className="h-[40px] w-[40px] flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white rounded-full px-3 py-1 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>

                <button className="flex items-center gap-2 bg-stone-600 hover:bg-stone-700 text-white rounded-full px-3 py-1 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Upload Image
                </button>
              </div>
            </div>

            {/* Form Content */}
            <div className="px-6 py-4 space-y-4">
              {/* Referral Code */}
              <div className="bg-stone-700 rounded-full p-2 flex justify-between items-center">
                <span className="text-sm">Referral Code</span>
                <span className="text-sm text-white">
                  {currentUser.referralCode}
                </span>
              </div>

              {/* Full Name */}
              <div className="bg-stone-700 rounded-full p-2 flex justify-between items-center">
                <span className="text-sm">Full Name</span>
                <span className="text-sm text-white">{currentUser.name}</span>
              </div>

              {/* Email */}
              <div className="bg-stone-700 rounded-full p-2 flex justify-between items-center">
                <span className="text-sm">Email</span>
                <span className="text-sm text-white">{currentUser.email}</span>
              </div>

              {/* Phone Number */}
              <div className="bg-stone-700 rounded-full p-2 flex justify-between items-center">
                <span className="text-sm">Phone Number</span>
                <span className="text-sm text-white">
                  {currentUser.phoneNumber}
                </span>
              </div>

              {/* Mobile Number */}
              <div className="bg-stone-700 rounded-full p-2 flex justify-between items-center">
                <span className="text-sm">Mobile Number</span>
                <span className="text-sm text-white">
                  {currentUser.mobileNumber}
                </span>
              </div>

              {/* WhatsApp Number */}
              <div className="bg-stone-700 rounded-full p-2 flex justify-between items-center">
                <span className="text-sm">WhatsApp Number</span>
                <span className="text-sm text-white">
                  {currentUser.whatsappNumber}
                </span>
              </div>

              {/* Status */}
              <div className="bg-stone-700 rounded-full p-2 flex justify-between items-center">
                <span className="text-sm">Status</span>
                <div className="relative inline-block text-left">
                  <div className="flex items-center space-x-1">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        userStatus === "Active"
                          ? "text-green-500 bg-green-500/10"
                          : "text-red-500 bg-red-500/10"
                      }`}
                    >
                      {userStatus}
                    </span>
                    <select
                      value={userStatus}
                      onChange={(e) => setUserStatus(e.target.value)}
                      className="bg-transparent border-none text-white focus:outline-none text-xs"
                    >
                      <option value="Active">Active</option>
                      <option value="Disable">Disable</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 flex justify-center">
              <button
                onClick={handleUpdateUser}
                className="px-8 py-2 bg-yellow-500 text-white rounded-full text-sm font-medium hover:bg-yellow-400 transition-colors"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
