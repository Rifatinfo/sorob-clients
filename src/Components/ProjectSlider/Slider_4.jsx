
import slider_4 from '../../assets/slider_4.jpg'
const Slider_4 = () => {
    return (
        <div>
            <section className="flex flex-col md:flex-row items-center justify-between md:gap-50 bg-white p-2 md:p-12">
                {/* Left Side - Image */}
                <div className="w-full md:w-1/2 relative">
                    <img
                        src={slider_4}
                        className="w-full h-auto object-cover rounded-xl"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="w-full md:w-1/2 text-black p-6">
                    <h4 className="text-red-600 uppercase font-semibold text-sm">Every Life Deserves Protection and Dignity</h4>
                    <h2 className="text-4xl font-bold mt-2">Help Those Caught in the Crossfire of Crisis</h2>
                    <p className="text-gray-600 mt-4">
                    Violence and conflict leave innocent lives struggling for safety and survival. This image is a stark reminder of the hardships faced by everyday people—workers, families, and children—who are caught in the chaos.
                    </p>
                    <p className="text-gray-600 mt-2">
                    At Charnyy Global Aid Network, we are committed to providing aid, relief, and hope to those affected by crisis and violence.
                    </p>
                    <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
                        See More
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Slider_4;

