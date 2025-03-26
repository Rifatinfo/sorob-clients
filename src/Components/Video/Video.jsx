import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PlayButton from "./PlayButton";

const Video = () => {
    const [allProduct, setAllProduct] = useState([]); // All data
    const [filteredProduct, setFilteredProduct] = useState([]); // Filtered data based on category
    const [sort, setSort] = useState("");

    useEffect(() => {
        fetch('http://localhost:5000/projects/july-uprising/videos')
            .then(res => res.json())
            .then(data => {
                setAllProduct(data);
                setFilteredProduct(data); // Initially display all products
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    // Function to handle category filtering
    const handleCategoryFilter = (category) => {
        setSort(category); // Set the category type in the sort state

        if (category === "All") {
            // If "All" is selected, display all products
            setFilteredProduct(allProduct);
        } else {
            // Filter based on the category
            const filtered = allProduct.filter(product => product.category === category);
            setFilteredProduct(filtered);
        }
    };

    return (
        <div className="grid grid-cols-1 gap-2 md:flex md:gap-4 md:px-0 px-1">
            {/* Filter Buttons (Categories) */}
            <div className="w-full md:w-1/6">
                <div className="md:grid md:grid-cols-1 md:gap-2 grid grid-cols-2 gap-2">
                    <button onClick={() => handleCategoryFilter('All')} className="btn px-8 py-2.5 md:text-lg font-semibold border rounded bg-red-600 border-none text-white">All</button>
                    <button onClick={() => handleCategoryFilter('Injured')} className="btn px-8 py-2.5 md:text-lg font-semibold border rounded bg-red-600 border-none text-white">Injured</button>
                    <button onClick={() => handleCategoryFilter('Martyr')} className="btn px-8 py-2.5 md:text-lg font-semibold border rounded bg-red-600 border-none text-white">Martyr</button>
                    <button onClick={() => handleCategoryFilter('Revolutionary')} className="btn px-8 py-2.5 md:text-lg font-semibold border rounded bg-red-600 border-none text-white">Revolutionary</button>
                    <button onClick={() => handleCategoryFilter('Case-Studies')} className="btn px-8 py-2.5 md:text-lg font-semibold border rounded bg-red-600 border-none text-white">Case Studies</button>
                    <button onClick={() => handleCategoryFilter('Fact-Check')} className="btn px-8 py-2.5 md:text-lg font-semibold border rounded bg-red-600 border-none text-white">Fact Check</button>
                    {/* <button onClick={() => handleCategoryFilter('Photos')} className="btn px-8 py-2.5 md:text-lg font-semibold border rounded bg-red-600 border-none text-white">Photos</button> */}
                </div>
            </div>

            {/* Display Filtered Videos */}
            <div className="w-full md:w-5/6">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
                    {filteredProduct.slice(0,8).map(singleItem => (
                        <div key={singleItem.id}>
                            <Link to={`/projects/july-uprising/videos/${singleItem._id}`}>
                                <div>
                                    <div className="relative md:-space-y-5.5 space-y-2">
                                        <figure>
                                            <img
                                                className="rounded-2xl"
                                                src={singleItem.cover_image}
                                                alt={singleItem.title} />
                                        </figure>
                                        <div>
                                            <p className="text-lg font-semibold mt-1 md:mt-6">{singleItem.title}</p>
                                        </div>
                                    </div>

                                    {/* Play Button */}
                                    <PlayButton />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Video;
