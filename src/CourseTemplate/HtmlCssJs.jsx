import React from "react";
import courseimg18 from "../assets/courseimg18.jpg";
import certImage from "../assets/cert.png";
import azureImage from "../assets/azure.png";
import courseimg6 from "../assets/courseimg6.jpg";
import courseimg8 from "../assets/courseimg8.jpg";
import courseimg9 from "../assets/courseimg9.jpg";
import courseimg10 from "../assets/courseimg10.jpg";
import courseimg7 from "../assets/courseimg7.jpg";
const HtmlCssJs = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white px-6 py-10 pt-32"
        style={{ backgroundImage: `url(${courseimg18})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-20 max-w-4xl">
          <h1 className="text-5xl font-extrabold mb-10">HTML CSS & JAVASCRIPT</h1>

          <ul className="space-y-4 text-lg leading-relaxed">
            <li>Start your web development journey.</li>
            <li>Create interactive websites.</li>
            <li>Hands-on projects included.</li>
            <li>Technologies: HTML, CSS, JavaScript.</li>
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
                Jumpstart your web development career with our comprehensive course on HTML, CSS, and JavaScript. This program is designed to teach you the building blocks of the web, enabling you to create and style interactive websites from scratch. You'll learn HTML for structure, CSS for styling, and JavaScript for functionality, culminating in the ability to develop fully responsive and dynamic web applications.
              </p>
              <h2 className="text-3xl font-bold mb-4">Key Highlights</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Foundational Skills: Master the core technologies used for front-end development.</li>
                <li>Interactive Projects: Build and deploy interactive websites and applications.</li>
                <li>Real-World Application: Learn best practices and modern development workflows.</li>
              </ul>
            </div>

            {/* Who Can Apply */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Who Can Apply?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Beginners interested in starting a career in web development.</li>
                <li>Designers looking to add coding to their skillset.</li>
                <li>Anyone with an interest in creating and managing their own websites.</li>
                <li>Professionals seeking to understand web technology for better project oversight.</li>
              </ul>
            </div>

            {/* Curriculum Section */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Curriculum</h2>
              <div className="space-y-3">
                {[
                  "INTRODUCTION TO HTML",
                  "INTRODUCTION TO CSS",
                  "BOX Model AND POSITIONING",
                  "RESPONSIVE DESIGN",
                  "INTRODUCTION TO JAVASCRIPT",
                  "DOM",
                  "BOOTSTRAP",
                  "GIT",
                  "PROJECTS"
                ].map((item, index) => {
                  if (item === "INTRODUCTION TO HTML") {
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
                          <ul className="list-disc list-inside space-y-1">
                            <div className="font-bold text-black">HTML Fundamentals</div>
                            <li>Basic Structure of a Web Page</li>
                            <li>HTML Head Tags</li>
                            <li>HTML Body Tag</li>
                            <li>HTML Paragraph Spacing</li>
                            <li>HTML Line Breaks</li>
                            <li>HTML Non-Breaking Space</li>
                            <li>HTML Header Tags</li>
                            <li>HTML Inline Text Formatting</li>
                            <li>HTML Unordered Lists</li>
                            <li>HTML Ordered Lists</li>
                            <li>HTML Image Insertion</li>
                            <li>HTML Embedding Videos</li>
                            <li>HTML Absolute vs. Relative File Referencing</li>
                            <li>HTML Link Creation</li>
                            <li>HTML Anchor Tags</li>
                            <li>HTML Tables</li>
                            <li>HTML Nested Tables</li>
                            <li>HTML Merging Cells</li>
                            <li>HTML Text Wrapping</li>
                            <li>HTML Table Background Image</li>
                            <li>HTML Table Cell Alignment</li>
                            <li>HTML – Introduction to Forms</li>
                            <li>HTML Form Tags and Attributes</li>
                            <li>HTML Forms – Post vs. Get</li>
                            <li>HTML Forms – Input Text Fields</li>
                            <li>HTML Forms – Select Menus</li>
                            <li>HTML Forms – Check Boxes and Radio Buttons</li>
                            <li>HTML Forms – Text Areas and Buttons</li>
                            <li>HTML Iframes</li>
                            <li>HTML Project – Introduction</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "INTRODUCTION TO CSS") {
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
                          <ul className="list-disc list-inside space-y-1">
                            <div className="font-bold text-black">CSS Basics</div>
                            <li>Section Intro</li>
                            <li>Implementing CSS</li>
                            <li>Basic CSS Selectors</li>
                            <li>Fonts In CSS</li>
                            <li>Font & Text Properties</li>
                            <li>Colours (Color Names, HEX, RGB, HSL)</li>
                            <li>CSS Specificity</li>
                            <li>Backgrounds</li>
                            <li>Styling Links</li>
                            <li>Font Awesome Library</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "BOX Model AND POSITIONING") {
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
                          <ul className="list-disc list-inside space-y-1">
                            <div className="font-bold text-black">Layout Techniques</div>
                            <li>Sizing & Overflow</li>
                            <li>Padding</li>
                            <li>Margin</li>
                            <li>Universal Selector & Reset</li>
                            <li>Borders</li>
                            <li>Display Property</li>
                            <li>Position Property</li>
                            <li>Box Shadow</li>
                            <li>What Is Flexbox?</li>
                            <li>Flexbox Basics – Containers & Items</li>
                            <li>Align & Justify Items</li>
                            <li>Flex Properties & Dynamic Sizing</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "RESPONSIVE DESIGN") {
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
                          <ul className="list-disc list-inside space-y-1">
                            <div className="font-bold text-black">Responsive Web Design</div>
                            <li>What Is Responsive Design?</li>
                            <li>Flexible Layouts & Percentages</li>
                            <li>rem & em Units</li>
                            <li>Viewport Units (vh & vw)</li>
                            <li>Media Queries</li>
                            <li>Responsive Pricing Grid</li>
                            <li>Responsive Flexbox Layout</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "INTRODUCTION TO JAVASCRIPT") {
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
                          <ul className="list-disc list-inside space-y-1">
                            <div className="font-bold text-black">JavaScript Basics</div>
                            <li>Introduction to JavaScript</li>
                            <li>JavaScript Alerts – Adding Behaviour to Websites</li>
                            <li>Data Types</li>
                            <li>JavaScript Variables</li>
                            <li>Naming and Naming Conventions for JavaScript Variables</li>
                            <li>String Concatenation</li>
                            <li>String Lengths and Retrieving the Number of Characters</li>
                            <li>Slicing and Extracting Parts of a String</li>
                            <li>Basic Arithmetic and the Modulo Operator in JavaScript</li>
                            <li>Increment and Decrement Expressions</li>
                            <li>Functions Part 1: Creating and Calling Functions</li>
                            <li>Functions Part 2: Parameters and Arguments</li>
                            <li>Functions Part 3: Outputs & Return Values</li>
                            <li>Control Statements: Using If-Else Conditionals & Logic</li>
                            <li>Comparators and Equality</li>
                            <li>Combining Comparators</li>
                            <li>Collections: Working with JavaScript Arrays</li>
                            <li>Adding Elements and Intermediate Array Techniques</li>
                            <li>Control Statements: While Loops</li>
                            <li>Control Statements: For Loops</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "DOM") {
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
                          <ul className="list-disc list-inside space-y-1">
                            <div className="font-bold text-black">Document Object Model</div>
                            <li>Adding JavaScript to Websites</li>
                            <li>Introduction to the Document Object Model (DOM)</li>
                            <li>Solution to the DOM Challenge</li>
                            <li>Selecting HTML Elements with JavaScript</li>
                            <li>Manipulating and Changing Styles of HTML Elements with JavaScript</li>
                            <li>Text Manipulation and the Text Content Property</li>
                            <li>Manipulating HTML Element Attributes</li>
                            <li>Project – Introduction</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "BOOTSTRAP") {
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
                          <ul className="list-disc list-inside space-y-1">
                            <div className="font-bold text-black">Bootstrap Framework</div>
                            <li>What is Bootstrap?</li>
                            <li>Bootstrap Layout</li>
                            <li>Bootstrap Components</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "GIT") {
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
                          <ul className="list-disc list-inside space-y-1">
                            <div className="font-bold text-black">Version Control</div>
                            <li>Git, Git Hub And Version Control</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "PROJECTS") {
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
                          <ul className="list-disc list-inside space-y-1">
                            <div className="font-bold text-black">Practical Applications</div>
                            <li>Mini Project</li>
                            <li>Advanced Project</li>
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
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-wide">
                Why Pursue the HTML, CSS, JavaScript Course?
              </h1>
              
              <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Fundamental Knowledge:</strong> Mastering HTML, CSS, and JavaScript forms the foundation of modern web development, essential for creating engaging and functional websites.</li>
                  <li><strong>Career Opportunities:</strong> Web developers skilled in HTML, CSS, and JavaScript are in demand across industries, offering diverse job opportunities and career growth potential.</li>
                  <li><strong>Hands-On Learning:</strong> Through interactive projects, gain practical experience in building responsive and interactive websites, preparing you for real-world web development challenges.</li>
                  <li><strong>Versatility:</strong> Understanding these core technologies allows you to work collaboratively with designers and backend developers, contributing to full-stack development projects.</li>
                  <li><strong>Empowerment:</strong> Acquire the skills to create and manage your own websites, empowering you to bring your ideas to life and enhance your digital presence effectively.</li>
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
                  question: "What can I expect to learn in the HTML, CSS, JavaScript course?",
                  answer: "You will learn HTML for creating content structure, CSS for styling and layout design, and JavaScript for adding interactivity and functionality to websites."
                },
                {
                  question: "How will building interactive projects benefit me?",
                  answer: "Building interactive projects allows you to apply theoretical knowledge to practical applications, improving your understanding of web development concepts and techniques."
                },
                {
                  question: "Do I need any prior coding experience to enroll in this course?",
                  answer: "No prior coding experience is required. The course is designed for beginners who are eager to learn web development from scratch."
                },
                {
                  question: "What career paths can proficiency in HTML, CSS, and JavaScript lead to?",
                  answer: "Proficiency in HTML, CSS, and JavaScript qualifies you for roles such as front-end developer, web designer, UI/UX developer, and positions involving web content creation and management across various industries."
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

export default HtmlCssJs;