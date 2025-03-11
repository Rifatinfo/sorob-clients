
const Project = () => {
    const projectData = [
        {
            id: 1,
            title: "AI Revolution",
            description: "Exploring the impact of AI in modern technology.",
            image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F957f7669-5d60-4c23-a7de-7dbac639e751_1600x900.png",
            link: "/projects/ai-revolution",
        },
        {
            id: 2,
            title: "Space Exploration",
            description: "Advancements in space travel and colonization.",
            image: "https://www.geo.tv/assets/uploads/updates/2024-08-15/559358_2197112_updates.jpg",
            link: "/projects/space-exploration",
        },
        {
            id: 3,
            title: "Green Energy",
            description: "Innovations in sustainable and renewable energy sources.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnYGXM458kOq6xoPwHeft7eAE2USKEQlKYrcsHJ83g7TWQ_mvio4LoFXdI8VvfzJ7v8Y&usqp=CAU",
            link: "/projects/green-energy",
        },
        {
            id: 4,
            title: "Smart Cities",
            description: "How technology is transforming urban development.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOV6L1Dzr6vnB7QqP2Ye3XGxkq4OFF2hABaUTvFuVO48Qx2Rhh2eOh9C4Y8HFmDgao3Y&usqp=CAU",
            link: "/projects/smart-cities",
        },
        {
            id: 5,
            title: "Quantum Computing",
            description: "The future of computing and its applications.",
            image: "https://mondoweiss.net/wp-content/uploads/2024/07/Biplob-Cholbe-thin-blue-line.jpeg",
            link: "/projects/quantum-computing",
        },
        {
            id: 6,
            title: "Blockchain Technology",
            description: "Understanding decentralized finance and security.",
            image: "https://mondediplo.com/local/cache-vignettes/L890xH593/gettyimages-2165418241-64e50.jpg?1737231965",
            link: "/projects/blockchain",
        },
        {
            id: 7,
            title: "Virtual Reality",
            description: "The rise of immersive digital experiences.",
            image: "https://outspoken.newagebd.com/files/img/202412/636826273a2487f601f8d29e1acd43cd.jpg",
            link: "/projects/virtual-reality",
        },
        {
            id: 8,
            title: "Autonomous Vehicles",
            description: "The evolution of self-driving technology.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOr-d31-rGjUw5Tcp5ux0YRmh3Q6r49Gg9Q&s",
            link: "/projects/autonomous-vehicles",
        },
    ]
    return (
        <div>
            <div>
                <section className="bg-red-600 text-white py-4">
                    <div className="text-center md:p-8 p-6">
                        <div>
                            <p className="text-4xl font-bold text-white">Projects</p>
                        </div>

                    </div>

                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
                            {projectData.map((project, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
                                    <h3 className="text-xl font-semibold text-black">{project.title}</h3>
                                    <p className="text-black">{project.description}</p>
                                    <a href={project.link} className=" mt-4 inline-block text-black font-semibold">Learn More →</a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <button className="mt-4 md:mt-0 bg-white text-red-600 px-6 py-3 rounded-lg hover:bg-gray-200 transition-all shadow-xl font-semibold">
                            View All Projects
                        </button>
                    </div>
                    <div>

                    </div>
                </section>

            </div>
        </div>
    );
};

export default Project;


