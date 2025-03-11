import { useEffect } from "react";

const Archive_2 = () => {
    const archiveData = [
        { id: 1, title: "Historical Event One", date: "March 5, 2024", description: "An in-depth look at a remarkable historical event that shaped the world." },
        { id: 2, title: "Major Revolution", date: "July 20, 2023", description: "Understanding the impact of the July revolution and how it changed global dynamics." },
        { id: 3, title: "Technological Breakthrough", date: "September 15, 2022", description: "A deep dive into a groundbreaking technology moment that influenced industries." },
        { id: 4, title: "Cultural Shift", date: "November 10, 2021", description: "How cultural changes transformed modern society and future generations." },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("opacity-100", "translate-y-0");
                }
            });
        }, { threshold: 0.3 });

        document.querySelectorAll(".timeline-card").forEach((el) => observer.observe(el));
    }, []);

    return (
        <section className="py-16">
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-red-500">Archive</h2>
                    <p className="mt-2 text-lg text-gray-400">Explore past events and historical insights.</p>
                </div>

                {/* Timeline Grid */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 before:absolute before:w-1 before:bg-red-500 before:h-full before:left-1/2 before:top-0 before:-translate-x-1/2  md:block">
                    {archiveData.map((item, index) => (
                        <div 
                            key={item.id} 
                            className={`relative flex items-center transition-all duration-700 ease-in-out opacity-0 translate-y-8 timeline-card 
                            ${index % 2 === 0 ? 'md:justify-start text-left' : 'md:justify-end text-right'}`}
                        >
                            {/* Timeline Dot */}
                            <div className="md:absolute w-6 h-6 bg-red-500 rounded-full left-1/2 top-6 transform -translate-x-1/2 border-none border-white-950"></div>

                            {/* Archive Item */}
                            <div className={`relative p-6 rounded-xl shadow-lg w-full max-w-md md:w-[48%] 
                            ${index % 2 === 0 ? 'bg-gradient-to-r from-red-500 to-red-700' : 'bg-gradient-to-r from-red-500 to-red-700'} text-white
                            hover:scale-105 transition duration-300`}
                            >
                                {/* Decorative Glow Effect */}
                                <div className="absolute inset-0 bg-white/10 rounded-xl backdrop-blur-md"></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                                    <p className="text-gray-300 text-sm">{item.date}</p>
                                    <p className="mt-2">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Archive_2;
