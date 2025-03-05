import { useState, useEffect, useRef } from "react";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { BiX } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa"; // Dropdown icon
import sorobLogo from "../../assets/sorob.logo.png";

const Navbar = () => {
    const [open, setOpen] = useState(false); // Mobile menu state
    const [dropdownOpen, setDropdownOpen] = useState(false); // "Working Area" dropdown state
    const [dropdownKeyOpen, setDropdownKeyOpen] = useState(false); // "Key Area" dropdown state

    const dropdownRef = useRef(null); // Ref for "Working Area"
    const dropdownKeyRef = useRef(null); // Ref for "Key Area"

    const menuItems = [
        "Home",
        "About Us",
        "Key Area",
        "Working Area",
        "News",
        "Event",
        "Archive",
        "Contact"
    ];

    const keyAreaItems = [
        "Education",
        "Health",
        "Economic Development",
        "Environmental Protection",
        "Social Welfare"
    ]; // Sub-menu for "Key Area"

    const workingAreaItems = [
        "Research",
        "Visual Documentation",
        "Fact Finding",
        "Community Support",
        "Media Campaign",
        "Seminar",
        "Workshop",
        "Reports",
        "Story",
        "Case Study"
    ]; // Sub-menu for "Working Area"

    // Function to close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                dropdownKeyRef.current && !dropdownKeyRef.current.contains(event.target)
            ) {
                setDropdownOpen(false);
                setDropdownKeyOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="w-full h-full absolute">
            <header className="flex justify-between items-center px-5 py-3 bg-white text-black">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3">
                    <img className="h-[40px] w-auto" src={sorobLogo} alt="Sorob Logo" />
                </a>

                {/* Desktop Menu */}
                <ul className="hidden xl:flex items-center gap-2 font-semibold text-lg">
                    {menuItems.map((item) => (
                        item === "Key Area" ? (
                            // Key Area Dropdown (Desktop)
                            <li key={item} className="relative group" ref={dropdownKeyRef}>
                                <button
                                    className="p-3 flex items-center gap-1 rounded-md transition-all cursor-pointer"
                                    onClick={() => setDropdownKeyOpen(!dropdownKeyOpen)}
                                >
                                    {item} <FaChevronDown className={`transition-transform ${dropdownKeyOpen ? "rotate-180" : ""}`} />
                                </button>

                                {/* Dropdown for Desktop */}
                                <ul className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${dropdownKeyOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                                    {keyAreaItems.map((subItem) => (
                                        <li key={subItem} className="text-lg px-4 py-2 whitespace-nowrap hover:bg-red-500 hover:text-white cursor-pointer">
                                            {subItem}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ) : item === "Working Area" ? (
                            // Working Area Dropdown (Desktop)
                            <li key={item} className="relative group" ref={dropdownRef}>
                                <button
                                    className="p-3 flex items-center gap-1 rounded-md transition-all cursor-pointer"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                >
                                    {item} <FaChevronDown className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                                </button>

                                {/* Dropdown for Desktop */}
                                <ul className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                                    {workingAreaItems.map((subItem) => (
                                        <li key={subItem} className="text-lg px-4 py-2 whitespace-nowrap hover:bg-red-500 hover:text-white cursor-pointer">
                                            {subItem}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ) : (
                            <li key={item} className="text-lg p-3 rounded-md transition-all cursor-pointer">
                                {item}
                            </li>
                        )
                    ))}
                </ul>

                {/* Donate Button (Desktop) */}
                <div className="hidden md:flex items-center gap-3">
                    <button className="btn text-white bg-red-600">Donate Now</button>
                </div>

                {/* Mobile Menu Toggle Button */}
                <span className="lg:hidden block text-2xl cursor-pointer mr-3" onClick={() => setOpen(!open)}>
                    {open ? <BiX /> : <RiMenuUnfold2Fill />}
                </span>
            </header>

            {/* Mobile Menu */}
            <div className={`lg:hidden absolute top-16 left-0 w-full bg-white flex flex-col items-start font-semibold transition-all duration-500 ease-in z-50 ${open ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0 pointer-events-none"}`}>
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
                                    <li key={subItem} className="text-lg px-4 py-2 whitespace-nowrap hover:bg-red-400 hover:text-white cursor-pointer">
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
                                    <li key={subItem} className="text-lg px-4 py-2 whitespace-nowrap hover:bg-red-400 hover:text-white cursor-pointer">
                                        {subItem}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <li key={item} className="text-lg list-none w-full text-start px-4 py-3 border-b transition-all cursor-pointer">
                            {item}
                        </li>
                    )
                ))}
            </div>
        </div>
    );
};

export default Navbar;
