
import { useState } from "react";
import Video from "../../Components/Video/Video";
import Photo from "../../Components/Photo/Photo";


const CampusViolenceVideoAndPhotos = () => {
    const [activeTab, setActiveTab] = useState("Videos");

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center text-xl mt-20 mb-10 p-2">
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

        </div>
    );
};

export default CampusViolenceVideoAndPhotos;