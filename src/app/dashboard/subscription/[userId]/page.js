"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function UserSubscriptionDetail() {
  const params = useParams();
  const userId = params.userId;
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showManageModal, setShowManageModal] = useState(false);
  const [subscriptionNotes, setSubscriptionNotes] = useState("");
  const [subscriptionPlan, setSubscriptionPlan] = useState("Premium");
  const [paymentStatus, setPaymentStatus] = useState("Paid");

  // Mock data for all users - this would be fetched from an API in a real app
  const allUsers = [
    {
      id: "11",
      referralId: "HEIST23154",
      name: "Ahmed Ali",
      email: "ahmed@gmail.com",
      status: "PAID",
      subscriptionType: "Premium",
      timeLeft: "20 Days",
      subscriptionActive: true,
      firstPayment: "30%",
      firstPaymentStatus: "Paid",
      pendingAmount: "$70",
      paymentHistory: [
        {
          invoiceId: "#5456",
          billingDate: "29 Nov, 2024",
          amount: "$30",
          status: "Paid",
          paymentMethod: "Tether TRC-20",
        },
        {
          invoiceId: "#5455",
          billingDate: "29 Nov, 2024",
          amount: "$30",
          status: "Paid",
          paymentMethod: "Tether TRC-20",
        },
      ],
      lastPayment: {
        amount: "$70",
        date: "24 Nov, 2024",
      },
    },
    {
      id: "12",
      referralId: "HEIST45678",
      name: "Emma Watson",
      email: "emma@example.com",
      status: "PAID",
      subscriptionType: "Basic",
      timeLeft: "15 Days",
      subscriptionActive: true,
      firstPayment: "50%",
      firstPaymentStatus: "Paid",
      pendingAmount: "$50",
      paymentHistory: [
        {
          invoiceId: "#5457",
          billingDate: "25 Nov, 2024",
          amount: "$50",
          status: "Paid",
          paymentMethod: "Tether TRC-20",
        },
      ],
      lastPayment: {
        amount: "$50",
        date: "20 Nov, 2024",
      },
    },
    {
      id: "13",
      referralId: "HEIST98765",
      name: "Michael Brown",
      email: "michael@example.com",
      status: "PENDING",
      subscriptionType: "Pro",
      timeLeft: "10 Days",
      subscriptionActive: true,
      firstPayment: "0%",
      firstPaymentStatus: "Pending",
      pendingAmount: "$30",
      paymentHistory: [],
      lastPayment: {
        amount: "$30",
        date: "Pending",
      },
    },
    {
      id: "14",
      referralId: "HEIST12345",
      name: "Sarah Davis",
      email: "sarah@example.com",
      status: "PREMIUM",
      subscriptionType: "Premium",
      timeLeft: "25 Days",
      subscriptionActive: true,
      firstPayment: "100%",
      firstPaymentStatus: "Paid",
      pendingAmount: "$0",
      paymentHistory: [
        {
          invoiceId: "#5458",
          billingDate: "22 Nov, 2024",
          amount: "$100",
          status: "Paid",
          paymentMethod: "Tether TRC-20",
        },
      ],
      lastPayment: {
        amount: "$100",
        date: "22 Nov, 2024",
      },
    },
    {
      id: "15",
      referralId: "HEIST67890",
      name: "David Wilson",
      email: "david@example.com",
      status: "PREMIUM",
      subscriptionType: "Premium",
      timeLeft: "30 Days",
      subscriptionActive: true,
      firstPayment: "100%",
      firstPaymentStatus: "Paid",
      pendingAmount: "$0",
      paymentHistory: [
        {
          invoiceId: "#5459",
          billingDate: "18 Nov, 2024",
          amount: "$100",
          status: "Paid",
          paymentMethod: "Tether TRC-20",
        },
      ],
      lastPayment: {
        amount: "$100",
        date: "18 Nov, 2024",
      },
    },
  ];

  useEffect(() => {
    // Find the user based on the userId from the URL
    const foundUser = allUsers.find((user) => user.id === userId);

    if (foundUser) {
      setUserData(foundUser);
      setSubscriptionPlan(foundUser.subscriptionType);
      setPaymentStatus(foundUser.firstPaymentStatus);
    } else {
      // Handle user not found
      console.error(`User with ID ${userId} not found`);
    }

    setLoading(false);
  }, [userId]);

  const handleOpenModal = () => {
    setShowManageModal(true);
  };

  const handleCloseModal = () => {
    setShowManageModal(false);
  };

  const handleSaveChanges = () => {
    // In a real app, this would send updates to an API
    console.log("Saving changes:", {
      subscriptionPlan,
      paymentStatus,
      subscriptionNotes,
    });

    // Update local user data
    setUserData((prev) => ({
      ...prev,
      subscriptionType: subscriptionPlan,
      firstPaymentStatus: paymentStatus,
    }));

    setShowManageModal(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black">
        <div className="text-white mb-4">User not found</div>
        <Link
          href="/dashboard/subscription"
          className="px-4 py-2 bg-yellow-500 text-black rounded-full text-sm font-medium"
        >
          Go Back to Subscriptions
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-black text-white ">
      {/* Header with back button */}
      <div className="p-4">
        <Link
          href="/dashboard/subscription"
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

      {/* User Profile */}
      <div className="p-6 ">
        <div className="flex items-center ">
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full bg-yellow-600 flex items-center justify-center text-black text-xl font-bold mr-4">
              {userData.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{userData.name}</h2>
              <p className="text-gray-400">{userData.email}</p>
            </div>
          </div>
          <button
            className="px-4 py-2 ml-10 bg-yellow-500 hover:bg-yellow-400 text-white rounded-full h-[40px] text-sm font-bold"
            onClick={handleOpenModal}
          >
            Manage Subscription
          </button>
        </div>
      </div>

      {/* Active Subscription */}
      <div className="p-6 border-b border-gray-800">
        <h3 className="text-white font-semibold mb-4">Active Subscription</h3>

        <div className="bg-stone-900 rounded-lg p-4 mb-4">
          <div className="flex items-start mb-4">
            <div className="bg-yellow-500 text-black p-3 rounded-lg mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="text-white flex items-center h-full">
                  First Payment {userData.firstPayment}
                </span>
                <span
                  className={`text-xs h-[30px] w-[60px] flex items-center justify-center rounded-full ${
                    userData.firstPaymentStatus === "Paid"
                      ? "bg-green-500/20 text-green-500"
                      : "bg-yellow-500/20 text-yellow-500"
                  }`}
                >
                  {userData.firstPaymentStatus}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-between text-sm border-t border-gray-800 pt-4">
            <div className="flex items-center ">
              <p className="text-gray-400">Time Left: </p>
              <p className="text-white font-medium ml-1">{userData.timeLeft}</p>
            </div>
            <div className="flex items-center">
              <div className="flex items-center mr-4">
                <p className="text-gray-400">Pending Amount</p>
                <p className="text-white font-medium ml-1">
                  {userData.pendingAmount}
                </p>
              </div>
              {userData.pendingAmount !== "$0" && (
                <button className="px-4 py-1 bg-green-500 text-white rounded-full text-xs font-medium">
                  Pay Next Payment
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Subscription History Table */}
      <div className="p-6">
        <h3 className="text-white font-semibold mb-4">Subscription history</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-xs font-medium text-gray-400 border-b border-gray-800">
                <th className="py-3 pr-4">Invoice Id</th>
                <th className="py-3 pr-4">Billing Date</th>
                <th className="py-3 pr-4">Amount</th>
                <th className="py-3 pr-4">Status</th>
                <th className="py-3 pr-4">Payment Method</th>
                <th className="py-3 pr-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.paymentHistory.length > 0 ? (
                userData.paymentHistory.map((payment, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="py-3 pr-4 text-sm text-white">
                      {payment.invoiceId}
                    </td>
                    <td className="py-3 pr-4 text-sm text-white">
                      {payment.billingDate}
                    </td>
                    <td className="py-3 pr-4 text-sm text-white">
                      {payment.amount}
                    </td>
                    <td className="py-3 pr-4">
                      <span
                        className={`text-xs py-0.5 px-2 rounded-full ${
                          payment.status === "Paid"
                            ? "bg-green-500/20 text-green-500"
                            : "bg-yellow-500/20 text-yellow-500"
                        }`}
                      >
                        {payment.status}
                      </span>
                    </td>
                    <td className="py-3 pr-4 text-sm text-white">
                      {payment.paymentMethod}
                    </td>
                    <td className="py-3 pr-4">
                      <button className="text-yellow-500 hover:text-yellow-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-4 text-center text-gray-400">
                    No payment history
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Manage Subscription Modal */}
      {showManageModal && (
        <div className="fixed inset-0 flex items-center justify-end z-50 mr-5">
          <div
            className="fixed inset-0 backdrop-blur-sm bg-black/30"
            onClick={handleCloseModal}
          ></div>
          <div className="bg-stone-900 rounded-xl w-full max-w-md relative z-10">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 ">
              <h3 className="text-lg font-medium text-white">
                Manage Subscription
              </h3>
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
            <div className="px-6 py-4 ">
              <div className="flex items-center">
                <div className="w-14 h-14 mr-4">
                  <div className="rounded-full w-full h-full bg-yellow-600 flex items-center justify-center text-black text-xl font-bold">
                    {userData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-white">
                    {userData.name}
                  </h4>
                  <p className="text-xs text-gray-400">
                    User ID: {userData.id}
                  </p>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="px-6 py-4 space-y-4">
              {/* Subscription Plan */}
              <div>
                <label className="block text-xs text-gray-400 mb-1">
                  Subscription
                </label>
                <select
                  value={subscriptionPlan}
                  onChange={(e) => setSubscriptionPlan(e.target.value)}
                  className="w-full bg-stone-800 border border-gray-700 rounded-full mt-2 py-2 px-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 "
                >
                  <option value="enable">Enable</option>
                  <option value="Pro">Pro</option>
                  <option value="Premium">Premium</option>
                </select>
              </div>

              {/* Payment Status */}
              <div>
                <label className="block text-xs text-gray-400 mb-1">
                  Select Period
                </label>
                <select
                  value={paymentStatus}
                  onChange={(e) => setPaymentStatus(e.target.value)}
                  className="w-full bg-stone-800 border border-gray-700 rounded-full mt-2 py-2 px-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
                >
                  <option value="Paid">Custom</option>
                </select>
              </div>

              {/* Date Range - Start Date and End Date */}
              <div>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-xs text-gray-400 mb-1">
                      Start Date
                    </label>
                    <input
                      type="date"
                      className="w-full bg-stone-800 border border-gray-700 rounded-full mt-1 py-2 px-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs text-gray-400 mb-1">
                      End Date
                    </label>
                    <input
                      type="date"
                      className="w-full bg-stone-800 border border-gray-700 rounded-full mt-1 py-2 px-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
                    />
                  </div>
                </div>
              </div>

              {/* Notes */}
            </div>

            {/* Footer */}
            <div className="py-4 flex justify-center mt-[130px]">
              <button
                onClick={handleSaveChanges}
                className="px-12 py-2 bg-yellow-500 text-white rounded-full text-sm font-medium hover:bg-yellow-400 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
