import slider_1 from '../../assets/slider_1.png'
const Slider_1 = () => {
    return (
        <div>
            <section className="flex flex-col md:flex-row items-center justify-between md:gap-50 bg-white p-2 md:p-12">
                {/* Left Side - Image */}
                <div className="w-full md:w-1/2 relative">
                    <img
                        src={slider_1}
                        className="w-full h-auto object-cover rounded-xl"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="w-full md:w-1/2 text-black p-6">
                    <h4 className="text-red-600 uppercase font-semibold text-sm">Stand Against Injustice</h4>
                    <h2 className="text-4xl font-bold mt-2">They Need Your Support Now</h2>
                    <p className="text-gray-600 mt-4">
                    In times of crisis, those who face oppression and violence need a voice. This image captures a moment of struggle, fear, and resilience. We believe in standing up for human rights, offering aid, and ensuring that no one faces brutality alone.
                    </p>
                    <p className="text-gray-600 mt-2">
                    The Charnyy Global aid network is committed to supporting victims of violence, providing relief, and advocating for justice. Together, we can make a difference.
                    </p>
                    <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
                        See More
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Slider_1;

