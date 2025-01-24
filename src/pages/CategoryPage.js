import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ChevronRight } from "lucide-react"

// Mock data for subcategories and packages
const categoryData = {
  venue: {
    name: "Venue",
    subcategories: ["All", "Hotels", "Banquet Halls", "Outdoor Venues", "Religious Venues"],
    packages: [
      {
        id: 1,
        title: "Luxury Hotel Package",
        description: "Elegant ballroom for 200 guests",
        image: "/placeholder.svg?height=300&width=400",
        price: "$5000",
      },
      {
        id: 2,
        title: "Rustic Barn Wedding",
        description: "Charming countryside venue",
        image: "/placeholder.svg?height=300&width=400",
        price: "$3000",
      },
      {
        id: 3,
        title: "Beachfront Ceremony",
        description: "Romantic seaside location",
        image: "/placeholder.svg?height=300&width=400",
        price: "$4000",
      },
      {
        id: 4,
        title: "Garden Party Venue",
        description: "Beautiful outdoor gardens",
        image: "/placeholder.svg?height=300&width=400",
        price: "$3500",
      },
    ],
  },
  "attire-and-beauty": {
    name: "Attire & Beauty",
    subcategories: ["All", "Bridal Gowns", "Groom Suits", "Bridesmaid Dresses", "Makeup & Hair"],
    packages: [
      {
        id: 1,
        title: "Bridal Dream Package",
        description: "Designer gown with accessories",
        image: "/placeholder.svg?height=300&width=400",
        price: "$2500",
      },
      {
        id: 2,
        title: "Groom's Elegance",
        description: "Custom-tailored suit and shoes",
        image: "/placeholder.svg?height=300&width=400",
        price: "$1500",
      },
      {
        id: 3,
        title: "Bridesmaid Harmony",
        description: "Coordinated dresses for 4",
        image: "/placeholder.svg?height=300&width=400",
        price: "$1200",
      },
      {
        id: 4,
        title: "Glam Squad",
        description: "Hair and makeup for bride and 3 others",
        image: "/placeholder.svg?height=300&width=400",
        price: "$800",
      },
    ],
  },
  // Add more categories as needed
}

function CategoryPage() {
  const { category } = useParams()
  const [activeSubcategory, setActiveSubcategory] = useState("All")
  const categoryInfo = categoryData[category]

  if (!categoryInfo) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
        <p>We're sorry, but the category you're looking for doesn't exist.</p>
        <Link to="/" className="text-rose-500 hover:text-rose-600 font-medium">
          Return to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link to="/" className="text-gray-700 hover:text-rose-500">
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight className="w-5 h-5 text-gray-400" />
              <span className="ml-1 text-gray-500 md:ml-2 font-medium">{categoryInfo.name}</span>
            </div>
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold mb-6">{categoryInfo.name}</h1>

      <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
        {categoryInfo.subcategories.map((subcat) => (
          <button
            key={subcat}
            onClick={() => setActiveSubcategory(subcat)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeSubcategory === subcat ? "bg-rose-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {subcat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryInfo.packages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={pkg.image || "/placeholder.svg"} alt={pkg.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{pkg.title}</h3>
              <p className="text-gray-600 mb-4">{pkg.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-rose-500 font-bold">{pkg.price}</span>
                <button className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryPage

