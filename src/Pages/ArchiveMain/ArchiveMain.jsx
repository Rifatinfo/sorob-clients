

const ArchiveMain = () => {
    const stories = [
        {
            image: "https://i.ibb.co.com/sGz1QcT/story-1.jpg",
            title: "We're not reinventing the wheel",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.",
            actionText: "See Details",
        },
        {
            image: "https://i.ibb.co.com/HfDbD0GM/slider-6.png",
            title: "We're not reinventing the wheel",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.",
            actionText: "See Details",
        },
        {
            image: "https://i.ibb.co.com/yB7gXFsw/slider-5.jpg",
            title: "We're not reinventing the wheel",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.",
            actionText: "See Details",
        }
    ];
    return (
        <div className="max-w-7xl mx-auto">
            <div className="p-4  lg:p-8">
            <h2 className="text-4xl font-bold text-brown-800 mt-2 mb-4">
                Story
            </h2>
                <div className="space-y-12">
                    {stories.map((story, index) => (
                        <div key={index} className={`flex flex-col overflow-hidden rounded-md shadow-sm ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                            <img className="h-80 aspect-video rounded-lg" src={story.image} alt={`Story ${index + 1}`} />
                            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                                <span className="text-xs uppercase ">Join, it's free</span>
                                <h3 className="text-3xl font-bold text-red-600">{story.title}</h3>
                                <p className="my-6 ">{story.description}</p>
                                <button type="button" className="self-start font-semibold text-red-600 underline">{story.actionText}</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
                      See All Story
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ArchiveMain;