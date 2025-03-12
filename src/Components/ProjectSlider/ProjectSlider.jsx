
import Slider_1 from './slider_1';
import Slider_2 from './Slider_2';
import Slider_3 from './Slider_3';
import Slider_4 from './Slider_4';
import Slider_5 from './Slider_5';
import Slider_6 from './slider_6';
const ProjectSlider = () => {
    return (
        <div>
            <div className="carousel w-full mt-20 relative">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="">
                        <Slider_1 />
                    </div>
                    <div className="absolute left-5 right-5 md:top-160 top-30 md:z-0 flex -translate-y-1/2 transform justify-between md:justify-end md:gap-1">
                        <a href="#slide4" className="btn btn-circle bg-red-600 text-white border-none">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-red-600 text-white border-none">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="">
                        <Slider_2 />
                    </div>
                    <div className="absolute left-5 right-5 md:top-160 top-30 md:z-0 flex -translate-y-1/2 transform justify-between md:justify-end  md:gap-1">
                        <a href="#slide1" className="btn btn-circle bg-red-600 text-white border-none">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-red-600 text-white border-none">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div>
                        <Slider_3 />
                    </div>
                    <div className="absolute left-5 right-5 md:top-160 top-30 md:z-0 flex -translate-y-1/2 transform justify-between md:justify-end  md:gap-1">
                        <a href="#slide2" className="btn btn-circle bg-red-600 text-white border-none">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-red-600 text-white border-none">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div>
                        <Slider_4 />
                    </div>
                    <div className="absolute left-5 right-5 md:top-160 top-30 md:z-0 flex -translate-y-1/2 transform justify-between md:justify-end  md:gap-1">
                        <a href="#slide3" className="btn btn-circle bg-red-600 text-white border-none">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-red-600 text-white border-none">❯</a>
                    </div>
                </div>

                <div id="slide5" className="carousel-item relative w-full">
                    <div className="">
                        <Slider_5 />
                    </div>
                    <div className="absolute left-5 right-5 md:top-160 top-30 md:z-0 flex -translate-y-1/2 transform justify-between md:justify-end md:gap-1">
                        <a href="#slide4" className="btn btn-circle bg-red-600 text-white border-none">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-red-600 text-white border-none">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <div className="">
                        <Slider_6 />
                    </div>
                    <div className="absolute left-5 right-5 md:top-160 top-30 md:z-0 flex -translate-y-1/2 transform justify-between md:justify-end  md:gap-1">
                        <a href="#slide1" className="btn btn-circle bg-red-600 text-white border-none">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-red-600 text-white border-none">❯</a>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ProjectSlider;

