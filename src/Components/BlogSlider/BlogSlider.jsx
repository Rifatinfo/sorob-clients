import React, {  useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

   const [blogs, setBlogs] = useState([]);
     useEffect(() => {
           fetch("/blog.json")
           .then(res => res.json())
           .then(data =>{
            setBlogs(data);
           })
       },[])
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
            <div className="flex justify-center items-center">
              <Link to="/projects/july-uprising/all-fact-finding"><a
                href="#"
                className="border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-100"
              >
                View All
              </a></Link>
            </div>
            {/* Navigation Buttons */}
            <div className="flex justify-center gap-2 mt-8">
              <button ref={prevRef} className=" p-3 rounded-full bg-red-600 text-white">
                <FaChevronLeft />
              </button>
              <button ref={nextRef} className=" p-3 rounded-full bg-red-600 text-white">
                <FaChevronRight />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-3/5 relative">
            <Swiper
              modules={[Navigation]}
              slidesPerView={2}
              spaceBetween={28}
              loop={true}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
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
                  <h3 className="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-red-600">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 leading-6 transition-all duration-500 mb-8">
                    {blog.description}
                  </p>
                  <a href="#" className="flex items-center gap-2 text-lg text-red-600 font-semibold">
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
