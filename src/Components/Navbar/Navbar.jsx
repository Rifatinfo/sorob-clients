import { useState, useEffect } from "react";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { BiX } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import sorobLogo from "../../assets/sorob.logo.png";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
    const [open, setOpen] = useState(false); // Mobile menu state
    const [active, setActive] = useState("Home"); // Track active menu item
    const [scrolling, setScrolling] = useState(false);

    const location = useLocation()
    const navigate = useNavigate();
    console.log(location, active, navigate);
    
    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about" },
        { name: "Key Area", link: "/", id: "Key-Area" },
        { name: "Working Area", link: "/", id: "Working-Area" },
        { name: "Projects", link: "/", id: "Projects" },
        { name: "Event", link: "/Event" },
        // { name: "News", link: "/news" },
        // { name: "Contact", link: "/contact" }
    ];

    const handleNavClick = (item) => {
        setActive(item); // Set active menu
        setOpen(false); // Close mobile menu
    };
    
    const handleSectionClick = (id) => {
        if(location.pathname !== "/"){
          navigate("/", {replace : true})

          setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({behavior : "smooth"})
          }, 100)
        }
    }
    return (
        <div className="w-full relative z-10 ">
            <header className={`fixed  top-0 left-0 w-full flex justify-between items-center px-5 py-3  text-black  z-50 ${scrolling ? "bg-white shadow-md" : "bg-transparent"}`}>
                {/* Logo */}
                <a href="/" className="flex items-center gap-3">
                    <img className="h-[40px] w-auto" src={sorobLogo} alt="Sorob Logo" />
                </a>

                {/* Desktop Menu */}
                {/* <ul className="hidden xl:flex items-center gap-8 font-semibold text-xl">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            {
                                item.id ? (location.pathname === '/' ? (<ScrollLink to={item.id} smooth={true} duration={500} className="hover:text-red-600">
                                    {item.name}
                                </ScrollLink>) : (<RouterLink to={`/${item.id}`} className="hover:text-red-600">
                                    {item.name}
                                </RouterLink>)) : (<RouterLink to={item.link} className="hover:text-red-600">{item.name}</RouterLink>)
                            }
                        </li>
                    ))}
                </ul> */}

                <ul className="hidden xl:flex items-center gap-8 font-semibold text-xl">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            {
                                item.id ? (location.pathname === '/' ? (<ScrollLink to={item.id} smooth={true} duration={500} className="hover:text-red-600 cursor-pointer">
                                    {item.name}
                                </ScrollLink>) : ( <span onClick={() => handleSectionClick(item.id)} className="hover:text-red-600 cursor-pointer">{item.name}</span>)
                                    ) : (<RouterLink to={item.link} className="hover:text-red-600 cursor-pointer">{item.name}</RouterLink>)
                            }
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
                    className={`absolute top-0 left-0 h-full bg-white w-2/4  rounded-r-xl max-w-[300px] shadow-lg 
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
                    {/* <ul className="text-red-600 font-semibold flex flex-col pt-10">
                        {menuItems.map((item) => (
                            <li key={item.name} className="w-full list-none">
                                <Link
                                    to={item.id}
                                    smooth={true}
                                    duration={500}
                                    className="block w-full px-6 py-3 border-b cursor-pointer transition-all 
                                 hover:bg-gray-200"
                                    onClick={() => {
                                        handleNavClick(item.name);
                                        setTimeout(() => setOpen(false), 100); // Delay closing slightly to allow scroll event
                                    }}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul> */}

                    {
                        <ul className="text-red-600 font-semibold flex flex-col pt-10 w-full">
                        {menuItems.map((item) => (
                            <li key={item.name} className="w-full list-none">
                                {item.id ? (
                                    location.pathname === "/" ? (
                                        <ScrollLink
                                            to={item.id}
                                            smooth={true}
                                            duration={500}
                                            className="block w-full px-6 py-3 border-b cursor-pointer transition-all hover:bg-gray-200"
                                            onClick={() => {
                                                handleNavClick(item.name);
                                                setTimeout(() => setOpen(false), 100);
                                            }}
                                        >
                                            {item.name}
                                        </ScrollLink>
                                    ) : (
                                        <span
                                            className="block w-full px-6 py-3 border-b cursor-pointer transition-all hover:bg-gray-200"
                                            onClick={() => {
                                                handleSectionClick(item.id);
                                                handleNavClick(item.name);
                                                setTimeout(() => setOpen(false), 100);
                                            }}
                                        >
                                            {item.name}
                                        </span>
                                    )
                                ) : (
                                    <RouterLink
                                        to={item.link}
                                        className="block w-full px-6 py-3 border-b cursor-pointer transition-all hover:bg-gray-200"
                                        onClick={() => {
                                            handleNavClick(item.name);
                                            setTimeout(() => setOpen(false), 100);
                                        }}
                                    >
                                        {item.name}
                                    </RouterLink>
                                )}
                            </li>
                        ))}
                    </ul>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;




