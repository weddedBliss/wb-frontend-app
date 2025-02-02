import React, { useState, useEffect } from "react"

const slides = [
  {
    image: "https://stanburyphotography.co.uk/wp-content/uploads/2018/11/sri-lanka-destination-wedding-photographers-048-1.jpg",
    title: "Plan Your Dream Wedding",
    description: "Discover everything you need for your perfect day",
  },
  {
    image: "https://www.maheshmannapperuma.lk/images/fullwidth-slide/fullwidth-slide5.jpg",
    title: "Find Trusted Vendors",
    description: "Connect with top-rated wedding professionals",
  },
  {
    image: "https://www.elmomentoperfecto.com/wp-content/uploads/2017/08/Slide_Wedding_Photographer_Morocco_Marrakech_Aljosa_Petric_2.jpg",
    title: "Inspiration & Ideas",
    description: "Get inspired with the latest wedding trends and styles",
  },
  {
    image: "https://stanburyphotography.wordpress.com/wp-content/uploads/2018/11/sri-lanka-destination-wedding-photographers-016.jpg",
    title: "Streamline Your Planning",
    description: "Use our tools to make wedding planning a breeze",
  },
  // {
  //   image: "https://images.unsplash.com/photo-1522333222514-7da3ab176ebc",
  //   title: "Celebrate Love in Style",
  //   description: "Make your big day as unique as your love story",
  // },
  // {
  //   image: "https://images.unsplash.com/photo-1536610070233-650c3dd74bfb",
  //   title: "Capture Every Moment",
  //   description: "Cherish your memories with stunning photography",
  // },
  // {
  //   image: "https://images.unsplash.com/photo-1570633400643-8b0ab4c93fc7",
  //   title: "Elegant Floral Arrangements",
  //   description: "Enhance your wedding with beautiful blooms",
  // },
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

