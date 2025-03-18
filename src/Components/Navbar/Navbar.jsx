import { useState, useEffect, useRef } from "react";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { BiX } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa"; // Dropdown icon
import sorobLogo from "../../assets/sorob.logo.png";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false); // Mobile menu state
    const [dropdownOpen, setDropdownOpen] = useState(false); // "Working Area" dropdown state
    const [dropdownKeyOpen, setDropdownKeyOpen] = useState(false); // "Key Area" dropdown state
    const [dropdownAboutOpen, setDropdownAboutOpen] = useState(false); // "About Us" dropdown state
    const [dropdownProjectsOpen, setDropdownProjectsOpen] = useState(false); // "Projects" dropdown state
    const [dropdownEventOpen, setDropdownEventOpen] = useState(false); // "Event" dropdown state

    const dropdownRef = useRef(null); // Ref for "Working Area"
    const dropdownKeyRef = useRef(null); // Ref for "Key Area"
    const dropdownAboutRef = useRef(null); // Ref for "About Us"
    const dropdownProjectsRef = useRef(null); // Ref for "Projects"
    const dropdownEventRef = useRef(null); // Ref for "Event"

    const menuItems = [
        "Home",
        "About Us",
        "Key Area",
        "Working Area",
        "Projects",
        "Event",
        "News",
        "Contact"
    ];

    const aboutUsItems = [
        "About Sorob",
        "Our Goal",
        "Organogram",
        "Membership"
    ];

    const keyAreaItems = [
        "Enforced Disappearing",
        "Extrajudicial Killing",
        "Torture & Mob",
        "Institutional Violence",
        "Human Rights Defenders",
        "Environmental Rights"
    ];

    const workingAreaItems = [
        "Research",
        "Visual Documentation",
        "Fact Finding",
        "Community Support",
        "Media Campaign"
    ];

    const projectsItems = [
        "July Uprising",
        "Violence At Campus",
        "Killing River"
    ];


    const eventItems = [
        "Seminar",
        "Workshop"
    ];

    // Function to close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                dropdownKeyRef.current && !dropdownKeyRef.current.contains(event.target) &&
                dropdownAboutRef.current && !dropdownAboutRef.current.contains(event.target) &&
                dropdownProjectsRef.current && !dropdownProjectsRef.current.contains(event.target) &&
                dropdownEventRef.current && !dropdownEventRef.current.contains(event.target)
            ) {
                setDropdownOpen(false);
                setDropdownKeyOpen(false);
                setDropdownAboutOpen(false);
                setDropdownProjectsOpen(false);
                setDropdownEventOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div className="w-full relative z-10">
                <header className="flex justify-between items-center px-5 py-3 bg-transparent text-black">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-3">
                        <img className="h-[40px] w-auto" src={sorobLogo} alt="Sorob Logo" />
                    </a>

                    {/* Desktop Menu */}
                    <ul className="hidden xl:flex items-center gap-2 font-semibold text-xl">
                        {menuItems.map((item) => (
                            item === "Key Area" ? (
                                <li key={item} className="relative group" ref={dropdownKeyRef}>
                                    <button
                                        className="p-3 flex items-center gap-1 rounded-md transition-all cursor-pointer"
                                        onClick={() => setDropdownKeyOpen(!dropdownKeyOpen)}
                                    >
                                        {item} <FaChevronDown className={`transition-transform ${dropdownKeyOpen ? "rotate-180" : ""}`} />
                                    </button>

                                    <ul className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${dropdownKeyOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                                        {keyAreaItems.map((subItem) => (
                                            <li key={subItem} className="text-xl px-4 py-2 whitespace-nowrap hover:bg-red-500 hover:text-white cursor-pointer">
                                                {subItem}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ) : item === "Working Area" ? (
                                <li key={item} className="relative group" ref={dropdownRef}>
                                    <button
                                        className="p-3 flex items-center gap-1 rounded-md transition-all cursor-pointer"
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                    >
                                        {item} <FaChevronDown className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                                    </button>

                                    <ul className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                                        {workingAreaItems.map((subItem) => (
                                            <li key={subItem} className="text-xl px-4 py-2 whitespace-nowrap hover:bg-red-500 hover:text-white cursor-pointer">
                                                {subItem}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ) : item === "About Us" ? (
                                <Link to="about-us/about-sorob"><li key={item} className="relative group" ref={dropdownAboutRef}>
                                    <button
                                        className="p-3 flex items-center gap-1 rounded-md transition-all cursor-pointer"
                                        onClick={() => setDropdownAboutOpen(!dropdownAboutOpen)}
                                    >
                                        {item} <FaChevronDown className={`transition-transform ${dropdownAboutOpen ? "rotate-180" : ""}`} />
                                    </button>

                                    <ul className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${dropdownAboutOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                                        {aboutUsItems.map((subItem) => (
                                            <Link to="about-us/about-sorob"><li key={subItem} className="text-xl px-4 py-2 whitespace-nowrap hover:bg-red-500 hover:text-white cursor-pointer">
                                                {subItem}
                                            </li></Link>
                                        ))}

                                    </ul>
                                </li></Link>
                            ) : item === "Projects" ? (
                                <li key={item} className="relative group" ref={dropdownProjectsRef}>
                                    <button
                                        className="p-3 flex items-center gap-1 rounded-md transition-all cursor-pointer"
                                        onClick={() => setDropdownProjectsOpen(!dropdownProjectsOpen)}
                                    >
                                        {item} <FaChevronDown className={`transition-transform ${dropdownProjectsOpen ? "rotate-180" : ""}`} />
                                    </button>

                                    <ul className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${dropdownProjectsOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                                        {projectsItems.map((subItem) => (
                                            <Link to={`/projects/${subItem.toLowerCase().replace(/\s+/g, "-")}`}><li key={subItem} className="text-lg px-4 py-2 whitespace-nowrap hover:bg-red-500 hover:text-white cursor-pointer">
                                                {subItem}
                                            </li></Link>
                                        ))}
                                    </ul>
                                </li>
                            ) : item === "Event" ? (
                                <li key={item} className="relative group" ref={dropdownEventRef}>
                                    <button
                                        className="p-3 flex items-center gap-1 rounded-md transition-all cursor-pointer"
                                        onClick={() => setDropdownEventOpen(!dropdownEventOpen)}
                                    >
                                        {item} <FaChevronDown className={`transition-transform ${dropdownEventOpen ? "rotate-180" : ""}`} />
                                    </button>

                                    <ul className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${dropdownEventOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                                        {eventItems.map((subItem) => (
                                            <li key={subItem} className="text-lg px-4 py-2 whitespace-nowrap hover:bg-red-500 hover:text-white cursor-pointer">
                                                {subItem}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ) : (
                                <li key={item} className="text-xl p-3 rounded-md transition-all cursor-pointer">
                                    {item}
                                </li>
                            )
                        ))}
                    </ul>

                    {/* Donate Button (Desktop) */}
                    <div className="hidden md:flex items-center gap-3">
                        <p className="text-black font-semibold text-3xl"><FiSearch /></p>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <span className="lg:hidden block text-2xl cursor-pointer mr-3" onClick={() => setOpen(!open)}>
                        {open ? <BiX /> : <RiMenuUnfold2Fill />}
                    </span>
                </header>

                {/* Mobile Menu */}
                <div className={`text-red-600 text-xl lg:hidden absolute top-16 left-0 w-full bg-white flex flex-col items-start font-semibold transition-all duration-500 ease-in z-50 ${open ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0 pointer-events-none"}`}>
                    {menuItems.map((item) => (
                        item === "Key Area" ? (
                            // Key Area Dropdown (Mobile)
                            <div key={item} className="w-full" ref={dropdownKeyRef}>
                                <button
                                    className="w-full text-start px-4 py-3 flex items-center justify-between cursor-pointer border-b"
                                    onClick={() => setDropdownKeyOpen(!dropdownKeyOpen)}
                                >
                                    {item} <FaChevronDown className={`transition-transform ${dropdownKeyOpen ? "rotate-180" : ""}`} />
                                </button>

                                {/* Dropdown for Mobile */}
                                <ul className={`bg-gray-100 transition-all duration-300 overflow-hidden ${dropdownKeyOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                                    {keyAreaItems.map((subItem) => (
                                        <li key={subItem} className="text-lg px-4 py-1 whitespace-nowrap text-red-600 cursor-pointer">
                                            {subItem}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : item === "Working Area" ? (
                            // Working Area Dropdown (Mobile)
                            <div key={item} className="w-full" ref={dropdownRef}>
                                <button
                                    className="w-full text-start px-4 py-3 flex items-center justify-between cursor-pointer border-b"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                >
                                    {item} <FaChevronDown className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                                </button>

                                {/* Dropdown for Mobile */}
                                <ul className={`bg-gray-100 transition-all duration-300 overflow-hidden ${dropdownOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                                    {workingAreaItems.map((subItem) => (
                                        <li key={subItem} className="text-lg px-4 py-2 whitespace-nowrap text-red-600 cursor-pointer">
                                            {subItem}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : item === "About Us" ? (
                            <div key={item} className="w-full" ref={dropdownAboutRef}>
                                <button
                                    className="w-full text-start px-4 py-3 flex items-center justify-between cursor-pointer border-b"
                                    onClick={() => setDropdownAboutOpen(!dropdownAboutOpen)}
                                >
                                    {item}
                                    <FaChevronDown className={`transition-transform ${dropdownAboutOpen ? "rotate-180" : ""}`} />
                                </button>

                                {/* Dropdown for Mobile */}
                                <ul className={`bg-gray-100 transition-all duration-300 overflow-hidden ${dropdownAboutOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                                    {aboutUsItems.map((subItem, index) => (
                                        <Link to="about-us/about-sorob" key={index}>
                                            <li onClick={() => setOpen(false)} className="text-lg px-4 py-2 whitespace-nowrap text-red-600 cursor-pointer hover:bg-red-500 hover:text-white">
                                                {subItem}
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>

                        ) : item === "Projects" ? (
                            // Projects Dropdown (Mobile)
                            <div key={item} className="w-full" ref={dropdownProjectsRef}>
                                <button
                                    className="w-full text-start px-4 py-3 flex items-center justify-between cursor-pointer border-b"
                                    onClick={() => setDropdownProjectsOpen(!dropdownProjectsOpen)}
                                >
                                    {item} <FaChevronDown className={`transition-transform ${dropdownProjectsOpen ? "rotate-180" : ""}`} />
                                </button>

                                {/* Dropdown for Mobile */}
                                <ul className={`bg-gray-100 transition-all duration-300 overflow-hidden ${dropdownProjectsOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                                    {projectsItems.map((subItem) => (
                                        <li key={subItem} className="text-lg px-4 py-2 whitespace-nowrap text-red-600 cursor-pointer">
                                            {subItem}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )  : item === "Event" ? (
                            // Event Dropdown (Mobile)
                            <div key={item} className="w-full" ref={dropdownEventRef}>
                                <button
                                    className="w-full text-start px-4 py-3 flex items-center justify-between cursor-pointer border-b"
                                    onClick={() => setDropdownEventOpen(!dropdownEventOpen)}
                                >
                                    {item} <FaChevronDown className={`transition-transform ${dropdownEventOpen ? "rotate-180" : ""}`} />
                                </button>

                                {/* Dropdown for Mobile */}
                                <ul className={`bg-gray-100 transition-all duration-300 overflow-hidden ${dropdownEventOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                                    {eventItems.map((subItem) => (
                                        <li key={subItem} className="text-xl px-4 py-2 whitespace-nowrap text-red-600 cursor-pointer">
                                            {subItem}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <li key={item} className="text-xl list-none w-full text-start px-4 py-3 border-b transition-all cursor-pointer">
                                {item}
                            </li>
                        )
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Navbar;
