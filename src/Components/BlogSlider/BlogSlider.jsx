import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BlogSlider = () => {
  const blogs = [
    {
      title: "Clever ways to invest in product to organize your portfolio",
      description:
        "Discover smart investment strategies to streamline and organize your portfolio. Explore innovative approaches to optimize your...",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOr-d31-rGjUw5Tcp5ux0YRmh3Q6r49Gg9Q&s",
    },
    {
      title: "How to grow your profit through systematic investment with us",
      description:
        "Unlock the power of systematic investment with us and watch your profits soar. Our expert team will guide you on the path to financial..",
      image: "https://mondoweiss.net/wp-content/uploads/2024/07/Biplob-Cholbe-thin-blue-line.jpeg",
    },
    {
      title: "How to grow your profit through systematic investment with us",
      description:
        "Unlock the power of systematic investment with us and watch your profits soar. Our expert team will guide you on the path to financial..",
      image: "https://mondoweiss.net/wp-content/uploads/2024/07/Biplob-Cholbe-thin-blue-line.jpeg",
    },
    {
        title: "Clever ways to invest in product to organize your portfolio",
        description:
          "Discover smart investment strategies to streamline and organize your portfolio. Explore innovative approaches to optimize your...",
        image: "https://pagedone.io/asset/uploads/1696244059.png",
      },
  ];

  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-2/5 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-5">
              Fact <span className="text-red-600">Check</span>
            </h2>
            <p className="text-gray-500 mb-10">
              Welcome to our blog section, where knowledge meets inspiration. Explore insightful articles, expert tips, and the latest trends in our field.
            </p>
            <a
              href="#"
              className="border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-100"
            >
              View All
            </a>
            {/* Navigation Buttons */}
            <div className="flex justify-center gap-2  md:absolute mt-8 md:mt-30 md:ml-30">
             <button  className="p-3   rounded-full bg-red-600 text-white">
                       <FaChevronLeft />
                     </button>
                     <button  className=" p-3 rounded-full bg-red-600 text-white">
                       <FaChevronRight />
                     </button>
            </div>
          </div>
          {/* swiper-button-prev */}
          {/* swiper-button-next */}
          <div className="w-full lg:w-3/5 relative">
            <Swiper
              modules={[Navigation]}
              slidesPerView={2}
              spaceBetween={28}
              loop={true}
              navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 20 },
                568: { slidesPerView: 2, spaceBetween: 28 },
                1024: { slidesPerView: 2, spaceBetween: 32 },
              }}
              className="mySwiper"
            >
              {blogs.map((blog, index) => (
                <SwiperSlide key={index} className="group">
                  <div className="flex items-center mb-9">
                    <img
                      src={blog.image}
                      alt="Blog"
                      className="rounded-2xl w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-indigo-600">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 leading-6 transition-all duration-500 mb-8">
                    {blog.description}
                  </p>
                  <a href="#" className="flex items-center gap-2 text-lg text-indigo-700 font-semibold">
                    Read more
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSlider;
