import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const SelectPlan = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    businessType: "",
    category: "",
    contact: "",
    address: "",
    website: "",
    establishedYear: "",
    weddingsHosted: "",
    liabilityInsurance: "",
    teamSize: "",
    industryExperience: "",
    marketingChannels: "",
    subscriptionPlan: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white-100 p-6 mt-16">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-left text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Select Plan
        </motion.h1>
        <p className="text-gray-500 text-left mt-2">
          Join our platform to showcase your wedding services and reach more
          customers.
        </p>

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
      </div>
    </div>
  );
};

export default SelectPlan;
