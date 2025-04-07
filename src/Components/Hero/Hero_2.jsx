import heroImage from '../../assets/Website-top-6.png';
// import heroImage from '../../assets/Website-top-5.png';

const Hero_2 = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row md:gap-60 overflow-hidden ">
            {/* Text & Background Section */}
            <div className=" relative flex-grow bg-no-repeat bg-cover  overflow-hidden flex items-center justify-center flex-col gap-5 text-center w-full md:w-1/2 min-h-[50vh] md:min-h-screen"
                style={{ backgroundImage: "url('https://i.ibb.co.com/MDm92Sgv/torture-bg.png')" }}>
                {/* text div */}
                <div>
                    <div className="flex flex-col justify-center p-6 text-center lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-4xl font-bold leading-none sm:text-6xl">
                            The <br />
                            <span className="text-red-600">Voice Against</span>
                            <br /> Campus Violence
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">
                            Violence on campuses threatens the safety, freedom, and mental well-being of students across the nation.
                            <br className="hidden md:inline lg:hidden" />
                            It’s time to raise our voices, demand accountability, and build a culture of respect and justice in our educational institutions.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                className="px-8 py-2.5 text-lg font-semibold border rounded bg-red-600 border-none text-white"
                            >
                                Report a Case
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img src={heroImage} alt="Hero Section" className=" max-w-full h-auto md:h-full" />
            </div>
        </div>
    );
};

export default Hero_2;

// https://i.ibb.co.com/XkxZ3RWV/3-6-25.jpg
