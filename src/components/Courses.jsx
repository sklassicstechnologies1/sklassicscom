// import React from "react";
// import { useNavigate } from "react-router-dom";

// import courseimg1 from "../assets/courseimg1.jpg";
// import courseimg2 from "../assets/courseimg2.jpg";
// import courseimg3 from "../assets/courseimg3.jpg";
// import courseimg4 from "../assets/courseimg4.jpg";
// import courseimg5 from "../assets/courseimg5.jpg";
// import courseimg6 from "../assets/courseimg6.jpg";
// import courseimg7 from "../assets/courseimg7.jpg";
// import courseimg8 from "../assets/courseimg8.jpg";
// import courseimg9 from "../assets/courseimg9.jpg";
// import courseimg10 from "../assets/courseimg10.jpg";
// import courseimg11 from "../assets/courseimg11.jpg";
// import courseimg12 from "../assets/courseimg12.jpg";
// import courseimg13 from "../assets/courseimg13.jpg";
// import courseimg14 from "../assets/courseimg14.jpg";
// import courseimg15 from "../assets/courseimg15.jpg";
// import courseimg16 from "../assets/courseimg16.jpg";
// import courseimg17 from "../assets/courseimg17.jpg";
// import courseimg18 from "../assets/courseimg18.jpg";
// import courseimg19 from "../assets/courseimg19.jpg";
// import courseimg20 from "../assets/courseimg20.jpg";
// import courseimg21 from "../assets/courseimg21.jpg";
// import courseimg22 from "../assets/courseimg22.jpg";
// import courseimg23 from "../assets/courseimg23.jpg";
// import courseimg24 from "../assets/courseimg24.jpg";

// const courses = [
//   { title: "Data Science Full Stack", duration: "8 Months", price: "₹60,000", image: courseimg1 },
//   { title: "Artificial Intelligence", duration: "100 Days", price: "₹30,000", image: courseimg2 },
//   { title: "Data Science", duration: "100 Days", price: "₹30,000", image: courseimg3 },
//   { title: "Machine Learning", duration: "90 Days", price: "₹25,000", image: courseimg4 },
//   { title: "Web Development", duration: "6 Months", price: "₹50,000", image: courseimg5 },
//   { title: "React JS", duration: "60 Days", price: "₹20,000", image: courseimg6 },
//   { title: "Node JS", duration: "60 Days", price: "₹20,000", image: courseimg7 },
//   { title: "Python Programming", duration: "4 Months", price: "₹30,000", image: courseimg8 },
//   { title: "Java Programming", duration: "4 Months", price: "₹30,000", image: courseimg9 },
//   { title: "Cyber Security", duration: "5 Months", price: "₹45,000", image: courseimg10 },
//   { title: "Cloud Computing", duration: "5 Months", price: "₹45,000", image: courseimg11 },
//   { title: "DevOps", duration: "3 Months", price: "₹35,000", image: courseimg12 },
//   { title: "UI/UX Design", duration: "3 Months", price: "₹25,000", image: courseimg13 },
//   { title: "Digital Marketing", duration: "2 Months", price: "₹20,000", image: courseimg14 },
//   { title: "Blockchain Development", duration: "4 Months", price: "₹50,000", image: courseimg15 },
//   { title: "Big Data", duration: "4 Months", price: "₹45,000", image: courseimg16 },
//   { title: "SQL & Databases", duration: "2 Months", price: "₹15,000", image: courseimg17 },
//   { title: "Mobile App Development", duration: "5 Months", price: "₹55,000", image: courseimg18 },
//   { title: "Angular Framework", duration: "60 Days", price: "₹20,000", image: courseimg19 },
//   { title: "Vue.js Framework", duration: "60 Days", price: "₹20,000", image: courseimg20 },
//   { title: "Project Management", duration: "3 Months", price: "₹25,000", image: courseimg21 },
//   { title: "Data Analytics", duration: "3 Months", price: "₹30,000", image: courseimg22 },
//   { title: "AWS Certification", duration: "4 Months", price: "₹45,000", image: courseimg23 },
//   { title: "Azure Certification", duration: "4 Months", price: "₹45,000", image: courseimg24 },
// ];

// const courseRouteMap = {
//   "Data Science Full Stack": "/data-science",
//   "Artificial Intelligence": "/ai",
//   // "Data Science": "/data-science-basic",
//   // "Machine Learning": "/machine-learning",
//   // "Web Development": "/web-development",
//   // "React JS": "/react-js",
//   // "Node JS": "/node-js",
//   // "Python Programming": "/python",
//   // "Java Programming": "/java",
//   // "Cyber Security": "/cyber-security",
//   // "Cloud Computing": "/cloud",
//   // "DevOps": "/devops",
//   // "UI/UX Design": "/ui-ux",
//   // "Digital Marketing": "/digital-marketing",
//   // "Blockchain Development": "/blockchain",
//   // "Big Data": "/big-data",
//   // "SQL & Databases": "/sql",
//   // "Mobile App Development": "/mobile-app",
//   // "Angular Framework": "/angular",
//   // "Vue.js Framework": "/vue",
//   // "Project Management": "/project-management",
//   // "Data Analytics": "/data-analytics",
//   // "AWS Certification": "/aws",
//   // "Azure Certification": "/azure",
// };

// const handleCardClick = (title) => {
//   const path = courseRouteMap[title];
//   if (path) {
//     navigate(path);
//   } else {
//     console.warn("No route defined for course:", title);
//   }
// };


//   return (
//     <div className="max-w-5xl mx-auto px-4 pt-40 pb-10">
//       <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>

//       <div className="mb-8">
//         <div className="flex">
//           <input
//             type="text"
//             placeholder="Search for courses"
//             className="border px-4 py-2 rounded-l-md w-full"
//           />
//           <button className="bg-gray-300 text-black px-4 rounded-r-md">Search</button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {courses.map((course, index) => (
//           <div
//             key={index}
//             onClick={() => handleCardClick(course.title)}
//             className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
//           >
//             {course.image ? (
//               <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
//             ) : (
//               <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
//                 Image pending
//               </div>
//             )}
//             <div className="p-4 bg-gray-100">
//               <h3 className="text-lg font-semibold">{course.title}</h3>
//               <p className="text-sm font-medium text-gray-700 mt-1">Time frame – {course.duration}</p>
//               <p className="text-sm text-red-600 mt-2 font-semibold">Buy for {course.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Courses;


import React from "react";
import { useNavigate } from "react-router-dom";

import courseimg1 from "../assets/courseimg1.jpg";
import courseimg2 from "../assets/courseimg2.jpg";
import courseimg3 from "../assets/courseimg3.jpg";
import courseimg4 from "../assets/courseimg4.jpg";
import courseimg5 from "../assets/courseimg5.jpg";
import courseimg6 from "../assets/courseimg6.jpg";
import courseimg7 from "../assets/courseimg7.jpg";
import courseimg8 from "../assets/courseimg8.jpg";
import courseimg9 from "../assets/courseimg9.jpg";
import courseimg10 from "../assets/courseimg10.jpg";
import courseimg11 from "../assets/courseimg11.jpg";
import courseimg12 from "../assets/courseimg12.jpg";
import courseimg13 from "../assets/courseimg13.jpg";
import courseimg14 from "../assets/courseimg14.jpg";
import courseimg15 from "../assets/courseimg15.jpg";
import courseimg16 from "../assets/courseimg16.jpg";
import courseimg17 from "../assets/courseimg17.jpg";
import courseimg18 from "../assets/courseimg18.jpg";
import courseimg19 from "../assets/courseimg19.jpg";
import courseimg20 from "../assets/courseimg20.jpg";
import courseimg21 from "../assets/courseimg21.jpg";
import courseimg22 from "../assets/courseimg22.jpg";
import courseimg23 from "../assets/courseimg23.jpg";
import courseimg24 from "../assets/courseimg24.jpg";

const courses = [
  { title: "Data Science Full Stack", duration: "8 Months", price: "₹60,000", image: courseimg1 },
  { title: "Artificial Intelligence", duration: "100 Days", price: "₹30,000", image: courseimg2 },
  { title: "Data Science", duration: "100 Days", price: "₹30,000", image: courseimg3 },
  { title: "Machine Learning", duration: "90 Days", price: "₹25,000", image: courseimg4 },
  { title: "Data Analytics", duration: "6 Months", price: "₹50,000", image: courseimg5 },
  { title: "Natural Language Processing", duration: "60 Days", price: "₹20,000", image: courseimg6 },
  { title: "Business Analytics", duration: "60 Days", price: "₹20,000", image: courseimg7 },
  { title: "Big Data Analytics", duration: "4 Months", price: "₹30,000", image: courseimg8 },
  { title: "Power BI", duration: "4 Months", price: "₹30,000", image: courseimg9 },
  { title: "Tableau", duration: "5 Months", price: "₹45,000", image: courseimg10 },
  { title: "Excel", duration: "5 Months", price: "₹45,000", image: courseimg11 },
  { title: "SQL", duration: "3 Months", price: "₹35,000", image: courseimg12 },
  { title: "Computer Vision", duration: "3 Months", price: "₹25,000", image: courseimg13 },
  { title: "Deep Learning", duration: "2 Months", price: "₹20,000", image: courseimg14 },
  { title: "Generative AI", duration: "4 Months", price: "₹50,000", image: courseimg15 },
  { title: "Java Full Stack", duration: "4 Months", price: "₹45,000", image: courseimg16 },
  { title: "Python Full Stack", duration: "2 Months", price: "₹15,000", image: courseimg17 },
  { title: "HTML CSS & JS", duration: "5 Months", price: "₹55,000", image: courseimg18 },
  { title: "Python Programming", duration: "60 Days", price: "₹20,000", image: courseimg19 },
  { title: "C Programming", duration: "60 Days", price: "₹20,000", image: courseimg20 },
  { title: "Java Programming", duration: "3 Months", price: "₹25,000", image: courseimg21 },
  { title: "R Programming", duration: "3 Months", price: "₹30,000", image: courseimg22 },
  { title: "Flask ", duration: "4 Months", price: "₹45,000", image: courseimg23 },
  { title: "Aptitude", duration: "4 Months", price: "₹45,000", image: courseimg24 },
];

const courseRouteMap = {
   "Data Science Full Stack": "/data-science",
  "Artificial Intelligence": "/ai",
  "Data Science": "/Data Science",
  "Machine Learning": "/MachineLearning",
  "Data Analytics": "/DataAnalytics",
  // "Web Development": "/WebDevelopment",
  "Natural Language Processing": "/Natural Language Processing",
  // "Node Js": "/Node Js",
  // "Business Analytics": "/Business Analytics",
  "Big Data Analytics": "/Big Data Analytics",
  "Power BI": "/powerbi",
  "Tableau": "/Tableau",
  "Excel": "/Excel",
  "SQL": "/SQL",
  "Computer Vision": "/ComputerVision",
  "Deep Learning": "/DeepLearning",
  "GenerativeAi": "/GenerativeAi",
  // Add more routes as needed
};

const Courses = () => {
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    const path = courseRouteMap[title];
    if (path) {
      navigate(path);
    } else {
      console.warn("No route defined for course:", title);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 pt-40 pb-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>

      <div className="mb-8">
        <div className="flex">
          <input
            type="text"
            placeholder="Search for courses"
            className="border px-4 py-2 rounded-l-md w-full"
          />
          <button className="bg-gray-300 text-black px-4 rounded-r-md">Search</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(course.title)}
            className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            {course.image ? (
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                Image pending
              </div>
            )}
            <div className="p-4 bg-gray-100">
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p className="text-sm font-medium text-gray-700 mt-1">
                Time frame – {course.duration}
              </p>
              <p className="text-sm text-red-600 mt-2 font-semibold">
                Buy for {course.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
