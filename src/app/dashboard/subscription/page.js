"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ClientRevenueChart from "@/components/ClientRevenueChart";
import ClientSubscriptionStats from "@/components/ClientSubscriptionStats";
import SubscriptionStatCards from "@/components/SubscriptionStatCards";
import Link from "next/link";

export default function SubscriptionPage() {
  const router = useRouter();
  // Tab state
  const [activeTab, setActiveTab] = useState("paid");
  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for tabs
  const subscriptionData = {
    paidUsers: [
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
    ],
    pendingPayments: [
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
    ],
    premiumUsers: [
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
    ],
  };

  // Get current tab data
  const getActiveTabData = () => {
    switch (activeTab) {
      case "paid":
        return subscriptionData.paidUsers;
      case "pending":
        return subscriptionData.pendingPayments;
      case "premium":
        return subscriptionData.premiumUsers;
      default:
        return subscriptionData.paidUsers;
    }
  };

  // Get heading text based on active tab
  const getHeadingText = () => {
    switch (activeTab) {
      case "paid":
        return "Paid Users";
      case "pending":
        return "Pending Payments";
      case "premium":
        return "Premium Users";
      default:
        return "Subscription Users";
    }
  };

  // Filter data based on search term
  const filteredData = getActiveTabData().filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.includes(searchTerm) ||
      user.referralId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Navigate to user detail page
  const handleViewUserDetail = (userId) => {
    router.push(`/dashboard/subscription/${userId}`);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1">
          <ClientSubscriptionStats />
        </div>
        <div className="col-span-2">
          <ClientRevenueChart />
        </div>
      </div>

      <div className="max-w-[600px] flex justify-start">
        <SubscriptionStatCards />
      </div>

      {/* Tabs navigation */}
      <div className="px-6 mb-6">
        <div className="flex space-x-4 mt-4">
          <button
            className={`py-2 px-4 text-sm font-medium rounded-full flex items-center ${
              activeTab === "paid"
                ? "bg-yellow-500 text-white"
                : "text-yellow-500 bg-yellow-400/20"
            }`}
            onClick={() => setActiveTab("paid")}
          >
            Paid Users ({subscriptionData.paidUsers.length})
          </button>
          <button
            className={`py-2 px-4 text-sm font-medium rounded-full flex items-center ${
              activeTab === "pending"
                ? "bg-yellow-500 text-white"
                : "text-yellow-500 bg-yellow-400/20"
            }`}
            onClick={() => setActiveTab("pending")}
          >
            Pending Payments ({subscriptionData.pendingPayments.length})
          </button>
          <button
            className={`py-2 px-4 text-sm font-medium rounded-full flex items-center ${
              activeTab === "premium"
                ? "bg-yellow-500 text-white"
                : "text-yellow-500 bg-yellow-400/20"
            }`}
            onClick={() => setActiveTab("premium")}
          >
            Premium Users ({subscriptionData.premiumUsers.length})
          </button>
        </div>
      </div>

      {/* Heading and Search bar in flex container */}
      <div className="px-6 mb-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">{getHeadingText()}</h2>
        <div className="relative max-w-xs">
          <input
            type="text"
            placeholder="Search User"
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Users Table */}
      <div className="px-6 overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">
                User Id
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">
                Referral Id
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">
                Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">
                Subscription Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">
                Last Payment
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user) => (
              <tr key={user.id} className="border-b border-gray-800">
                <td className="px-4 py-3 text-sm text-white">{user.id}</td>
                <td className="px-4 py-3 text-sm text-white">
                  {user.referralId}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center text-black text-sm font-bold mr-3">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <span className="text-sm text-white">{user.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded ${
                      user.status === "PAID"
                        ? "bg-green-500/20 text-green-500"
                        : user.status === "PENDING"
                        ? "bg-yellow-500/20 text-yellow-500"
                        : "bg-purple-500/20 text-purple-500"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-white">
                  {user.lastPayment.amount}{" "}
                  <span className="text-xs text-gray-400">
                    on {user.lastPayment.date}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <button
                    className="p-1 rounded-full bg-yellow-500 hover:bg-yellow-400"
                    onClick={() => handleViewUserDetail(user.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
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
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-gray-400">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
