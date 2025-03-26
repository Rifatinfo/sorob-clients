import React from "react";
import ReactPlayer from "react-player";
import { Link, useLoaderData } from "react-router-dom";

const JulyVideoDetails = () => {
  const videoDetails = useLoaderData();
  const { video_link, description, title } = videoDetails;
  return (
    <div className="max-w-7xl mx-auto">
      <div className="min-h-[calc(90vh-28px)]">
        <div className="grid grid-cols-1 gap-2 md:flex md:gap-4">
          <div className="w-full p-2 md:w-3/5 mx-auto rounded-lg overflow-hidden shadow-lg">
            <div className="relative pt-[56.25%]">
              {" "}
              {/* Aspect ratio container */}
              <ReactPlayer
                className="absolute top-0 left-0 w-full h-full"
                url={video_link}
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
          </div>
          <div className="w-full p-4 md:w-2/5 space-y-1">
            <p>
              <span className="font-semibold text-lg">Name :</span> {title}
            </p>
            <p>
              <span className="font-semibold text-lg">Description : </span>{" "}
              {description}
            </p>
          </div>
        </div>
        <div>
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
      </div>
    </div>
  );
};

export default JulyVideoDetails;
