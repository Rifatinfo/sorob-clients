import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const MartyrDetails = () => {
        const [martyrPerson, setMartyrPerson] = useState([]);
    
        useEffect(() => {
            fetch("https://sorob-server.onrender.com/projects/july-uprising/martyr")
                .then((res) => res.json())
                .then((data) => setMartyrPerson(data));
        }, []);
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
                {martyrPerson.map((martyr, index) => (
                    <Link to={`/projects/july-uprising/martyr/${martyr._id}`}>
                    <motion.div
                        key={martyr.id}
                        className="relative bg-white shadow-lg rounded-2xl p-5 w-72 mx-auto overflow-hidden border border-gray-200"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Floating Badge */}
                        <div className="absolute top-3 left-3 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                            {index + 1}
                        </div>

                        {/* Circular Image */}
                        <div className="flex justify-center">
                            <img
                                src={martyr.image}
                                alt={martyr.name}
                                className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        {/* Content */}
                        <div className="text-center mt-4">
                            <h2 className="text-xl font-bold text-gray-800">{martyr.name}</h2>
                            <p className="text-gray-600 text-sm">{martyr.designation}</p>
                            <p className="text-gray-500 text-sm">{martyr.institution}</p>
                            <p className="text-blue-600 font-semibold mt-2 text-sm">{martyr.date}</p>
                        </div>

                        {/* Animated Background Effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-red-600  opacity-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.1 }}
                        />
                    </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MartyrDetails;