import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { Link, useLoaderData } from "react-router-dom";

import { ArrowRight } from "lucide-react";

const StoriesDetails = () => {
    const caseStudy = useLoaderData();
    return (
     
        <div className="py-10 px-2 md:px-50  md:flex md:items-start mt-10">
        
           <div className=" py-10 px-2 md:px-20 w-full ">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        className="text-3xl md:text-5xl font-bold mb-4"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        {caseStudy.title}
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-600 mb-6"
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
                        className="rounded-lg "
                        whileHover={{ scale: 1.02 }}
                    >
                        <h2 className="text-2xl font-semibold ">Introduction</h2>
                        <p className="text-gray-600 mt-2">{caseStudy?.content?.introduction}</p>
                    </motion.div>


                    {/* Sorob Involvement */}
                    <motion.div className="rounded-lg">
                        <h2 className="text-2xl font-semibold ">Sorob's Role</h2>
                        <p className="text-gray-600 mt-2">Sorob played a pivotal role in mobilizing citizens, organizing peaceful demonstrations, and providing legal aid to those unjustly detained. The organization’s digital campaigns exposed human rights violations and reached millions worldwide.</p>
                        <p className="text-gray-600 mt-2">hrough investigative journalism and reports, Sorob uncovered police brutality, political corruption, and censorship efforts. These revelations fueled public outrage and strengthened the movement.</p>
                        <p className="text-gray-600 mt-2">Sorob actively engaged with international human rights organizations, calling for global attention to Bangladesh's crisis. Their efforts led to international pressure on the government to uphold democratic values.</p>
                    </motion.div>

                    {/* image div  */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <img className="w-full h-72 object-cover rounded-lg" src="https://www.fpri.org/wp-content/uploads/2024/11/one-point-movement-of-bangladesh-in-shaheed-minar-16-1024x683.jpg" alt="" />
                        <img className="w-full h-72 object-cover rounded-lg" src="https://i.guim.co.uk/img/media/4b5102e88808a1e2028a6b0b47ed4117ae1f2568/0_605_4032_2419/master/4032.jpg?width=445&dpr=1&s=none&crop=none" alt="" />
                    </div>
                    <motion.div className="rounded-lg">
                        <h2 className="text-2xl font-semibold ">Observation in death</h2>
                        <p className="text-gray-600 mt-2">Sorob played a pivotal role in mobilizing citizens, organizing peaceful demonstrations, and providing legal aid to those unjustly detained. The organization’s digital campaigns exposed human rights violations and reached millions worldwide.</p>
                        <p className="text-gray-600 mt-2">
                            Sorob played a pivotal role in mobilizing citizens, organizing peaceful demonstrations, and providing legal aid to those unjustly detained. The organization’s digital campaigns exposed human rights violations and reached millions worldwidehrough investigative journalism and reports, Sorob uncovered police brutality, political corruption, and censorship efforts. These revelations fueled public outrage and strengthened the movement.
                            hrough investigative journalism and reports, Sorob uncovered police brutality, political corruption, and censorship efforts. These revelations fueled public outrage and strengthened the movement.Sorob actively engaged with international human rights organizations, calling for global attention to Bangladesh's crisis. Their efforts led to international pressure on the government to uphold democratic values.
                            Sorob played a pivotal role in mobilizing citizens, organizing peaceful demonstrations, and providing legal aid to those unjustly detained. The organization’s digital campaigns exposed human rights violations and reached millions worldwide
                            Sorob played a pivotal role in mobilizing citizens, organizing peaceful demonstrations, and providing legal aid to those unjustly detained. The organization’s digital campaigns exposed human rights violations and reached millions worldwide.</p>
                        <p className="text-gray-600 mt-2">
                            Sorob played a pivotal role in mobilizing citizens, organizing peaceful demonstrations, and providing legal aid to those unjustly detained. The organization’s digital campaigns exposed human rights violations and reached millions worldwidehrough investigative journalism and reports, Sorob uncovered police brutality, political corruption, and censorship efforts. These revelations fueled public outrage and strengthened the movement.</p>
                        <p className="text-gray-600 mt-2">Sorob actively engaged with international human rights organizations, calling for global attention to Bangladesh's crisis. Their efforts led to international pressure on the government to uphold democratic values.</p>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        className="max-w-4xl mx-auto mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <img
                            src="https://s.france24.com/media/display/db64e766-eaa9-11ef-9f4b-005056bf30b7/w:980/5554ad42cfbe20e06ed4adbd43db33807b481b78.jpg"
                            alt="Case Study"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />

                        <div>
                            <h2 className="text-2xl font-semibold mt-4 ">Recent Situation observation </h2>
                            <p className="text-gray-600 mt-2">Sorob played a pivotal role in mobilizing citizens, organizing peaceful demonstrations, and providing legal aid to those unjustly detained. The organization’s digital campaigns exposed human rights violations and reached millions worldwide.</p>
                            <p className="text-gray-600 mt-2">
                                Sorob played a pivotal role in mobilizing citizens, organizing peaceful demonstrations, and providing legal aid to those unjustly detained. The organization’s digital campaigns exposed human rights violations and reached millions worldwidehrough investigative journalism and reports, Sorob uncovered police brutality, political corruption, and censorship efforts. These revelations fueled public outrage and strengthened the movement.
                                hrough investigative journalism and reports, Sorob uncovered police brutality, political corruption, and censorship efforts. These revelations fueled public outrage and strengthened the movement.Sorob actively engaged with international human rights organizations, calling for global attention to Bangladesh's crisis. Their efforts led to international pressure on the government to uphold democratic values.
                                Sorob played a pivotal role in mobilizing citizens, organizing peaceful demonstrations, and providing legal aid to those unjustly detained. The organization’s digital campaigns exposed human rights violations and reached millions worldwide
                                Sorob played a pivotal role in mobilizing citizens, organizing peaceful demonstrations, and providing legal aid to those unjustly detained. The organization’s digital campaigns exposed human rights violations and reached millions worldwide.</p>
                            <p className="text-gray-600 mt-2">
                                Sorob played a pivotal role in mobilizing citizens, organizing peaceful demonstrations, and providing legal aid to those unjustly detained. The organization’s digital campaigns exposed human rights violations and reached millions worldwidehrough investigative journalism and reports, Sorob uncovered police brutality, political corruption, and censorship efforts. These revelations fueled public outrage and strengthened the movement.</p>
                            <p className="text-gray-600 mt-2">Sorob actively engaged with international human rights organizations, calling for global attention to Bangladesh's crisis. Their efforts led to international pressure on the government to uphold democratic values.</p>
                        </div>
                    </motion.div>

                    {/* video section  */}
                    <div>
                        <div className="mt-2 w-full mx-auto rounded-lg overflow-hidden shadow-lg">
                            <div className="relative pt-[56.25%]">
                                {" "}
                                {/* Aspect ratio container */}
                                <ReactPlayer
                                    className="absolute top-0 left-0 w-full h-full"
                                    light={<img src='https://img.youtube.com/vi/wyzHEO_Wf7I/maxresdefault.jpg' alt='Thumbnail' />}
                                    url="https://www.youtube.com/watch?v=wyzHEO_Wf7I"
                                    width="100%"
                                    height="100%"
                                    controls={true}
                                />
                            </div>
                        </div>
                    </div>
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

            <div className="space-y-4 p-2 md:w-2/5  md:mt-8">
              {["Donate for Homeless",
          "Build Home",
          "Medical & Aid",
          "Study & Life Tips",
          "Water & Healthy Food"].map((item, idx) => (
            <button key={idx}
            className="w-full flex items-center justify-between bg-gray-100 px-4 py-3 font-medium text-gray-900 hover:bg-gray-200 transition rounded" 
            >
            {item}
            <ArrowRight className="w-4 h-4 text-red-600 font-semibold"></ArrowRight>
            
            </button>
          ))}
          <img src="https://i0.wp.com/diplomat.nyc3.digitaloceanspaces.com/prothomalo-bangla_2024-08_4552dc11-75f7-4590-81ef-08237f41beb9_P1-1100940.webp?fit=1880%2C1254&ssl=1" alt="category"  className="w-full h-72 object-cover rounded"/>
           </div>
        </div>
    );
};

export default StoriesDetails;