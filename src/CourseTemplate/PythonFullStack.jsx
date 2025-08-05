import React from "react";
import courseimg17 from "../assets/courseimg17.jpg";
import certImage from "../assets/cert.png";
import azureImage from "../assets/azure.png";
import courseimg6 from "../assets/courseimg6.jpg";
import courseimg8 from "../assets/courseimg8.jpg";
import courseimg9 from "../assets/courseimg9.jpg";
import courseimg10 from "../assets/courseimg10.jpg";

const PythonFullStack = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white px-6 py-10 pt-32"
        style={{ backgroundImage: `url(${courseimg17})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-20 max-w-4xl">
          <h1 className="text-5xl font-extrabold mb-10">Python Full Stack</h1>

          <ul className="space-y-4 text-lg leading-relaxed">
            <li>Master full-stack development.</li>
            <li>Build real-world projects.</li>
            <li>Learn with industry standards.</li>
            <li>Technologies include Python, Django, and Flask.</li>
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
                Our Python Full Stack course is designed to turn beginners into skilled full-stack developers proficient in both front-end and back-end technologies. You will learn to build dynamic websites and applications using Python along with HTML, CSS, JavaScript, and frameworks like Django and Flask. This course also covers database management, API integrations, and deployment techniques to provide a comprehensive skill set.
              </p>
              <h2 className="text-3xl font-bold mb-4">Key Highlights</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>End-to-End Development: Master both client-side and server-side programming.</li>
                <li>Real Projects: Build and deploy full-stack applications from scratch.</li>
                <li>Industry Standards: Learn best practices in coding, debugging, and deployment.</li>
              </ul>
            </div>

            {/* Who Can Apply */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Who Can Apply?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Aspiring developers interested in full-stack technologies.</li>
                <li>Professionals in IT and related fields seeking to enhance their programming skills.</li>
                <li>Students and hobbyists looking to build professional-grade web applications.</li>
              </ul>
            </div>

            {/* Curriculum Section */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Curriculum</h2>
              <div className="space-y-3">
                {[
                  "Core Python",
                  "Numpy",
                  "Pandas",
                  "Advance Python Django",
                  "HTML & CSS",
                  "CSS Fundamentals",
                  "JavaScript",
                  "SQL"
                ].map((item, index) => {
                  if (item === "Core Python") {
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
                            <div className="font-bold text-black">Introduction To Python</div>
                            <li>Overview Of Python Programming Language</li>
                            <li>History And Features Of Python</li>
                            <li>Setting Up Python Environment (Interpreter, IDEs)</li>
                            
                            <div className="font-bold text-black">Types</div>
                            <li>Python Syntax Rules And Conventions</li>
                            <li>Variables, Data Types (Integers, Floats, Strings, Booleans)</li>
                            <li>Type Conversion And Casting</li>
                            
                            <div className="font-bold text-black">Operators And Expressions</div>
                            <li>Arithmetic, Comparison, Logical, And Assignment Operators</li>
                            <li>Operator Precedence And Associativity</li>
                            <li>Using Parentheses To Control Evaluation Order</li>
                            
                            <div className="font-bold text-black">Control Flow Statements</div>
                            <li>Conditional Statements (If, Elif, Else)</li>
                            <li>Loops (For, While)</li>
                            <li>Break And Continue Statements</li>
                            
                            <div className="font-bold text-black">Data Structures</div>
                            <li>Lists, Tuples, Dictionaries, Sets</li>
                            <li>Accessing And Manipulating Elements In Data Structures</li>
                            <li>List Comprehensions And Generator Expressions</li>
                            
                            <div className="font-bold text-black">Functions</div>
                            <li>Defining And Calling Functions</li>
                            <li>Parameters And Arguments</li>
                            <li>Return Values And Multiple Return Statements</li>
                            <li>Scope Of Variables (Local Vs. Global)</li>
                            
                            <div className="font-bold text-black">Modules And Packages</div>
                            <li>Creating And Importing Modules</li>
                            <li>Using Built-In Modules (E.G., Math, Random, Datetime)</li>
                            <li>Introduction To Package Management (E.G., Pip)</li>
                            
                            <div className="font-bold text-black">File Handling</div>
                            <li>Reading From And Writing To Files</li>
                            <li>Working With File Objects (Open, Close, Read, Write)</li>
                            <li>File Modes (Read, Write, Append)</li>
                            
                            <div className="font-bold text-black">Exception Handling</div>
                            <li>Understanding Exceptions And Error Handling</li>
                            <li>Try-Except Blocks</li>
                            <li>Raising And Handling Custom Exceptions</li>
                            
                            <div className="font-bold text-black">Object-Oriented Programming (OOP)</div>
                            <li>Introduction To OOP Concepts (Classes, Objects, Inheritance, Polymorphism)</li>
                            <li>Creating Classes And Objects</li>
                            <li>Instance Variables And Methods</li>
                            <li>Encapsulation And Abstraction</li>
                            
                            <div className="font-bold text-black">Regular Expressions</div>
                            <li>Introduction To Regular Expressions (Regex)</li>
                            <li>Using Regex For Pattern Matching And Text Manipulation</li>
                            <li>Common Regex Patterns And Metacharacters</li>
                            
                            <div className="font-bold text-black">Working With Dates And Times</div>
                            <li>Using The Datetime Module For Date And Time Manipulation</li>
                            <li>Formatting And Parsing Dates And Times</li>
                            <li>Calculating Time Differences And Intervals</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Numpy") {
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
                            <div className="font-bold text-black">Introduction To Numpy</div>
                            <li>Overview Of Numpy And Its Features</li>
                            <li>Installation And Setup Of Numpy</li>
                            
                            <div className="font-bold text-black">Numpy Arrays</div>
                            <li>Introduction To Numpy Arrays (Ndarray)</li>
                            <li>Creating Arrays Using Various Methods (E.G., Np.Array(), Np.Zeros(), Np.Ones(), Np.Arange(), Np.Linspace())</li>
                            <li>Array Attributes (Shape, Size, Dtype)</li>
                            <li>Indexing And Slicing Arrays</li>
                            
                            <div className="font-bold text-black">Array Operations</div>
                            <li>Element-Wise Operations (Arithmetic, Comparison, Logical)</li>
                            <li>Broadcasting In Numpy</li>
                            <li>Universal Functions (Ufuncs)</li>
                            
                            <div className="font-bold text-black">Array Manipulation</div>
                            <li>Reshaping Arrays (Np.Reshape(), Np.Resize(), Np.Ravel())</li>
                            <li>Concatenating And Splitting Arrays (Np.Concatenate(), Np.Vstack(), Np.Hstack(), Np.Split())</li>
                            <li>Transposing Arrays (Np.Transpose(), Array.T)</li>
                            
                            <div className="font-bold text-black">Array Iteration</div>
                            <li>Iterating Over Arrays Using Loops</li>
                            <li>Vectorized Operations And Functions</li>
                            
                            <div className="font-bold text-black">Aggregation And Reduction</div>
                            <li>Calculating Statistical Measures (Mean, Median, Standard Deviation, Variance, Etc.)</li>
                            <li>Aggregation Functions (Np.Sum(), Np.Min(), Np.Max(), Np.Prod())</li>
                            <li>Reduction Operations Along Axes</li>
                            
                            <div className="font-bold text-black">Indexing And Slicing</div>
                            <li>Accessing And Modifying Array Elements Using Indexing And Slicing</li>
                            <li>Fancy Indexing And Boolean Indexing</li>
                            
                            <div className="font-bold text-black">Array Broadcasting</div>
                            <li>Understanding Broadcasting Rules</li>
                            <li>Broadcasting In Practice</li>
                            
                            <div className="font-bold text-black">Linear Algebra With Numpy</div>
                            <li>Matrix Operations (Addition, Subtraction, Multiplication)</li>
                            <li>Matrix Decomposition (Lu Decomposition, QR Decomposition)</li>
                            <li>Solving Linear Equations (Np.Linalg.Solve())</li>
                            
                            <div className="font-bold text-black">Random Number Generation</div>
                            <li>Generating Random Numbers And Arrays (Np.Random.Rand(), Np.Random.Randn(), Np.Random.Randint())</li>
                            <li>Random Sampling (Np.Random.Choice(), Np.Random.Shuffle())</li>
                            
                            <div className="font-bold text-black">File Input/Output</div>
                            <li>Saving And Loading Arrays From Files (Np.Save(), Np.Load())</li>
                            <li>Working With Text Files And CSV Files</li>
                            
                            <div className="font-bold text-black">Masked Arrays</div>
                            <li>Handling Missing Or Invalid Data Using Masked Arrays</li>
                            <li>Masking And Unmasking Arrays</li>
                            
                            <div className="font-bold text-black">Performance Optimization</div>
                            <li>Improving Performance With Numpy (Vectorization, Broadcasting)</li>
                            <li>Profiling And Benchmarking Numpy Code</li>
                            
                            <div className="font-bold text-black">Advanced Topics</div>
                            <li>Advanced Array Manipulation (Np.Where(), Np.Unique(), Np.Apply_along_axis())</li>
                            <li>Working With Structured Arrays And Record Arrays</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Pandas") {
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
                            <div className="font-bold text-black">Introduction To Pandas</div>
                            <li>Overview Of Pandas And Its Features</li>
                            <li>Installation And Setup Of Pandas</li>
                            
                            <div className="font-bold text-black">Series And Data Frames</div>
                            <li>Introduction To Series And Dataframe Data Structures</li>
                            <li>Creating Series And Dataframe Objects</li>
                            <li>Understanding The Structure Of Series And Dataframe Objects</li>
                            
                            <div className="font-bold text-black">Data Input And Output</div>
                            <li>Reading And Writing Data From/To Various Formats (CSV, Excel, SQL, JSON, HTML)</li>
                            <li>Handling Missing Data During Input/Output</li>
                            
                            <div className="font-bold text-black">Data Exploration And Manipulation</div>
                            <li>Selecting And Indexing Data (Using Iloc, Loc, And Boolean Indexing)</li>
                            <li>Slicing And Sub Setting Data</li>
                            <li>Sorting And Ranking Data</li>
                            <li>Descriptive Statistics (Mean, Median, Min, Max, Etc.)</li>
                            
                            <div className="font-bold text-black">Data Cleaning</div>
                            <li>Handling Missing Values (Dropping, Filling, Interpolation)</li>
                            <li>Removing Duplicates</li>
                            <li>Changing Data Types</li>
                            
                            <div className="font-bold text-black">Data Transformation</div>
                            <li>Applying Functions To Data (Using Apply, Map, Apply Map)</li>
                            <li>Grouping And Aggregating Data (Using Group By)</li>
                            <li>Reshaping And Pivoting Data (Melting, Pivoting)</li>
                            
                            <div className="font-bold text-black">Time Series Analysis</div>
                            <li>Handling Time Series Data (Date/Time Indexing, Resampling)</li>
                            <li>Time-Based Operations And Analysis (Shifting, Rolling Windows, Lagging/Leading)</li>
                            
                            <div className="font-bold text-black">Merging And Joining Data</div>
                            <li>Concatenating Data (Row-Wise And Column-Wise)</li>
                            <li>Merging And Joining Data (Inner Join, Outer Join, Left Join, Right Join)</li>
                            
                            <div className="font-bold text-black">Data Visualization With Pandas</div>
                            <li>Basic Plotting With Pandas (Using Plot() Method)</li>
                            <li>Customizing Plots (Labels, Titles, Colors, Styles)</li>
                            <li>Exploratory Data Visualization</li>
                            
                            <div className="font-bold text-black">Advanced Data Analysis</div>
                            <li>Hierarchical Indexing (Multi-Indexing)</li>
                            <li>Working With Categorical Data (Creating, Renaming, And Reordering Categories)</li>
                            <li>Handling Large Datasets (Memory Optimization, Chunking)</li>
                            
                            <div className="font-bold text-black">Pandas And Statistical Analysis</div>
                            <li>Correlation Analysis</li>
                            <li>Hypothesis Testing</li>
                            <li>Regression Analysis</li>
                            
                            <div className="font-bold text-black">Introduction To Pandas And Numpy Integration (Optional)</div>
                            <li>Overview Of Numpy For Numerical Computing In Pandas</li>
                            <li>Converting Between Numpy Arrays And Pandas Dataframe</li>
                            
                            <div className="font-bold text-black">Performance Optimization</div>
                            <li>Improving Performance With Pandas (Vectorization, Broadcasting)</li>
                            <li>Profiling And Benchmarking Pandas Code</li>
                            
                            <div className="font-bold text-black">Working With Text Data</div>
                            <li>String Manipulation With Pandas (Using Str Accessor)</li>
                            <li>Regular Expressions With Pandas (Using Str Methods)</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Advance Python Django") {
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
                            <div className="font-bold text-black">Introduction To Django</div>
                            <li>Overview Of Django Framework And Its Features</li>
                            <li>Installation And Setup Of Django</li>
                            
                            <div className="font-bold text-black">Creating A Django Project</div>
                            <li>Starting A New Django Project</li>
                            <li>Understanding Project Structure And Files</li>
                            <li>Introduction To Django Settings And Configuration</li>
                            
                            <div className="font-bold text-black">Django Models</div>
                            <li>Defining Models And Database Tables</li>
                            <li>Model Fields And Options</li>
                            <li>Database Migrations With Django's ORM (Object-Relational Mapping)</li>
                            
                            <div className="font-bold text-black">Admin Interface</div>
                            <li>Setting Up And Customizing Django Admin Interface</li>
                            <li>Registering Models With Admin Site</li>
                            <li>Customizing Admin Views And Forms</li>
                            
                            <div className="font-bold text-black">Views And URLs</div>
                            <li>Creating Views And URL Patterns</li>
                            <li>Mapping Views To URLs Using URL Patterns</li>
                            <li>Class-Based Views Vs. Function-Based Views</li>
                            
                            <div className="font-bold text-black">Templates</div>
                            <li>Introduction To Django Templates</li>
                            <li>Rendering Templates With Views</li>
                            <li>Template Inheritance And Template Tags</li>
                            
                            <div className="font-bold text-black">Forms</div>
                            <li>Creating HTML Forms Using Django Forms</li>
                            <li>Processing Form Submissions In Views</li>
                            <li>Form Validation And Error Handling</li>
                            
                            <div className="font-bold text-black">Static Files</div>
                            <li>Handling Static Files (CSS, JavaScript, Images)</li>
                            <li>Configuring Static Files In Django Settings</li>
                            <li>Serving Static Files During Development And Deployment</li>
                            
                            <div className="font-bold text-black">Django Authentication</div>
                            <li>User Authentication And Authorization</li>
                            <li>Built-In Authentication Views And Forms</li>
                            <li>Customizing Authentication Behavior And Templates</li>
                            
                            <div className="font-bold text-black">Working With Databases</div>
                            <li>Database Configuration In Django Settings</li>
                            <li>Using Django ORM For Database Operations (Querying, Filtering, Updating, Deleting)</li>
                            <li>Raw SQL Queries And Database Transactions</li>
                            
                            <div className="font-bold text-black">Django Middleware</div>
                            <li>Introduction To Django Middleware</li>
                            <li>Writing Custom Middleware Classes</li>
                            <li>Middleware For Request/Response Processing</li>
                            
                            <div className="font-bold text-black">Django Forms</div>
                            <li>Building And Handling Forms In Django</li>
                            <li>Form Validation And Error Handling</li>
                            <li>Customizing Form Widgets And Fields</li>
                            
                            <div className="font-bold text-black">Django Rest Framework (Optional)</div>
                            <li>Introduction To Django Rest Framework (DRF)</li>
                            <li>Building RESTful APIs With DRF</li>
                            <li>Serializers, Views, And Authentication In DRF</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "HTML & CSS") {
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
                            <div className="font-bold text-black">Introduction To Web Development</div>
                            <li>Overview Of Web Technologies</li>
                            <li>Understanding Client-Side Vs. Server-Side Development</li>
                            <li>Introduction To HTML, CSS, And Their Roles In Web Development</li>
                            
                            <div className="font-bold text-black">HTML Fundamentals</div>
                            <li>Understanding The Structure Of HTML Documents (HTML5 Doctype)</li>
                            <li>HTML Elements, Tags, And Attributes</li>
                            <li>Text Formatting (Headings, Paragraphs, Lists, Links)</li>
                            <li>Semantic HTML (Div Vs. Semantic Elements Like Header, Nav, Section, Article, Footer)</li>
                            <li>HTML Forms And Form Elements</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "CSS Fundamentals") {
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
                            <li>Writing Accessible HTML Markup (Semantic Elements, Alt Attributes, Aria Roles)</li>
                            <li>Best Practices For Writing Clean And Maintainable HTML And CSS Code</li>
                            <li>Performance Optimization Techniques</li>
                            
                            <div className="font-bold text-black">Project Work</div>
                            <li>Implementing Real-World Projects To Apply Learned Concepts</li>
                            <li>Developing Static Web Pages And Simple Websites Using HTML And CSS</li>
                            <li>Incorporating Responsive Design Principles Into Projects</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "JavaScript") {
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
                        className="group border border-purple-800 rounded overflow-hidden"
                      >
                        <summary className="bg-purple-900 text-white px-4 py-3 cursor-pointer flex justify-between items-center">
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
                        className="group border border-purple-800 rounded overflow-hidden"
                      >
                        <summary className="bg-purple-900 text-white px-4 py-3 cursor-pointer flex justify-between items-center">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Career Information */}
            <div className="space-y-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-wide">
                Why Pursue the Python Full Stack Course?
              </h1>
              
              <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Versatility:</strong> Learning Python full stack development equips you with skills in both front-end and back-end technologies, making you versatile and capable of handling various aspects of web development.</li>
                  <li><strong>Career Opportunities:</strong> Full stack developers are in high demand across industries due to their ability to independently build and maintain complete web applications, enhancing career prospects and job stability.</li>
                  <li><strong>Hands-On Experience:</strong> The course emphasizes real project development, providing practical experience in building and deploying applications from scratch, which is invaluable for future roles in software development.</li>
                  <li><strong>Industry Relevance:</strong> Python, Django, and Flask are widely used in industry-standard web development, ensuring that skills acquired in the course align with current industry practices and technologies.</li>
                  <li><strong>Comprehensive Skill Set:</strong> By mastering both client-side and server-side programming, database management, and deployment techniques, you gain a comprehensive skill set that meets the demands of modern web development projects.</li>
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
                  question: "What frameworks are covered in the Python Full Stack course?",
                  answer: "The course covers frameworks such as Django and Flask, providing you with hands-on experience in both popular back-end technologies for Python-based web development."
                },
                {
                  question: "How does real project experience benefit learners?",
                  answer: "Real project experience allows you to apply theoretical knowledge in practical scenarios, preparing you for challenges you'll encounter in real-world development environments."
                },
                {
                  question: "Are there any prerequisites for enrolling in the Python Full Stack course?",
                  answer: "Basic understanding of programming concepts and familiarity with Python are recommended. Some exposure to HTML, CSS, and JavaScript would also be beneficial."
                },
                {
                  question: "What career opportunities can a Python Full Stack certification open up?",
                  answer: "A Python Full Stack certification demonstrates your proficiency in both front-end and back-end development, making you eligible for roles such as full-stack developer, web developer, or application developer in various industries."
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
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${courseimg6})` }}></div>
                <div className="p-6 bg-gray-50">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Natural Language Processing</h3>
                  <p className="text-gray-600 text-sm mb-3">2 Months</p>
                  <p className="text-red-600 font-bold text-xl">₹20,000</p>
                </div>
              </div>

              {/* Course 2: Big Data Analytics */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${courseimg8})` }}></div>
                <div className="p-6 bg-gray-50">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Big Data Analytics</h3>
                  <p className="text-gray-600 text-sm mb-3">3 Months</p>
                  <p className="text-red-600 font-bold text-xl">₹30,000</p>
                </div>
              </div>

              {/* Course 3: Tableau */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${courseimg10})` }}></div>
                <div className="p-6 bg-gray-50">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Tableau</h3>
                  <p className="text-gray-600 text-sm mb-3">45 Days</p>
                  <p className="text-red-600 font-bold text-xl">₹15,000</p>
                </div>
              </div>

              {/* Course 4: Power BI */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${courseimg9})` }}></div>
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

export default PythonFullStack;