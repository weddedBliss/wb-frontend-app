import React, { useState, useEffect } from "react"

const slides = [
  {
    image: "/placeholder.svg?height=600&width=1200",
    title: "Plan Your Dream Wedding",
    description: "Discover everything you need for your perfect day",
  },
  {
    image: "/placeholder.svg?height=600&width=1200",
    title: "Find Trusted Vendors",
    description: "Connect with top-rated wedding professionals",
  },
  {
    image: "/placeholder.svg?height=600&width=1200",
    title: "Inspiration & Ideas",
    description: "Get inspired with the latest wedding trends and styles",
  },
  {
    image: "/placeholder.svg?height=600&width=1200",
    title: "Streamline Your Planning",
    description: "Use our tools to make wedding planning a breeze",
  },
]

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent flex items-center">
            <div className="text-white max-w-2xl ml-8 md:ml-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl md:text-2xl mb-6">{slide.description}</p>
              <button className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Slideshow

