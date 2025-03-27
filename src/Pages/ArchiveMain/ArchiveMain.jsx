import { useEffect, useState } from "react";
import VideosAndPhotos from "../../Components/VideosAndPhotos/VideosAndPhotos";
import { Link } from "react-router-dom";

const ArchiveMain = () => {
    
    const [stories, setStories] = useState([]);
    console.log(stories);
    
    useEffect(() => {
        fetch("http://localhost:5000/projects/july-uprising/stories")
        .then(res => res.json())
        .then(data =>{
            setStories(data);
        })
    },[])

    return (
        <div className="max-w-7xl mx-auto mt-10">
            <div className="p-4">
            <h2 className="text-4xl font-bold text-brown-800 mt-2 mb-4">
                Case Studies
            </h2>
                <div className="space-y-12 grid grid-cols-1 gap-4">
                    {stories.map((story, index) => (
                        <Link to={`/projects/july-uprising/stories/${story._id}`}>
                           <div key={index} className={`flex flex-col overflow-hidden rounded-md shadow-sm ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                            <img className="h-80 aspect-video rounded-lg" src={story.image} alt={`Story ${index + 1}`} />
                            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                                <span className="text-xs uppercase ">Join, it's free</span>
                                <h3 className="text-3xl font-bold text-red-600">{story.title}</h3>
                                <p className="my-6 ">{story.description}</p>
                                <button type="button" className="self-start font-semibold text-red-600 underline">{story.actionText}</button>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center">
                    <Link to=""><button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
                      See All Story
                    </button></Link>
                </div>

                  {/* tab section  */}
                <div>
                  <VideosAndPhotos/>
                </div>
            </div>
        </div>
    );
};

export default ArchiveMain;