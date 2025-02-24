import { createContext, useContext, useState, useEffect } from "react";
import { getLoggedUser, getUserByEmail } from "../api/user";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (isUserLoggedIn) {
      const fetchUserDetails = async () => {
        try {
          console.log("inside fetch");
          const token = localStorage.getItem("token");
          if (token) {
            const response = await getLoggedUser(token);
            setUserDetails(response.data);
          }
        } catch (error) {
          console.error("Failed to fetch user details:", error);
        }
      };
      fetchUserDetails();
    }
  }, [isUserLoggedIn]);

   // ✅ Runs when userDetails changes

  const isTokenValid = () => {
    const token = localStorage.getItem("token");
    if (!token) return false;
    try {
      const payload = JSON.parse(atob(token.split(".")[1])); // Decode JWT
      return payload.exp * 1000 > Date.now(); // Check if expired
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    if (isTokenValid()) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }, []);

  const loginUser = (token) => {
    localStorage.setItem("token", token);
    
    setIsUserLoggedIn(true); // Dynamically update state
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    setIsUserLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isUserLoggedIn, loginUser, logoutUser, userDetails}}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy access
export const useAuth = () => useContext(AuthContext);
