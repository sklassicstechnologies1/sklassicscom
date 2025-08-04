// import React from 'react'

// const courses = [
//   {
//     title: 'Data Science',
//     time: '100 Days',
//     price: '₹30,000',
//     img: 'https://sklassics.com/wp-content/uploads/2024/07/data-science-course.jpg',
//   },
//   {
//     title: 'Data Analytics',
//     time: '3 Months',
//     price: '₹25,000',
//     img: 'https://sklassics.com/wp-content/uploads/2024/07/data-science-course.jpg',
//   },
//   {
//     title: 'Power BI',
//     time: '45 Days',
//     price: '₹15,000',
//     img: 'https://sklassics.com/wp-content/uploads/2024/07/data-science-course.jpg',
//   },
//   {
//     title: 'Machine Learning',
//     time: '2 months',
//     price: '₹20,000',
//     img: 'https://sklassics.com/wp-content/uploads/2024/07/data-science-course.jpg',
//   },
//   {
//     title: 'NLP',
//     time: '2 months',
//     price: '₹20,000',
//     img: 'https://sklassics.com/wp-content/uploads/2024/07/data-science-course.jpg',
//   },
//   {
//     title: 'Computer Vision',
//     time: '2 months',
//     price: '₹20,000',
//     img: 'https://sklassics.com/wp-content/uploads/2024/07/data-science-course.jpg',
//   },
// ]

// const CourseHome = () => {
//   return (
//     <section className="bg-white py-16 px-6 md:px-12">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
//           Our Courses
//         </h2>

//         {/* Course Grid */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {courses.map((course, index) => (
//             <div
//               key={index}
//               className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
//             >
//               <img
//                 src={course.img}
//                 alt={course.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-5">
//                 <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
//                 <p className="text-gray-700 mb-1">
//                   <span className="font-semibold">Time frame –</span> {course.time}
//                 </p>
//                 <p className="text-gray-800 font-semibold mt-2">
//                   Buy for <span className="text-red-600">{course.price}</span>
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Button */}
//       <div className="text-center mt-12">
//   <button className="bg-orange-400 text-white text-center font-semibold py-5 px-4 rounded-full transition duration-300  group text-sm inline-flex items-center gap-2">
//     <span>View All Courses</span>
//     <span
//       className="opacity-0 transform translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
//     >
//       &gt;
//     </span>
//   </button>
// </div>


//       </div>
//     </section>
//   )
// }

// export default CourseHome


import React from 'react'
import { useNavigate } from 'react-router-dom'
import courseimg3 from "../assets/courseimg3.jpg";
import courseimg5 from "../assets/courseimg5.jpg";
import courseimg9 from "../assets/courseimg9.jpg";
import courseimg4 from "../assets/courseimg4.jpg";
import courseimg6 from "../assets/courseimg6.jpg";
import courseimg25 from "../assets/courseimg25.jpg";

const courses = [
  {
    title: 'Data Science',
    time: '100 Days',
    price: '₹30,000',
    img: courseimg3 ,
  },
  {
    title: 'Data Analytics',
    time: '3 Months',
    price: '₹25,000',
    img: courseimg5,
  },
  {
    title: 'Power BI',
    time: '45 Days',
    price: '₹15,000',
    img: courseimg9,
  },
  {
    title: 'Machine Learning',
    time: '2 months',
    price: '₹20,000',
    img: courseimg4,
  },
  {
    title: 'NLP',
    time: '2 months',
    price: '₹20,000',
    img: courseimg6,
  },
  {
    title: 'Computer Vision',
    time: '2 months',
    price: '₹20,000',
    img: courseimg25,
  },
]

// Map course titles to their respective routes
const courseRouteMap = {
  'Data Science': '/Data Science',
  'Data Analytics': '/DataAnalytics',
  'Power BI': '/powerbi',
  'Machine Learning': '/MachineLearning',
  'NLP': '/Natural Language Processing',
  'Computer Vision': '/ComputerVision'
}

const CourseHome = () => {
  const navigate = useNavigate()

  const handleCardClick = (title) => {
    const path = courseRouteMap[title]
    if (path) {
      navigate(path)
    } else {
      console.warn(`No route defined for course: ${title}`)
      // Fallback to courses page if route not defined
      navigate('/courses')
    }
  }

  const handleViewAllCourses = () => {
    navigate('/courses')
  }

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Courses
        </h2>

        {/* Course Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(course.title)}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">Time frame –</span> {course.time}
                </p>
                <p className="text-gray-800 font-semibold mt-2">
                  Buy for <span className="text-red-600">{course.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button 
            onClick={handleViewAllCourses}
            className="bg-orange-400 text-white text-center font-semibold py-5 px-4 rounded-full transition duration-300 group text-sm inline-flex items-center gap-2 hover:bg-orange-500"
          >
            <span>View All Courses</span>
            <span
              className="opacity-0 transform translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
            >
              &gt;
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default CourseHome;