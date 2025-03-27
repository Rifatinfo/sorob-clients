import { useState } from "react";
import top_banner from '../../assets/all_top_page_bnner.jpg'
const Seminear = () => {
    const [posts] = useState([
        {
            id: 1,
            title: "The Fight for Justice: Understanding the July Revolution",
            title_upcoming: "Upcoming",
            date: "April 5, 2025",
            description:
                "An in-depth seminar on the July Revolution of 2025, exploring its causes, impact, and the role of Sorob in advocating for justice.",
            image: "https://i.ibb.co.com/BV1W3Qzv/44.jpg",
            large: true,
        },
        {
            id: 2,
            title: "Unmasking Oppression: A Case Study on Systemic Injustice",
            date: "March 15, 2025",
            description:
                "A critical discussion on systemic injustice in Bangladesh, featuring experts, activists, and survivors sharing their experiences.",
            image: "https://i.ibb.co.com/PGWv4gWr/77.jpg",
            large: false,
        },
        {
            id: 3,
            title: "Fact-Checking the July Revolution: Truth vs. Propaganda",
            date: "March 22, 2025",
            description:
                "This seminar explores misinformation and propaganda surrounding the July Revolution, uncovering the real narrative of the people’s struggle.",
            image: "https://i.ibb.co.com/YFsqTYyL/66.jpg",
            large: false,
        },
        {
            id: 4,
            title: "Human Rights in Crisis: Sorob’s Role in Advocacy",
            date: "March 29, 2025",
            description:
                "A panel discussion on Sorob’s mission to protect human rights and support those affected by oppression and systemic violence.",
            image: "https://i.ibb.co.com/SDbZgr4s/55.jpg",
            large: false,
        },
        {
            id: 5,
            title: "Empowering the Youth: The Next Generation of Change-Makers",
            date: "April 2, 2025",
            description:
                "A workshop for young activists, journalists, and students on how to stand against tyranny and promote truth in the media.",
            image: "https://i.ibb.co.com/v62xq4fS/33.jpg",
            large: false,
        }
    ]);

    return (

        <div>
            <div>
                <div className="relative w-full">
                    <div className="relative">
                        <img
                            className="w-full h-[100px] md:h-[200px] object-cover"
                            src={top_banner}
                            alt="Hero Banner"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                        {/* <p className="text-lg md:text-xl font-semibold">Home / Event</p> */}
                        <h1 className="text-xl md:text-3xl font-extrabold">Event</h1>
                    </div>
                </div>
            </div>


            <section className="bg-gray-100 ">
                
                <div className="max-w-7xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="text-center mb-10">
                    <h1 className="md:text-4xl text-2xl font-semibold">Seminar</h1>
                </div>
                    {posts
                        .filter((post) => post.large)
                        .map((post) => (
                            <a
                                key={post.id}
                                href="#"
                                className="bg-gray-50 border-4 rounded-md border-white block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
                                />
                                <div className="p-6 space-y-2 lg:col-span-5">
                                    <h3 className="text-2xl font-semibold sm:text-4xl text-red-600 group-hover:underline group-focus:underline">
                                        {post.title_upcoming}
                                    </h3>
                                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                                        {post.title}
                                    </h3>
                                    <span className="text-xs dark:text-gray-600">{post.date}</span>
                                    <p>{post.description}</p>
                                </div>
                            </a>
                        ))}

                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {posts
                            .filter((post) => !post.large)
                            .map((post) => (
                                <a
                                    key={post.id}
                                    href="#"
                                    className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 border-4 rounded-md border-white"
                                >
                                    <img
                                        role="presentation"
                                        className="object-cover w-full rounded h-44 dark:bg-gray-500"
                                        src={post.image}
                                    />
                                    <div className="p-6 space-y-2">
                                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                            {post.title}
                                        </h3>
                                        <span className="text-xs dark:text-gray-600">
                                            {post.date}
                                        </span>
                                        <p>{post.description}</p>
                                    </div>
                                </a>
                            ))}
                    </div>

                    {/* <div className="flex justify-center">
                        <button
                            type="button"
                            className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
                        >
                            Load more posts...
                        </button>
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default Seminear;



