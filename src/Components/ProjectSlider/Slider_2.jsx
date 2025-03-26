
import slider_2 from '../../assets/slider_2.png'
const Slider_2 = () => {
    return (
        <div>
            <section className="flex flex-col md:flex-row items-center justify-between md:gap-50 bg-white p-2 md:p-12">
                {/* Left Side - Image */}
                <div className="w-full md:w-1/2 relative">
                    <img
                        src={slider_2}
                        className="w-full h-auto object-cover rounded-xl"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="w-full md:w-1/2 text-black p-6">
                    <h4 className="text-red-600 uppercase font-semibold text-sm">In Times of Crisis, Every Voice Matters</h4>
                    <h2 className="text-4xl font-bold mt-2">Stand Against Violence. Stand for Justice.</h2>
                    <p className="text-gray-600 mt-4">
                    This image reflects the harsh reality faced by many—violence, unrest, and the struggle for justice. In moments like these, communities need support, protection, and advocacy.
                    </p>
                    <p className="text-gray-600 mt-2">
                    At Charnyy Global Aid Network, we work to provide relief to those affected by conflict, ensuring safety, resources, and a path to recovery.
                    </p>
                    <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition hover:underline">
                       See More
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Slider_2;

