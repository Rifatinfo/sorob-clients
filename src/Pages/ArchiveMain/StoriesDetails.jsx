import { motion } from "framer-motion";
import { Link, useLoaderData } from "react-router-dom";

const StoriesDetails = () => {
    const caseStudy = useLoaderData();
    return (
        <div>
            <div className=" py-10 px-6 md:px-20">
                {/* Header */}
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-4"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        {caseStudy.title}
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-300 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {caseStudy.description}
                    </motion.p>
                </div>

                {/* Image */}
                <motion.div
                    className="max-w-4xl mx-auto mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={caseStudy?.image}
                        alt="Case Study"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </motion.div>

                {/* Content Sections */}
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Introduction */}
                    <motion.div
                        className=" p-6 rounded-lg shadow-lg"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h2 className="text-2xl font-semibold text-red-400">Introduction</h2>
                        <p className="text-gray-600 mt-2">{caseStudy?.content?.introduction}</p>
                    </motion.div>

                    {/* Background */}
                    <motion.div className=" p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-red-400">Background</h2>
                        <p className="text-gray-600 mt-2">{caseStudy?.content?.background?.politicalClimate}</p>
                        <p className="text-gray-600 mt-2">{caseStudy?.content?.background?.triggers}</p>
                    </motion.div>

                    {/* Sorob Involvement */}
                    <motion.div className=" p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-red-400">Sorob's Role</h2>
                        <p className="text-gray-600 mt-2">{caseStudy?.content?.sorobInvolvement?.mobilization}</p>
                        <p className="text-gray-600 mt-2">{caseStudy?.content?.sorobInvolvement?.exposingTruth}</p>
                        <p className="text-gray-600 mt-2">{caseStudy?.content?.sorobInvolvement?.internationalSupport}</p>
                    </motion.div>

                    {/* Impact */}
                    <motion.div className=" p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-red-400">Impact</h2>
                        <p className="text-gray-600 mt-2">{caseStudy?.content?.impact?.politicalChanges}</p>
                        <p className="text-gray-600 mt-2">{caseStudy?.content?.impact?.legalVictories}</p>
                    </motion.div>

                    {/* Future Actions */}
                    <motion.div className=" p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-red-400">Future Actions</h2>
                        <p className="text-gray-600 mt-2">{caseStudy?.content?.futureActions?.continuedStruggle}</p>
                        <p className="text-gray-600 mt-2">{caseStudy?.content?.futureActions?.nextSteps}</p>
                    </motion.div>
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
        </div>
    );
};

export default StoriesDetails;