import { useEffect, useState } from "react";
import 'react-tabs/style/react-tabs.css';
import HumanRights from "./HumanRights";
import Environmental from "./Environmental";

const KeyArea = () => {
    const [data, setData] = useState([]);
    const [activeTab, setActiveTab] = useState("Human Rights");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/keyarea.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("Error fetching keyarea.json:", error);
            }
        };

        fetchData();
    }, []);

    return (
       <div id="Key-Area" className="bg-gray-100 md:py-10 py-10 ">
         <div className="max-w-6xl mx-auto w-full">
            <div className="text-center">
                <p className="text-4xl font-semibold mb-6">Key Area</p>
            </div>

            {/* Tab Buttons */}
            <div className="flex items-center justify-center mb-10 text-lg">
                <div className="flex items-center -mx-4 overflow-x-auto sm:justify-center flex-nowrap">
                    <button
                        onClick={() => setActiveTab("Human Rights")}
                        className={`font-semibold px-5 py-3 space-x-2 border-b-2 transition-all duration-300
                        ${activeTab === "Human Rights" ? "border-red-600 text-red-600" : "border-transparent text-gray-600"}`}
                    >
                        <span>Human Rights</span>
                    </button>
                    <button
                        onClick={() => setActiveTab("Environment")}
                        className={`font-semibold px-5 py-3 space-x-2 border-b-2 transition-all duration-300
                        ${activeTab === "Environment" ? "border-red-600 text-red-600" : "border-transparent text-gray-600"}`}
                    >
                        <span>Environment</span>
                    </button>
                </div>
            </div>

            {/* Tab Content */}
            <div className="mt-6">
                {activeTab === "Human Rights" && <HumanRights data={data} />}
                {activeTab === "Environment" && <Environmental/>}
            </div>
        </div>
       </div>
    );
};

export default KeyArea;
