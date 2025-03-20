import { useState } from "react";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { BiX } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import sorobLogo from "../../assets/sorob.logo.png";

const Navbar = () => {
    const [open, setOpen] = useState(false); // Mobile menu state
    const [active, setActive] = useState("Home"); // Track active menu item

    const menuItems = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about" },
        { name: "Key Area", link: "/" },
        { name: "Working Area", link: "/" },
        { name: "Projects", link: "/" },
        { name: "Event", link: "/event" },
        { name: "News", link: "/news" },
        { name: "Contact", link: "/contact" }
    ];

    const handleNavClick = (item) => {
        setActive(item); // Set active menu
        setOpen(false); // Close mobile menu
    };

    return (
        <div className="w-full relative z-10">
            <header className="flex justify-between items-center px-5 py-3 bg-transparent text-black">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3">
                    <img className="h-[40px] w-auto" src={sorobLogo} alt="Sorob Logo" />
                </a>

                {/* Desktop Menu */}
                <ul className="hidden xl:flex items-center gap-4 font-semibold text-xl">
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            onClick={() => handleNavClick(item.name)}
                            className={`text-xl px-4 py-2 rounded-md cursor-pointer transition-all 
            ${active === item.name ? "text-red-600" : "hover:text-[#C73450]"}
        `}
                        >
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                </ul>

                {/* Search Icon */}
                <div className="hidden md:flex items-center gap-3">
                    <p className="text-black font-semibold text-3xl"><FiSearch /></p>
                </div>

                {/* Mobile Menu Toggle Button */}
                <span
                    className="lg:hidden block text-2xl cursor-pointer mr-3"
                    onClick={() => setOpen(true)}
                >
                    <RiMenuUnfold2Fill />
                </span>
            </header>

            {/* Mobile Menu Overlay & Menu */}
            <div
                className={`fixed inset-0 h-screen transition-opacity duration-700 ease-in-out z-50 
                ${open ? "bg-red-600/70 opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={() => setOpen(false)} // Click outside to close
            >
                {/* Menu Container */}
                <div
                    className={`absolute top-0 left-0 h-full bg-white w-2/4 max-w-[300px] shadow-lg 
                    transition-transform duration-500 ease-in-out delay-200 ${open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                >
                    {/* Close Button */}
                    <span
                        className="absolute top-3 right-3 text-3xl text-red-600 cursor-pointer"
                        onClick={() => setOpen(false)}
                    >
                        <BiX />
                    </span>

                    {/* Mobile Menu Items */}
                    <ul className="text-red-600 font-semibold flex flex-col pt-10">
                        {menuItems.map((item) => (
                            <li
                                key={item}
                                onClick={() => handleNavClick(item)}
                                className={`w-full list-none px-6 py-3 border-b cursor-pointer transition-all 
                                    ${active === item ? "bg-red-600 text-white" : "hover:bg-gray-200"}
                                `}
                            >
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
