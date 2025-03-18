import { FaUsers, FaHospital, FaGavel } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    {
      title: "Martyrs till today",
      count: "650+",
      color: "bg-red-100 text-red-700",
      icon: <FaUsers className="text-red-600 text-3xl" />,
    },
    {
      title: "Injured till today",
      count: "33,000+",
      color: "bg-yellow-100 text-yellow-700",
      icon: <FaHospital className="text-yellow-600 text-3xl" />,
    },
    {
      title: "Arrest & Disappear",
      count: "11,000+",
      color: "bg-gray-200 text-gray-800",
      icon: <FaGavel className="text-gray-700 text-3xl" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`p-5 rounded-xl flex items-center justify-between shadow-md ${item.color}`}
          >
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-2xl font-bold">{item.count}</p>
            </div>
            {item.icon}
          </div>
        ))}
      </div>

      {/* Search Box */}
      <div className="mt-8 flex items-center justify-center">
        <div className="relative w-full md:w-2/3">
          <input
            type="text"
            placeholder="Search by name, address, or any other detail"
            className="w-full border border-gray-300 rounded-full px-4 py-3 pl-10 focus:ring-2 focus:ring-red-500 outline-none"
          />
          <svg
            className="absolute left-3 top-3 text-gray-500 w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 2a6 6 0 1 0 4.47 10.47l4.12 4.13a1 1 0 0 0 1.41-1.41l-4.13-4.12A6 6 0 0 0 8 2zM3 8a5 5 0 1 1 10 0A5 5 0 0 1 3 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
