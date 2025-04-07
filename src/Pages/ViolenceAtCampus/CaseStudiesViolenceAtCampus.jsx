import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Paste your `caseStudies` data here or import it
// import { caseStudies } from "../data/caseStudies";


const caseStudies = [
    {
        id: 1,
        title: "Bullying Incident in School Dormitory",
        tag: "Campus Violence",
        image: "https://i.ibb.co.com/gMqhwqGc/pngtree-girl-violated-by-school-png-image-7209633.png",
        description:
            "একটি স্কুল ডরমিটরিতে সহপাঠীদের দ্বারা একটি শিক্ষার্থীকে নির্যাতনের অভিযোগ উঠেছে, যা শিক্ষার্থীদের নিরাপত্তা নিয়ে উদ্বেগ সৃষ্টি করেছে।",
    },
    {
        id: 2,
        title: "Teacher Misconduct Case in College",
        tag: "Faculty Misconduct",
        image: "https://i.pinimg.com/736x/3f/df/91/3fdf917fbca3cf53be19b441dda7820c.jpg",
        description:
            "একজন শিক্ষকের দ্বারা এক শিক্ষার্থীকে মানসিক হয়রানির অভিযোগ পাওয়া গেছে, যা প্রশাসনিক তদন্তে রয়েছে।",
    },
    {
        id: 3,
        title: "Student Fight Leads to Injury",
        tag: "Student Violence",
        image: "https://i.ibb.co.com/LdZdD92J/Pngtree-campus-bullying-to-bully-classmates-7209363.png",
        description:
            "একটি সামান্য বিরোধের জেরে দুই শিক্ষার্থীর মধ্যে হাতাহাতি হয়, যেখানে একজন গুরুতর আহত হয়।",
    },
    {
        id: 4,
        title: "Online Harassment in University Group",
        tag: "Cyberbullying",
        image: "https://i.pinimg.com/736x/3f/b9/83/3fb983233c63eaa7ec52aee67d856371.jpg",
        description:
            "একটি বিশ্ববিদ্যালয়ের ফেসবুক গ্রুপে একজন শিক্ষার্থীকে টার্গেট করে মানহানিকর মন্তব্য করা হয়।",
    },
    {
        id: 5,
        title: "Verbal Abuse by Staff Member",
        tag: "Staff Misconduct",
        image: "https://i.pinimg.com/736x/16/ce/bf/16cebf0e0b4c22c5825ce3814ff9bd2a.jpg",
        description:
            "একজন স্টাফ সদস্য কর্তৃক শিক্ষার্থীদের প্রতি অনুপযুক্ত ভাষার ব্যবহার পর্যবেক্ষণ করা হয়েছে।",
    },
    {
        id: 6,
        title: "Unauthorized Punishment in Hostel",
        tag: "Hostel Abuse",
        image: "https://i.pinimg.com/736x/00/2e/a2/002ea2ae583f615cffa3c6b7b05241d1.jpg",
        description:
            "হোস্টেলে একজন শিক্ষার্থীকে রাতের বেলা দাঁড় করিয়ে রাখার শাস্তির অভিযোগ উঠেছে।",
    },
    {
        id: 7,
        title: "Physical Assault by Seniors",
        tag: "Ragging",
        image: "https://i.pinimg.com/736x/66/16/db/6616dbdec9f5a195fdf48f57d1ea3545.jpg",
        description:
            "একজন নবাগত শিক্ষার্থী সিনিয়রদের দ্বারা শারীরিক নির্যাতনের শিকার হয়েছে বলে অভিযোগ করেছে।",
    },
    // {
    //   id: 8,
    //   title: "Security Lapse During Protest",
    //   tag: "Security Concern",
    //   image: "https://i.ibb.co.com/gMqhwqGc/pngtree-girl-violated-by-school-png-image-7209633.png",
    //   description:
    //     "ক্যাম্পাসে একটি শান্তিপূর্ণ প্রতিবাদ চলাকালে নিরাপত্তার অভাব দেখা যায়, যা বিশৃঙ্খলার জন্ম দেয়।",
    // },
];



const CaseStudiesViolenceAtCampus = () => {
    return (
        <div className="bg-gray-100 py-10 mt-10 p-2">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto ">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col justify-center items-center p-6 rounded-2xl bg-white shadow hover:shadow-md"
                >
                    <h2 className="text-2xl md:text-4xl font-semibold text-red-400 mb-4">
                        Case Studies
                    </h2>

                    <div className="flex justify-center">
                        <Link
                            to="/projects/july-uprising/all-fact-finding"
                            className="border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 text-center text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-100"
                        >
                            View All
                        </Link>
                    </div>
                </motion.div>
                {caseStudies.map((item) => (
                    <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="bg-white rounded-2xl p-4 space-y-4 shadow hover:shadow-md h-[470px]">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover rounded-lg"
                            />

                            {/* Tag */}
                            <span className="inline-block bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm font-semibold">
                                {item.tag}
                            </span>

                            {/* Title */}
                            <h2 className="text-lg md:text-xl font-bold text-gray-900">
                                {item.title}
                            </h2>

                            {/* Description */}
                            <p className="text-sm text-gray-600">{item.description}</p>

                            {/* Read more */}
                            <a
                                href="#"
                                className="inline-flex items-center text-purple-600 font-semibold text-sm hover:underline"
                            >
                                Read more <ArrowUpRight className="ml-1 h-4 w-4" />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CaseStudiesViolenceAtCampus;
