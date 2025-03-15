const orgStructure = [
    {
        name: "CEO", position: "Chief Executive Officer", children: [
            { name: "CTO", position: "Chief Technology Officer", children: [] },
            { name: "CFO", position: "Chief Financial Officer", children: [] },
            { name: "COO", position: "Chief Operating Officer", children: [] },
        ]
    },
];

export default function Page() {
    return (
        <div className="max-w-7xl mx-auto p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Achieve Your Goal Through Giving</h2>

            {/* Organizational Chart Section */}
            <div className="mt-12">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Organizational Structure</h2>
                <div className="flex flex-col items-center">
                    {/* CEO Card */}
                    <div className="bg-red-600 text-white px-8 py-6 rounded-full shadow-lg text-center w-60 sm:w-80 md:w-96 border-4 border-white">
                        <p className="text-2xl font-bold">{orgStructure[0].name}</p>
                        <p className="text-sm opacity-80">{orgStructure[0].position}</p>
                    </div>
                    <div className="w-1 h-10 bg-gray-400 mt-4"></div>
                    {/* Children Section */}
                    <div className="flex justify-center flex-wrap gap-6 mt-6">
                        {orgStructure[0].children.map((child, index) => (
                            <div key={index} className="relative flex flex-col items-center">
                                <div className="w-1 h-10 bg-gray-400 absolute top-[-40px]"></div>
                                <div className="bg-red-600 text-white px-6 py-4 rounded-full shadow-lg text-center w-48 sm:w-60 md:w-72 border-4 border-white">
                                    <p className="text-lg font-semibold">{child.name}</p>
                                    <p className="text-sm opacity-80">{child.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Additional Cards Section */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((card, index) => (
                    <div key={index} className="bg-red-600 text-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-bold">Card {card}</h3>
                        <p className="mt-2 text-sm">This is a description for card {card}. Add relevant information here.</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
