


import { useState } from "react";

const Archive_tab = () => {
    const [activeTab, setActiveTab] = useState("caseStudies");

    const caseStudies = [
        { id: 1, title: "Historical Event One", description: "A detailed analysis of a historical event.", date: "March 5, 2024" },
        { id: 2, title: "Major Revolution", description: "Understanding the impact of a revolution.", date: "July 20, 2023" },
    ];

    const audios = [
        { id: 1, title: "Podcast on History", src: "/audio1.mp3" },
        { id: 2, title: "Cultural Impact Talk", src: "/audio2.mp3" },
    ];

    const videos = [
        { id: 1, title: "Revolution Documentary", thumbnail: "/video1.jpg", link: "https://youtu.be/xyz" },
        { id: 2, title: "Tech Evolution", thumbnail: "/video2.jpg", link: "https://youtu.be/abc" },
    ];

    const photos = [
        { id: 1, src: "/photo1.jpg", alt: "Historical Image 1" },
        { id: 2, src: "/photo2.jpg", alt: "Historical Image 2" },
    ];

    return (
        <section className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-red-500">Archive</h2>
                    <p className="mt-2 text-lg text-gray-300">Explore our past case studies, audios, videos, and photos.</p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-6 space-x-4">
                    {["caseStudies", "audios", "videos", "photos"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                                activeTab === tab ? "bg-red-500 text-white" : "bg-gray-700 hover:bg-red-400"
                            }`}
                        >
                            {tab.replace(/([A-Z])/g, " $1").trim()}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="mt-6">
                    {activeTab === "caseStudies" && (
                        <div className="grid md:grid-cols-2 gap-6">
                            {caseStudies.map((item) => (
                                <div key={item.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-semibold text-red-400">{item.title}</h3>
                                    <p className="text-gray-300">{item.date}</p>
                                    <p className="mt-2">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "audios" && (
                        <div className="grid md:grid-cols-2 gap-6">
                            {audios.map((audio) => (
                                <div key={audio.id} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                                    <h3 className="text-lg font-semibold text-red-400">{audio.title}</h3>
                                    <audio controls className="mt-2 w-full">
                                        <source src={audio.src} type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "videos" && (
                        <div className="grid md:grid-cols-2 gap-6">
                            {videos.map((video) => (
                                <a key={video.id} href={video.link} target="_blank" rel="noopener noreferrer" className="block">
                                    <div className="relative group">
                                        <img src={video.thumbnail} alt={video.title} className="w-full rounded-lg shadow-lg group-hover:opacity-75 transition" />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
                                            <span className="text-white text-lg font-semibold">Watch Now</span>
                                        </div>
                                    </div>
                                    <p className="mt-2 text-center text-red-400">{video.title}</p>
                                </a>
                            ))}
                        </div>
                    )}

                    {activeTab === "photos" && (
                        <div className="grid md:grid-cols-3 gap-6">
                            {photos.map((photo) => (
                                <div key={photo.id} className="rounded-lg overflow-hidden shadow-lg">
                                    <img src={photo.src} alt={photo.alt} className="w-full hover:scale-105 transition duration-300" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Archive_tab;
