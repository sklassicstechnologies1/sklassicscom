import React from "react";
import courseimg19 from "../assets/courseimg19.jpg";
import certImage from "../assets/cert.png";
import azureImage from "../assets/azure.png";
import courseimg6 from "../assets/courseimg6.jpg";
import courseimg8 from "../assets/courseimg8.jpg";
import courseimg9 from "../assets/courseimg9.jpg";
import courseimg10 from "../assets/courseimg10.jpg";
import courseimg7 from "../assets/courseimg7.jpg";
const Python = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white px-6 py-10 pt-32"
        style={{ backgroundImage: `url(${courseimg19})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-20 max-w-4xl">
          <h1 className="text-5xl font-extrabold mb-10">Python Programming</h1>

          <ul className="space-y-4 text-lg leading-relaxed">
            <li>Learn AI with Industrial Experts.</li>
            <li>Work on real-world projects.</li>
            <li>Master Python with libraries.</li>
          </ul>

          <button className="mt-10 bg-[#b7b100] text-[#ffffff] text-[20px] font-medium px-4 py-2 border-0 rounded-[3px] leading-[1.7em] bg-cover bg-center bg-no-repeat shadow-md group flex items-center gap-2 transition-all duration-300">
  <span>Buy for ₹15,000</span>
  <span className="text-4xl transform translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
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
              <p className="mb-4">
                Python is a programming language that is widely used in web applications, 
                software development, data science, and machine learning (ML). Developers 
                use Python because it is efficient and easy to learn and can run on many 
                different platforms.
              </p>
              <h2 className="text-3xl font-bold mb-4">Key Highlights</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Hands-On Experience: Gain practical Knowledge Python.</li>
                <li>Industry-Relevant Projects: Work on real-life scenarios to understand the challenges and solutions in AI.</li>
                <li>Expert Guidance: Learn from professionals who have extensive experience.</li>
              </ul>
            </div>

            {/* Who Can Apply */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Who Can Apply?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Individuals with a bachelor's degree keen to learn Python.</li>
                <li>IT Professionals looking for career transition Python Developers.</li>
                <li>Business executives and managers who oversee data-intensive projects.</li>
                <li>Developers and Project Managers.</li>
              </ul>
            </div>

            {/* Curriculum Section */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Curriculum</h2>
              <div className="space-y-3">
                {[
                  "Python Programming and Logic Building",
                  "Object-Oriented Programming",
                  "File Handling and Exception Handling",
                  "Regular Expression, Modules and Packages",
                  "Data Structures",
                  "Higher-Order Functions",
                  "Python Package Manager",
                  "Statistics With Numpy",
                  "Data Analysis with Pandas",
                  "Data Visualization with Matplotlib",
                  "Coding"
                ].map((item, index) => {
                  if (item === "Python Programming and Logic Building") {
                    return (
                      <details
                        key={index}
                        className="group border bg-[#4f1964] rounded overflow-hidden"
                      >
                        <summary className="bg-[#4f1964] text-white px-4 py-3 cursor-pointer flex justify-between items-center">
                          <span>{item}</span>
                          <span className="text-xl font-bold group-open:hidden">+</span>
                          <span className="text-xl font-bold hidden group-open:block">-</span>
                        </summary>
                        <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
                          <div className="font-bold text-black">Introduction To Python</div>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Installation</li>
                            <li>Python Org, Python 3</li>
                            <li>Variables</li>
                            <li>Print Function</li>
                            <li>Input From User</li>
                            <li>Data Types</li>
                            <li>Type Conversion</li>
                            <li>First Program</li>
                            <li>Operators</li>
                            <li>Arithmetic Operators</li>
                            <li>Relational Operators</li>
                            <li>Bitwise Operators</li>
                            <li>Logical Operators</li>
                            <li>Assignment Operators</li>
                            <li>Compound Operators</li>
                            <li>Membership Operators</li>
                            <li>Identity Operators</li>
                            <li>Conditional Statements</li>
                            <li>If Else</li>
                            <li>If</li>
                            <li>Else</li>
                            <li>El If (Else If)</li>
                            <li>If Else Ternary Expression</li>
                            <li>While Loop</li>
                            <li>While Loop Logic Building</li>
                            <li>Series Based Questions</li>
                            <li>Break</li>
                            <li>Continue</li>
                            <li>Nested While Loops</li>
                            <li>Pattern-Based Questions</li>
                            <li>Pass</li>
                            <li>Loop Else</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Object-Oriented Programming") {
                    return (
                      <details
                        key={index}
                        className="group border bg-[#4f1964] rounded overflow-hidden"
                      >
                        <summary className="bg-[#4f1964] text-white px-4 py-3 cursor-pointer flex justify-between items-center">
                          <span>{item}</span>
                          <span className="text-xl font-bold group-open:hidden">+</span>
                          <span className="text-xl font-bold hidden group-open:block">-</span>
                        </summary>
                        <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
                          <div className="font-bold text-black">Advanced OOP Concepts</div>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Classes</li>
                            <li>Objects</li>
                            <li>Method Calls</li>
                            <li>Inheritance And Its Types</li>
                            <li>Overloading</li>
                            <li>Overriding</li>
                            <li>Data Hiding</li>
                            <li>Operator Overloading</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "File Handling and Exception Handling") {
                    return (
                      <details
                        key={index}
                        className="group border bg-[#4f1964] rounded overflow-hidden"
                      >
                        <summary className="bg-[#4f1964] text-white px-4 py-3 cursor-pointer flex justify-between items-center">
                          <span>{item}</span>
                          <span className="text-xl font-bold group-open:hidden">+</span>
                          <span className="text-xl font-bold hidden group-open:block">-</span>
                        </summary>
                        <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
                          <div className="font-bold text-black">File Handling Basics</div>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Opening Files</li>
                            <li>Reading Files</li>
                            <li>Writing Files</li>
                            <li>Editing Files</li>
                            <li>Working With Different Extensions Of File</li>
                            <li>With Statements</li>
                            <li>Exception Handling</li>
                            <li>Common Exceptions</li>
                            <li>Try</li>
                            <li>Except</li>
                            <li>Try Except Else</li>
                            <li>Finally</li>
                            <li>Raising Exceptions</li>
                            <li>Assertion</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Regular Expression, Modules and Packages") {
                    return (
                      <details
                        key={index}
                        className="group border bg-[#4f1964] rounded overflow-hidden"
                      >
                        <summary className="bg-[#4f1964] text-white px-4 py-3 cursor-pointer flex justify-between items-center">
                          <span>{item}</span>
                          <span className="text-xl font-bold group-open:hidden">+</span>
                          <span className="text-xl font-bold hidden group-open:block">-</span>
                        </summary>
                        <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
                          <div className="font-bold text-black">Regular Expressions and Modules</div>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Basic Re Functions</li>
                            <li>Patterns</li>
                            <li>Meta Characters</li>
                            <li>Character Classes</li>
                            <li>Different Types Of Modules</li>
                            <li>Inbuilt Modules</li>
                            <li>Os</li>
                            <li>Sys</li>
                            <li>Statistics</li>
                            <li>Math</li>
                            <li>String</li>
                            <li>Random</li>
                            <li>Create Your Own Module</li>
                            <li>Building Packages</li>
                            <li>Build Your Own Python Module And Deploy It On Pip</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Data Structures") {
                    return (
                      <details
                        key={index}
                        className="group border bg-[#4f1964] rounded overflow-hidden"
                      >
                        <summary className="bg-[#4f1964] text-white px-4 py-3 cursor-pointer flex justify-between items-center">
                          <span>{item}</span>
                          <span className="text-xl font-bold group-open:hidden">+</span>
                          <span className="text-xl font-bold hidden group-open:block">-</span>
                        </summary>
                        <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
                          <div className="font-bold text-black">Data Structures in Python</div>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Stack</li>
                            <li>Queue</li>
                            <li>Linked Lists</li>
                            <li>Sorting</li>
                            <li>Searching</li>
                            <li>Linear Search</li>
                            <li>Binary Search</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Higher-Order Functions") {
                    return (
                      <details
                        key={index}
                        className="group border bg-[#4f1964] rounded overflow-hidden"
                      >
                        <summary className="bg-[#4f1964] text-white px-4 py-3 cursor-pointer flex justify-between items-center">
                          <span>{item}</span>
                          <span className="text-xl font-bold group-open:hidden">+</span>
                          <span className="text-xl font-bold hidden group-open:block">-</span>
                        </summary>
                        <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
                          <div className="font-bold text-black">Functional Programming</div>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Function As A Parameter</li>
                            <li>Function As A Return Value</li>
                            <li>Closures</li>
                            <li>Decorators</li>
                            <li>Map, Filter, Reduce Functions</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Python Package Manager") {
                    return (
                      <details
                        key={index}
                        className="group border bg-[#4f1964] rounded overflow-hidden"
                      >
                        <summary className="bg-[#4f1964] text-white px-4 py-3 cursor-pointer flex justify-between items-center">
                          <span>{item}</span>
                          <span className="text-xl font-bold group-open:hidden">+</span>
                          <span className="text-xl font-bold hidden group-open:block">-</span>
                        </summary>
                        <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
                          <div className="font-bold text-black">Pip Package Manager</div>
                          <ul className="list-disc list-inside space-y-1">
                            <li>What Is Pip?</li>
                            <li>Installation</li>
                            <li>Pip Freeze</li>
                            <li>Creating Your Own Package</li>
                            <li>Upload It On Pip</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Statistics With Numpy") {
                    return (
                      <details
                        key={index}
                        className="group border bg-[#4f1964] rounded overflow-hidden"
                      >
                        <summary className="bg-[#4f1964] text-white px-4 py-3 cursor-pointer flex justify-between items-center">
                          <span>{item}</span>
                          <span className="text-xl font-bold group-open:hidden">+</span>
                          <span className="text-xl font-bold hidden group-open:block">-</span>
                        </summary>
                        <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
                          <div className="font-bold text-black">Numpy for Statistics</div>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Statistics</li>
                            <li>Numpy Basics</li>
                            <li>Working With Matrix</li>
                            <li>Linear Algebra Operations</li>
                            <li>Descriptive Statistics</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Data Analysis with Pandas") {
                    return (
                      <details
                        key={index}
                        className="group border bg-[#4f1964] rounded overflow-hidden"
                      >
                        <summary className="bg-[#4f1964] text-white px-4 py-3 cursor-pointer flex justify-between items-center">
                          <span>{item}</span>
                          <span className="text-xl font-bold group-open:hidden">+</span>
                          <span className="text-xl font-bold hidden group-open:block">-</span>
                        </summary>
                        <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
                          <div className="font-bold text-black">Pandas for Data Analysis</div>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Data Analysis Basics</li>
                            <li>Dataframe Operations</li>
                            <li>Working With 2-Dimensional Data</li>
                            <li>Data Cleaning</li>
                            <li>Data Grouping</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Data Visualization with Matplotlib") {
                    return (
                      <details
                        key={index}
                        className="group border bg-[#4f1964] rounded overflow-hidden"
                      >
                        <summary className="bg-[#4f1964] text-white px-4 py-3 cursor-pointer flex justify-between items-center">
                          <span>{item}</span>
                          <span className="text-xl font-bold group-open:hidden">+</span>
                          <span className="text-xl font-bold hidden group-open:block">-</span>
                        </summary>
                        <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
                          <div className="font-bold text-black">Matplotlib for Visualization</div>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Matplotlib Basics</li>
                            <li>Working With Plots</li>
                            <li>Plot</li>
                            <li>Pie Chart</li>
                            <li>Histogram</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Coding") {
                    return (
                      <details
                        key={index}
                        className="group border bg-[#4f1964] rounded overflow-hidden"
                      >
                        <summary className="bg-[#4f1964] text-white px-4 py-3 cursor-pointer flex justify-between items-center">
                          <span>{item}</span>
                          <span className="text-xl font-bold group-open:hidden">+</span>
                          <span className="text-xl font-bold hidden group-open:block">-</span>
                        </summary>
                        <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
                          <div className="font-bold text-black">Practical Coding Exercises</div>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Hands On Experience With Different Logic Questions</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else {
                    return (
                      <details
                        key={index}
                        className="group border bg-[#4f1964] rounded overflow-hidden"
                      >
                        <summary className="bg-[#4f1964] text-white px-4 py-3 cursor-pointer flex justify-between items-center">
                          <span>{item}</span>
                          <span className="text-xl font-bold group-open:hidden">+</span>
                          <span className="text-xl font-bold hidden group-open:block">-</span>
                        </summary>
                        <div className="bg-white px-4 py-3 text-gray-700 text-sm">
                          <p>Module details coming soon.</p>
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
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 lowercase tracking-wide">
                Why Pursue a Career in Python?
              </h1>
              
              <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>High Demand: Python Developers are in high demand across industries due to the exponential growth of AI Technology and the need for skilled individuals to manage and analyze it effectively.</li>
                  <li>Lucrative Salaries: Careers through python offer competitive salaries and opportunities for advancement, reflecting the critical role these professionals can command High salaries for their skills.</li>
                  <li>Diverse Opportunities: The skills learned from Python can be applicable in many roles like Python developer, AI Engineer/Developer, Machine Learning Engineer, Computer Vision Engineer, Data Scientist etc.,</li>
                  <li>Versatility: Understanding these core technologies allows you to work collaboratively with real world projects.</li>
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
                  question: "What are the prerequisites for enrolling in Python Programming?",
                  answer: "Prerequisites generally include basic programming skills and dealing with projects."
                },
                {
                  question: "How will hands-on experience benefit me in Python?",
                  answer: "Hands-on experience with tools like Python allows you to apply theoretical knowledge to real-world scenarios, gaining practical skills crucial for solving real time challenges in industry."
                },
                {
                  question: "How can Python certification boost my career prospects?",
                  answer: "As one of the best-selling programming languages and the most widely used programming languages, Python will definitely recreate an important part in the destiny of technology. So having recognized Python certification demonstrates your proficiency."
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
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${courseimg10})` }}></div>
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

export default Python;