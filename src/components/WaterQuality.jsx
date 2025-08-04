import React from 'react';

export const WaterQuality = () => {
  return (
    <div className="pt-[140px] pb-20 px-6 md:px-16 bg-gray-200 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-10 leading-tight">
          Prediction of Water Quality using <br className="hidden md:block" />
          Machine Learning
        </h1>

        <div className="text-md md:text-sm font-semibold text-gray-900 space-y-3">
          <p className="font-bold text-pink-800">Tools Used:</p>
          <ul className="list-disc list-inside space-y-1 text-black">
            <li>Machine Learning</li>
            <li>Natural Language Processing</li>
            <li>Flask</li>
            <li>HTML, CSS and JS</li>
            <li>Tableau / Power BI Dashboard</li>
          </ul>

          <p className="text-pink-800 font-medium pt-4">
            Custom modifications can be made according to student needs (optional).
          </p>
          <p className="text-pink-800 font-medium">
            After payment, you will receive a call from Sklassics. They will provide you with the project and guide you through it.
          </p>
          <p className="text-pink-800 font-medium">
            Major or mini project documentation – extra ₹1500 (optional)
          </p>
        </div>

        <div className="mt-10">
          <button className="bg-yellow-500  text-white font-semibold px-6 py-3 rounded-sm text-lg shadow-md">
            Pay now ₹5,000
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaterQuality;
