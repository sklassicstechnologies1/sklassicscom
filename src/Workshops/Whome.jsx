import React, { useState, useEffect } from "react";
import { FaBriefcase, FaChalkboardTeacher, FaChartLine } from "react-icons/fa";

const heroData = [
  {
    image: "/workshopimg1.jpg",
    title: "Empower Your IT Career with Sklassics Academy",
    benefits: [
      { icon: <FaBriefcase />, text: "100+ Students Successfully Placed" },
      { icon: <FaChalkboardTeacher />, text: "Daily Live Interactive Classes" },
      { icon: <FaChartLine />, text: "95% Placement Assistance Success Rate" }
    ]
  },
  {
    image: "/workshopimg2.jpg",
    title: "Expert-Led IT Training Programs",
    benefits: [
      { icon: <FaBriefcase />, text: "50+ Experienced Industry Trainers" },
      { icon: <FaChalkboardTeacher />, text: "Trending Courses in Full Stack, Data Science, AWS & More" },
      { icon: <FaChartLine />, text: "Skill-Based Curriculum with Real-World Projects" }
    ]
  },
  {
    image: "/workshopimg3.jpg",
    title: "Join the Sklassics Community",
    benefits: [
      { icon: <FaBriefcase />, text: "Collaborate with 2000+ IT Learners" },
      { icon: <FaChalkboardTeacher />, text: "Regular Mock Interviews & Q&A Sessions" },
      { icon: <FaChartLine />, text: "Project-Based Learning for Career Growth" }
    ]
  }
];

const Whome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full overflow-hidden relative mt-[9%] min-h-[55vh] mb-16 px-4 md:px-12 flex flex-col lg:flex-row items-center lg:items-stretch gap-6">
      {/* Left - Text Box */}
      <div className="bg-white text-black p-6 md:p-10 max-w-xl w-full z-10 flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          {heroData[currentIndex].title}
        </h1>
        <ul className="space-y-3 mb-6">
          {heroData[currentIndex].benefits.map((item, index) => (
            <li key={index} className="flex items-center text-sm md:text-base gap-3 text-gray-700">
              <span className="text-blue-600 text-lg">{item.icon}</span>
              {item.text}
            </li>
          ))}
        </ul>
        <button className="bg-black text-white w-[160px] h-[44px] text-md rounded-md hover:bg-gray-800 transition">
          Explore Programs
        </button>
      </div>

      {/* Right - Expanding Image Area */}
      <div className="flex-1 w-full flex items-center justify-center">
        <img
          src={heroData[currentIndex].image}
          alt="Hero"
          className="w-full h-[200px] lg:h-[280px] object-cover rounded-2xl opacity-90 transition-opacity duration-500"
        />
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 lg:bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
        {heroData.map((_, index) => (
          <button
            key={index}
            className={`w-5 h-5 rounded-full border transition-all duration-300 ${
              currentIndex === index
                ? "bg-blue-500 border-blue-500"
                : "bg-white border-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Whome;
