import React from "react";
import { Link } from "react-router-dom";

function LoginDialog({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-3xl relative">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side: Image */}
          <div
            className="hidden md:block bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
          ></div>

          {/* Right Side: Login Form */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-9">
              Welcome Back!
            </h2>
            
            <form>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-400 focus:border-rose-400"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-400 focus:border-rose-400"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              >
                Login
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
                Sign in with Google
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-rose-500 hover:text-rose-600 font-medium"
                >
                  Sign Up
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

export default LoginDialog;
