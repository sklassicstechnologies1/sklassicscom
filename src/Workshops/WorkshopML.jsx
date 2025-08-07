// import React from 'react';
// import Qr from '../assets/qrcode.jpg';
// import Logosk from "../assets/Logosk.png";

// const WorkshopML = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-white text-black">
//       <div className="flex flex-col w-[90%] mx-auto py-8 flex-grow">
//         {/* Header Section */}
//         <div className="flex flex-col gap-8 items-center md:flex-row md:justify-between">
//           {/* Content Section */}
//           <div className="flex flex-col items-center justify-center flex-1">
//             <div className="mb-4">
//               <img src={Logosk} alt="machine learning" className="h-[70px] w-auto mx-auto" />
//             </div>
//             <h1 className="text-4xl font-bold mb-4 text-center">
//               Machine Learning Workshop
//             </h1>
//             <hr className="w-16 border-t-4 border-[#4f1964] my-4" />
//             <h3 className="text-2xl mb-4 text-center">
//               Unlock the Power of Data and AI
//             </h3>
//             <p className="text-base text-gray-600 mb-6 text-center">
//               Step into the world of smart systems with our ML Workshop! Learn how machines make predictions, detect patterns, and improve over time using real-world data. From basic algorithms to real-time applications, this workshop is perfect for anyone eager to explore the future of AI.
//             </p>
//             <a 
//               href="#cta" 
//               className="inline-block px-6 py-3 text-base font-bold text-white bg-[#4f1964] rounded-lg cursor-pointer transition hover:bg-[#3a1249] text-center max-w-[250px] mx-auto"
//             >
//               Join Us
//             </a>
//           </div>
          
//           {/* Image Section */}
//           <div 
//             className="bg-[url('https://img.freepik.com/premium-photo/machine-learning-artificial-intelligence-using-deep-learning-concept_410516-22427.jpg')] bg-cover bg-center h-[22rem] rounded-lg flex-1 w-full"
//             alt="Machine Learning Workshop"
//           />
//         </div>

//         {/* Schedule Component */}
//         <MLSchedule />

//         {/* CTA Component */}
//         <MLCTA />
//       </div>
//     </div>
//   );
// };

// // Internal Schedule Component - Updated with purple borders
// const MLSchedule = () => {
//     const workshopSchedule = [
//       {
//         id: 1,
//         day: "Day - 1",
//         topics: [
//           "Introduction to Machine Learning",
//           "Application of Machine Learning",
//           "Road Map",
//           "Installation of Jupyter Notebook",
//           "Loading data",
//           "Basics Preprocessing"
//         ],
//       },
//       {
//         id: 2,
//         day: "Day - 2",
//         topics: [
//           "Exploratory Data Analysis",
//           "Matplotlib and Seaborn",
//           "Univariate Analysis",
//           "BiVariate Analysis",
//           "Creating Categories",
//           "Multivariate Analysis"
//         ],
//       },
//       {
//         id: 3,
//         day: "Day - 3",
//         topics: [
//           "Encoding and Outlier Analysis",
//           "Label Encoding",
//           "One hot Encoding",
//           "Dummy Encoding",
//           "Outlier Analysis"
//         ],
//       },
//       {
//         id: 4,
//         day: "Day - 4",
//         topics: ["Project 1", "Covid Prediction"],
//       },
//       {
//         id: 5,
//         day: "Day - 5",
//         topics: ["Project 2", "Churn Prediction"],
//       },
//     ];
//   return (
//     <div className="my-12">
//       <h2 className="text-3xl font-bold text-center mb-8">WORKSHOP Agenda</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {workshopSchedule.map((day) => (
//           <div 
//             key={day.id} 
//             className="bg-gray-50 p-6 rounded-lg shadow-md border-2 border-[#4f1964] transition-all duration-300 hover:border-[#3a1249] hover:shadow-lg hover:-translate-y-1"
//           >
//             <div className="flex items-center gap-4 mb-4">
//               <span className="text-2xl">📅</span>
//               <div>
//                 <p className="font-semibold">{day.day}</p>
//               </div>
//             </div>
//             <ul className="space-y-2">
//               {day.topics.map((topic, idx) => (
//                 <li key={idx} className="flex items-start gap-2">
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png"
//                     alt=""
//                     className="w-4 h-4 mt-1"
//                   />
//                   <span>{topic}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Internal CTA Component - Updated with purple accents
// const MLCTA = () => {
//   return (
//     <div id="cta" className="flex flex-col md:flex-row gap-8 bg-gray-100 p-8 rounded-lg my-12 ">
//       <div className="flex-1">
//         <h1 className="text-2xl font-bold mb-4">How to join?</h1>
//         <h2 className="font-bold text-3xl mb-4 text-[#4f1964]">Scan and Pay Amount Rs 299 /-</h2>
//         <p className="flex items-start gap-2 mb-6">
//           <span className="text-yellow-500">⚠️</span>
//           Please share the screenshot to this WhatsApp number (6305490580) at
//           your earliest convenience. Once received, we will promptly add you
//           to the group.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <h3 className="font-bold text-[#4f1964]">Call us now:</h3>
//             <p>+91 (630) 549 0580</p>
//           </div>
//           <div>
//             <h3 className="font-semibold text-[#4f1964]">Get in touch:</h3>
//             <p>revanthteja@sklassics.com</p>
//           </div>
//         </div>
//       </div>
//       <div className="flex-1 flex justify-center">
//         <img src={Qr} alt="Payment QR Code" className="max-w-[250px] h-auto" />
//       </div>
//     </div>
//   );
// };

// export default WorkshopML;


import React from 'react';
import Qr from '../assets/qrcode.jpg';
// import Logosk from "../assets/Logosk.png";

const WorkshopML = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <div className="flex flex-col w-[90%] mx-auto py-12 md:py-8 flex-grow">
        {/* Header Section */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
          {/* Content Section */}
          <div className="flex flex-col items-center justify-center flex-1 order-2 md:order-1 pt-20 md:pt-0">
            <div className="w-full text-center">
              {/* <div className="mb-4">
                <img src={Logosk} alt="machine learning" className="h-[70px] w-auto mx-auto" />
              </div> */}
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#000] break-words">
                Machine Learning Workshop
              </h1>
              <hr className="w-16 border-t-4 border-[#4f1964] my-4 mx-auto" />
              <h3 className="text-2xl mb-4">
                Unlock the Power of Data and AI
              </h3>
              <p className="text-base text-gray-600 mb-6">
                Step into the world of smart systems with our ML Workshop! Learn how machines make predictions, detect patterns, and improve over time using real-world data.
              </p>
            </div>
            
            <div className="w-full flex flex-col items-center">
              <a 
                href="#cta" 
                className="inline-block px-6 py-3 text-base font-bold text-white bg-[#4f1964] rounded-lg cursor-pointer transition hover:bg-[#3a1249] text-center max-w-[250px] mx-auto mb-8 md:mb-0"
              >
                Join Us
              </a>
              
              {/* Mobile Image - Shows below button */}
              <div className="md:hidden w-full mt-4">
                <div 
                  className="bg-[url('https://img.freepik.com/premium-photo/machine-learning-artificial-intelligence-using-deep-learning-concept_410516-22427.jpg')] bg-cover bg-center bg-no-repeat h-[18rem] w-full rounded-lg"
                  alt="Machine Learning Workshop"
                />
              </div>
            </div>
          </div>
          
          {/* Desktop Image - Shows on right */}
          <div className="hidden md:block flex-1 order-1 md:order-2 h-[25rem]">
            <div 
              className="bg-[url('https://img.freepik.com/premium-photo/machine-learning-artificial-intelligence-using-deep-learning-concept_410516-22427.jpg')] bg-cover bg-center bg-no-repeat h-full w-full rounded-lg"
              alt="Machine Learning Workshop"
            />
          </div>
        </div>

        {/* Schedule Component with 4 cards per row and centered continuation */}
        <MLSchedule />

        {/* CTA Component */}
        <MLCTA />
      </div>
    </div>
  );
};

// Updated Schedule Component with 4 cards per row
const MLSchedule = () => {
  const workshopSchedule = [
    {
      id: 1,
      day: "Day - 1",
      topics: [
        "Introduction to Machine Learning",
        "Application of Machine Learning",
        "Road Map",
        "Installation of Jupyter Notebook",
        "Loading data",
        "Basics Preprocessing"
      ],
    },
    {
      id: 2,
      day: "Day - 2",
      topics: [
        "Exploratory Data Analysis",
        "Matplotlib and Seaborn",
        "Univariate Analysis",
        "BiVariate Analysis",
        "Creating Categories",
        "Multivariate Analysis"
      ],
    },
    {
      id: 3,
      day: "Day - 3",
      topics: [
        "Encoding and Outlier Analysis",
        "Label Encoding",
        "One hot Encoding",
        "Dummy Encoding",
        "Outlier Analysis"
      ],
    },
    {
      id: 4,
      day: "Day - 4",
      topics: ["Project 1", "Covid Prediction"],
    },
    {
      id: 5,
      day: "Day - 5",
      topics: ["Project 2", "Churn Prediction"],
    },
  ];

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8">WORKSHOP Agenda</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {workshopSchedule.slice(0, 4).map((day) => (
          <WorkshopDayCard key={day.id} day={day} />
        ))}
      </div>
      {/* Centered continuation for remaining cards */}
      <div className="flex justify-center mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl">
          {workshopSchedule.slice(4).map((day) => (
            <WorkshopDayCard key={day.id} day={day} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Extracted Day Card component for reusability
const WorkshopDayCard = ({ day }) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow-md border-2 border-[#4f1964] transition-all duration-300 hover:border-[#3a1249] hover:shadow-lg hover:-translate-y-1">
    <div className="flex items-center gap-4 mb-4">
      <span className="text-2xl">📅</span>
      <div>
        <p className="font-semibold">{day.day}</p>
      </div>
    </div>
    <ul className="space-y-2">
      {day.topics.map((topic, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png"
            alt=""
            className="w-4 h-4 mt-1"
          />
          <span>{topic}</span>
        </li>
      ))}
    </ul>
  </div>
);

// CTA Component remains the same
const MLCTA = () => {
  return (
    <div id="cta" className="flex flex-col md:flex-row gap-8 bg-gray-100 p-8 rounded-lg my-12">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">How to join?</h1>
        <h2 className="font-bold text-3xl mb-4 text-[#4f1964]">Scan and Pay Amount Rs 299 /-</h2>
        <p className="flex items-start gap-2 mb-6">
          <span className="text-yellow-500">⚠️</span>
          Please share the screenshot to this WhatsApp number (6305490580) at
          your earliest convenience. Once received, we will promptly add you
          to the group.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold text-[#4f1964]">Call us now:</h3>
            <p>+91 (630) 549 0580</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#4f1964]">Get in touch:</h3>
            <p>revanthteja@sklassics.com</p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img src={Qr} alt="Payment QR Code" className="max-w-[250px] h-auto" />
      </div>
    </div>
  );
};

export default WorkshopML;