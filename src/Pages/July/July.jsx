import { useState } from "react";
import Martyr from "./Martyr/Martyr";
import Injured from "./Injured/Injured";
import Revolutionary from "./Revolutionary/Revolutionary";
import StatsSection from "./Injured/StatsSection";
import ArchiveMain from "../ArchiveMain/ArchiveMain";
import top_banner from "../../assets/all_top_page_bnner.jpg"
const July = () => {
    const [activeTab, setActiveTab] = useState("Martyr");

    return (
        <div>
            <div>
                <div className="relative w-full">
                    <div className="relative">
                        <img
                            className="w-full h-[300px] md:h-[350px] object-cover"
                            src={top_banner}
                            alt="Hero Banner"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                        <p className="text-lg md:text-xl font-semibold">Home / Projects</p>
                        <h1 className="text-4xl md:text-5xl font-extrabold">July Uprising</h1>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
                <StatsSection />
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
                        <button
                            onClick={() => setActiveTab("Revolutionary")}
                            className={`font-semibold px-5 py-3 transition-all duration-300 border-b-2
                        ${activeTab === "Revolutionary" ? "border-red-600 text-red-600" : "border-transparent text-gray-600"}`}
                        >
                            <span>Revolutionary</span>
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="mt-8">
                    {activeTab === "Martyr" && <Martyr />}
                    {activeTab === "Injured" && <Injured />}
                    {activeTab === "Revolutionary" && <Revolutionary />}
                </div>
                <ArchiveMain />
            </div>
        </div>
    );
};

export default July;
