import { useState } from "react";
import Video from "../Video/Video";
import BlogSlider from "../BlogSlider/BlogSlider";
import Photo from "../Photo/Photo";

const VideosAndPhotos = () => {
    const [activeTab, setActiveTab] = useState("Videos");

    return (
        <div>
            <div className="flex flex-col items-center justify-center text-xl mt-20 mb-10">
                {/* Tab Buttons */}
                <div className="flex overflow-x-auto sm:justify-center">
                    <button
                        onClick={() => setActiveTab("Videos")}
                        className={`font-semibold px-5 py-3 border-b-2 transition-all duration-300 
                    ${activeTab === "Videos" ? "border-red-600 text-red-600" : "border-transparent text-gray-600"}`}
                    >
                        Videos
                    </button>
                    <button
                        onClick={() => setActiveTab("Photos")}
                        className={`font-semibold px-5 py-3 border-b-2 transition-all duration-300 
                    ${activeTab === "Photos" ? "border-red-600 text-red-600" : "border-transparent text-gray-600"}`}
                    >
                        Photos
                    </button>
                </div>

                {/* Tab Content */}
                <div className="mt-6 w-full flex justify-center">
                    {activeTab === "Videos" && <Video />}
                    {activeTab === "Photos" && <Photo />}
                </div>
            </div>


            {/* Fact check */}
            <div>
                <BlogSlider />
            </div>
        </div>
    );
};

export default VideosAndPhotos;