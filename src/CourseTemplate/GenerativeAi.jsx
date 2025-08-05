import React from "react";
// import Cert from "./Cert";
import courseimg15 from "../assets/courseimg15.jpg";
import certImage from "../assets/cert.png";
import azureImage from "../assets/azure.png";
import courseimg6 from "../assets/courseimg6.jpg";
import courseimg8 from "../assets/courseimg8.jpg";
import courseimg9 from "../assets/courseimg9.jpg";
import courseimg10 from "../assets/courseimg10.jpg";

const GenerativeAi = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white px-6 py-10 pt-32"
        style={{ backgroundImage: `url(${courseimg15})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-20 max-w-4xl">
          <h1 className="text-5xl font-extrabold mb-10">Generative Ai</h1>

          <ul className="space-y-4 text-lg leading-relaxed">


<li>Master Generative AI.</li>

<li>Build real-world projects.</li>

<li>Learn with industry standards.</li>

<li>Learn from Basics to Advanced Topics.</li>
          </ul>
          {/* <h3>
            <strong>
           Course Duration : 45 days
            </strong>
          </h3> */}
          

          <button className="mt-10 bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-yellow-300 transition-all">
            Buy for ₹30,000
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
              <ul className="mb-4">
              <li>Deep Dive into Generative AI (also known as genAI or gen AI) a field of machine learning (ML) that develops and uses ML models for generating new content such as text, images, videos, sounds, code, 3D designs, and other media.</li>
<li>Generative AI models are often called large language models (LLMs) because of their large size and ability to understand and generate natural language.</li>
              </ul>
              <h2 className="text-3xl font-bold mb-4">Key Highlights</h2>
              <ul className="list-disc list-inside space-y-2">
                
<li>Hands-On Experience: Gain practical skills with real world scenarios.</li>
<li>Real Projects: Dealing with many real time Projects learning with Industrial Experts from scratch.</li>
<li>Industry Standards: Learn best practices in coding.</li>
              </ul>
            </div>

            {/* Who Can Apply */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Who Can Apply?</h2>
              <ul className="list-disc list-inside space-y-2">


              <li>Aspiring freshers with a bachelor’s degree in a relevant subject, such as information technology, computer engineering, statistics, or data science.</li>
              <li>Professionals in IT and related fields seeking to enhance their Career Growth.</li>
              <li>Students and hobbyists looking to build professional-grade.</li>

              </ul>
            </div>

            {/* Curriculum Section */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Curriculum</h2>
              <div className="space-y-3">
                {[
                  "Gen ai",
                  
                ].map((item, index) => {
                  if (item === "Fundamentals Of Computer Vision") {
                    return (
                      <details
                        key={index}
                        className="group border border-purple-800 rounded overflow-hidden"
                      >
                        <summary className="bg-purple-900 text-white px-4 py-3 cursor-pointer flex justify-between items-center">
                          <span>{item}</span>
                          <span className="text-xl font-bold group-open:hidden">+</span>
                          <span className="text-xl font-bold hidden group-open:block">-</span>
                        </summary>
                        <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Introduction to Computer Vision</li>
                            <li>Digital Image Fundamentals</li>
                            <li>Image Representation and Formats</li>
                            <li>Color Spaces and Models</li>
                            <li>Basic Image Operations</li>
                            <li>Image Quality and Enhancement</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Image Processing Techniques") {
                    return (
                      <details
                        key={index}
                        className="group border border-purple-800 rounded overflow-hidden"
                      >
                        <summary className="bg-purple-900 text-white px-4 py-3 cursor-pointer flex justify-between items-center">
                          <span>{item}</span>
                          <span className="text-xl font-bold group-open:hidden">+</span>
                          <span className="text-xl font-bold hidden group-open:block">-</span>
                        </summary>
                        <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Filtering and Convolution</li>
                            <li>Morphological Operations</li>
                            <li>Edge Detection Algorithms</li>
                            <li>Image Segmentation</li>
                            <li>Noise Reduction Techniques</li>
                            <li>Image Transformation</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Feature Detection And Description") {
                    return (
                      <details
                        key={index}
                        className="group border border-purple-800 rounded overflow-hidden"
                      >
                        <summary className="bg-purple-900 text-white px-4 py-3 cursor-pointer flex justify-between items-center">
                          <span>{item}</span>
                          <span className="text-xl font-bold group-open:hidden">+</span>
                          <span className="text-xl font-bold hidden group-open:block">-</span>
                        </summary>
                        <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Corner Detection (Harris, Shi-Tomasi)</li>
                            <li>Scale-Invariant Feature Transform (SIFT)</li>
                            <li>Speeded Up Robust Features (SURF)</li>
                            <li>ORB (Oriented FAST and Rotated BRIEF)</li>
                            <li>Feature Matching Algorithms</li>
                            <li>Feature Descriptors</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Object Detection And Recognition") {
                    return (
                      <details
                        key={index}
                        className="group border border-purple-800 rounded overflow-hidden"
                      >
                        <summary className="bg-purple-900 text-white px-4 py-3 cursor-pointer flex justify-between items-center">
                          <span>{item}</span>
                          <span className="text-xl font-bold group-open:hidden">+</span>
                          <span className="text-xl font-bold hidden group-open:block">-</span>
                        </summary>
                        <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Template Matching</li>
                            <li>Haar Cascades</li>
                            <li>HOG (Histogram of Oriented Gradients)</li>
                            <li>Face Detection and Recognition</li>
                            <li>Object Classification</li>
                            <li>Multi-object Detection</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else {
                    return (
                      <details
                        key={index}
                        className="group border border-purple-800 rounded overflow-hidden"
                      >
                        <summary className="bg-purple-900 text-white px-4 py-3 cursor-pointer flex justify-between items-center">
                          <span>{item}</span>
                          <span className="text-xl font-bold group-open:hidden">+</span>
                          <span className="text-xl font-bold hidden group-open:block">-</span>
                        </summary>
                        <div className="bg-white px-4 py-3 text-gray-700 text-sm">
                          <p>soon content will be updated.</p>
                        </div>
                      </details>
                    );
                  }
                })}
              </div>
            </div>
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
              Why Pursue the GenAI?
              </h1>
              
              <div className="text-gray-700 text-lg leading-relaxed space-y-4">
              <ul className="list-disc list-inside space-y-2">
              <li>Versatility: GenAI can assist in analyzing scientific data, such as experimental results or observations. It can help identify patterns, trends, correlations, and outliers in datasets, providing insights that aid in scientific understanding.</li>
              <li>Hands-On Experience: The course emphasizes real-time project analysis.</li>
              <li>Career Opportunities: By Mastering GenAI there are a number of opportunities like Generative AI Engineers, AI model developers, Researcher, AI input and output Manager and many more.</li>
              <li>Diverse Applications: Generative AI has diverse applications beyond just generating images. It can create music compositions, generate text, design products, and even assist in drug discovery by generating novel molecular structures.</li>
              
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
                    question: " How does real project experience benefit learners?",
                    answer: "Real project experience allows you to apply theoretical knowledge in practical scenarios, preparing you for challenges you will encounter in real-world development environments."
                  },
                  {
                    question: "What are the key concepts covered in GenAI?",
                    answer: "Our GenAI course allows learners to analyze scientific data, such as experimental results or observations. It can help identify patterns, trends, correlations, and outliers in datasets, providing insights that aid in scientific understanding."
                  },
                  {
                    question: "What are the prerequisites for enrolling in GenAI?",
                    answer: "Acquiring proficiency in Python programming is crucial for implementing machine learning models and diving into Generative AI. So, familiarize yourself with Python’s syntax, data structures, libraries (such as NumPy, Pandas, and TensorFlow), and their applications in machine learning."
                  },
                  
                  {
                    question: "How can GenAI certification boost my career prospects?",
                    answer: "Certified professionals often have access to better job prospects and higher salaries, reflecting the high demand for expertise in this cutting-edge area. Ethical Standards: With great power comes great responsibility."
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

export default GenerativeAi;