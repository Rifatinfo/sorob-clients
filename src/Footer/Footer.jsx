import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import logo from '../assets/sorob.logo.png'
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-6 md:px-12">

                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* Logo Section */}
                    <div className="flex flex-col items-center md:items-start space-y-3">
                        <div className="md:mr-20">
                            <img  src={logo} alt="Sorob" className="mx-auto md:mx-0 rounded-full" />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex gap-2  md:justify-center items-center md:gap-4">
                        <a href="/" className="text-gray-300 hover:text-red-400 transition">Home</a>
                        {/* <a href="/about" className="text-gray-300 hover:text-red-400 transition">About Us</a> */}
                        <a href="/key-area" className="text-gray-300 hover:text-red-400 transition">Key Area</a>
                        <a href="/working-area" className="text-gray-300 hover:text-red-400 transition">Working Area</a>
                        <a href="/event" className="text-gray-300 hover:text-red-400 transition">Event</a>
                        {/* <a href="/projects" className="text-gray-300 hover:text-red-400 transition">Projects</a>
                        <a href="/archive" className="text-gray-300 hover:text-red-400 transition">Archive</a>
                        <a href="/news" className="text-gray-300 hover:text-red-400 transition">News</a> */}
                        <a href="/contact" className="text-gray-300 hover:text-red-400 transition col-span-2 hidden md:visible">Contact</a>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex flex-col items-center md:items-end space-y-3">
                        <p className="text-gray-400 text-xl">Follow us:</p>
                        <div className="flex space-x-4 text-white text-lg">
                            <FaFacebook />
                            <FaSquareInstagram />
                            <IoLogoYoutube />
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
