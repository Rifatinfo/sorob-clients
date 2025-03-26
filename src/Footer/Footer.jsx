import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
// import logo from '../assets/sorob.logo.png'
import FooterLogo from '../assets/footer_logo.png'
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-2">
            <div className="container mx-auto px-6 md:px-12">

                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5 md:gap-8 text-center md:text-left">

                    {/* Logo Section */}
                    <div className="flex flex-col items-center md:items-start space-y-3">
                        <div className="md:mr-20">
                            <img src={FooterLogo} className="w-auto h-12 mx-auto md:mx-0 rounded-full" />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex gap-2  md:justify-center items-center md:gap-4">
                        <a href="/event" className="text-gray-300 hover:text-red-400 transition">Event</a>
                        <a href="/news" className="text-gray-300 hover:text-red-400 transition">News</a>
                        <a href="/archive" className="text-gray-300 hover:text-red-400 transition">contact</a>
                        <a href="/contact" className="text-gray-300 hover:text-red-400 transition col-span-2 hidden md:visible">Contact</a>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex flex-col items-center justify-center md:items-end space-y-3">

                        <div className="flex space-x-4 items-center  text-white text-lg">
                            <p className="text-gray-400 text-[16px]">Follow us:</p>
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
