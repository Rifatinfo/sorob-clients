import { useState } from "react";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Somalia D. Silva",
    role: "Business Manager",
    image: "https://i.ibb.co.com/JRZk7R4F/slider-6.png",
    rating: 4,
    text: "In moments of struggle, we find our true strength. Every challenge we face together brings us closer, uniting us in resilience and purpose. The power of standing up for what’s right is unstoppable",
    text_2 : "When voices are silenced, we must speak louder. When hands are tied, we must stand stronger. Together, we rise.",
    photo: "https://i.ibb.co.com/JRZk7R4F/slider-6.png",
  },
  {
    name: "James A. Carter",
    role: "Software Engineer",
    image: "https://i.ibb.co.com/ynHnhFWG/slider-5.jpg",
    rating: 5,
    text: "Volunteering through Risehand has truly been a life-changing journey. The energy, passion, and unity I’ve witnessed have reinforced my belief in the strength of collective action. Seeing people come together for a cause, standing side by side, is nothing short of inspiring.",
    text_2 : "Every act of kindness and solidarity makes a difference. I am honored to be part of a movement that fuels hope and change.",
    photo: "https://i.ibb.co.com/ynHnhFWG/slider-5.jpg",
  },
  {
    name: "Anna R. Lee",
    role: "Project Coordinator",
    image: "https://i.ibb.co.com/JjZWZWRD/slider-4.jpg",
    rating: 5,
    text: "Life moves forward, even when the world seems to turn its back. In the midst of struggle, resilience becomes our greatest strength. Every journey, no matter how difficult, is a testament to the human will to survive and keep going.",
    text_2 : "Let’s open our eyes, our hearts, and our hands—to help, to uplift, and to stand together.",
    photo: "https://i.ibb.co.com/JjZWZWRD/slider-4.jpg",
  },
  {
    name: "Anna R. Lee",
    role: "Project Coordinator",
    image: "https://i.ibb.co.com/MydD7RgF/slider-3.jpg",
    rating: 5,
    text: "The strength of the human spirit shines brightest in the face of adversity. Every struggle tells a story of resilience, every hardship a testament to courage. In a world that often turns away, we must choose to see, to care, and to act.",
    text_2 : "No effort is too small when it comes to making a difference. Together, we can build a world of empathy and justice.",
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
      <h2 className="text-lg md:text-4xl font-bold text-center mb-6 text-red-600"> People Say About Us</h2>

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
            {testimonials[index].text_2}
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
