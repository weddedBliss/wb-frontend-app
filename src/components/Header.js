import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, User } from "lucide-react";
import LoginDialog from "./LoginDialog";
import SignupDialog from "./SignUpDialog";

const searchHints = [
  "Search for venues...",
  "Find wedding attire...",
  "Discover photographers...",
  "Explore catering options...",
  "Browse wedding decorations...",
];

function Header() {
  const [searchHint, setSearchHint] = useState(searchHints[0]);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [isBusinessRegistered, setIsBusinessRegistered] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSearchHint(
        searchHints[Math.floor(Math.random() * searchHints.length)]
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleLoginDialog = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const toggleSignUpDialog = () => {
    setIsSignUpOpen(!isSignUpOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    setIsUserLoggedIn(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md py-4 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-rose-800 hover:text-rose-600 transition duration-300"
          >
            Wedded Bliss
          </Link>

          <div className="flex-1 mx-4 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder={searchHint}
                className="w-full py-2 px-4 pr-10 rounded-full border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 transition duration-300"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-rose-400 hover:text-rose-600 transition duration-300" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {!isUserLoggedIn ? (
              <>
                <button
                  onClick={toggleLoginDialog}
                  className="text-rose-700 hover:text-rose-500 font-medium transition duration-300"
                >
                  Login
                </button>
                <button
                  onClick={toggleSignUpDialog}
                  className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition duration-300"
                >
                  <User className="h-5 w-5 text-gray-700" />
                  <span className="text-gray-700 font-medium">John Doe</span>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-md rounded-md">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </Link>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Register Business
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {isLoginOpen && <LoginDialog onClose={toggleLoginDialog} />}
      {isSignUpOpen && <SignupDialog onClose={toggleSignUpDialog} />}
    </header>
  );
}

export default Header;
