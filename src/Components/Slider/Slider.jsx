import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import Hero from '../Hero/Hero';
import Hero_2 from '../Hero/Hero_2';

const Slider = () => {
  return (
    <section className="h-screen">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        // mousewheel={{ releaseOnEdges: true }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        modules={[Autoplay, Mousewheel, Pagination]}
        className="h-full mySwiper custom-swiper"
      >
        <SwiperSlide>
          <div className="h-screen">
            <Hero />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen">
            <Hero_2 />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
