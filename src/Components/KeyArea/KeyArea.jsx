import { useEffect, useState } from "react";
import 'react-tabs/style/react-tabs.css';
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
       <div className="bg-gray-100 md:py-30 py-10">
         <div className="max-w-6xl mx-auto w-full">
            <div className="text-center">
                <p className="text-4xl font-semibold">Key Area</p>
                <p className="mt-6 mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas dignissimos architecto perferendis <br /> cupiditate, ratione quas quasi nemo necessitatibus quo minus!</p>
            </div>
            <div className="flex items-center justify-center md:text-center mb-10 text-lg">
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap">
                    <button
                        onClick={() => setActiveTab("Human Rights")}
                        className={`font-semibold flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b-2 transition-all duration-300
                        ${activeTab === "Human Rights" ? "border-red-600 text-red-600" : "border-transparent text-gray-600"}`}
                    >
                        <span>Human Rights</span>
                    </button>
                    <button
                        onClick={() => setActiveTab("Environment")}
                        className={`font-semibold flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b-2 transition-all duration-300
                        ${activeTab === "Environment" ? "border-red-600 text-red-600" : "border-transparent text-gray-600"}`}
                    >
                        <span>Environment</span>
                    </button>
                </div>

                {/* Tab Content */}
                <div className="mt-6">
                    {activeTab === "Human Rights" && <p className="text-lg"></p>}
                    {activeTab === "Environment" && <p className="text-lg"></p>}
                </div>
            </div>

            <div >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6 md:p-0 p-4">
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
       </div>
    );
};

export default KeyArea;
