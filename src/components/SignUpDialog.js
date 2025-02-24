import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../api/auth";

function SignUpDialog({ onClose }) {
  const [accountType, setAccountType] = useState("personal");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAccountTypeChange = (e) => {
    setAccountType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const userData = {
      accountType,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await register(userData);
      setSuccess("Registration successful! You can now log in.");
      setError("");
      console.log("Registration successful:", response.data);
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
      setSuccess("");
      console.error("Registration failed:", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-3xl relative">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div
            className="hidden md:block bg-cover bg-center"
            style={{
              backgroundImage: `url('https://plus.unsplash.com/premium_photo-1675719847698-6c8a924b2a7a?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
          ></div>

          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Sign Up</h2>

            <div className="mb-3">
              <select
                id="accountType"
                value={accountType}
                onChange={handleAccountTypeChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              >
                <option value="personal">Personal</option>
                <option value="business">Business</option>
              </select>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border rounded-lg p-2 w-1/2 px-4"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border rounded-lg p-2 w-1/2 px-4"
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-3 border border-gray-300 rounded-lg focus:ring-rose-400 focus:border-rose-400"
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-400 focus:border-rose-400"
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-400 focus:border-rose-400"
                />
              </div>

              {error && <p className="text-red-500 mb-4">{error}</p>}
              {success && <p className="text-green-500 mb-4">{success}</p>}

              <button
                type="submit"
                className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-3 text-center">
              <button className="mt-4 w-full flex items-center justify-center bg-white border border-gray-300 py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/640px-Google_%22G%22_logo.svg.png"
                  alt="Google"
                  className="h-5 w-5 mr-2"
                />
                Sign Up with Google
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-rose-500 hover:text-rose-600 font-medium"
                >
                  Login
                </Link>
              </p>
            </div>

            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition duration-300"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpDialog;
