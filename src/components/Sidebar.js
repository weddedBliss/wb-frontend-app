import { Home, Package, Calendar, Bell, Settings } from "lucide-react";
import { useState } from "react";

const Sidebar = ({ onSelect }) => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <Home />, key: "dashboard" },
    { name: "Packages", icon: <Package />, key: "packages" },
    { name: "Bookings", icon: <Calendar />, key: "bookings" },
    { name: "Notifications", icon: <Bell />, key: "notifications" },
    { name: "Settings", icon: <Settings />, key: "settings" },
  ];

  return (
    <div className="h-screen w-64 bg-[#F8F9FA] shadow-lg p-5 mt-6">
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li
            key={item.key}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer 
              ${
                activeTab === item.key
                  ? "bg-rose-200 text-[#0F5132] font-semibold"
                  : "hover:bg-gray-200 text-gray-700"
              }`}
            onClick={() => {
              setActiveTab(item.key);
              onSelect(item.key);
            }}
          >
            {item.icon}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
