import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Lock, CreditCard, Building } from "lucide-react";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("account");

  const menuItems = [
    { id: "account", label: "Account Details", icon: <User size={20} /> },
    { id: "password", label: "Change Password", icon: <Lock size={20} /> },
    { id: "subscription", label: "Subscription", icon: <CreditCard size={20} /> },
    { id: "business", label: "Business Settings", icon: <Building size={20} /> },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100 mt-16">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-200 transition ${
                activeTab === item.id ? "bg-gray-300" : ""
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.icon}
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8">
        {activeTab === "account" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-bold">Account Details</h2>
            <p className="text-gray-600 mt-2">
              Manage your personal information.
            </p>
            {/* Add account details form here */}
          </motion.div>
        )}
        {activeTab === "password" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-bold">Change Password</h2>
            <p className="text-gray-600 mt-2">Update your password securely.</p>
            {/* Add password change form here */}
          </motion.div>
        )}
        {activeTab === "subscription" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-bold">Subscription</h2>
            <p className="text-gray-600 mt-2">
              Manage your subscription plans.
            </p>
            {/* Add subscription details here */}
          </motion.div>
        )}
        {activeTab === "business" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-bold">Business Settings</h2>
            <p className="text-gray-600 mt-2">
              Manage your business profile and settings.
            </p>
            {/* Add business settings form here */}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;
