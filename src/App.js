import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<CategoryPage />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">About Us</h3>
                <p className="text-gray-300">Wedded Bliss is your all-in-one platform for planning the perfect wedding.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Vendors</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Planning Tools</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Inspiration</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p className="text-gray-300">Email: info@weddedbliss.com</p>
                <p className="text-gray-300">Phone: (123) 456-7890</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
              &copy; 2023 Wedded Bliss. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

