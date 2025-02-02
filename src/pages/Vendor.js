import { useState } from "react";
import Sidebar from "../components/Sidebar";
import VendorDashboard from "./VendorDashboard";

const Vendor = () => {
  const [selectedTab, setSelectedTab] = useState("dashboard");

  const renderContent = () => {
    switch (selectedTab) {
      case "dashboard":
        return <VendorDashboard />;
      case "orders":
        return <h1 className="text-2xl font-bold">Manage Your Orders Here</h1>;
      case "messages":
        return <h1 className="text-2xl font-bold">View Customer Messages</h1>;
      case "profile":
        return <h1 className="text-2xl font-bold">Edit Your Vendor Profile</h1>;
      case "settings":
        return <h1 className="text-2xl font-bold">Account Settings</h1>;
      default:
        return <h1 className="text-2xl font-bold">Dashboard</h1>;
    }
  };

  return (
    <div className="flex mt-14">
      <Sidebar onSelect={setSelectedTab} />
      <div className="flex-1 p-6">{renderContent()}</div>
    </div>
  );
};

export default Vendor;
