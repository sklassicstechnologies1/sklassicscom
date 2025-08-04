import React from "react";
import { FaClock, FaCertificate, FaHeadphonesAlt } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";

const CorporateTrainingCard = () => {
  return (
    <div className="bg-[#dbe9f8] p-6 rounded-lg space-y-6 shadow-md">
      <div>
        <h3 className="text-xl font-bold mb-1">Corporate Training</h3>
        <p className="text-sm text-gray-700">
          We give Corporate Employees the Training They Need to Learn & Lead
        </p>
        <button className="mt-4 bg-[#5c4663] text-white px-4 py-2 rounded-md">
          CONTACT US
        </button>
      </div>

      <div className="space-y-4 text-sm text-gray-900">
        <div className="flex items-center gap-2">
          <GiTeacher />
          <span>Flexible Timings</span>
        </div>
        <div className="flex items-center gap-2">
          <FaClock />
          <span>36 Hours Training</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCertificate />
          <span>Certification</span>
        </div>
        <div className="flex items-center gap-2">
          <FaHeadphonesAlt />
          <span>24/7 Support</span>
        </div>
      </div>
    </div>
  );
};

export default CorporateTrainingCard;
