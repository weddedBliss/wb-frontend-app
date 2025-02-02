import React from "react"
import Slideshow from "../components/Slideshow"
import CategoryGrid from "../components/CategoryGrid"
import FeaturedVendors from "../components/FeaturedVendors"

function Home() {
  return (
    <div className="space-y-12">
      <section className="bg-rose-50 py-6 mt-20">
        <div className="container mx-auto px-4">
          <CategoryGrid />
        </div>
      </section>
      <Slideshow />
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Plan Your Perfect Wedding</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-rose-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Find Inspiration</h3>
              <p className="text-gray-600">Discover the latest trends and ideas for your dream wedding.</p>
            </div>
            <div className="bg-rose-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Connect with Vendors</h3>
              <p className="text-gray-600">Browse and book top-rated wedding professionals in your area.</p>
            </div>
            <div className="bg-rose-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Manage Your Events</h3>
              <p className="text-gray-600">Keep track of all your wedding details in one place.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-rose-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Vendors</h2>
          <FeaturedVendors />
        </div>
      </section>
    </div>
  )
}

export default Home

