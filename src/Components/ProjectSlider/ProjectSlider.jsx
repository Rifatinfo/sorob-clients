
import Slider_1 from './slider_1';
import Slider_2 from './Slider_2';
const ProjectSlider = () => {
    return (
        <div>
            <div className="carousel w-full mt-20">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="">
                        <Slider_1 />
                    </div>
                    <div className="absolute left-5 right-5 md:top-160 top-40 flex -translate-y-1/2 transform justify-end ">
                        <a href="#slide4" className="btn btn-circle bg-red-600 text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-red-600 text-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="">
                        <Slider_2 />
                    </div>
                    <div className="absolute left-5 right-5 md:top-160 top-40 flex -translate-y-1/2 transform justify-end ">
                        <a href="#slide1" className="btn btn-circle bg-red-600 text-white">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-red-600 text-white">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSlider;

