import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const KeyArea = () => {
    const [data, setData] = useState([]);
    const [activeTab, setActiveTab] = useState("Architecto");

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
        <div className="max-w-6xl mx-auto">
            <div className="text-center">
                <p className="text-4xl font-semibold">Key Area</p>
                <p className="mt-6 mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas dignissimos architecto perferendis <br /> cupiditate, ratione quas quasi nemo necessitatibus quo minus!</p>
            </div>
            <div className="flex items-center justify-center md:text-center mb-10 text-lg">
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap">
                    <button
                        onClick={() => setActiveTab("Architecto")}
                        className={`font-semibold flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b-2 transition-all duration-300
                        ${activeTab === "Architecto" ? "border-red-600 text-red-600" : "border-transparent text-gray-600"}`}
                    >
                        <span>Architecto</span>
                    </button>
                    <button
                        onClick={() => setActiveTab("Corrupti")}
                        className={`font-semibold flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b-2 transition-all duration-300
                        ${activeTab === "Corrupti" ? "border-red-600 text-red-600" : "border-transparent text-gray-600"}`}
                    >
                        <span>Corrupti</span>
                    </button>
                </div>

                {/* Tab Content */}
                <div className="mt-6">
                    {activeTab === "Architecto" && <p className="text-lg"></p>}
                    {activeTab === "Corrupti" && <p className="text-lg"></p>}
                </div>
            </div>

            <div >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6">
                    {data.map(item => (
                        <div
                            key={item.id}
                            className="group p-6 rounded-lg shadow-lg text-center transition-all duration-300 ease-in-out 
                       h-[360px]  mx-auto flex flex-col items-center justify-center
                       bg-white hover:bg-red-600 hover:scale-105 hover:shadow-2xl space-y-4"
                        >
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="w-16 h-16 transition-all duration-300 group-hover:opacity-90"
                            />
                            <h3 className="text-xl font-semibold transition-all duration-300 group-hover:text-white">
                                {item.title}
                            </h3>
                            <p className="text-base text-gray-700 transition-all duration-300 group-hover:text-gray-200">
                                {item.short_description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default KeyArea;
