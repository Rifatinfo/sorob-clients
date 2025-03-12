
import slider_6 from '../../assets/slider_6.png'
const Slider_6 = () => {
    return (
        <div>
            <section className="flex flex-col md:flex-row items-center justify-between md:gap-50 bg-white p-2 md:p-12">
                {/* Left Side - Image */}
                <div className="w-full md:w-1/2 relative">
                    <img
                        src={slider_6}
                        className="w-full h-auto object-cover rounded-xl"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="w-full md:w-1/2 text-black p-6">
                    <h4 className="text-red-600 uppercase font-semibold text-sm">Join With Us</h4>
                    <h2 className="text-4xl font-bold mt-2">They Are Waiting For Your Help</h2>
                    <p className="text-gray-600 mt-4">
                        The Charnyy Global aid network envisions a thriving and connected
                        community, one in which all of its members have dependable access to
                        resources that enrich and empower lives.
                    </p>
                    <p className="text-gray-600 mt-2">
                        The Charnyy Global aid network envisions a thriving and connected
                        community, one in which all of its members have dependable access to
                        resources that enrich and empower lives.
                    </p>
                    <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
                        Contact Us
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Slider_6;

