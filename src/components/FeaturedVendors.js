import React from "react"

const vendors = [
  { name: "Elegant Events", category: "Wedding Planner", image: "/placeholder.svg?height=200&width=200" },
  { name: "Floral Fantasy", category: "Florist", image: "/placeholder.svg?height=200&width=200" },
  { name: "Delicious Delights", category: "Catering", image: "/placeholder.svg?height=200&width=200" },
  { name: "Capture Moments", category: "Photography", image: "/placeholder.svg?height=200&width=200" },
]

function FeaturedVendors() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {vendors.map((vendor, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg"
        >
          <img src={vendor.image || "/placeholder.svg"} alt={vendor.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-1">{vendor.name}</h3>
            <p className="text-rose-500">{vendor.category}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeaturedVendors

