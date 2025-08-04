import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import certImage from "../assets/cert.png";
import azureImage from "../assets/azure.png";
import courseimg6 from "../assets/courseimg6.jpg";
import courseimg8 from "../assets/courseimg8.jpg";
import courseimg9 from "../assets/courseimg9.jpg";
import courseimg10 from "../assets/courseimg10.jpg";

const PowerBi = () => {
  // Curriculum component with animations
  const Curriculum = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const modules = [
      {
        title: "Power BI Desktop Fundamentals",
        content: [
          "Power BI Desktop Interface",
          "Data Sources and Connections",
          "Basic Data Import",
          "Report View and Design",
          "Basic Visualizations",
          "Report Publishing",
        ],
      },
      {
        title: "Data Import and Transformation",
        content: [
          "Connecting to Various Data Sources",
          "Data Cleaning and Transformation",
          "Merging and Appending Queries",
          "Data Type Conversions",
          "Error Handling",
          "Query Folding",
        ],
      },
      {
        title: "Data Modeling and Relationships",
        content: [
          "Star Schema Design",
          "Creating Relationships",
          "Cardinality Settings",
          "Date Tables and Hierarchies",
          "Role-Playing Dimensions",
          "Bridge Tables",
        ],
      },
      {
        title: "DAX (Data Analysis Expressions)",
        content: [
          "Calculated Columns vs Measures",
          "Basic DAX Functions",
          "Filter Context and Row Context",
          "Time Intelligence Functions",
          "CALCULATE Function",
          "Advanced DAX Patterns",
        ],
      },
      { title: "Visualization Best Practices", content: [] },
      { title: "Advanced Charts and Custom Visuals", content: [] },
      { title: "Dashboard Design Principles", content: [] },
      { title: "Power BI Service and Collaboration", content: [] },
      { title: "Data Refresh and Scheduling", content: [] },
      { title: "Performance Optimization", content: [] },
      { title: "Real-world Projects", content: [] },
    ];

    return (
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
          Curriculum
        </h2>
        <div className="space-y-3">
          {modules.map((mod, index) => (
            <div
              key={index}
              className="border border-purple-800 rounded overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="bg-purple-900 w-full text-white px-4 py-3 flex justify-between items-center"
              >
                <span>{mod.title}</span>
                <span className="text-xl font-bold">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="bg-white px-4 overflow-hidden"
                  >
                    {mod.content.length > 0 ? (
                      <motion.ul
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: {
                            transition: { staggerChildren: 0.05 },
                          },
                        }}
                        className="list-disc list-inside py-3 space-y-1 text-gray-800 text-sm"
                      >
                        {mod.content.map((item, idx) => (
                          <motion.li
                            key={idx}
                            variants={{
                              hidden: { opacity: 0, x: -10 },
                              visible: { opacity: 1, x: 0 },
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </motion.ul>
                    ) : (
                      <div className="py-3 text-gray-700 text-sm">
                        Module details coming soon.
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white px-6 py-10 pt-32"
        style={{ backgroundImage: `url(${courseimg9})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-20 max-w-4xl">
          <h1 className="text-5xl font-extrabold mb-10">Power BI</h1>

          <ul className="space-y-4 text-lg leading-relaxed">
         <li>Learn from industry experts.</li> 
<li>Earn a recognized certification.</li>
<li>Work on real-world projects.</li>
            <li>Master Power BI Desktop, DAX, and Power Query.</li>
          </ul>

          <button className="mt-10 bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-yellow-300 transition-all">
            Buy for ₹15,000
          </button>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Side: Overview, Highlights, Who Can Apply */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="mb-4">
                Dive deep into the world of business intelligence with this comprehensive Power BI course designed to empower you with the skills to create, share, and benefit from insightful data visualizations and reports. This course covers data modeling, visual analytics, report generation, and the use of Power BI service and desktop applications.
              </p>
              <h2 className="text-3xl font-bold mb-4">Key Highlights</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>One-on-One with Industry</li>
                <li>Expert Guidance</li>
                <li>1:1 Mock Interview</li>
              </ul>
            </div>

            {/* Who Can Apply */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Who Can Apply?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Business analysts looking to enhance their data visualization skills</li>
                <li>Data professionals wanting to master Power BI for reporting</li>
                <li>IT professionals seeking to transition into business intelligence roles</li>
                <li>Managers and executives who need to create data-driven presentations</li>
                <li>Students and freshers interested in business analytics and data visualization</li>
                <li>Anyone wanting to learn Microsoft's leading BI tool</li>
              </ul>
            </div>

            {/* Animated Curriculum Section */}
            <Curriculum />
          </div>

          {/* Right Side: Corporate Training Card */}
          <div className="sticky top-24 self-start">
            <div className="bg-blue-100 p-6 rounded-md shadow-md space-y-6">
              <h3 className="text-xl font-bold">Corporate Training</h3>
              <p>We give Corporate Employees the Training They Need to Learn & Lead</p>
              <button className="bg-purple-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700 transition-all">
                CONTACT US
              </button>
              <div className="space-y-4 pt-6 border-t border-gray-300">
                <div className="flex items-center space-x-3">
                  <span>📚</span>
                  <span>Flexible Timings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span>⏱</span>
                  <span>48 Hours Training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span>🎓</span>
                  <span>Certification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span>📞</span>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Certificate Section */}
      <div className="pt-16">
        {/* Main Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Career Information */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 uppercase tracking-wide">
                Master Power BI for Business Intelligence and Data Visualization
              </h1>
              
              <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                <p>
                  Power BI is the leading business intelligence tool that transforms raw data into actionable insights. This course equips you with skills to create compelling dashboards, perform advanced data analysis, and drive data-driven decision making in organizations. With Power BI expertise, you can unlock career opportunities in business intelligence, data analysis, and consulting roles.
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
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded">
                    <p className="text-sm">Certificate of Completion</p>
                  </div>
                </div>
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
                  question: "What specific tools and techniques will I master in the Power BI course?",
                  answer: "Skills in using Power BI Desktop, DAX language for dynamic calculations, and Power Query for data transformation."
                },
                {
                  question: "What is the importance of data visualization in business intelligence?",
                  answer: "Crucial for interpreting complex datasets and communicating findings effectively to stakeholders."
                },
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
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Natural Language Processing</h3>
                  <p className="text-gray-600 text-sm mb-3">2 Months</p>
                  <p className="text-red-600 font-bold text-xl">₹20,000</p>
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
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Tableau</h3>
                  <p className="text-gray-600 text-sm mb-3">45 Days</p>
                  <p className="text-red-600 font-bold text-xl">₹15,000</p>
                </div>
              </div>

              {/* Course 4: Power BI */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${courseimg9})` }}>
                </div>
                <div className="p-6 bg-gray-50">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Power BI</h3>
                  <p className="text-gray-600 text-sm mb-3">45 Days</p>
                  <p className="text-red-600 font-bold text-xl">₹15,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PowerBi;