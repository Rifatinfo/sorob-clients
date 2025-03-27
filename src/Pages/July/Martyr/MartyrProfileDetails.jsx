import { Link, useLoaderData } from "react-router-dom";

const MartyrProfileDetails = () => {
  const MartyrProfileDetails = useLoaderData();
  return (
    <div>
        
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/3">
              <img
                src={MartyrProfileDetails.image}
                alt={MartyrProfileDetails.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Info Section */}
            <div className="md:w-2/3 p-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {MartyrProfileDetails.name}
              </h2>
              <p className="text-gray-600">
                {MartyrProfileDetails.designation},{" "}
                {MartyrProfileDetails.institution}
              </p>
              <p className="text-gray-500 text-sm">
                Date of Death: {MartyrProfileDetails.date}
              </p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <p className="bg-gray-200 p-2 rounded">
                  Age: {MartyrProfileDetails.age}
                </p>
                <p className="bg-gray-200 p-2 rounded">
                  Place of Birth: {MartyrProfileDetails["Place of Birth"]}
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-700">
                  How He Became a Martyr
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {MartyrProfileDetails["How he/she became a MARTYR"]}
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-700">
                  Short Biography
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {MartyrProfileDetails["Short biography"]}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Link to="/projects/july-uprising/martyr">
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
  );
};

export default MartyrProfileDetails;
