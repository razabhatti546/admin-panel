"use client";

import { useState } from "react";
import Link from "next/link";

export default function ReferralDetail({ userId }) {
  // This would come from an API in a real application
  const userDetails = {
    name: "Ahmed Ali",
    email: "ahmed@gmail.com",
    userId: "345454",
    referralsEarned: {
      notYet: 200,
      received: 200,
    },
    totalReferrals: 20,
    // Sample data for different referral types
    verifiedReferrals: [
      {
        id: "11",
        name: "Ahmed Ali",
        email: "ahmed@gmail.com",
        userId: "345454",
        firstPayment: {
          status: "Paid",
          date: "12 Nov, 2024",
        },
        secondPayment: {
          status: "Paid",
          date: "12 Nov, 2024",
        },
        screenshot: "invoice.jpeg",
        status: "Rewards Sended",
      },
    ],
    pendingReferrals: [
      {
        id: "12",
        name: "John Doe",
        email: "john@example.com",
        userId: "654443",
        firstPayment: {
          status: "Paid",
          date: "10 Nov, 2024",
        },
        secondPayment: {
          status: "Pending",
          date: "-",
        },
        screenshot: "pending.jpeg",
        status: "Pending",
        pendingAmount: 70,
      },
    ],
    rewardsToSend: [
      {
        id: "4564564",
        name: "Ibrahim",
        email: "ibrahim@example.com",
        userId: "345454",
        firstPayment: {
          status: "Paid",
          date: "8 Nov, 2024",
        },
        secondPayment: {
          status: "Paid",
          date: "9 Nov, 2024",
        },
        screenshot: "proof.jpeg",
        status: "Send Reward",
        rewardAmount: 30,
        subscriptionDetail: "Premium",
        fee: 100,
      },
    ],
  };

  // Tab state for switching between verified, pending, etc.
  const [activeTab, setActiveTab] = useState("verified");
  const [searchTerm, setSearchTerm] = useState("");

  // Modal state
  const [showRewardModal, setShowRewardModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [transactionAddress, setTransactionAddress] = useState(
    "TXSjkldjHTRTKKTTKKTTKKLTKL"
  );
  const [receipt, setReceipt] = useState(null);

  // Get the correct referrals based on active tab
  const getActiveReferrals = () => {
    switch (activeTab) {
      case "verified":
        return userDetails.verifiedReferrals;
      case "pending":
        return userDetails.pendingReferrals;
      case "rewards":
        return userDetails.rewardsToSend;
      default:
        return userDetails.verifiedReferrals;
    }
  };

  // Filter referrals based on search term
  const filteredReferrals = getActiveReferrals().filter(
    (referral) =>
      referral.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      referral.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      referral.id.includes(searchTerm)
  );

  // Handle send reward button click
  const handleSendReward = (user) => {
    setSelectedUser(user);
    setShowRewardModal(true);
  };

  // Handle close modal
  const handleCloseModal = () => {
    setShowRewardModal(false);
    setSelectedUser(null);
  };

  // Handle upload receipt
  const handleReceiptUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setReceipt(file);
    }
  };

  // Handle remove receipt
  const handleRemoveReceipt = () => {
    setReceipt(null);
  };

  // Handle send reward submission
  const handleSubmitReward = () => {
    // In a real app, this would send the data to an API
    // For now, we'll just close the modal
    setShowRewardModal(false);

    // Reset form state
    setSelectedUser(null);
    setReceipt(null);
  };

  return (
    <div className="bg-black text-white  relative">
      {/* Back button */}
      <div className="py-4 px-6">
        <Link
          href="/dashboard/referrals"
          className="flex items-center text-gray-400 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Go Back
        </Link>
      </div>

      <div className="flex">
        {/* User profile header */}
        <div className="px-6 pb-6">
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full bg-yellow-600 flex items-center justify-center text-black text-xl font-bold mr-4">
              {userDetails.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <h2 className="text-xl font-bold">{userDetails.name}</h2>
              <p className="text-gray-400">{userDetails.email}</p>
            </div>
          </div>
        </div>

        {/* Stats cards */}
        <div className="flex space-x-4 px-6 mb-6">
          <div className="flex-1 bg-green-400/20 border border-none rounded-md py-2 px-3">
            <div className="flex items-center h-full">
              <div className="flex items-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-green-200 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-xs text-green-200">
                  Referrals Reward Earned till yet
                </span>
              </div>
              <div className="ml-auto">
                <span className="text-lg font-bold text-green-200">
                  ${userDetails.referralsEarned.notYet}
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-red-400/20 border border-none rounded-md py-2 px-3">
            <div className="flex items-center h-full">
              <div className="flex items-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-red-300 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-xs text-red-300">
                  Referrals Reward Earned received
                </span>
              </div>
              <div className="ml-auto">
                <span className="text-lg font-bold text-red-300">
                  ${userDetails.referralsEarned.received}
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-yellow-400/20 border border-none rounded-md py-2 px-3">
            <div className="flex items-center h-full">
              <div className="flex items-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-yellow-300 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="text-xs text-yellow-300">Total Referrals</span>
              </div>
              <div className="ml-auto">
                <span className="text-lg font-bold text-yellow-300">
                  {userDetails.totalReferrals}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs navigation */}
      <div className="px-6 mb-6">
        <div className="flex space-x-4 mt-4">
          <button
            className={`py-2 px-4 text-sm font-medium rounded-full flex items-center ${
              activeTab === "verified"
                ? "bg-yellow-500 text-white"
                : "text-yellow-500 bg-yellow-400/20"
            }`}
            onClick={() => setActiveTab("verified")}
          >
            Verified Referrals ({userDetails.verifiedReferrals.length})
          </button>
          <button
            className={`py-2 px-4 text-sm font-medium rounded-full flex items-center ${
              activeTab === "rewards"
                ? "bg-yellow-500 text-white"
                : "text-yellow-500 bg-yellow-400/20"
            }`}
            onClick={() => setActiveTab("rewards")}
          >
            Rewards Need to Send ({userDetails.rewardsToSend.length})
          </button>
          <button
            className={`py-2 px-4 text-sm font-medium rounded-full flex items-center ${
              activeTab === "pending"
                ? "bg-yellow-500 text-white"
                : "text-yellow-500 bg-yellow-400/20"
            }`}
            onClick={() => setActiveTab("pending")}
          >
            Pending Referrals ({userDetails.pendingReferrals.length})
          </button>
        </div>
      </div>

      {/* Search input */}
      <div className="p-6 pt-0">
        <div className="relative">
          <input
            type="text"
            placeholder="Search User"
            className="w-full max-w-xs pl-8 pr-3 py-1.5 bg-gray-900 border border-gray-700 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
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
      </div>

      {/* Referrals Table */}
      <div className="px-6 overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">
                Id
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">
                Full name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">
                Email
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">
                1st Payment
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">
                2nd Payment
              </th>
              {activeTab == "verified" && (
                <>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">
                    Screenshot
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">
                    Status
                  </th>
                </>
              )}
              {activeTab == "rewards" && (
                <>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">
                    Reward
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">
                    Action
                  </th>
                </>
              )}
              {activeTab == "pending" && (
                <>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">
                    Pending Amount
                  </th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {filteredReferrals.map((referral) => (
              <tr key={referral.id} className="border-b border-gray-800">
                <td className="px-4 py-3 text-sm text-white">{referral.id}</td>
                <td className="px-4 py-3 text-sm text-white">
                  {referral.name}
                </td>
                <td className="px-4 py-3 text-sm text-white">
                  {referral.email}
                </td>

                <td className="px-4 py-3 text-sm">
                  <div className="flex flex-col">
                    <span
                      className={
                        referral.firstPayment.status === "Paid"
                          ? "text-green-500"
                          : "text-yellow-500"
                      }
                    >
                      {referral.firstPayment.status}
                    </span>
                    <span className="text-xs text-gray-400">
                      on {referral.firstPayment.date}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex flex-col">
                    <span
                      className={
                        referral.secondPayment.status === "Paid"
                          ? "text-green-500"
                          : referral.secondPayment.status === "Pending"
                          ? "text-yellow-500"
                          : "text-red-500"
                      }
                    >
                      {referral.secondPayment.status}
                    </span>
                    <span className="text-xs text-gray-400">
                      on {referral.secondPayment.date}
                    </span>
                  </div>
                </td>
                {activeTab == "verified" && (
                  <>
                    <td className="px-4 py-3 text-sm text-yellow-500">
                      {referral.screenshot}
                    </td>
                    <td
                      className={`px-4 py-3 text-sm ${
                        referral.status === "Rewards Sended"
                          ? "text-green-500"
                          : referral.status === "Pending"
                          ? "text-yellow-500"
                          : "text-red-500"
                      }`}
                    >
                      {referral.status}
                    </td>
                  </>
                )}
                {activeTab == "rewards" && (
                  <>
                    <td className="px-4 py-3 text-sm text-red-500">Pending</td>
                    <td className="px-4 py-3 text-sm">
                      <button
                        className="bg-yellow-500 text-black py-1 px-3 rounded-full flex items-center text-xs font-medium hover:bg-yellow-400 transition-colors"
                        onClick={() => handleSendReward(referral)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Send Reward
                      </button>
                    </td>
                  </>
                )}

                {activeTab == "pending" && (
                  <>
                    <td className="px-4 py-3 text-sm">$70</td>
                  </>
                )}
              </tr>
            ))}
            {filteredReferrals.length === 0 && (
              <tr>
                <td
                  colSpan={activeTab === "rewards" ? 5 : 7}
                  className="px-4 py-8 text-center text-gray-400"
                >
                  No referrals found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Send Reward Modal */}
      {showRewardModal && (
        <div className="fixed inset-0 flex items-center justify-end z-50">
          <div
            className="fixed inset-0 backdrop-blur-sm bg-black/30"
            onClick={handleCloseModal}
          ></div>
          <div className="bg-stone-900 mr-2 rounded-xl w-full max-w-md relative z-10">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4">
              <h3 className="text-lg font-medium text-white">Send Reward</h3>
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

            {/* User Info */}
            <div className="px-6 py-4 border-b border-gray-800">
              <div className="flex items-center">
                <div className="w-14 h-14 mr-4">
                  <img
                    src={`https://ui-avatars.com/api/?name=${
                      selectedUser?.name || "Ahmed Ali"
                    }&background=956D02&color=fff&rounded=true&bold=true&size=56`}
                    alt={selectedUser?.name || "Ahmed Ali"}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-white">
                    {selectedUser?.name || "Ahmed Ali"}
                  </h4>
                  <p className="text-xs text-gray-400">
                    User ID: {selectedUser?.userId || "345454"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-red-400">
                    ${selectedUser?.rewardAmount || 30}
                  </p>
                  <p className="text-xs text-red-500">Pending Reward</p>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="px-6 py-4 space-y-4">
              {/* TRC-20 Deposit Address */}
              <div>
                <label className="block text-xs text-gray-400 mb-1">
                  TRC-20 Deposit Address
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={transactionAddress}
                    onChange={(e) => setTransactionAddress(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-full mt-2 py-2 px-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-yellow-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
                      />
                      <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Referral Details */}
              <div>
                <label className="block text-xs text-gray-400 mb-1">
                  Referral Detail
                </label>
              </div>

              {/* Referrer ID */}
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="block text-xs text-gray-400 mb-1">
                    Referrer Id
                  </label>
                  <div className="text-sm text-white">
                    {selectedUser?.id || "4564564"}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <label className="block text-xs text-gray-400 mb-1">
                    User Name
                  </label>
                  <div className="text-sm text-white">
                    {selectedUser?.name || "Ibrahim"}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">
                      Subscription detail
                    </label>
                  </div>
                  <div className="text-right">
                    <label className="block text-xs text-gray-400 mb-1">
                      Fee
                    </label>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-sm text-white">
                    {selectedUser?.subscriptionDetail || "Premium"}
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-green-500 mr-1">PAID:</span>
                    <span className="text-sm text-green-500">
                      ${selectedUser?.fee || 100}
                    </span>
                  </div>
                </div>
              </div>

              {/* Transaction Screenshot */}
              <div>
                <label className="block text-xs text-gray-400 mb-1">
                  Attached Transaction Screenshot
                </label>
                <div className="border border-yellow-600 border-dashed rounded-md p-4 bg-yellow-500/5">
                  {receipt ? (
                    <div className="relative inline-block">
                      <img
                        src={URL.createObjectURL(receipt)}
                        alt="Receipt"
                        className="h-16 w-16 object-cover rounded"
                      />
                      <button
                        onClick={handleRemoveReceipt}
                        className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <label className="cursor-pointer flex flex-col items-center">
                        <div className="bg-white w-16 h-16 rounded flex items-center justify-center mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-red-500"
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
                        </div>
                        <span className="text-yellow-500 text-xs">
                          Upload Screen Shot
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleReceiptUpload}
                        />
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 flex justify-center">
              <button
                onClick={handleSubmitReward}
                className="px-6 py-2 bg-yellow-500 text-white rounded-full text-sm font-medium hover:bg-yellow-400 transition-colors"
              >
                SEND REWARD
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
