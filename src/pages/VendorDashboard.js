import {
  Home,
  Package,
  Calendar,
  Bell,
  Settings,
  DollarSign,
  Users,
} from "lucide-react";
import { useState } from "react";

const VendorDashboard = () => {
  const stats = [
    {
      title: "Total Bookings",
      value: "128",
      icon: <Users size={28} />,
      bg: "bg-blue-100",
      text: "text-blue-800",
    },
    {
      title: "Revenue",
      value: "$12,450",
      icon: <DollarSign size={28} />,
      bg: "bg-green-100",
      text: "text-green-800",
    },
    {
      title: "Packages",
      value: "8",
      icon: <Package size={28} />,
      bg: "bg-yellow-100",
      text: "text-yellow-800",
    },
  ];

  const bookings = [
    { name: "Alice & Bob", date: "Sep 12, 2024", amount: "$1,500" },
    { name: "John & Emma", date: "Oct 5, 2024", amount: "$2,000" },
    { name: "Mike & Sarah", date: "Nov 18, 2024", amount: "$1,800" },
    { name: "Alice & Bob", date: "Sep 12, 2024", amount: "$1,500" },
    { name: "John & Emma", date: "Oct 5, 2024", amount: "$2,000" },
    { name: "Mike & Sarah", date: "Nov 18, 2024", amount: "$1,800" },
  ];

  return (
    <>
      <div className="grid grid-cols-3 gap-6 mt-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md ${stat.bg} flex items-center gap-4`}
          >
            <div className={`${stat.text}`}>{stat.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{stat.title}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow-md p-6 rounded-lg mt-6">
        <h2 className="text-lg font-semibold mb-4">Recent Bookings</h2>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Client</th>
              <th className="text-left py-2">Date</th>
              <th className="text-left py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{booking.name}</td>
                <td className="py-2">{booking.date}</td>
                <td className="py-2 font-bold">{booking.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default VendorDashboard;
