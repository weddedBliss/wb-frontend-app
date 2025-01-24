import React from "react"
import { Link } from "react-router-dom"
import {
    Home,
    Camera,
    Utensils,
    Sparkles,
    Music,
    Brush,
    Mail,
    Gem,
    Shirt,
    Car,
    Users,
    Lightbulb,
    Flower2,
    Gift,
    Calendar,
    Plane,
    HelpCircle,
} from "lucide-react"

const categories = [
    { name: "Venue", icon: Home, slug: "venue" },
    { name: "Photography", icon: Camera, slug: "photographer" },
    { name: "Food & Beverages", icon: Utensils, slug: "food-and-beverages" },
    { name: "Decor & Design", icon: Sparkles, slug: "decoration" },
    { name: "Entertainment", icon: Music, slug: "music-and-dance" },
    { name: "Makeup & Styling", icon: Brush, slug: "attire-and-beauty" },
    { name: "Invitations", icon: Mail, slug: "invitations" },
    { name: "Jewellery", icon: Gem, slug: "jewellery" },
    { name: "Apparel", icon: Shirt, slug: "poruwa-and-ashtaka" },
    { name: "Transportation", icon: Car, slug: "vehicles" },
    { name: "Light & Sound", icon: Lightbulb, slug: "light" },
    { name: "Florists", icon: Flower2, slug: "florists" },
    { name: "Gifts", icon: Gift, slug: "gifts" },
    { name: "Coordinators", icon: Users, slug: "guests" },
    { name: "Ceremony", icon: Calendar, slug: "ceremony" },
    { name: "Honeymoon", icon: Plane, slug: "honeymoon" },
    // { name: "Other", icon: HelpCircle, slug: "other" },
  ]

function CategoryGrid() {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
      {categories.map((category) => (
        <Link key={category.slug} to={`/${category.slug}`}>
          <div className="flex flex-col items-center justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 cursor-pointer group">
            {React.createElement(category.icon, {
              className: "h-8 w-8 text-rose-400 group-hover:text-rose-600 transition duration-300 mb-2",
            })}
            <span className="text-xs font-medium text-gray-600 group-hover:text-gray-800 text-center transition duration-300">
              {category.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryGrid

