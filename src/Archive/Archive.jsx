const Archive = () => {
    const archiveData = [
        { id: 1, title: "Historical Event One", date: "March 5, 2024", description: "An in-depth look at a remarkable historical ." },
        { id: 2, title: "Major Revolution", date: "July 20, 2023", description: "Understanding the impact of the July revolution ." },
        { id: 3, title: "Technological Breakthrough", date: "September 15, 2022", description: "A deep dive into a into a groundbreaking groundbreaking ." },
        { id: 4, title: "Cultural Shift", date: "November 10, 2021", description: "How cultural changes influenced modern society  into a groundbreaking." },
    ];

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-6 md:px-12">
                
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-red-500">Archive</h2>
                    <p className="mt-2 text-lg text-gray-600">Explore past events and historical insights.</p>
                </div>

                {/* Timeline Grid */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 before:absolute before:w-1 before:bg-red-500 before:h-full before:left-1/2 before:top-0 before:-translate-x-1/2">
                    {archiveData.map((item, index) => (
                        <div 
                            key={item.id} 
                            className={`relative flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                        >
                            {/* Timeline Dot */}
                            <div className="md:absolute w-6 h-6 bg-red-500 rounded-full left-1/2 top-6 transform -translate-x-1/2 border-4 border-white"></div>

                            {/* Archive Item */}
                            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md md:w-[45%] hover:scale-105 transition duration-300">
                                <h3 className="text-xl font-semibold text-red-500">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.date}</p>
                                <p className="mt-2 text-gray-700">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Archive;
