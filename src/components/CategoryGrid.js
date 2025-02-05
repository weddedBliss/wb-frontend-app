import React from "react";
import { Link } from "react-router-dom";
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
} from "lucide-react";

const categories = [
  {
    name: "Venue",
    icon: Home,
    slug: "venue",
    bgImage:
      "url('https://www.sarahgarnier.com/wp-content/uploads/2020/09/couple.jpg')",
  },
  {
    name: "Photography",
    icon: Camera,
    slug: "photographer",
    bgImage:
      "url('https://www.nuptials.ph/wp-content/uploads/2020/02/Wedding-photographer-taking-photographs-of-groom-and-bride.jpg')",
  },
  {
    name: "Food & Beverages",
    icon: Utensils,
    slug: "food-and-beverages",
    bgImage:
      "url('https://plus.unsplash.com/premium_photo-1681841364476-8ae10f8f93b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  },
  {
    name: "Decor & Design",
    icon: Sparkles,
    slug: "decoration",
    bgImage:
      "url('https://media.istockphoto.com/id/534129306/photo/table-set-for-wedding-or-another-catered-event.jpg?s=612x612&w=0&k=20&c=y3moqyoHC2sWaJqAc9KqzaGGGXK5OOYiXf0qctgzQlI=')",
  },
  {
    name: "Entertainment",
    icon: Music,
    slug: "music-and-dance",
    bgImage:
      "url('https://plus.unsplash.com/premium_photo-1681841590340-b968010a033d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  },
  {
    name: "Makeup & Styling",
    icon: Brush,
    slug: "attire-and-beauty",
    bgImage:
      "url('https://images.unsplash.com/photo-1589210554837-d9d2ea4906a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  },
  {
    name: "Invitations",
    icon: Mail,
    slug: "invitations",
    bgImage:
      "url('https://images.unsplash.com/photo-1518600593288-2ec370b80cba?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  },
  {
    name: "Jewellery",
    icon: Gem,
    slug: "jewellery",
    bgImage:
      "url('https://plus.unsplash.com/premium_photo-1675107359827-6de8bcf03ccf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  },
  {
    name: "Apparel",
    icon: Shirt,
    slug: "poruwa-and-ashtaka",
    bgImage:
      "url('https://images.unsplash.com/photo-1585556282289-d4d5a7967936?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  },
  {
    name: "Transportation",
    icon: Car,
    slug: "vehicles",
    bgImage:
      "url('https://plus.unsplash.com/premium_photo-1664297833650-b682525c5b78?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  },
  {
    name: "Light & Sound",
    icon: Lightbulb,
    slug: "light",
    bgImage:
      "url('https://plus.unsplash.com/premium_photo-1661443575453-22d2cc475ff0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  },
  {
    name: "Gifts",
    icon: Gift,
    slug: "gifts",
    bgImage:
      "url('https://images.unsplash.com/photo-1526899855819-ebaedbc239a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  },
  {
    name: "Coordinators",
    icon: Users,
    slug: "guests",
    bgImage:
      "url('https://plus.unsplash.com/premium_photo-1675063047582-8047eb3b0309?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  },
  {
    name: "Ceremony",
    icon: Calendar,
    slug: "ceremony",
    bgImage:
      "url('https://images.unsplash.com/photo-1583939411023-14783179e581?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg')",
  },
  {
    name: "Honeymoon",
    icon: Plane,
    slug: "honeymoon",
    bgImage:
      "url('https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  },
  // {
  //   name: "Other",
  //   icon: HelpCircle,
  //   slug: "florists",
  //   bgImage:
  //     "url('https://images.unsplash.com/photo-1519307212971-dd9561667ffb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  // },
];

function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
      {categories.map((category) => (
        <Link key={category.slug} to={`/${category.slug}`}>
          <div
            className="flex flex-col items-center justify-center p-3 sm:p-4 bg-cover bg-center rounded-lg shadow-sm hover:shadow-md transition duration-300 cursor-pointer group h-36 sm:h-44 md:h-48 lg:h-56"
            style={{
              backgroundImage: `${category.bgImage}, linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.2)), linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6))`,
              backgroundBlendMode: "overlay",
            }}
          >
            {React.createElement(category.icon, {
              className:
                "h-8 sm:h-10 w-8 sm:w-10 text-white group-hover:text-rose-300 transition duration-300 mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]",
            })}
            <span
              className="text-xs sm:text-sm font-medium text-white group-hover:text-rose-200 text-center transition duration-300"
              style={{
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
              }}
            >
              {category.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoryGrid;
