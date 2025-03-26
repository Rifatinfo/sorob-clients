
const HumanRights = ({data}) => {
    return (
        <div>
             <div >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6 md:p-0 p-4">
                    {data.map(item => (
                        <div
                            key={item.id}
                            className="group p-6 rounded-lg shadow-lg text-center transition-all duration-300 ease-in-out 
                       h-[360px]  mx-auto flex flex-col items-center justify-center
                       bg-white hover:bg-red-600 hover:scale-105 hover:shadow-2xl space-y-4"
                        >
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="w-16 h-16 transition-all duration-300 group-hover:opacity-90"
                            />
                            <h3 className="text-xl font-semibold transition-all duration-300 group-hover:text-white">
                                {item.title}
                            </h3>
                            <p className="text-base text-gray-700 transition-all duration-300 group-hover:text-gray-200">
                                {item.short_description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default HumanRights;