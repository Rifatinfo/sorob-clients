
const Project = () => {
    const projectData = [
        {
            id: 1,
            title: "July Uprising",
            description: "An in-depth look into the causes and effects of the July Uprising, focusing on the political turmoil and social unrest that led to a nationwide movement for change.",
            image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F957f7669-5d60-4c23-a7de-7dbac639e751_1600x900.png",
            link: "/projects/july-uprising",
        },
        {
            id: 2,
            title: "Violence At Campus",
            description: "A critical investigation into the increasing violence at educational campuses, exploring the root causes, the social implications, and how it affects the campus community.",
            image: "https://www.geo.tv/assets/uploads/updates/2024-08-15/559358_2197112_updates.jpg",
            link: "/projects/violence-at-campus",
        },
        {
            id: 3,
            title: "Killing River",
            description: "A powerful exploration of the environmental and human toll caused by river pollution, focusing on the impact on local communities and ecosystems, and the efforts to stop it.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnYGXM458kOq6xoPwHeft7eAE2USKEQlKYrcsHJ83g7TWQ_mvio4LoFXdI8VvfzJ7v8Y&usqp=CAU",
            link: "/projects/killing-river",
        },
        {
            id: 4,
            title: "Campus Protests",
            description: "Examining the impact of student-led protests on campus policies and the broader social landscape, highlighting key movements for change.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOV6L1Dzr6vnB7QqP2Ye3XGxkq4OFF2hABaUTvFuVO48Qx2Rhh2eOh9C4Y8HFmDgao3Y&usqp=CAU",
            link: "/projects/campus-protests",
        },
        {
            id: 5,
            title: "River Pollution Crisis",
            description: "A deep dive into the devastating effects of river pollution, exploring the societal impact and the steps being taken to restore the ecosystem.",
            image: "https://mondoweiss.net/wp-content/uploads/2024/07/Biplob-Cholbe-thin-blue-line.jpeg",
            link: "/projects/river-pollution-crisis",
        },
        {
            id: 6,
            title: "Urban Violence",
            description: "An examination of rising violence in urban centers, exploring the socio-economic factors contributing to crime and the efforts to bring peace.",
            image: "https://mondediplo.com/local/cache-vignettes/L890xH593/gettyimages-2165418241-64e50.jpg?1737231965",
            link: "/projects/urban-violence",
        },
        {
            id: 7,
            title: "Environmental Justice",
            description: "Addressing the environmental injustices faced by marginalized communities, focusing on the fight for clean water, air, and land.",
            image: "https://outspoken.newagebd.com/files/img/202412/636826273a2487f601f8d29e1acd43cd.jpg",
            link: "/projects/environmental-justice",
        },
        {
            id: 8,
            title: "Rights and Reconciliation",
            description: "Exploring the journey towards reconciliation and human rights in post-conflict societies, focusing on justice and healing.",
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


