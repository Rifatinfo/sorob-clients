import { useState } from "react";
import Video from "../Video/Video";
import BlogSlider from "../BlogSlider/BlogSlider";

const VideosAndPhotos = () => {
    const [activeTab, setActiveTab] = useState("Videos");
    
    return (
        <div>
             <div className="flex items-center justify-center md:text-center mb-10 mt-20 text-xl">
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap">
                    <button
                        onClick={() => setActiveTab("Videos")}
                        className={`font-semibold flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b-2 transition-all duration-300
                        ${activeTab === "Videos" ? "border-red-600 text-red-600" : "border-transparent text-gray-600"}`}
                    >
                        <span>Videos</span>
                    </button>
                    <button
                        onClick={() => setActiveTab("Photos")}
                        className={`font-semibold flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b-2 transition-all duration-300
                        ${activeTab === "Photos" ? "border-red-600 text-red-600" : "border-transparent text-gray-600"}`}
                    >
                        <span>Photos</span>
                    </button>
                </div>

                {/* Tab Content */}
                <div className="mt-6">
                    {activeTab === "Videos" && <p></p>}
                    {activeTab === "Photos" && <p className="text-lg"></p>}
                </div>
            </div>
                <Video/>

                {/* Fact check */}
                <div>
                    <BlogSlider/>
                </div>
        </div>
    );
};

export default VideosAndPhotos;