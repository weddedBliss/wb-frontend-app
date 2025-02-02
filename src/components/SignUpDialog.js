import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUpDialog({ onClose }) {
  const [accountType, setAccountType] = useState("personal"); // Tracks account type
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    captcha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAccountTypeChange = (type) => {
    setAccountType(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { accountType, ...formData });
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-3xl relative">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side: Image */}
          <div
            className="hidden md:block bg-cover bg-center"
            style={{
              backgroundImage: `url('https://plus.unsplash.com/premium_photo-1675719847698-6c8a924b2a7a?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
          ></div>

          {/* Right Side: Login Form */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">SignUp</h2>
            <div className="mb-3">
              <select
                id="accountType"
                placeholder="Account type"
                value={accountType}
                onChange={(e) => handleAccountTypeChange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              >
                <option value="personal">Personal</option>
                <option value="business">Business</option>
              </select>
            </div>
            <form>
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
                {/* <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label> */}
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-3 border border-gray-300 rounded-lg focus:ring-rose-400 focus:border-rose-400"
                  placeholder="Email"
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-400 focus:border-rose-400"
                  placeholder="Password"
                />
              </div>
              <div className="mb-6">
                <input
                  type="confirmpassword"
                  id="confirmpassword"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-400 focus:border-rose-400"
                  placeholder="Confirm Password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-3 text-center">
              {/* <p className="text-gray-600">Or</p> */}
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
                  to="/signup"
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
