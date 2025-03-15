import { useState } from "react";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Somalia D. Silva",
    role: "Business Manager",
    image: "https://i.ibb.co.com/JRZk7R4F/slider-6.png",
    rating: 4,
    text: "Volunteering with Risehand has been a transformative experience for me. Seeing firsthand the impact we make in people's lives is incredibly rewarding.",
    photo: "https://i.ibb.co.com/JRZk7R4F/slider-6.png",
  },
  {
    name: "James A. Carter",
    role: "Software Engineer",
    image: "https://i.ibb.co.com/ynHnhFWG/slider-5.jpg",
    rating: 5,
    text: "Risehand gave me a chance to make a real impact. The smiles I see every day inspire me to continue helping those in need.",
    photo: "https://i.ibb.co.com/ynHnhFWG/slider-5.jpg",
  },
  {
    name: "Anna R. Lee",
    role: "Project Coordinator",
    image: "https://i.ibb.co.com/JjZWZWRD/slider-4.jpg",
    rating: 5,
    text: "Helping through Risehand has been the most fulfilling experience of my life. The power of community is truly amazing.",
    photo: "https://i.ibb.co.com/JjZWZWRD/slider-4.jpg",
  },
  {
    name: "Anna R. Lee",
    role: "Project Coordinator",
    image: "https://i.ibb.co.com/MydD7RgF/slider-3.jpg",
    rating: 5,
    text: "Helping through Risehand has been the most fulfilling experience of my life. The power of community is truly amazing.",
    photo: "https://i.ibb.co.com/MydD7RgF/slider-3.jpg",
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 my-16">
      <h2 className="text-lg md:text-4xl font-bold text-center mb-6 text-red-600">What Our People Say About Risehands</h2>

      <div className="flex flex-col md:flex-row md:justify-between items-center gap-12 md:gap-100">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 text-left">
          <div className="flex items-center gap-3 text-red-500">
            <FaQuoteLeft className="text-3xl" />
            <div className="flex">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} className={`text-xl ${i < testimonials[index].rating ? "text-yellow-500" : "text-gray-300"}`} />
                ))}
            </div>
          </div>
          <p className="text-2xl font-semibold mt-4">{testimonials[index].text}</p>
          <p className="text-gray-600 mt-4">
            Every moment spent helping others has strengthened my belief in compassion and the power of community.
          </p>
          <div className="flex items-center mt-6">
            <img src={testimonials[index].image} alt={testimonials[index].name} className="w-12 h-12 rounded-full border-2 border-red-500" />
            <div className="ml-3">
              <p className="font-semibold text-lg">{testimonials[index].name}</p>
              <p className="text-red-500">{testimonials[index].role}</p>
            </div>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="w-full h-64 md:w-96 md:h-96 overflow-hidden relative">
            <img src={testimonials[index].photo} alt="Testimonial" className="w-full h-full object-cover" />
            <div className="absolute top-4 right-4 bg-yellow-500 text-white p-3 rounded-full">
              <FaQuoteLeft className="text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button onClick={prevTestimonial} className="p-3 rounded-full bg-red-600 text-white">
          <FaChevronLeft />
        </button>
        <button onClick={nextTestimonial} className="p-3 rounded-full bg-red-600 text-white">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
