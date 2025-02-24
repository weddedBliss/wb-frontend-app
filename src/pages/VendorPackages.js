import React, { useState } from "react";
import { Eye, CalendarCheck } from "lucide-react";
import AddPackage from "./AddPackage";

function VendorPackages() {
  const [showAddPackage, setShowAddPackage] = useState(false);
  const packages = [
    {
      id: 1,
      title: "Silver Package",
      price: "$500",
      description: "Basic wedding setup with floral arrangements and lighting.",
      views: 120,
      bookings: 8,
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Gold Package",
      price: "$1,200",
      description:
        "Premium decorations, music, and catering services with complete event management.",
      views: 200,
      bookings: 15,

      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Platinum Package",
      price: "$2,500",
      views: 200,
      bookings: 15,
      description: "Luxury wedding setup with complete event management.",
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0",
    },
  ];

  const handleAddPackage = () => setShowAddPackage(true);
  const handleBack = () => setShowAddPackage(false);

  return (
    <div className="p-6">
      {showAddPackage ? (
        <AddPackage onBack={handleBack} />
      ) : (
        <>
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Packages</h2>
            <button
              onClick={handleAddPackage}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              + Add Package
            </button>
          </div>

          {/* Package List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white shadow-md rounded-lg p-4">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h4 className="text-lg font-bold text-gray-800 mt-2">
                  {pkg.title}
                </h4>
                <p className="text-gray-500">{pkg.description}</p>
                <p className="text-rose-600 font-semibold mt-2">{pkg.price}</p>
                <div className="flex justify-between items-center text-gray-600 mt-4">
                  <span className="flex items-center">👁 {pkg.views}</span>
                  <span className="flex items-center">📅 {pkg.bookings}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default VendorPackages;
