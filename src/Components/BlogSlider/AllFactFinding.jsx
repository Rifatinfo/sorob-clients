import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllFactFinding = () => {
    const [blogs, setBlogs] = useState([]);
         useEffect(() => {
               fetch("/blog.json")
               .then(res => res.json())
               .then(data =>{
                setBlogs(data);
               })
           },[])
    return (
        <div className="max-w-7xl mx-auto mt-10 mb-80">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-4">
                {blogs.map((blog, index) => (
                <div key={index} className="shadow p-3 rounded-2xl">
                    <div className="flex items-center mb-9">
                    <img
                      src={blog.image}
                      alt="Blog"
                      className="rounded-2xl w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-red-600">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 leading-6 transition-all duration-500 mb-8">
                    {blog.description}
                  </p>
                  <a href="#" className="flex items-center gap-2 text-lg text-red-600 font-semibold">
                    Read more
                  </a>
                </div>
              ))}
            </div>
            <Link to="/projects/july-uprising">
          <button
            rel="noopener noreferrer"
            href="#"
            className="btn mt-10 px-8 py-2.5 md:text-lg font-semibold border rounded bg-red-600 border-none text-white"
          >
            Previous
          </button>
               </Link>
        </div>
    );
};

export default AllFactFinding;