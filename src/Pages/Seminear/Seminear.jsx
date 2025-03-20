import { useState } from "react";
import top_banner from '../../assets/all_top_page_bnner.jpg'
const Seminear = () => {
    const [posts] = useState([
        {
            id: 1,
            title: "Noster tincidunt reprimique ad pro",
            title_upcoming: "Upcoming",
            date: "February 19, 2021",
            description:
                "Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.",
            image: "https://img.freepik.com/free-vector/seminar-concept-illustration_114360-7480.jpg",
            large: true,
        },
        {
            id: 2,
            title: "In usu laoreet repudiare legendos",
            date: "January 21, 2021",
            description:
                "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto.",
            image: "https://img.freepik.com/free-vector/setup-analytics-concept-illustration_114360-1438.jpg",
            large: false,
        },
        {
            id: 3,
            title: "In usu laoreet repudiare legendos",
            date: "January 22, 2021",
            description:
                "At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
            image: "https://img.freepik.com/free-vector/setup-analytics-concept-illustration_114360-1438.jpg",
            large: false,
        },
        {
            id: 4,
            title: "In usu laoreet repudiare legendos",
            date: "January 23, 2021",
            description:
                "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto.",
            image: "https://img.freepik.com/free-vector/setup-analytics-concept-illustration_114360-1438.jpg",
            large: false,
        },
        {
            id: 5,
            title: "In usu laoreet repudiare legendos",
            date: "January 24, 2021",
            description:
                "At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
            image: "https://img.freepik.com/free-vector/setup-analytics-concept-illustration_114360-1438.jpg",
            large: false,
        },
        {
            id: 6,
            title: "In usu laoreet repudiare legendos",
            date: "January 25, 2021",
            description:
                "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto.",
            image: "https://img.freepik.com/free-vector/setup-analytics-concept-illustration_114360-1438.jpg",
            large: false,
        },
        {
            id: 7,
            title: "In usu laoreet repudiare legendos",
            date: "January 26, 2021",
            description:
                "At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
            image: "https://img.freepik.com/free-vector/setup-analytics-concept-illustration_114360-1438.jpg",
            large: false,
        },
    ]);

    return (

        <div>
            <div>
                <div className="relative w-full">
                    <div className="relative">
                        <img
                            className="w-full h-[200px] md:h-[300px] object-cover"
                            src={top_banner}
                            alt="Hero Banner"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                        <p className="text-lg md:text-xl font-semibold">Home / Event</p>
                        <h1 className="text-4xl md:text-5xl font-extrabold">Seminar</h1>
                    </div>
                </div>
            </div>


            <section className="bg-gray-100 ">
                <div className="max-w-7xl p-6 mx-auto space-y-6 sm:space-y-12">
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



