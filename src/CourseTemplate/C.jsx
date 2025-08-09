import React from "react";
import courseimg20 from "../assets/courseimg20.jpg";
import certImage from "../assets/cert.png";
import azureImage from "../assets/azure.png";
import courseimg6 from "../assets/courseimg6.jpg";
import courseimg8 from "../assets/courseimg8.jpg";
import courseimg9 from "../assets/courseimg9.jpg";
import courseimg10 from "../assets/courseimg10.jpg";
import courseimg7 from "../assets/courseimg7.jpg";
const C = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white px-6 py-10 pt-32"
        style={{ backgroundImage: `url(${courseimg20})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-20 max-w-4xl">
          <h1 className="text-5xl font-extrabold mb-10">C Programming</h1>

          <ul className="space-y-4 text-lg leading-relaxed">
            <li>Learn C programming from industry experts</li>
            <li>Master low-level programming concepts</li>
            <li>Work on real-world projects</li>
            <li>Understand memory management and pointers</li>
          </ul>

          <button className="mt-10 bg-[#b7b100] text-[#ffffff] text-[20px] font-medium px-4 py-2 border-0 rounded-[3px] leading-[1.7em] bg-cover bg-center bg-no-repeat shadow-md group flex items-center gap-2 transition-all duration-300">
  <span>Buy for ₹10,000</span>
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
                Start your programming journey with C, one of the most powerful and foundational programming languages.
                This course covers everything from basic syntax to advanced programming concepts, preparing you for a variety of software development and computational problem-solving scenarios.
              </p>
              <h2 className="text-3xl font-bold mb-4">Key Highlights</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Deep Dive into C: Understand the core aspects of C, including memory management, pointers, and data structures.</li>
                <li>Hands-On Coding: Write, debug, and maintain efficient and scalable C programs.</li>
              </ul>
            </div>

            {/* Who Can Apply */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Who Can Apply?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Aspiring software developers</li>
                <li>Students of computer science and engineering</li>
                <li>Professionals in technical fields needing programming basics</li>
              </ul>
            </div>

            {/* Curriculum Section */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Curriculum</h2>
              <div className="space-y-3">
                {[
                  "C Programming and Logic Building",
                  "Operators",
                  "Conditional Statements and Loops",
                  "Functions",
                  "Arrays and Pointers",
                  "Advance Data Structures",
                  "Coding Practice"
                ].map((item, index) => {
                  if (item === "C Programming and Logic Building") {
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
                          <div className="font-bold text-black">Introduction To C Programming</div>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Introduction</li>
                            <li>History Of C</li>
                            <li>Applications Of C</li>
                            <li>Setting Up The Development Environment</li>
                            <li>Basic Syntax</li>
                            <li>Structure Of A C Program</li>
                            <li>Main () Function</li>
                            <li>Comments</li>
                            <li>Basic I/O Operations</li>
                            <li>Printf</li>
                            <li>Scanf</li>
                            <li>Data Types</li>
                            <li>Primitive Data Types (Int, Char, Float, Double)</li>
                            <li>Void Type</li>
                            <li>Type Qualifiers (Signed, Unsigned, Short, Long)</li>
                            <li>Variables</li>
                            <li>Declaration And Initialization</li>
                            <li>Scope And Lifetime</li>
                            <li>Constants (Const And #Define)</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Operators") {
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
                          <div className="font-bold text-black">C Operators</div>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Arithmetic Operators</li>
                            <li>Addition</li>
                            <li>Subtraction</li>
                            <li>Multiplication</li>
                            <li>Division</li>
                            <li>Modulus</li>
                            <li>Relational Operators</li>
                            <li>Equal To</li>
                            <li>Not Equal To</li>
                            <li>Greater Than, Less Than, etc.</li>
                            <li>Logical Operators</li>
                            <li>And</li>
                            <li>Or</li>
                            <li>Not</li>
                            <li>Assignment Operators</li>
                            <li>Simple Assignment</li>
                            <li>Compound Assignment</li>
                            <li>Increment And Decrement Operators</li>
                            <li>Pre Increment</li>
                            <li>Post Increment</li>
                            <li>Pre Decrement</li>
                            <li>Post Decrement</li>
                            <li>Conditional Operator</li>
                            <li>Ternary Operator ? :</li>
                            <li>Bitwise Operators</li>
                            <li>And</li>
                            <li>Or</li>
                            <li>Xor</li>
                            <li>Not</li>
                            <li>Shift Operators</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Conditional Statements and Loops") {
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
                          <div className="font-bold text-black">Control Flow in C</div>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Conditional Statements</li>
                            <li>If</li>
                            <li>If-Else</li>
                            <li>Else If</li>
                            <li>Nested If Else Statement</li>
                            <li>Loops</li>
                            <li>For Loop</li>
                            <li>While Loop</li>
                            <li>Do-While Loop</li>
                            <li>Jump Statements</li>
                            <li>Break</li>
                            <li>Continue</li>
                            <li>Go To</li>
                            <li>Switch Statements</li>
                            <li>Applications Of Switch Statements</li>
                            <li>Break And Continue</li>
                            <li>Applications Of Break And Continue</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Functions") {
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
                          <div className="font-bold text-black">Functions in C</div>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Function Basics</li>
                            <li>Definition And Declaration</li>
                            <li>Calling Functions</li>
                            <li>Return Values</li>
                            <li>Parameter Passing</li>
                            <li>By Value</li>
                            <li>By Reference</li>
                            <li>Scope And Lifetime</li>
                            <li>Local And Global Variables</li>
                            <li>Static Variables</li>
                            <li>Recursion</li>
                            <li>Basic Recursion</li>
                            <li>Recursive Vs Iterative Approach</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Arrays and Pointers") {
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
                          <div className="font-bold text-black">Arrays and Pointers in C</div>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Arrays</li>
                            <li>Declaration And Initialization</li>
                            <li>Accessing Elements</li>
                            <li>Multidimensional Arrays</li>
                            <li>Strings</li>
                            <li>Declaration And Initialization</li>
                            <li>Standard Library Functions (Strcpy, Strcat, Strlen, Strcmp)</li>
                            <li>Reading And Writing Strings</li>
                            <li>Pointer Basics</li>
                            <li>Declaration And Initialization</li>
                            <li>Dereferencing Pointers</li>
                            <li>Pointer Arithmetic</li>
                            <li>Pointers And Arrays</li>
                            <li>Array Name As A Pointer</li>
                            <li>Pointer To Array</li>
                            <li>Pointers And Functions</li>
                            <li>Passing Pointers To Functions</li>
                            <li>Function Pointers</li>
                            <li>Memory Allocation Functions</li>
                            <li>Malloc</li>
                            <li>Calloc</li>
                            <li>Realloc</li>
                            <li>Free</li>
                            <li>Handling Memory Leaks</li>
                            <li>Importance Of Freeing Memory</li>
                            <li>Tools For Detecting Memory Leaks</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Advance Data Structures") {
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
                          <div className="font-bold text-black">Advanced C Concepts</div>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Structures</li>
                            <li>Defining And Using Structures</li>
                            <li>Nested Structures</li>
                            <li>Arrays Of Structures</li>
                            <li>Unions</li>
                            <li>Defining And Using Unions</li>
                            <li>Difference Between Structures And Unions</li>
                            <li>File Operations</li>
                            <li>Opening And Closing Files (Fopen, Fclose)</li>
                            <li>Reading And Writing Files (Fread, Fwrite, Fprintf, Fscanf)</li>
                            <li>Error Handling In File Operations</li>
                            <li>Preprocessor Directives</li>
                            <li>Macros (#Define)</li>
                            <li>File Inclusion (#Include)</li>
                            <li>Conditional Compilation (#Ifdef, #Ifndef, #Endif)</li>
                            <li>Type Casting</li>
                            <li>Implicit And Explicit Casting</li>
                            <li>Command-Line Arguments</li>
                            <li>Argc And Argv</li>
                            <li>Variable Arguments</li>
                            <li>Using Stdarg.H For Functions With Variable Arguments</li>
                            <li>Linked Lists</li>
                            <li>Singly Linked Lists</li>
                            <li>Doubly Linked Lists</li>
                            <li>Circular Linked Lists</li>
                            <li>Other Data Structures</li>
                            <li>Stacks</li>
                            <li>Queues</li>
                            <li>Trees</li>
                            <li>Graphs</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Coding Practice") {
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
                            <li>Hands On Experience With Different Logical Questions</li>
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
                Why to Learn C Programming?
              </h1>
              
              <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>Foundation for Learning Other Languages: Many modern languages are based on C.</li>
                  <li>Critical for System Level Programming: Essential for writing efficient, low-level code.</li>
                  <li>Wide Range of Applications: From developing operating systems to IoT devices.</li>
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
                  question: "How does C programming help in career development?",
                  answer: "Strong C skills are highly respected in tech, opening doors to advanced programming roles."
                },
                {
                  question: "What are the challenges of learning C?",
                  answer: "Managing memory manually and understanding pointers can be challenging but are rewarding skills to acquire."
                },
                {
                  question: "Is C still relevant today?",
                  answer: "Absolutely! C remains fundamental for system programming, embedded systems, and performance-critical applications."
                },
                {
                  question: "What kind of projects can I build with C?",
                  answer: "You can build operating systems, compilers, embedded systems, game engines, and high-performance applications."
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

export default C;