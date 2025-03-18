import { useEffect, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import PlayButton from "./PlayButton";

const Video = () => {
    const [allProduct, setAllProduct] = useState([]);

    useEffect(() => {
        fetch('/video.json')
            .then(res => res.json())
            .then(data => setAllProduct(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    console.log(allProduct);

    return (
        <div className="grid grid-cols-1 gap-2 md:flex md:gap-4 md:px-0 px-1">
            <div className="w-full md:w-1/6 ">
                <div className="md:grid md:grid-cols-1 md:gap-2 grid grid-cols-2 gap-2">
                    {/* dropdown */}
                    <details className="dropdown">
                        <summary className="btn btn-outline text-[#C73450] border-[#C73450] border-2 relative overflow-hidden w-full group">
                            <span
                                className="absolute inset-0 bg-[#C73450] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                                style={{ zIndex: 0 }}
                            ></span>
                            <p className="text-[11px] md:text-[14px] relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                                Historical Background
                            </p>
                            <RiArrowDownSLine className="relative z-10 text-xl transition-colors duration-300 ease-in-out group-hover:text-white" />
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box w-full p-2 shadow-md text-[#C73450]">
                            <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Origins of the Movement</a></li>
                            <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Major Events</a></li>
                            <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Political Context</a></li>
                        </ul>
                    </details>
                    <details className="dropdown">
                        <summary className="btn btn-outline text-[#C73450] border-[#C73450] border-2 relative overflow-hidden w-full group">
                            <span
                                className="absolute inset-0 bg-[#C73450] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                                style={{ zIndex: 0 }}
                            ></span>
                            <span className="text-[11px] md:text-[14px] relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                                Key Figures
                            </span>
                            <RiArrowDownSLine className="relative z-10 text-xl transition-colors duration-300 ease-in-out group-hover:text-white" />
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box w-full p-2 shadow-md text-[#C73450]">
                            <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Leaders & Activists</a></li>
                            <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Opposition Forces</a></li>
                            <li><a className="hover:bg-[#C73450] hover:text-white transition-all">International Support</a></li>
                        </ul>
                    </details>
                    <details className="dropdown">
                        <summary className="btn btn-outline text-[#C73450] border-[#C73450] border-2 relative overflow-hidden w-full group">
                            <span
                                className="absolute inset-0 bg-[#C73450] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                                style={{ zIndex: 0 }}
                            ></span>
                            <span className="text-[11px] md:text-[14px] relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                                Impact on Bangladesh
                            </span>
                            <RiArrowDownSLine className="relative z-10 text-xl transition-colors duration-300 ease-in-out group-hover:text-white" />
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box w-full p-2 shadow-md text-[#C73450]">
                            <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Political Changes</a></li>
                            <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Economic Effects</a></li>
                            <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Social Movements</a></li>
                        </ul>
                    </details>
                    <details className="dropdown">
                        <summary className="btn btn-outline text-[#C73450] border-[#C73450] border-2 relative overflow-hidden w-full group">
                            <span
                                className="absolute inset-0 bg-[#C73450] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                                style={{ zIndex: 0 }}
                            ></span>
                            <span className="text-[11px] md:text-[14px] relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                                Legacy and Remembrance
                            </span>
                            <RiArrowDownSLine className="relative z-10 text-xl transition-colors duration-300 ease-in-out group-hover:text-white" />
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box w-full p-2 shadow-md text-[#C73450]">
                            <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Anniversary Events</a></li>
                            <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Memorial Sites</a></li>
                            <li><a className="hover:bg-[#C73450] hover:text-white transition-all">Public Perception</a></li>
                        </ul>
                    </details>
                </div>

            </div>
            <div className="w-full md:w-5/6">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
                    {(
                        allProduct.map(singleItem => (
                            <div key={singleItem.id}>
                                <div>
                                    <div className="relative md:-space-y-5.5 space-y-2">
                                        <figure >
                                            <img
                                                className="rounded-2xl"
                                                src="https://i.ibb.co.com/rKN0tLcZ/50.jpg"
                                                alt="Shoes" />
                                        </figure>
                                        <div className="">
                                            <p className="text-lg font-semibold  mt-1  md:mt-6">A card component has  </p>
                                            {/* <p className="mb-2"><span className="font-semibold">Brand :</span> component </p> */}
                                        </div>
                                    </div>

                                    {/* play button */}
                                    <PlayButton></PlayButton>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Video;
