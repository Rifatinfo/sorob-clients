import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const ImageSlider = () => {
  const images = [
    "https://res.cloudinary.com/certifier/image/upload/v1682507112/membership_certificate_templates_Certifier_blog_gym_membership_certificate_715242eb67.png", 
    "https://i.pinimg.com/736x/7d/d3/41/7dd3412406179b6c55a3cbc5b4169d9c.jpg", 
    "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/cool-blue-abstract-yacht-club-membership-certificate-template-nvbmy689da86e1.webp", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLgXSRE8sjDwaE6Ip_LDtWdT-zT1Swa-EptQ&usqp=CAU", 
    "https://i.pinimg.com/736x/6a/c6/ab/6ac6abe9029b09a29a95f8506ae8e130.jpg", 
    "https://www.destroyers.org/wp-content/uploads/2021/06/Membership-Cert.gif", 
    "https://imgv2-2-f.scribdassets.com/img/document/706508043/original/f8b79c8f5f/1?v=1", 
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={1}  // Default to 1 slide per view
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1, // For mobile (1 slide)
        },
        768: {
          slidesPerView: 2, // For tablets (2 slides)
        },
        1024: {
          slidesPerView: 3, // For small desktops (3 slides)
        },
        1280: {
          slidesPerView: 3, // For larger desktops (4 slides)
        },
      }}
      className="w-full max-w-[1200px] mx-auto mb-10 "
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img 
            src={src} 
            alt={`Slide ${index + 1}`} 
            className="w-full h-[300px] object-cover border-4 shadow-xl border-red-600" 
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
