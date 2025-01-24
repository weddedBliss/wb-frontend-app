import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const searchHints = [
  "Search for venues...",
  "Find wedding attire...",
  "Discover photographers...",
  "Explore catering options...",
  "Browse wedding decorations...",
];

function Header() {
  const [searchHint, setSearchHint] = useState(searchHints[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSearchHint(searchHints[Math.floor(Math.random() * searchHints.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-rose-800 hover:text-rose-600 transition duration-300">
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
            <Link to="/login" className="text-rose-700 hover:text-rose-500 font-medium transition duration-300">
              Login
            </Link>
            <Link to="/signup" className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

