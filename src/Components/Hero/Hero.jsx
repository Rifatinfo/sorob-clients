import heroImage from '../../assets/july_revolution.png';

const Hero = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row md:gap-60 overflow-hidden -mt-20">
            {/* Text & Background Section */}
            <div className=" relative flex-grow bg-no-repeat bg-cover rounded-xl overflow-hidden flex items-center justify-center flex-col gap-5 text-center w-full md:w-1/2 min-h-[50vh] md:min-h-screen"
                style={{ backgroundImage: "url('https://i.ibb.co.com/HfyG0r1w/Rifat-mama-2.png')" }}>
                {/* text div */}
                <div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-4xl font-bold leading-none sm:text-6xl">The  <br/>
                            <span className="text-red-600"> Legacy of July </span><br/> Revolution
                           
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">The July Revolution was more than a moment in history—it was a movement  it symbolizes the power of unity and determination
                            <br className="hidden md:inline lg:hidden" />that reshaped the future. Rooted in resilience and the pursuit of justice,
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="#" className="px-8 py-2.5 text-lg font-semibold border rounded bg-red-600 border-none text-white">Donation Now</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img src={heroImage} alt="Hero Section" className="rounded-xl max-w-full h-auto md:h-full" />
            </div>
        </div>
    );
};

export default Hero;

// https://i.ibb.co.com/XkxZ3RWV/3-6-25.jpg
