import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ChevronRight, ChevronDown, MapPin, Globe } from "lucide-react";
import Calendar from "react-calendar";
import './Calendar.css';
// import "react-calendar/dist/Calendar.css"

// Mock data for the package details
const packageDetails = {
  id: 1,
  title: "Luxury Hotel Package",
  vendorName: "Grand Plaza Hotel",
  images: [
    "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  description:
    "Experience luxury at its finest with our premium hotel wedding package. This all-inclusive offer features a stunning ballroom that can accommodate up to 200 guests, gourmet catering, and a dedicated wedding planner to ensure every detail is perfect.",
  rating: 4.8,
  reviews: [
    {
      id: 1,
      author: "Jane D.",
      rating: 5,
      comment: "Absolutely stunning venue and impeccable service!",
    },
    {
      id: 2,
      author: "John S.",
      rating: 4,
      comment: "Great experience overall, highly recommended.",
    },
  ],
  price: "$5000",
  faqs: [
    {
      question: "What's included in the package?",
      answer:
        "The package includes venue rental, catering for up to 200 guests, basic decorations, audio-visual equipment, and a dedicated wedding planner.",
    },
    {
      question: "Can we customize the menu?",
      answer:
        "Yes, our chef can work with you to customize the menu according to your preferences and dietary requirements.",
    },
    {
      question: "Is there a minimum guest count?",
      answer:
        "The package is designed for up to 200 guests. For smaller weddings, we offer adjusted pricing.",
    },
  ],
  companyInfo: {
    name: "Grand Plaza Hotel",
    address: "123 Luxury Avenue, Cityville, State 12345",
    website: "www.grandplazahotel.com",
  },
};

function PackageDetails() {
  const { id } = useParams();
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="container mx-auto px-4 py-8 mt-12">
      <nav className="flex mb-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link to="/" className="text-gray-700 hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight className="w-5 h-5 text-gray-400" />
              <Link
                to="/venue"
                className="ml-1 text-gray-700 hover:text-primary md:ml-2"
              >
                Venue
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight className="w-5 h-5 text-gray-400" />
              <Link
                to="#"
                className="ml-1 text-gray-700 hover:text-primary md:ml-2"
              >
                {packageDetails.vendorName}
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight className="w-5 h-5 text-gray-400" />
              <span className="ml-1 text-gray-500 md:ml-2 font-medium">
                {packageDetails.title}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold mb-6">{packageDetails.title}</h1>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="col-span-1 row-span-2">
          <img
            src={packageDetails.images[0] || "/placeholder.svg"}
            alt={packageDetails.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {packageDetails.images.slice(1).map((image, index) => (
          <div key={index} className="col-span-1">
            <img
              src={image || "/placeholder.svg"}
              alt={`${packageDetails.title} ${index + 2}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-gray-700 mb-8">{packageDetails.description}</p>

          <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
          <div className="space-y-4 mb-8">
            {packageDetails.faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="flex justify-between items-center w-full p-4 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openFaq === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="p-4 bg-gray-50">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 mx-4">
            <h2 className="text-2xl font-semibold mb-4">Book This Package</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Submit Booking Request
                </button>
              </div>
            </form>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            {/* <h3 className="text-xl font-semibold mb-4">Company Information</h3> */}
            <p className="text-2xl font-semibold mb-4">
              {packageDetails.companyInfo.name}
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-2" />
              {packageDetails.companyInfo.address}
            </p>
            <p className="flex items-center text-gray-600">
              <Globe className="w-4 h-4 mr-2" />
              <a
                href={`https://${packageDetails.companyInfo.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {packageDetails.companyInfo.website}
              </a>
            </p>

            <div className="flex items-center mb-4 mt-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(packageDetails.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {packageDetails.rating} ({packageDetails.reviews.length}{" "}
                reviews)
              </span>
            </div>
            <div className="text-3xl font-bold text-primary mb-4">
              {packageDetails.price}
            </div>
            <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition duration-300 mb-4">
              Book Now
            </button>
            <p className="text-sm text-gray-500 text-center">
              Free cancellation up to 48 hours before the event
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-4">Availability</h3>
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              className="w-full mb-4 rounded-lg border-2 border-transparent focus:border-indigo-500 transition duration-300 ease-in-out"
              style={{
                backgroundColor: "#f9fafb", // A soft background for the calendar
                padding: "10px",
              }}
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
            {packageDetails.reviews.map((review) => (
              <div
                key={review.id}
                className="mb-4 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0 last:mb-0"
              >
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium">
                    {review.author}
                  </span>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
            <button className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold py-2 px-4 rounded-lg transition duration-300 mt-4">
              Add Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageDetails;
