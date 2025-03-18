import aboutImage2 from "../../assets/about-2.jpg";
import FAQSection from "../../Components/FaqData/FAQSection";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import Page from "../../Components/Page/Page";
import Testimonials from "../../Components/Testimonial/testimonials";
import top_banner from "../../assets/all_top_page_bnner.jpg";
const About = () => {
    return (
        <div>
            <div className="relative">
                {/* Hero Section */}
                <div className="relative w-full">
                    <div className="relative">
                        <img
                            className="w-full h-[300px] md:h-[350px] object-cover"
                            src={top_banner}
                            alt="Hero Banner"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                        <p className="text-lg md:text-xl font-semibold">Home / About Us</p>
                        <h1 className="text-4xl md:text-5xl font-extrabold">About Us</h1>
                    </div>
                </div>
                {/* https://i.ibb.co.com/BWNbD4k/012.png */}

                {/* About Section */}
                <div className="md:max-w-7xl md:mx-auto my-20 px-6 md:px-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">

                        {/* Image Section */}
                        <div className="relative w-full md:w-1/2 flex justify-center">
                            <img
                                className="rounded-lg w-3/4 md:w-full shadow-lg"
                                src="https://img.freepik.com/premium-photo/bangladesh-victory-day-banner-flyer-bangladesh-victory-day-background_539191-113031.jpg?ga=GA1.1.860420525.1723460227&semt=ais_hybrid"
                                alt="Victory Day Banner"
                            />
                            <img
                                className="rounded-lg w-1/2 absolute -bottom-8 -right-6 shadow-lg border-4 border-white transition-transform transform hover:scale-105"
                                src={aboutImage2}
                                alt="Overlay Image"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="w-full md:w-1/2">
                            <section className="py-12">
                                <div className="max-w-3xl">
                                    <h3 className="text-green-600 text-lg font-semibold uppercase">About Us</h3>
                                    <h2 className="text-4xl font-bold text-brown-800 mt-2">
                                        The July Revolution of 1830
                                    </h2>
                                    <p className="text-lg text-orange-500 mt-4">
                                        A turning point in French history that led to the fall of King Charles X and the rise of constitutional monarchy.
                                    </p>
                                    <p className="text-gray-700 mt-4 leading-relaxed text-lg">
                                        The July Revolution, also known as the <strong>Three Glorious Days (Les Trois Glorieuses)</strong>, took place in
                                        <strong> France (July 27–29, 1830)</strong>. It was a direct response to King Charles X’s oppressive policies, including censorship and the
                                        dissolution of the Chamber of Deputies. The people of Paris, led by workers, students, and middle-class citizens,
                                        <strong> rose in revolt, built barricades, and overthrew the monarchy</strong>.
                                    </p>
                                    <p className="text-gray-700 mt-4 leading-relaxed text-lg">
                                        The revolution resulted in <strong>Louis-Philippe ascending the throne</strong> as the "Citizen King" under the <strong>July Monarchy</strong>, marking a victory for liberal constitutionalism.
                                        It also <strong>inspired future revolutions</strong> across Europe, proving that <strong>people’s power can bring political change</strong>.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            {/* testimonial */}
            <Testimonials />
            <FAQSection/>
            <Page/>
            <h2 className="md:text-4xl text-xl font-bold text-center mb-6 text-red-600 mt-17 ">Membership</h2>
            <ImageSlider/>
        </div>
    );
};

export default About;
