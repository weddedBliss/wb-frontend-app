import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginDialog({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { loginUser, userDetails } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await login({ email, password });

      const token = response.data.token;

      loginUser(token);
      onClose();

      if (
        userDetails &&
        userDetails.businessAccount === "business" &&
        userDetails.businessRegistered
      ) {
        navigate(`/vendor/${userDetails.userId}`);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-400 focus:border-rose-400"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-400 focus:border-rose-400"
                  placeholder="Password"
                  required
                />
              </div>

              {error && <p className="text-red-500 mb-4">{error}</p>}

              <button
                type="submit"
                className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <div className="mt-3 text-center">
              <button
                className="mt-4 w-full flex items-center justify-center bg-white border border-gray-300 py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                disabled={loading}
              >
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
