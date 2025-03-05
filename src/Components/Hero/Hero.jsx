import banner from '../../assets/july-revolution.png';

const Hero = () => {
    return (
        <div>
            <div className='mt-[74px] absolute'>
                <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center">

                    {/* Hero Section */}
                    <div
                        className="flex-1"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/ynVmwxRZ/000.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'relative',
                            // zIndex: 10,
                        }}>
                        <div>
                            <div className="max-w-lg px-4 h-full md:h-[900px]">
                                <div className="flex justify-center items-center h-full text-start">
                                    <div className='space-y-4'>
                                        <p className='text-xl font-semibold'>Hope For</p>
                                        <h1 className="text-7xl font-bold mb-5">Hello there</h1>
                                        <p className="">
                                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                                        </p>
                                        <button className="btn btn-primary">Get Started</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Banner */}
                    <div className="w-full md:w-1/2">
                        <img src={banner} alt="July Revolution Banner" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
