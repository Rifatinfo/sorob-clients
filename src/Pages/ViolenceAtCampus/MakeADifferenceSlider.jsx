// File: MakeADifferenceSlider.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; // Important!
import "swiper/css/autoplay"; // Optional but safe

const cards = [
  {
    title: "Build Home",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been simply dummy.",
  },
  {
    title: "Water & Healthy Food",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been simply dummy.",
  },
  {
    title: "Study & Life Tips",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been simply dummy.",
  },
  {
    title: "Medical & Aid",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been simply dummy.",
  },
  {
    title: "Medical & Aid",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been simply dummy.",
  },
  {
    title: "Medical & Aid",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been simply dummy.",
  },
  {
    title: "Medical & Aid",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been simply dummy.",
  },
  {
    title: "Medical & Aid",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been simply dummy.",
  },
];

export default function MakeADifferenceSlider() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-red-500">
        Fact Check
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white mb-2 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300  flex flex-col justify-between h-55 ">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm flex-grow">{card.description}</p>
              <div className="text-right text-xl  mt-4 text-red-600">→</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
}
