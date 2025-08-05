import React from "react";
import certImage from "../assets/cert.png";
import azureImage from "../assets/azure.png";
import courseimg6 from "../assets/courseimg6.jpg";
import courseimg8 from "../assets/courseimg8.jpg";
import courseimg9 from "../assets/courseimg9.jpg";
import courseimg10 from "../assets/courseimg10.jpg";

const Cert = () => {
  return (
    <div className="pt-16">
      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Career Information */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 uppercase tracking-wide">
              Why Pursue a Career in Machine Learning?
            </h1>
            
            <div className="text-gray-700 text-lg leading-relaxed space-y-4">
              <p>
              Pursuing a career in machine learning offers immense opportunities in a rapidly growing field. According to a report by LinkedIn, machine learning engineering is one of the top emerging jobs, with a growth rate of 74% annually over the past four years. The demand for machine learning experts spans various industries, from healthcare and finance to technology and automotive. In fact, the global machine learning market is projected to reach $117.19 billion by 2027, reflecting a compound annual growth rate (CAGR) of 39.2% from 2020.With the continuous advancements in AI and data science, a career in machine learning promises not only job security and lucrative opportunities but also the chance to be at the forefront of technological innovation.
              </p>
            </div>
          </div>

          {/* Right Side: Certificate */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={certImage} 
                alt="Certificate of Completion" 
                className="w-full max-w-md h-auto shadow-2xl rounded-lg"
              />
              
              {/* Optional overlay for interactive elements */}
              {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded">
                  <p className="text-sm">Certificate of Completion</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Student Success Stories Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Student Success Stories
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Student 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Sri Nikitha Srustu</h3>
              <p className="text-gray-600 text-sm">Graduate</p>
              <p className="text-gray-600 text-sm">Engineer Trainee,</p>
              <p className="text-gray-600 text-sm">Orange Business</p>
            </div>

            {/* Student 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Stalin Mudi raj</h3>
              <p className="text-gray-600 text-sm">Machine Learning</p>
              <p className="text-gray-600 text-sm">Associate, Amazon</p>
            </div>

            {/* Student 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Jahnavi Dometi</h3>
              <p className="text-gray-600 text-sm">Machine Learning</p>
              <p className="text-gray-600 text-sm">Associate, Amazon</p>
            </div>

            {/* Student 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Raji Reddy</h3>
              <p className="text-gray-600 text-sm">Software Engineer,</p>
              <p className="text-gray-600 text-sm">Accenture</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative py-16">
        {/* Background Image Overlay with Light Purple Tint */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(124, 58, 237, 0.35), 
                rgba(124, 70, 237, 0.35)
              ),
              url(${azureImage})
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: 0.85
          }}
        ></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "Is Machine Learning suitable for beginners?",
                answer: "Yes, Machine Learning is suitable for beginners! Our course is designed to start from the fundamentals and gradually progress to advanced concepts. We provide comprehensive support and hands-on practice to ensure even those with no prior experience can succeed."
              },
              {
                question: "What programming languages do I need to know for Machine Learning?",
                answer: "Python is the primary programming language used in Machine Learning. Our course covers Python from basics to advanced concepts, along with essential libraries like NumPy, Pandas, Scikit-learn, and TensorFlow. No prior programming experience is required."
              },
              {
                question: "Why is Machine Learning a good career choice?",
                answer: "Machine Learning offers excellent career prospects with high demand across industries. It provides competitive salaries, continuous learning opportunities, and the chance to work on cutting-edge technology. The field is growing rapidly with a 74% annual growth rate."
              },
              {
                question: "Can I learn Machine Learning without a strong background in mathematics?",
                answer: "While some mathematical concepts are important, our course is designed to teach the necessary mathematics as part of the curriculum. We break down complex concepts into understandable parts and focus on practical applications rather than deep theoretical mathematics."
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-white bg-opacity-90 rounded-lg overflow-hidden shadow-lg"
              >
                <summary className="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-800 text-lg">{faq.question}</span>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white transform group-open:rotate-180 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 py-4 bg-white bg-opacity-95 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Related Courses Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              Related Courses
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Course 1: Natural Language Processing */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${courseimg6})` }}>
              </div>
              <div className="p-6 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Data Science</h3>
                {/* <p className="text-gray-600 text-sm mb-3">2 Months</p> */}
                <p className="text-red-600 font-bold text-xl">₹30,000</p>
              </div>
            </div>

            {/* Course 2: Big Data Analytics */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${courseimg8})` }}>
              </div>
              <div className="p-6 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Big Data Analytics</h3>
                <p className="text-gray-600 text-sm mb-3">3 Months</p>
                <p className="text-red-600 font-bold text-xl">₹30,000</p>
              </div>
            </div>

            {/* Course 3: Tableau */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${courseimg10})` }}>
              </div>
              <div className="p-6 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Machine Learning</h3>
                {/* <p className="text-gray-600 text-sm mb-3">45 Days</p> */}
                <p className="text-red-600 font-bold text-xl">₹20,000</p>
              </div>
            </div>

            {/* Course 4: Power BI */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${courseimg9})` }}>
              </div>
              <div className="p-6 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Power BI</h3>
                {/* <p className="text-gray-600 text-sm mb-3">45 Days</p> */}
                <p className="text-red-600 font-bold text-xl">₹15,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cert; 