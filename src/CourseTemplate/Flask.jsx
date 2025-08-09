import React from "react";
import courseimg23 from "../assets/courseimg23.jpg";
import certImage from "../assets/cert.png";
import azureImage from "../assets/azure.png";
import courseimg6 from "../assets/courseimg6.jpg";
import courseimg8 from "../assets/courseimg8.jpg";
import courseimg9 from "../assets/courseimg9.jpg";
import courseimg10 from "../assets/courseimg10.jpg";
import courseimg4 from "../assets/courseimg4.jpg";
import courseimg7 from "../assets/courseimg7.jpg";
const Flask = () => {
  return (
    <>
      {/* Hero Section */}
      <section
  className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white px-4 sm:px-6 pt-40 md:pt-48 pb-10"
  style={{ backgroundImage: `url(${courseimg23})` }}
>
  <div className="absolute inset-0 bg-black/60 z-0" />

  <div className="relative z-20 max-w-4xl px-4 sm:px-6">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 md:mb-10">Flask Programming</h1>

    <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-base sm:text-lg leading-relaxed">
      <li>Master Flask Framework</li>
      <li>Build real-world projects</li>
      <li>Learn with industry standards</li>
      <li>Learn Flask Framework from Basics to Advanced Topics</li>
    </ul>
    
    {/* <div className="mt-4 sm:mt-6">
      <h3 className="text-white font-bold text-sm sm:text-base md:text-lg">
        Course Duration: 4 Months
      </h3>
      <a href="tel:+919392732341" className="text-white text-sm sm:text-base mt-1 block">
        +91 9392732341
      </a>
    </div> */}

    <button className="mt-6 sm:mt-8 md:mt-10 bg-[#b7b100] text-white text-base sm:text-lg md:text-[20px] font-medium px-4 py-2 sm:px-4 sm:py-2 border-0 rounded-[3px] leading-normal sm:leading-[1.7em] shadow-md group flex items-center gap-2 transition-all duration-300">
      <span>Buy for ₹25,000</span>
      <span className="text-2xl sm:text-3xl md:text-4xl transform translate-x-[-8px] sm:translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
        ›
      </span>
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
              <div className="mb-4">
                <p>Flask is a lightweight and flexible framework for web development and web applications that utilizes the Python programming language.</p>
                <p>Provides excellent performance and scalability for small to medium-sized applications.</p>
                <p>With its minimalist design, Flask allows developers to optimize performance by selecting only the necessary components and dependencies.</p>
                <p>Our Flask Course is designed to turn beginners into skilled by dealing with many real time Projects learning from Industrial Experts.</p>
              </div>
              <h2 className="text-3xl font-bold mb-4">Key Highlights</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Minimalistic Design: Flask features a minimalistic design that facilitates a quick setup of basic applications, route definitions, and the implementation of core features.</li>
                <li>Hands-On Experience: Through hands on, practical experience, you will go through concepts like creating a Flask Application, using Templates in Flask Applications, using SQL Alchemy and SQLite with Flask, and using Flask and WT Forms</li>
                <li>Real Projects: Dealing with many real time Projects learning from Industrial Experts from scratch.</li>
                <li>Industry Standards: Learn best practices in creating Flask Applications and using templates in Flask Applications.</li>
              </ul>
            </div>

            {/* Who Can Apply */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Who Can Apply?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Aspiring developers who have solid foundation in Python and some basic knowledge of programming and web development fundamentals including HTML and CSS.</li>
                <li>Professionals in IT and related fields seeking to enhance their career growth.</li>
                <li>Students and hobbyists looking to build professional-grade web applications.</li>
              </ul>
            </div>

            {/* Curriculum Section */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Curriculum</h2>
              <div className="space-y-3">
                {[
                  "Flask Programming",
                //   "Object-Oriented Programming",
                //   "Java Collections Framework",
                //   "Exception Handling",
                //   "Multithreading",
                //   "JDBC and Database Connectivity",
                //   "Java 8 Features",
                //   "Building Real-World Applications"
                ].map((item, index) => (
                  <details
                    key={index}
                    className="group border bg-[#4f1964] rounded overflow-hidden"
                  >
                    <summary className="bg-[#4f1964] text-white px-4 py-3 cursor-pointer flex justify-between items-center">
                      <span>{item}</span>
                      <span className="text-xl font-bold group-open:hidden">+</span>
                      <span className="text-xl font-bold hidden group-open:block">-</span>
                    </summary>
                    <div className="bg-white px-4 py-3 text-gray-800 text-sm">
                      <p>soon content will be updated</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
          {/* Right Side: Corporate Training Card */}
          <div className="sticky top-24 self-start">
            <div className="bg-blue-100 p-6 rounded-md shadow-md space-y-6">
              <h3 className="text-xl font-bold">Corporate Training</h3>
              <p>We give Corporate Employees the Training They Need to Learn & Lead</p>
              <button className="bg-[#4f1964] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#4f1964] transition-all">
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
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 Lowercase tracking-wide">
                Why Pursue the Flask Framework?
              </h1>
              
              <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>Versatility: It offers a straightforward and adaptable method for developing Python-based web applications and APIs (Application Programming Interfaces).</li>
                  <li>Hands-On Experience: The course emphasizes real project analysis and visualization</li>
                  <li>Career Opportunities: Vast Opportunities are Knocking door from learning of Flask Framework to build a better career like Python Developer, Flask Developer etc.</li>
                  <li>Industry Relevance: You can find Flask at work in a wide range of industries including entertainment, social media, hospitality, transportation, communication, and tech.</li>
                </ul>
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
    backgroundImage: `url(${azureImage})`,
    backgroundColor: 'rgba(15, 0, 25, 0.93)',
    backgroundBlendMode: 'overlay',
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
                  question: "How does real project experience benefit learners?",
                  answer: "Real project experience allows you to apply theoretical knowledge in practical scenarios, preparing you for challenges you will encounter in real-world development environments."
                },
                {
                  question: "What are the key concepts covered in Flask?",
                  answer: "Our Flask Tutorials covers a wide range of topics from basic concepts such as setup and installation to advanced concepts like user authentication, database integration, and deployment."
                },
                {
                  question: "What are the prerequisites for enrolling in Flask?",
                  answer: "Prerequisites are first you need to learn python as you will be coding a lot in python, and some concepts of HTML, CSS and JavaScript"
                },
                {
                  question: "How can Flask certification boost my career prospects?",
                  answer: "Earning a Python Flask course certification can significantly enhance your resume by demonstrating your commitment and skills in Flask. It provides you with a competitive advantage in job interviews, especially for roles involving web development."
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Course 1: Data Science */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${courseimg7})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Business Analytics</h3>
                  <p className="text-[#666666] font-bold text-lg">Buy for ₹20,000</p>
                </div>
              </div>

              {/* Course 2: Big Data Analytics */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${courseimg8})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Big Data Analytics</h3>
                  <p className="text-[#666666] font-bold text-lg">Buy for ₹30,000</p>
                </div>
              </div>

              {/* Course 3: Machine Learning */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${courseimg4})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Machine Learning</h3>
                  <p className="text-[#666666] font-bold text-lg">Buy for ₹20,000</p>
                </div>
              </div>

              {/* Course 4: Power BI */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${courseimg9})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Power BI</h3>
                  <p className="text-[#666666] font-bold text-lg">Buy for ₹15,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flask;