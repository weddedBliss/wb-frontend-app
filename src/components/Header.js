import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, User, Settings, Building, Home, LogOut } from "lucide-react";
import LoginDialog from "./LoginDialog";
import SignupDialog from "./SignUpDialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useAuth } from "../context/AuthContext";

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
  const [isBusinessRegistered, setIsBusinessRegistered] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { userDetails, isUserLoggedIn, logoutUser } = useAuth();

  useEffect(() => {
    console.log("Updated userDetails:", userDetails);
  }, [userDetails]);

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
    localStorage.removeItem("token");
    logoutUser();
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
              <DropdownMenu.Root>
                {/* Button to open dropdown */}
                <DropdownMenu.Trigger asChild>
                  <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition duration-300">
                    <User className="h-5 w-5 text-gray-700" />
                    {userDetails && (
                      <span className="text-gray-700 font-medium">
                        {userDetails.firstName}
                      </span>
                    )}
                  </button>
                </DropdownMenu.Trigger>

                {/* Dropdown content */}
                <DropdownMenu.Content
                  className="absolute right-0 mt-2 pt-3 w-40 bg-white border border-gray-200 shadow-md rounded-md"
                  align="end"
                >
                  <DropdownMenu.Item asChild>
                    <Link
                      to="/"
                      className="flex px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      {/* <Home className="h-5 w-5 text-gray-700" /> */}
                      Home
                    </Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <Link
                      to="/profile"
                      className="flex px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      {/* <Settings className="h-5 w-5 text-gray-700" /> */}
                      Settings
                    </Link>
                  </DropdownMenu.Item>
                  {userDetails &&
                    userDetails.accountType === "business" &&
                    !userDetails.businessRegistered && (
                      <DropdownMenu.Item asChild>
                        <Link
                          to="/business-register"
                          className="flex px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                          {/* <Building className="h-5 w-5 text-gray-700" /> */}
                          Register Business
                        </Link>
                      </DropdownMenu.Item>
                    )}

                  {userDetails &&
                    userDetails.accountType === "business" &&
                    userDetails.businessRegistered && (
                      <DropdownMenu.Item asChild>
                        <Link
                          to="/vendor"
                          className="flex px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                          {/* <Building className="h-5 w-5 text-gray-700" /> */}
                          Business Dashboard
                        </Link>
                      </DropdownMenu.Item>
                    )}

                  <DropdownMenu.Item asChild>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-700 hover:bg-red-100 cursor-pointer"
                    >
                      Logout
                    </button>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
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
