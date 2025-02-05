import React from "react";
import { Link, useParams } from "react-router-dom";
import { Facebook, Instagram, Globe, ChevronRight } from "lucide-react";

// Sample vendor data (You can fetch this from an API)
const vendorData = {
  id: 1,
  name: "Elegant Events",
  logo: "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual logo URL
  description: "Creating memorable moments with stunning decor and planning.",
  socialLinks: {
    facebook: "https://facebook.com/elegantevents",
    instagram: "https://instagram.com/elegantevents",
    website: "https://elegantevents.com",
  },
  packages: [
    {
      id: 1,
      title: "Silver Package",
      price: "$500",
      description: "Basic wedding setup with floral arrangements and lighting.",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Gold Package",
      price: "$1,200",
      description: "Premium decorations, music, and catering services with complete event management.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Platinum Package",
      price: "$2,500",
      description: "Luxury wedding setup with complete event management.",
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0",
    },
  ],
};

function VendorProfile() {
  const { vendorId } = useParams(); // For dynamic vendor pages (if needed)

  return (
    <div className="container mx-auto px-6 py-10 mt-16">
      {/* Vendor Info Section */}
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link to="/" className="text-gray-700 hover:text-rose-500">
              Vendors
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight className="w-5 h-5 text-gray-400" />
              <span className="ml-1 text-gray-500 md:ml-2 font-medium">
                Elegant Events
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6">
        <img
          src={vendorData.logo}
          alt={vendorData.name}
          className="w-24 h-24 object-cover rounded-full"
        />
        <div>
          <h2 className="text-2xl font-bold text-rose-800">
            {vendorData.name}
          </h2>
          <p className="text-gray-600">{vendorData.description}</p>
          <div className="flex space-x-4 mt-2">
            <Link to={vendorData.socialLinks.facebook} target="_blank">
              <Facebook className="h-6 w-6 text-blue-600 hover:text-blue-800" />
            </Link>
            <Link to={vendorData.socialLinks.instagram} target="_blank">
              <Instagram className="h-6 w-6 text-pink-600 hover:text-pink-800" />
            </Link>
            <Link to={vendorData.socialLinks.website} target="_blank">
              <Globe className="h-6 w-6 text-gray-700 hover:text-gray-900" />
            </Link>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">
        Packages
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vendorData.packages.map((pkg) => (
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
            <button className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-full w-full mt-4">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VendorProfile;
