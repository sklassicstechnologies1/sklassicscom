import React from "react";
import courseimg16 from "../assets/courseimg16.jpg";
import certImage from "../assets/cert.png";
import azureImage from "../assets/azure.png";
import courseimg6 from "../assets/courseimg6.jpg";
import courseimg8 from "../assets/courseimg8.jpg";
import courseimg9 from "../assets/courseimg9.jpg";
import courseimg10 from "../assets/courseimg10.jpg";
import courseimg7 from "../assets/courseimg7.jpg";
const JavaFullStack = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white px-6 py-10 pt-32"
        style={{ backgroundImage: `url(${courseimg16})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-20 max-w-4xl">
          <h1 className="text-5xl font-extrabold mb-10">Java Full Stack</h1>

          <ul className="space-y-4 text-lg leading-relaxed">
            <li>Learn Java full stack from industry experts.</li>
            <li>Earn a recognized certification to boost your career.</li>
            <li>Work on real world projects</li>
            <li>Master skills java, JavaScript, Html, CSS and more.</li>
          </ul>

          <button className="mt-10 bg-[#b7b100] text-[#ffffff] text-[20px] font-medium px-4 py-2 border-0 rounded-[3px] leading-[1.7em] bg-cover bg-center bg-no-repeat shadow-md group flex items-center gap-2 transition-all duration-300">
  <span>Buy for ₹30,000</span>
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
                Embark on a journey to become a Java Full Stack Developer with our in-depth course. 
                This program covers both front-end and back-end technologies, focusing on Java, Spring Boot 
                for the backend, and React or Angular for the frontend. You'll also learn about databases, 
                API development, and deployment, equipping you with the skills to build robust, scalable applications.
              </p>
              <h2 className="text-3xl font-bold mb-4">Key Highlights</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Comprehensive Curriculum: From Java fundamentals to advanced web development.</li> 
                <li>Hands-On Projects: Apply your skills by building real-world applications.</li> 
                <li>Career Readiness: Prepare for a career in software development with targeted training and support.</li> 
              </ul>
            </div>

            {/* Who Can Apply */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Who Can Apply?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Individuals new to programming and web development.</li>
                <li>Experienced developers looking to specialize in Java full stack.</li>
                <li>Students and professionals seeking a career transition into tech.</li>
              </ul>
            </div>

            {/* Curriculum Section */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Curriculum</h2>
              <div className="space-y-3">
                {[
                  "Core Java",
                  "Advanced Java",
                  "HTML & CSS",
                  "CSS Fundamentals",
                  "JavaScript",
                  "SQL",
                ].map((item, index) => {
                  if (item === "Core Java") {
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
                            <div className="font-bold text-black">Introduction To Java</div>
                            <li>History And Features Of Java</li>
                            <li>Installation Of Java Development Kit (Jdk)</li>
                            <li>Setting Up The Development Environment</li>
                            
                            <div className="font-bold text-black">Basic Syntax And Data Types</div>
                            <li>Variables And Data Types (Primitive And Reference Types)</li>
                            <li>Operators And Expressions</li>
                            <li>Control Flow Statements (If, Else, Switch, Loops)</li>
                            
                            <div className="font-bold text-black">Object-Oriented Programming (Oop)</div>
                            <li>Classes And Objects</li>
                            <li>Constructors And Methods</li>
                            <li>Inheritance, Polymorphism, And Encapsulation</li>
                            <li>Abstract Classes And Interfaces</li>
                            
                            <div className="font-bold text-black">Exception Handling</div>
                            <li>Understanding Exceptions Try-Catch Blocks</li>
                            <li>Handling Exceptions Using Throws And Throw Keywords</li>
                            <li>Custom Exceptions</li>
                            
                            <div className="font-bold text-black">Collections Framework</div>
                            <li>Overview Of Collections Framework</li>
                            <li>Lists, Sets, Maps</li>
                            <li>Iterators And Foreach Loop</li>
                            <li>Working With Array List, Linkedlist, Hashset, Hashmap, Etc.</li>
                            
                            <div className="font-bold text-black">File Handling</div>
                            <li>Reading From And Writing To Files</li>
                            <li>File Input/Output Streams</li>
                            <li>Exception Handling In File Operations</li>
                            
                            <div className="font-bold text-black">Multithreading</div>
                            <li>Introduction To Threads</li>
                            <li>Creating And Running Threads</li>
                            <li>Synchronization And Thread Safety</li>
                            <li>Thread Communication And Coordination</li>
                            
                            <div className="font-bold text-black">Input/Output (I/O)</div>
                            <li>Streams And Readers/Writers</li>
                            <li>File I/O Using Fileinputstream, Fileoutputstream, Etc.</li>
                            <li>Serialization And Deserialization</li>
                            
                            <div className="font-bold text-black">Generics</div>
                            <li>Introduction To Generics</li>
                            <li>Generic Classes And Methods</li>
                            <li>Wildcards And Bounded Types</li>
                            
                            <div className="font-bold text-black">Lambda Expressions</div>
                            <li>Introduction To Functional Programming Concepts</li>
                            <li>Defining And Using Lambda Expressions</li>
                            <li>Built-In Functional Interfaces In Java 8 (E.G., Predicate, Function, Consumer)</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Advanced Java") {
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
                            <div className="font-bold text-black">Advanced OOP Concepts</div>
                            <li>Design Patterns (E.G., Singleton, Factory, Observer, Strategy)</li>
                            <li>Composition Vs. Inheritance</li>
                            <li>Polymorphism In Depth (Dynamic Method Dispatch, Overriding Vs. Overloading)</li>
                            <li>Object Cloning And Serialization</li>
                            
                            <div className="font-bold text-black">Java Collections Framework</div>
                            <li>Concurrent Collections (E.G., Concurrenthashmap, Copyonwritearraylist)</li>
                            <li>Custom Collections (Implementing Iterable, Comparator, Etc.)</li>
                            <li>Collections Utility Methods (E.G., Sorting, Searching, Filtering)</li>
                            
                            <div className="font-bold text-black">Concurrency And Multithreading</div>
                            <li>Advanced Threading Concepts (E.G., Thread Pools, Executors)</li>
                            <li>Concurrent Utilities (E.G., Semaphore, Countdown Latch, Cyclic Barrier)</li>
                            <li>Thread Synchronization Mechanisms (E.G., Volatile Keyword, Synchronized Blocks/Methods)</li>
                            
                            <div className="font-bold text-black">Networking And I/O</div>
                            <li>Socket Programming (Client-Server Communication)</li>
                            <li>Non-Blocking I/O (Nio) And Java.Nio Package</li>
                            <li>Asynchronous I/O (Java Nio.2)</li>
                            
                            <div className="font-bold text-black">Database Connectivity</div>
                            <li>Jdbc (Java Database Connectivity) Api</li>
                            <li>Connection Pooling And Datasource</li>
                            <li>Transactions And Isolation Levels</li>
                            
                            <div className="font-bold text-black">Annotations And Reflection</div>
                            <li>Annotation Processing And Custom Annotations</li>
                            <li>Reflection Api (Introspection, Obtaining Class Information At Runtime)</li>
                            <li>Annotation-Based Frameworks (E.G., Spring Framework)</li>
                            
                            <div className="font-bold text-black">Java EE (Enterprise Edition) Technologies</div>
                            <li>Servlets And Jsp (Java Server Pages)</li>
                            <li>Java Server Faces (Jsf)</li>
                            <li>Enterprise Javabeans (Ejb)</li>
                            <li>Java Persistence Api (Jpa) And Orm Frameworks (E.G., Hibernate)</li>
                            
                            <div className="font-bold text-black">Web Services</div>
                            <li>Introduction To Soap And Restful Web Services</li>
                            <li>Implementing Web Services Using Jax-Ws And Jax-Rs</li>
                            <li>Consuming Web Services In Java Applications</li>
                            
                            <div className="font-bold text-black">Spring Framework</div>
                            <li>Dependency Injection (Di) And Inversion Of Control (Ioc)</li>
                            <li>Spring Core Modules (Spring Core, Spring Mvc, Spring Boot)</li>
                            <li>Spring Data, Spring Security, And Other Spring Modules</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "HTML & CSS") {
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
                            <div className="font-bold text-black">Introduction To Web Development</div>
                            <li>Overview Of Web Technologies</li>
                            <li>Understanding Client-Side Vs. Server-Side Development</li>
                            <li>Introduction To Html, Css, And Their Roles In Web Development</li>
                            
                            <div className="font-bold text-black">Html Fundamentals</div>
                            <li>Understanding The Structure Of Html Documents (Html5 Doctype)</li>
                            <li>Html Elements, Tags, And Attributes</li>
                            <li>Text Formatting (Headings, Paragraphs, Lists, Links)</li>
                            <li>Semantic Html (Div Vs. Semantic Elements Like Header, Nav, Section, Article, Footer)</li>
                            <li>Html Forms And Form Elements</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "CSS Fundamentals") {
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
                            <div className="font-bold text-black">Introduction To CSS</div>
                            <li>CSS Syntax (Selectors, Properties, Values)</li>
                            <li>Internal Vs. External Vs. Inline CSS</li>
                            <li>Cascading And Inheritance</li>
                            <li>Box Model (Margin, Border, Padding, Width, Height)</li>
                            <li>CSS Units (Pixels, Percentages, Ems, Rems)</li>
                            
                            <div className="font-bold text-black">Styling With CSS</div>
                            <li>Text Styling (Font Properties, Text Alignment, Text Decoration)</li>
                            <li>Colors And Backgrounds</li>
                            <li>Layout Techniques (Floats, Positioning, Flexbox, Grid)</li>
                            <li>Responsive Web Design Principles</li>
                            <li>Media Queries And Viewport Meta Tag</li>
                            
                            <div className="font-bold text-black">CSS Selectors And Pseudo-Classes</div>
                            <li>Understanding CSS Selectors (Element Selectors, Class Selectors, Id Selectors, Descendant Selectors)</li>
                            <li>Pseudo-Classes (Hover, Active, Focus, Nth-Child, Etc.)</li>
                            <li>Specificity And The Importance Of Selector Precedence</li>
                            
                            <div className="font-bold text-black">CSS Layout Techniques</div>
                            <li>Float-Based Layout</li>
                            <li>CSS Positioning (Static, Relative, Absolute, Fixed)</li>
                            <li>Flexbox Layout Model</li>
                            <li>CSS Grid Layout</li>
                            
                            <div className="font-bold text-black">Advanced CSS Features</div>
                            <li>CSS Transitions And Animations</li>
                            <li>CSS Preprocessors (E.G., Sass, Less) And Their Advantages</li>
                            <li>CSS Frameworks (E.G., Bootstrap) And Their Usage</li>
                            
                            <div className="font-bold text-black">Accessibility And Best Practices</div>
                            <li>Writing Accessible Html Markup (Semantic Elements, Alt Attributes, Aria Roles)</li>
                            <li>Best Practices For Writing Clean And Maintainable Html And CSS Code</li>
                            <li>Performance Optimization Techniques</li>
                            
                            <div className="font-bold text-black">Project Work</div>
                            <li>Implementing Real-World Projects To Apply Learned Concepts</li>
                            <li>Developing Static Web Pages And Simple Websites Using Html And CSS</li>
                            <li>Incorporating Responsive Design Principles Into Projects</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "JavaScript") {
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
                            <div className="font-bold text-black">Introduction To JavaScript</div>
                            <li>History And Evolution Of JavaScript</li>
                            <li>Role Of JavaScript In Web Development</li>
                            <li>Setting Up A JavaScript Development Environment</li>
                            
                            <div className="font-bold text-black">Basic JavaScript Concepts</div>
                            <li>Variables, Data Types, And Operators</li>
                            <li>Control Flow Statements (If, Else, Switch)</li>
                            <li>Loops (For, While, Do-While)</li>
                            <li>Functions (Declaration, Expressions, Parameters, Return Values)</li>
                            
                            <div className="font-bold text-black">Working With Arrays And Objects</div>
                            <li>Creating And Manipulating Arrays</li>
                            <li>Iterating Through Arrays Using Loops And Array Methods</li>
                            <li>Understanding Object-Oriented Programming Concepts In JavaScript</li>
                            <li>Creating And Working With Objects And Their Properties/Methods</li>
                            
                            <div className="font-bold text-black">DOM Manipulation</div>
                            <li>Introduction To The Document Object Model (DOM)</li>
                            <li>Accessing And Modifying HTML Elements Using JavaScript</li>
                            <li>Event Handling (Click, Hover, Submit, Etc.)</li>
                            <li>DOM Traversal And Manipulation Techniques</li>
                            
                            <div className="font-bold text-black">Asynchronous JavaScript</div>
                            <li>Understanding Asynchronous Programming</li>
                            <li>Callback Functions</li>
                            <li>Promises And Asynchronous Functions (Async/Await)</li>
                            <li>Handling Asynchronous Operations (Ajax Requests, Set Timeout, Set Interval)</li>
                            
                            <div className="font-bold text-black">Error Handling</div>
                            <li>Understanding JavaScript Errors And Exceptions</li>
                            <li>Using Try-Catch Blocks For Error Handling</li>
                            <li>Throwing And Catching Custom Errors</li>
                            
                            <div className="font-bold text-black">Functional Programming Concepts</div>
                            <li>Introduction To Functional Programming In JavaScript</li>
                            <li>Higher-Order Functions</li>
                            <li>Array Methods (Map, Filter, Reduce)</li>
                            <li>Arrow Functions And Their Advantages</li>
                            
                            <div className="font-bold text-black">ES6+ Features</div>
                            <li>Overview Of ECMAScript 6 (ES6) Features And Syntax Enhancements</li>
                            <li>Let And Const Variables</li>
                            <li>Arrow Functions, Template Literals, And Default Parameters</li>
                            <li>Destructuring, Rest Parameters, And Spread Syntax</li>
                            
                            <div className="font-bold text-black">Browser APIs And Events</div>
                            <li>Introduction To Browser APIs (Local Storage, SessionStorage, Fetch API, Etc.)</li>
                            <li>Working With Browser Events</li>
                            <li>Creating Interactive Web Pages Using JavaScript And Browser APIs</li>
                            
                            <div className="font-bold text-black">Introduction To Modern JavaScript Frameworks (Optional)</div>
                            <li>Overview Of Popular JavaScript Frameworks/Libraries (E.G., React.Js, Angular, Vue.Js)</li>
                            <li>Understanding The Role Of Frameworks In Modern Web Development</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "SQL") {
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
                            <div className="font-bold text-black">Introduction</div>
                            <li>What Is Data</li>
                            <li>Types Of Data</li>
                            <li>What Is Database</li>
                            <li>Types Of Databases</li>
                            <li>What Is A Table</li>
                            <li>Operations On Table</li>
                            
                            <div className="font-bold text-black">Creation Of Table</div>
                            <li>Select Statement</li>
                            
                            <div className="font-bold text-black">Data Modifications</div>
                            <li>Insert Data Into Tables</li>
                            <li>Insert Statements & Insert Into Select Statements</li>
                            <li>Updating Existing Data</li>
                            <li>Deleting Data From Table</li>
                            <li>Drop</li>
                            <li>Truncating Tables</li>
                            <li>Alter Statements</li>
                            
                            <div className="font-bold text-black">Constraints</div>
                            <li>Primary Key</li>
                            <li>Foreign Key</li>
                            <li>Unique Key</li>
                            <li>Not Null</li>
                            <li>Check</li>
                            <li>Default</li>
                            
                            <div className="font-bold text-black">Indexes</div>
                            <li>Understanding Indexes And Their Importance</li>
                            <li>Creating And Dropping Indexes</li>
                            <li>Index (B Tree, Hash)</li>
                            
                            <div className="font-bold text-black">Views</div>
                            <li>Creating Views</li>
                            <li>Modifying Views</li>
                            <li>Dropping Views</li>
                            <li>Updating Data Through View</li>
                            
                            <div className="font-bold text-black">Data Retrieval</div>
                            <li>Retrieving Data From A Single Table</li>
                            <li>Where Clause</li>
                            <li>Group By Clause</li>
                            <li>Having Clause</li>
                            <li>Order By Clause</li>
                            <li>Limit Clause</li>
                            <li>Case Statement</li>
                            <li>Case Statement For Validating The Data Based On Condition</li>
                            
                            <div className="font-bold text-black">Joins</div>
                            <li>Inner Join</li>
                            <li>Left Join</li>
                            <li>Right Join</li>
                            <li>Full Join</li>
                            <li>Cross Join</li>
                            <li>Self-Join</li>
                            
                            <div className="font-bold text-black">Functions</div>
                            <li>Numerical Functions</li>
                            <li>Date Functions</li>
                            <li>String Functions</li>
                            <li>Aggregate Functions</li>
                            
                            <div className="font-bold text-black">Set Operator</div>
                            <li>Union</li>
                            <li>Intersect</li>
                            <li>Minus</li>
                            <li>Except</li>
                            <li>Union All</li>
                            
                            <div className="font-bold text-black">Subqueries</div>
                            <li>Single Row</li>
                            <li>Multiple Row</li>
                            <li>Scalar Row</li>
                            <li>Correlated</li>
                            <li>Exist</li>
                            <li>Not Exist</li>
                            <li>From And Select</li>
                            <li>Where And From</li>
                            
                            <div className="font-bold text-black">Stored Procedure</div>
                            <li>Create</li>
                            <li>Dml</li>
                            <li>Tcl (Commit,Roll Back, Savepoints,Acid)</li>
                            <li>Cursor</li>
                            <li>Execution</li>
                            <li>Passing Parameters To Stored Procedures And Functions</li>
                            <li>Invoking Stored Procedures And Functions</li>
                            
                            <div className="font-bold text-black">Advance SQL Topics</div>
                            <li>Windows Functions</li>
                            <li>Common Table Expression</li>
                            <li>Recursion</li>
                            <li>Pivot And Unpivot Operation</li>
                            <li>Dynamic SQL</li>
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
              Courses focused on building strong foundational skills for career growth
              </h1>
              
              <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>From Bland to Captivating: Transform complex data into clear, impactful stories that resonate with any audience.</li>
                  <li>Effortless Communication: Communicate data insights effectively with interactive dashboards and stunning visualizations.</li>
                  <li>Data Wizardry at Your Fingertips: Master essential functions, data manipulation, and design best practices for impactful results.</li>
                  <li>Unlock Your Tableau Career: Launch your journey as a data visualization specialist and empower businesses with data-driven decisions.</li>
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
                  question: "What frameworks and technologies are covered in the Java Full Stack course?",
                  answer: "The course covers Java programming, along with front-end technologies like HTML, CSS, JavaScript, and back-end frameworks such as Spring and Hibernate."
                },
                {
                  question: "How will real project experience benefit me in this course?",
                  answer: "Real project experience allows you to apply theoretical knowledge in practical scenarios, helping you understand the complexities of full-stack development and preparing you for real-world challenges."
                },
                {
                  question: "Are there any prerequisites for enrolling in the Java Full Stack course?",
                  answer: "Basic understanding of programming concepts and familiarity with Java would be beneficial. Some exposure to web technologies like HTML, CSS, and JavaScript is also recommended."
                },
                {
                  question: "What career opportunities can a Java Full Stack certification open up?",
                  answer: "A Java Full Stack certification demonstrates your proficiency in building complete web applications using Java and related technologies, making you eligible for roles such as full-stack developer, Java developer, or web application developer in various industries."
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

export default JavaFullStack;