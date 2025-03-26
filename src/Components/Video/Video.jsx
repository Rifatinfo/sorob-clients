import { useEffect, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import PlayButton from "./PlayButton";
import { Link } from "react-router-dom";

const Video = () => {
    const [allProduct, setAllProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/projects/july-uprising/videos')
            .then(res => res.json())
            .then(data => setAllProduct(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    console.log(allProduct);

    return (
        <div className="grid grid-cols-1 gap-2 md:flex md:gap-4 md:px-0 px-1">
            <div className="w-full md:w-1/6 ">
                <div className="md:grid md:grid-cols-1 md:gap-2 grid grid-cols-2 gap-2">
                    <button rel="noopener noreferrer" href="#" className="btn px-8 py-2.5 md:text-lg font-semibold border rounded bg-red-600 border-none text-white">Martyr</button>
                    <button rel="noopener noreferrer" href="#" className="btn px-8 py-2.5 md:text-lg font-semibold border rounded bg-red-600 border-none text-white">Injured</button>
                    <button rel="noopener noreferrer" href="#" className="btn px-8 py-2.5 md:text-lg font-semibold border rounded bg-red-600 border-none text-white">Revolutionary</button>
                    <button rel="noopener noreferrer" href="#" className="btn  px-8  md:py-2.5 md:text-lg font-semibold border rounded bg-red-600 border-none text-white">Case Studies</button>
                    <button rel="noopener noreferrer" href="#" className="btn px-8 py-2.5 md:text-lg font-semibold border rounded bg-red-600 border-none text-white">Fact Check</button>
                    <button rel="noopener noreferrer" href="#" className="btn px-8 py-2.5 md:text-lg font-semibold border rounded bg-red-600 border-none text-white">photos</button>
                </div>

            </div>
            <div className="w-full md:w-5/6">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
                    {(
                        allProduct.map(singleItem => (
                            <div key={singleItem.id}>
                                <Link to={`/projects/july-uprising/videos/${singleItem._id}`}>
                                <div>
                                    <div className="relative md:-space-y-5.5 space-y-2">
                                        <figure >
                                            <img
                                                className="rounded-2xl"
                                                src={singleItem.cover_image}
                                                alt="Shoes" />
                                        </figure>
                                        <div className="">
                                            <p className="text-lg font-semibold  mt-1  md:mt-6">{singleItem.title}</p>
                                        </div>
                                    </div>

                                    {/* play button */}
                                    <PlayButton></PlayButton>
                                </div>
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Video;
