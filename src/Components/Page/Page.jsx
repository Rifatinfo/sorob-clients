import img from '../../assets/organogram.png'
const orgStructure = [
    {
        name: "Advisory Panel", position: "", children: [
            { name: "Board of Member", position: "", children: [] },
            { name: "Board of Director", position: "", children: [] },
            { name: "Executive Panel", position: "", children: [] },
            { name: "Administrative", position: "", children: [] },
            { name: "Research & Doc", position: "", children: [] },
            { name: "IT", position: "", children: [] },
            { name: "Accounts & Audit", position: "", children: [] },
        ]
    },
];

export default function Page() {
    return (
        <div className="mx-auto  p-4  bg-gray-50 shadow">
            {/* Organizational Chart Section */}
            <div className="hidden md:block">
                <img className="mx-auto " src={img} alt="" />
            </div>
            <div className=" sm:mt-4 relative flex flex-col items-center md:hidden lg:hidden">
                <h2 className="text-xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 text-red-600">organogram </h2>
                {/* Top Level */}
                <div className="relative flex flex-col items-center">
                    <div className="bg-red-600 text-white px-3 py-2 sm:px-6 sm:py-4 rounded-full shadow-lg text-center w-32 sm:w-60 border-4 border-white">
                        <p className="text-xs sm:text-lg font-semibold">{orgStructure[0].name}</p>
                    </div>
                    <div className="hidden  w-1 h-6 sm:h-8 bg-red-600"></div>
                </div>
                {/* First Level */}
                <div className="relative flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-4 sm:mt-6">
                    <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-red-600 hidden sm:block"></div>
                    {orgStructure[0].children.slice(0, 3).map((child, index) => (
                        <div key={index} className="relative flex flex-col items-center mx-2 sm:mx-4">
                            <div className=" w-1 h-6 sm:h-8 bg-red-600"></div>
                            <div className="bg-red-600 text-white px-3 py-2 sm:px-6 sm:py-4 rounded-full shadow-lg text-center w-32 sm:w-60 border-4 border-white">
                                <p className="text-xs sm:text-lg font-semibold">{child.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Second Level */}
                <div className="relative flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-6 sm:mt-12">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-red-600 hidden sm:block"></div>
                    {orgStructure[0].children.slice(3).map((child, index) => (
                        <div key={index} className="relative flex flex-col items-center mx-2 sm:mx-4">
                            <div className="w-1 h-6 sm:h-8 bg-red-600"></div>
                            <div className="bg-red-600 text-white px-3 py-2 sm:px-6 sm:py-4 rounded-full shadow-lg text-center w-32 sm:w-60 border-4 border-white">
                                <p className="text-xs sm:text-lg font-semibold">{child.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
