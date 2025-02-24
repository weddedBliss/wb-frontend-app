import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { districtCityMap } from "../utils/districtMap";
import { registerBusiness } from "../api/business";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const BusinessRegistration = () => {
  const { userDetails } = useAuth();
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    contact: "",
    website: "",
    district: "",
    city: "",
    address: "",
    establishedYear: 0,
    weddingsHosted: "",
    liabilityInsurance: "",
    teamSize: 0,
    industryExperience: "",
    marketingChannels: "",
    socialMediaLinks: {
      facebook: "",
      instagram: "",
      tiktok: "",
      youtube: "",
    },
  });
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userDetails) {
      setLoading(false); // Stop loading once userDetails is available
    }
  }, [userDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Check if the name corresponds to a social media link
    if (name in formData.socialMediaLinks) {
      // Update the nested social media link
      setFormData((prev) => ({
        ...prev,
        socialMediaLinks: {
          ...prev.socialMediaLinks,
          [name]: value,
        },
      }));
    } else {
      // Update the main form data
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDistrictChange = (event) => {
    const district = event.target.value;
    setSelectedDistrict(district);
    setCities(districtCityMap[district] || []); // Update cities list
    // Also update the district in formData
    setFormData({ ...formData, district });
  };

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setFormData((prev) => ({ ...prev, city }));
  };

  const handleLiabilityChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      liabilityInsurance: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await registerBusiness(formData);
      navigate("/vendor/${response.data.generatedUserId}");
    } catch (error) {
      console.error("Error registering business:", error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-gray-800"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (
    userDetails &&
    userDetails.accountType === "business" &&
    !userDetails.businessRegistered
  ) {
    return (
      <div className="min-h-screen bg-white-100 p-6 mt-16">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            className="text-4xl font-bold text-left text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Register Your Business
          </motion.h1>
          <p className="text-gray-500 text-left mt-2">
            Join our platform to showcase your wedding services and reach more
            customers.
          </p>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-6 space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              type="text"
              name="businessName"
              placeholder="Business Name"
              className="w-full p-3 border rounded-lg h-13 mt-4"
              onChange={handleChange}
            />
            <input
              type="text"
              name="businessType"
              placeholder="Business Type"
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
            />

            <div className="relative">
              <input
                type="text"
                name="contact"
                placeholder=" Contact Number"
                className="w-full p-3 border rounded-lg pl-10" // Add padding to the left
                onChange={handleChange}
              />
              <span className="absolute left-3 top-3 text-gray-500">+94</span>
            </div>
            <input
              type="text"
              name="website"
              placeholder="Website (Social Media)"
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
            />
            <select
              className="w-full p-3 border rounded-lg mb-3"
              onChange={handleDistrictChange}
              value={selectedDistrict}
            >
              <option value="">Select District</option>
              {Object.keys(districtCityMap).map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
            <select
              className="w-full p-3 border rounded-lg"
              disabled={!selectedDistrict}
              value={selectedCity}
              onChange={handleCityChange}
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
            />

            {/* Establishment Details Section */}
            <h2 className="col-span-2 text-lg font-semibold text-gray-800">
              Establishment Details
            </h2>
            <input
              type="number"
              name="establishedYear"
              placeholder="Established Year"
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
            />
            <input
              type="number"
              name="weddingsHosted"
              placeholder="No. of Weddings Hosted"
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
            />
            <select
              className="w-full p-3 border rounded-lg"
              name="liabilityInsurance"
              value={formData.liabilityInsurance}
              onChange={handleLiabilityChange} // Added this!
            >
              <option value="">Do you have Liability Insurance?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <input
              type="number"
              name="teamSize"
              placeholder="No. of People in Team"
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
            />
            <input
              type="text"
              name="industryExperience"
              placeholder="Industry Experience (Years)"
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
            />

            {/* Marketing & Promotion Section */}
            <h2 className="col-span-2 text-lg font-semibold text-gray-800">
              Marketing & Promotion
            </h2>
            <input
              type="text"
              name="marketingChannels"
              placeholder="Preferred Marketing Channels"
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
            />

            {/* Social Media Links Section */}
            <h2 className="col-span-2 text-lg font-semibold text-gray-800">
              Social Media Links
            </h2>

            {/* Facebook */}
            <div className="flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" // Replace with the actual logo URL
                alt="Facebook"
                className="w-6 h-6 mr-2"
              />
              <input
                type="url"
                name="facebook"
                placeholder="Facebook Profile URL"
                className="w-full p-3 border rounded-lg"
                onChange={handleChange}
              />
            </div>

            {/* Instagram */}
            <div className="flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" // Replace with the actual logo URL
                alt="Instagram"
                className="w-6 h-6 mr-2"
              />
              <input
                type="url"
                name="instagram"
                placeholder="Instagram Profile URL"
                className="w-full p-3 border rounded-lg"
                onChange={handleChange}
              />
            </div>

            {/* TikTok */}
            <div className="flex items-center">
              <img
                src="https://w7.pngwing.com/pngs/986/124/png-transparent-tiktok-social-media-logos-brands-icon-thumbnail.png" // Replace with the actual logo URL
                alt="TikTok"
                className="w-6 h-6 mr-2"
              />
              <input
                type="url"
                name="tiktok"
                placeholder="TikTok Profile URL"
                className="w-full p-3 border rounded-lg"
                onChange={handleChange}
              />
            </div>

            {/* LinkedIn */}
            <div className="flex items-center">
              <img
                src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png" // Replace with the actual logo URL
                alt="Youtube"
                className="w-6 h-6 mr-2"
              />
              <input
                type="url"
                name="youtube"
                placeholder="Youtube URL"
                className="w-full p-3 border rounded-lg"
                onChange={handleChange}
              />
            </div>

            <div className="col-span-2 flex">
              <button
                onClick={handleSubmit}
                className="w-full bg-rose-500 text-white py-3 px-6 rounded-lg mt-4 hover:bg-rose-600"
              >
                Register Business
              </button>
            </div>
          </motion.div>

          {/* {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="mt-6 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    name: "Basic",
                    price: "LKR 0 for 1 month",
                    after: "LKR 749/month after",
                  },
                  {
                    name: "Premium",
                    price: "LKR 1749/month",
                    after: "Cancel anytime",
                  },
                  {
                    name: "Unlimited",
                    price: "LKR 2899/month",
                    after: "Subscribe or one-time payment",
                  },
                ].map((plan) => (
                  <div
                    key={plan.name}
                    className={`p-6 border rounded-lg cursor-pointer shadow-md transition-all ${
                      formData.subscriptionPlan === plan.name
                        ? "border-rose-500 bg-rose-50"
                        : ""
                    }`}
                    onClick={() =>
                      setFormData({ ...formData, subscriptionPlan: plan.name })
                    }
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {plan.name}
                      </h3>
                      {formData.subscriptionPlan === plan.name && (
                        <CheckCircle className="text-rose-500" />
                      )}
                    </div>
                    <p className="text-gray-500 text-sm mt-1">{plan.price}</p>
                    <p className="text-gray-400 text-xs mt-1">{plan.after}</p>
                    <ul className="text-gray-600 text-sm mt-3 space-y-1">
                      <li>✔ Premium account</li>
                      <li>✔ Cancel anytime</li>
                      <li>✔ Subscribe or one-time payment</li>
                    </ul>
                    <button className="w-full bg-rose-500 text-white py-2 rounded-lg mt-4 hover:bg-rose-600">
                      Select Plan
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400"
                  onClick={() => setStep(1)}
                >
                  Back
                </button>
                <button
                  className="bg-rose-500 text-white py-2 px-6 rounded-lg hover:bg-rose-600"
                  onClick={() => alert("Registration Complete!")}
                >
                  Next
                </button>
              </div>
            </motion.div>
          )} */}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p>
          We're sorry, but the page you're looking for doesn't exist or not
          accessible.
        </p>
        <Link to="/" className="text-rose-500 hover:text-rose-600 font-medium">
          Return to Home
        </Link>
      </div>
    );
  }
};

export default BusinessRegistration;
