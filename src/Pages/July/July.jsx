import { useState } from "react";
import Martyr from "./Martyr/Martyr";
import Injured from "./Injured/Injured";
import Revolutionary from "./Revolutionary/Revolutionary";
import StatsSection from "./Injured/StatsSection";
import ArchiveMain from "../ArchiveMain/ArchiveMain";

const July = () => {
    const [activeTab, setActiveTab] = useState("Martyr");

    return (
        <div className="max-w-7xl mx-auto px-4">
  
             <StatsSection/>
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
            <ArchiveMain/>
        </div>
    );
};

export default July;
