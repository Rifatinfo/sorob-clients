import { useState } from 'react';
import top_banner from '../../assets/all_top_page_bnner.jpg';
import Martyr from '../July/Martyr/Martyr';
import Injured from '../July/Injured/Injured';
import StatsSection from '../July/Injured/StatsSection';
import StatsSection_2 from '../July/Injured/StatsSection_2';
import ArchiveMain from '../ArchiveMain/ArchiveMain';
const ViolenceAtCampus = () => {
    const [activeTab, setActiveTab] = useState("Martyr");

    return (
        <div>
            {/* top top_banner */}
            <div>
                <div className="relative w-full">
                    <div className="relative">
                        <img
                            className="w-full h-[200px] md:h-[300px] object-cover"
                            src={top_banner}
                            alt="Hero Banner"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                        <p className="text-lg md:text-xl font-semibold">Home / Projects</p>
                        <h1 className="text-4xl md:text-5xl font-extrabold">Violence At Campus</h1>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto">


                {/* content here */}
                <div >
                    <StatsSection_2/>
                    {/* Tab Buttons */}
                    <div className="flex justify-center mt-20">
                        <div className="flex items-center gap-4 text-lg">
                            <button
                                onClick={() => setActiveTab("Martyr")}
                                className={`font-semibold px-5 py-3 transition-all duration-300 border-b-2
                        ${activeTab === "Martyr" ? "border-red-600 text-red-600" : "border-transparent text-gray-600"}`}
                            >
                                <span>Martyr</span>
                            </button>
                            <button
                                onClick={() => setActiveTab("Injured")}
                                className={`font-semibold px-5 py-3 transition-all duration-300 border-b-2
                        ${activeTab === "Injured" ? "border-red-600 text-red-600" : "border-transparent text-gray-600"}`}
                            >
                                <span>Injured</span>
                            </button>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="mt-8">
                        {activeTab === "Martyr" && <Martyr />}
                        {activeTab === "Injured" && <Injured />}
                    </div>
                </div>
            </div>

            {/* case studies */}
            <ArchiveMain/>
        </div>
    );
};

export default ViolenceAtCampus;