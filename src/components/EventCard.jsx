import React from "react";

const Eventcard = ({ data }) => {
  return (
    <div className="rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl w-full md:w-[320px] bg-white h-[500px] flex flex-col">
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{data.title}</h3>
          <p className="text-sm text-gray-500 mt-1 mb-3">{data.description}</p>
          
          <div className="text-xs text-gray-600 space-y-1">
            <p><span className="font-semibold text-md">Start:</span> {data.date}</p>
            <p><span className="font-semibold">Duration:</span> {data.Days}</p>
            <p><span className="font-semibold">Videos:</span> {data.videos}</p>
            <p><span className="font-semibold">Classes:</span> {data.classes}</p>
            <p><span className="font-semibold">Rating:</span> {data.rating}</p>
          </div>

          {/* Spacer to equalize card height visually */}
          <div className="mt-4 h-6"></div>
        </div>

        {/* Button section (currently hidden) */}
        <div className="mt-4 hidden">
          <a
            href={data.link}
            className={`block text-center py-2 px-4 rounded-md font-medium transition-colors duration-300 ${
              data.category === "Active"
                ? "bg-purple-700 hover:bg-purple-800 text-white"
                : "bg-gray-400 cursor-not-allowed text-white"
            }`}
          >
            {data.category === "Active" ? "Enroll Now" : "Coming Soon"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Eventcard;
