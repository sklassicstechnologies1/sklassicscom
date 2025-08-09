import React from "react";
// import Cert from "./Cert";
import courseimg1 from "../assets/courseimg1.jpg";
import certImage from "../assets/cert.png";
import azureImage from "../assets/azure.png";
import courseimg6 from "../assets/courseimg6.jpg";
import courseimg8 from "../assets/courseimg8.jpg";
import courseimg9 from "../assets/courseimg9.jpg";
import courseimg10 from "../assets/courseimg10.jpg";

const DataScience = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white px-6 py-10 pt-32"
        style={{ backgroundImage: `url(${courseimg1})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-20 max-w-4xl">
          <h1 className="text-5xl font-extrabold mb-10">Data Science Full Stack Master Course</h1>

          <ul className="space-y-4 text-lg leading-relaxed">
            <li>Learn Data Science from Industry experts </li>
            <li>Earn a recognized Data Scientist certification to boost your career</li>
            <li>Work on real-world projects using industry-aligned tools</li>
            <li>Become a Data Scientist through multiple Data Science courses covered in this 8-month data science certification program with hands-on exercises & Project work</li>
            <li>Master skills like Python, SQL, Machine Learning, Artificial Intelligence, PowerBI and more</li>
          </ul>
          <br/>
          <h3 className="text-[#ffffff] font-bold text-base sm:text-lg md:text-xl">
            Course Duration : 8 Months
          </h3>

          <button className="mt-10 bg-[#b7b100] text-[#ffffff] text-[20px] font-medium px-4 py-2 border-0 rounded-[3px] leading-[1.7em] bg-cover bg-center bg-no-repeat shadow-md group flex items-center gap-2 transition-all duration-300">
            <span>Buy for ₹60,000</span>
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
                Propel your career and become a data scientist with our comprehensive Data Science Master Course. Gain expertise in in-demand skills like Python, SQL, Excel, Machine Learning, Power BI, Computer Vision, Generative AI, and more. Dive deep into data interpretation nuances, master Machine Learning, and enhance your programming skills to elevate your Data Science career.
              </p>
              <h2 className="text-3xl font-bold mb-4">Key Highlights</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>One-on-One with Industry</li>
                <li>Placement Assistance</li>
                <li>1:1 Mock Interview</li>
              </ul>
            </div>

            {/* Who Can Apply */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Who Can Apply?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Individuals with a bachelor's degree and a keen interest to learn AI and Data Science</li>
                <li>IT professionals looking for a career transition as Data Scientists and Artificial Intelligence Engineers</li>
                <li>Professionals aiming to move ahead in their IT career</li>
                <li>Artificial Intelligence and Business Intelligence professionals</li>
                <li>Developers and Project Managers</li>
                <li>Freshers who aspire to build their career in the field of Artificial Intelligence and Data Science</li>
              </ul>
            </div>

            {/* Curriculum Section */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Curriculum</h2>
              <div className="space-y-3">
                {[
                  "Course Schedule",
                  "Python Programming And Logic Building",
                  "Data Structure & Algorithms",
                  "Pandas, NumPy and Matplotlib",
                  "Statistics and Math's",
                  "Data Preprocessing And Feature Engineering",
                  "Power Bi",
                  "SQL",
                  "Machine Learning",
                  "Natural Language Processing",
                  "Deep Learning",
                  "Computer Vision",
                  "Big Data Analytics",
                  "Git & GitHub",
                  "Personal Profile & Portfolio",
                  "Projects",
                ].map((item, index) => {
                  if (item === "Course Schedule") {
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
                            <div className="font-bold text-black">Month 1</div>
                            <li>Python Programming And Logic Building</li>
                            <li>Data Structure & Algorithms</li>
                            <div className="font-bold text-black">Month 2</div>
                            <li>Numpy, Pandas, Matplotlib, Seaborn</li>
                            <li>Statistics</li>
                            <div className="font-bold text-black">Month 3</div>
                            <li>Machine Learning</li>
                            <li>ML Operations</li>
                            <div className="font-bold text-black">Month 4</div>
                            <li>Natural Language Processing</li>
                            <li>Computer Vision</li>
                            <div className="font-bold text-black">Month 5</div>
                            <li>Data Visualization With Tableau</li>
                            <li>Structured Query Language (SQL)</li>
                            <div className="font-bold text-black">Month 6</div>
                            <li>Data Engineering</li>
                            <li>Data System Design</li>
                            <div className="font-bold text-black">Month 7</div>
                            <li>Five Major Capstone Projects</li>
                            <li>Interview Preparations</li>
                            <div className="font-bold text-black">Month 8</div>
                            <li>Git & Github</li>
                            <li>Personal Branding And Portfolio</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Python Programming Logic Building") {
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
                            <div className="font-bold text-black">Introduction And Basics</div>
                            <li>Installation</li>
                            <li>Python Org, Python 3</li>
                            <li>Variables</li>
                            <li>Print Function</li>
                            <li>Input From User</li>
                            <li>Data Types</li>
                            <li>Type Conversion</li>
                            <li>First Program</li>
                            <div className="font-bold text-black">Operators</div>
                            <li>Arithmetic Operators</li>
                            <li>Relational Operators</li>
                            <li>Bitwise Operators</li>
                            <li>Logical Operators</li>
                            <li>Assignment Operators</li>
                            <li>Compound Operators</li>
                            <li>Membership Operators</li>
                            <li>Identity Operators</li>
                            <div className="font-bold text-black">Conditional Statements</div>
                            <li>If Else</li>
                            <li>If</li>
                            <li>Else</li>
                            <li>El If (Else If)</li>
                            <li>If Else Ternary Expression</li>
                            <div className="font-bold text-black">While Loop</div>
                            <li>While Loop Logic Building</li>
                            <li>Series Based Questions</li>
                            <li>Break</li>
                            <li>Continue</li>
                            <li>Nested While Loops</li>
                            <li>Pattern-Based Questions</li>
                            <li>Pass</li>
                            <li>Loop Else</li>
                            <div className="font-bold text-black">Lists</div>
                            <li>List Basics</li>
                            <li>List Operations</li>
                            <li>List Comprehensions / Slicing</li>
                            <li>List Methods</li>
                            <div className="font-bold text-black">Strings</div>
                            <li>String Basics</li>
                            <li>String Literals</li>
                            <li>String Operations</li>
                            <li>String Comprehensions / Slicing</li>
                            <li>String Methods</li>
                            <div className="font-bold text-black">For Loops</div>
                            <li>Range Function</li>
                            <li>For Loop</li>
                            <li>Nested For Loops</li>
                            <li>Pattern-Based Questions</li>
                            <li>Break</li>
                            <li>Continue</li>
                            <li>Pass</li>
                            <li>Loop Else</li>
                            <div className="font-bold text-black">Functions</div>
                            <li>Definition</li>
                            <li>Call</li>
                            <li>Function Arguments</li>
                            <li>Default Arguments</li>
                            <li>Docstrings</li>
                            <li>Scope</li>
                            <li>Special Functions Lambda, Map, And Filter</li>
                            <li>Recursion</li>
                            <li>Functional Programming And Reference Functions</li>
                            <div className="font-bold text-black">Dictionary</div>
                            <li>Dictionaries Basics</li>
                            <li>Operations</li>
                            <li>Comprehensions</li>
                            <li>Dictionaries Methods</li>
                            <div className="font-bold text-black">Tuple</div>
                            <li>Tuples Basics</li>
                            <li>Tuples Comprehensions / Slicing</li>
                            <li>Tuple Functions</li>
                            <li>Tuple Methods</li>
                            <div className="font-bold text-black">Set</div>
                            <li>Sets Basics</li>
                            <li>Sets Operations</li>
                            <li>Union</li>
                            <li>Intersection</li>
                            <li>Difference And Symmetric Difference</li>
                            <div className="font-bold text-black">Object-Oriented Programming</div>
                            <li>Classes</li>
                            <li>Objects</li>
                            <li>Method Calls</li>
                            <li>Inheritance And Its Types</li>
                            <li>Overloading</li>
                            <li>Overriding</li>
                            <li>Data Hiding</li>
                            <li>Operator Overloading</li>
                            <div className="font-bold text-black">File Handling</div>
                            <li>File Basics</li>
                            <li>Opening Files</li>
                            <li>Reading Files</li>
                            <li>Writing Files</li>
                            <li>Editing Files</li>
                            <li>Working With Different Extensions Of File</li>
                            <li>With Statements</li>
                            <div className="font-bold text-black">Exception Handling</div>
                            <li>Common Exceptions</li>
                            <li>Exception Handling</li>
                            <li>Try</li>
                            <li>Except</li>
                            <li>Try Except Else</li>
                            <li>Finally</li>
                            <li>Raising Exceptions</li>
                            <li>Assertion</li>
                            <div className="font-bold text-black">Regular Expression</div>
                            <li>Basic Re Functions</li>
                            <li>Patterns</li>
                            <li>Meta Characters</li>
                            <li>Character Classes</li>
                            <div className="font-bold text-black">Modules & Packages</div>
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
                            <div className="font-bold text-black">Data Structures</div>
                            <li>Stack</li>
                            <li>Queue</li>
                            <li>Linked Lists</li>
                            <li>Sorting</li>
                            <li>Searching</li>
                            <li>Linear Search</li>
                            <li>Binary Search</li>
                            <li>Higher-Order Functions</li>
                            <li>Function As A Parameter</li>
                            <li>Function As A Return Value</li>
                            <li>Closures</li>
                            <li>Decorators</li>
                            <li>Map, Filter, Reduce Functions</li>
                            <div className="font-bold text-black">Python Web Scraping</div>
                            <li>Understanding Beautifulsoup</li>
                            <li>Extracting Data From Websites</li>
                            <li>Extracting Tables</li>
                            <li>Data In Json Format</li>
                            <div className="font-bold text-black">Virtual Environment</div>
                            <li>Virtual Environment Setup</li>
                            <li>Web Application Project</li>
                            <li>Flask</li>
                            <li>Project Structure</li>
                            <li>Routes</li>
                            <li>Templates</li>
                            <li>Navigations</li>
                            <div className="font-bold text-black">Git And Github</div>
                            <li>Git – Version Control System</li>
                            <li>Github Profile Building</li>
                            <li>Manage Your Work On Github</li>
                            <li>Deployment</li>
                            <li>Heroku Deployment</li>
                            <li>Flask Integration</li>
                            <div className="font-bold text-black">Python Package Manager</div>
                            <li>What Is Pip?</li>
                            <li>Installation</li>
                            <li>Pip Freeze</li>
                            <li>Creating Your Own Package</li>
                            <li>Upload It On Pip</li>
                            <div className="font-bold text-black">Statistics With Numpy</div>
                            <li>Statistics</li>
                            <li>Numpy Basics</li>
                            <li>Working With Matrix</li>
                            <li>Linear Algebra Operations</li>
                            <li>Descriptive Statistics</li>
                            <div className="font-bold text-black">Data Analysis With Pandas</div>
                            <li>Data Analysis Basics</li>
                            <li>Dataframe Operations</li>
                            <li>Working With 2-Dimensional Data</li>
                            <li>Data Cleaning</li>
                            <li>Data Grouping</li>
                            <div className="font-bold text-black">Data Visualization With Matplotlib</div>
                            <li>Matplotlib Basics</li>
                            <li>Working With Plots</li>
                            <li>Plot</li>
                            <li>Pie Chart</li>
                            <li>Histogram</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Data Structure & Algorithms") {
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
                            <div className="font-bold text-black">Stack</div>
                            <li>Queue</li>
                            <li>Linked List</li>
                            <li>Tree</li>
                            <li>Graph</li>
                            <li>List And Array</li>
                            <li>Swapping And Sorting</li>
                            <li>Searching</li>
                            <li>Recursion</li>
                            <li>Hashing</li>
                            <li>Strings</li>
                            <li>Dynamic Programming</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Pandas, NumPy and Matplotlib") {
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
                            <div className="font-bold text-black">NumPy</div>
                            <li>Vectors, Matrix</li>
                            <li>Operations On Matrix</li>
                            <li>Mean, Variance, And Standard Deviation </li>
                            <li>Reshaping Arrays</li>
                            <li>Transpose And Determinant Of Matrix</li>
                            <li>Diagonal Operations, Trace</li>
                            <li>Add, Subtract, Multiply, Dot, And Cross Product.</li>
                            <div className="font-bold text-black">Pandas</div>
                            <li>Series And Dataframes</li>
                            <li>Series And Dataframes</li>
                            <li>Slicing, Rows, And Columns</li>
                            <li>Operations On Dataframe</li>
                            <li>Different Ways To Create Dataframe</li>
                            <li>Read, Write Operations With Csv Files</li>
                            <li>Handling Missing Values, Replacing Values, And Regular Expression</li>
                            <li>Groupby And Concatenation</li>
                            <div className="font-bold text-black">Matplotlib</div>
                            <li>Graph Basics</li>
                            <li>Format Strings In Plots</li>
                            <li>Label Parameters, Legend</li>
                            <li>Bar Chart, Pie Chart, Histogram, Scatter Plot</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Statistics and Math's") {
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
                            <div className="font-bold text-black"> Descriptive Statistics</div> 
                            <li>Measure Of Frequency And Central Tendency</li>
                            <li>Measure Of Dispersion</li>
                            <li>Probability Distribution</li>
                            <li>Gaussian Normal Distribution</li>
                            <li>Skewness And Kurtosis</li>
                            <li>Regression Analysis</li>
                            <li>Continuous And Discrete Functions</li>
                            <li>Goodness Of Fit</li>
                            <li>Normality Test</li>
                            <li>Anova</li>
                            <li>Homoscedasticity</li>
                            <li>Linear And Non-Linear Relationship With Regression</li>
                            <div className="font-bold text-black"> Inferential Statistics</div> 
                            <li>T-Test</li>
                            <li>Z-Test</li>
                            <li>Hypothesis Testing</li>
                            <li>Type I And Type Ii Errors</li>
                            <li>T-Test And Its Types</li>
                            <li>One Way Anova</li>
                            <li>Two Way Anova</li>
                            <li>Chi-Square Test</li>
                            <li>Implementation Of Continuous And Categorical Data</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Data Preprocessing And Feature Engineering") {
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
                            <div className="font-bold text-black"> Methods Of Imputation</div>  
                            <li>Mean</li>
                            <li>Median</li>
                            <li>Mode</li>
                            <li>B-Fill</li>
                            <li>F-Fill</li>
                            <li>Knn Imputation</li>
                            <li>Random Forest Imputation</li>
                            <li>Regressor Based Imputation</li>
                            <div className="font-bold text-black">Encoding</div>
                            <li>Label Encoding</li>
                            <li>Dummy Encoding</li>
                            <li>Effect Encoding</li>
                            <li>Binary Encoding</li>
                            <li>Hash Encoding</li>
                            <li>Base N Encoding</li>
                            <div className="font-bold text-black">Feature Scaling</div>
                            <li>Standardization</li>
                            <li>Normalization</li>
                            <div className="font-bold text-black">Handling With Outliers</div>
                            <li>Z-Score</li>
                            <li>Iqr</li>
                            <li>Percentile</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Power Bi") {
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
                            <div className="font-bold text-black"> Introduction Of Power Bi Pbi Desktop Installation Power Bi Desktop & Power Bi Service Overview</div>  
                            <li>Power Query Software Overview</li>
                            <li>Power Pivot Software Overview</li>
                            <li>Power View Software Overview</li>
                            <li>Power Bi Service Overview</li>
                            <li>Power Bi Desktop User Interface</li>
                            <li>Building Blocks Of Power Bi</li>
                            <div className="font-bold text-black">Power Query</div>
                            <li>Data Processing, Data Types And Filters In Power Query</li>
                            <li>Inbuilt Column Transformation</li>
                            <li>In Built Row Transformations</li>
                            <li>Combine Queries (Merge Queries & Append Queries)</li>
                            <li>Merge Queries / Join Tables</li>
                            <li>Append Queries / Union All Tables</li>
                            <li>Query Options</li>
                            <li>How Tab Options</li>
                            <li>Transform Tab Options</li>
                            <li>Add Column Tab Options</li>
                            <div className="font-bold text-black">Power Pivot</div>
                            <li>Power Bi Data Modeling – Model View (Previously Relationship View)</li>
                            <li>Enhancing The Data Model- Dax</li>
                            <li>Dax Function – Categories</li>
                            <li>Dax Text Functions</li>
                            <li>Dax Logical Functions</li>
                            <li>Dax Date & Time Functions</li>
                            <li>Dax Filter Function</li>
                            <li>Dax Math And Statistical Functions</li>
                            <li>Dax Time Intelligence Functions</li>
                            <li>Quick Measures</li>
                            <div className="font-bold text-black">Power View</div>
                            <li>Report View</li>
                            <li>Visuals Interactions</li>
                            <li>Filters In Power View</li>
                            <li>Hierarchies And Drill-Down Reports</li>
                            <div className="font-bold text-black">Power Bi Visualizations</div>
                            <li>Visuals For Filtering</li>
                            <li>Visualizing Categorical Data</li>
                            <li>Visualizing Trend Data</li>
                            <li>Visualizing Kpi Data</li>
                            <li>Visualizing Tabular Data</li>
                            <li>Visualizing Geographical Data</li>
                            <li>Grouping, Binning & Sorting</li>
                            <li>Bookmarks, Selection Pane & Buttons</li>
                            <div className="font-bold text-black">Power Bi Services</div>
                            <li>Adding Dataset To Power Bi Service And Creating Multiple New Reports</li>
                            <li>Dashboards Development</li>
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
                            <div className="font-bold text-black"> Introduction </div>
                            <li>What Is Data</li>
                            <li>Types Of Data</li>
                            <li>What Is Database</li>
                            <li>Types Of Databases</li>
                            <li>What Is A Table</li>
                            <div className="font-bold text-black">Operations On Table</div>
                            <li>Creation Of Table</li>
                            <li>Select Statement</li>
                            <div className="font-bold text-black">Data Modifications</div>
                            <li>Insert Data Into Tables</li>
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
                            <li>Check Default</li>
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
                            <div className="font-bold text-black">Case Statements</div>
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
                            <div className="font-bold text-black">Sub Queries</div>
                            <li>Single Row</li>
                            <li>Multiple Row</li>
                            <li>Scalar Row</li>
                            <li>Correlated</li>
                            <li>Exist</li>
                            <li>Not Exist</li>
                            <li>From And Select</li>
                            <li>Where And From</li>
                            <div className="font-bold text-black">Stored Procedure</div>
                            <li>Create Dml</li>
                            <li>Tcl (Commit, Roll Back, Savepoints,Acid)</li>
                            <li>Cursor</li>
                            <li>Execution</li>
                            <li>Passing Parameters To Stored Procedures And Functions</li>
                            <li>Invoking Stored Procedures And Functions</li>
                            <div className="font-bold text-black">Advance Sql Topics</div>
                            <li>Windows Functions</li>
                            <li>Common Table Expression</li>
                            <li>Recursion</li>
                            <li>Pivot And Unpivot Operations</li>
                            <li>Dynamic Sql</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Machine Learning") {
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
                            <div className="font-bold text-black">Supervised Learning Regression</div>
                            <li>Linear Regression</li>
                            <li>Polynomial Regression</li>
                            <div className="font-bold text-black">Classification</div>
                            <li>Naïve Bayes</li>
                            <li>Logistic Regression</li>
                            <li>KNN</li>
                            <li>Decision Tree</li>
                            <li>SVM</li>
                            <div className="font-bold text-black">Unsupervised Learning</div>
                            <li>K-Means</li>
                            <li>C-Means</li>
                            <li>PCA</li>
                            <div className="font-bold text-black">Ensemble Models</div>
                            <li>Random Forest Classifier</li>
                            <li>Random Forest Regressor</li>
                            <li>Ada Boost Classifier</li>
                            <li>Ada Boost Regressor</li>
                            <li>XG Boost Classifier</li>
                            <li>XG Boost Regressor</li>
                            <li>Cat Boost Classifier</li>
                            <li>Light GBM</li>
                            <li>Gradient Boost Classifier</li>
                            <li>Gradient Boost Regressor</li>
                            <li>Voter Classifier</li>
                            <li>Stacking</li>
                            <li>Customised Ensemble Models</li>
                            <div className="font-bold text-black">Metrics</div>
                            <li>Classification Report</li>
                            <li>Confusion Matrix</li>
                            <li>Accuracy Score</li>
                            <li>Crosstab</li>
                            <li>F1-Score</li>
                            <li>Precision</li>
                            <li>Recall</li>
                            <li>ROC Curve</li>
                            <li>R Squared And Adjusted R Squared</li>
                            <li>RMSE, MSE</li>
                            <li>Evaluation Matrix</li>
                            <div className="font-bold text-black">Over Sampling And Under Sampling</div>
                            <li>Random Over Sampling</li>
                            <li>Random Under Sampling</li>
                            <li>SMOTE Over Sampling</li>
                            <li>SMOTE Under Sampling (KNN,SVM,Clustering)</li>
                            <div className="font-bold text-black">Cross Validation</div>
                            <li>K-Fold Cross Validation</li>
                            <li>C-Fold Cross Validation</li>
                            <div className="font-bold text-black">Hyper Parameter Tuning</div>
                            <li>Grid Search CV</li>
                            <li>Randomized CV</li>
                            <li>Optuna</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Natural Language Processing") {
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
                            <div className="font-bold text-black">Text Processing</div>
                            <li>Raw Text</li>
                            <li>Noise Entity Removal</li>
                            <li>Stop Word</li>
                            <li>Punctuations</li>
                            <div className="font-bold text-black">Text Normalization</div>
                            <li>URLs</li>
                            <li>Numbers</li>
                            <li>Word Normalization</li>
                            <li>Tokenization</li>
                            <li>Stemming</li>
                            <li>Lemmatization</li>
                            <li>Word Standardization</li>
                            <li>Regular Expression</li>
                            <li>Modified Text</li>
                            <div className="font-bold text-black">Feature Engineering</div>
                            <li>N-Grams</li>
                            <li>Bag Of Words Count Vectorizer</li>
                            <li>TFIDF</li>
                            <li>Gensim</li>
                            <li>Word2Vec</li>
                            <div className="font-bold text-black">Topic Modeling</div>
                            <li>LDA</li>
                            <li>Parts Of Speech Tagging</li>
                            <li>Dependency Parsing</li>
                            <li>Constituency Parsing</li>
                            <li>Named Entity Recognition</li>
                            <li>Fuzzy Search</li>
                            <li>Sentiment Analysis</li>
                            <li>Spacy</li>
                            <li>Text Blob</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Deep Learning") {
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
                            <div className="font-bold text-black">Neural Networks</div>
                            <li>Min, Max, Mean Pooling</li>
                            <li>Padding</li>
                            <li>Basic Neural Network</li>
                            <li>Perceptron</li>
                            <li>Feed Forward Neural Network</li>
                            <li>Back Propagation</li>
                            <li>ANN</li>
                            <li>CNN</li>
                            <li>RNN</li>
                            <li>GAN</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Computer Vision") {
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
                            <li>Content will be updated soon</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Big Data Analytics") {
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
                            <div className="font-bold text-black">Bigdata</div>
                            <li>What Is Bigdata?</li>
                            <li>How Is Bigdata Applied Within Business?</li>
                            <li>PySpark</li>
                            <li>Resilient Distributed Datasets</li>
                            <li>Schema</li>
                            <li>Lambda Expressions</li>
                            <li>Transformations</li>
                            <li>Actions</li>
                            <li>Data Modeling</li>
                            <li>Duplicate Data</li>
                            <li>Descriptive Analysis Of Data</li>
                            <li>Visualizations</li>
                            <li>ML Lib</li>
                            <li>ML Packages</li>
                            <li>Pipelines</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Git And GitHub") {
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
                            <li>Understanding Git</li>
                            <li>Commands And How To Commit Your First Code?</li>
                            <li>How To Use Github?</li>
                            <li>How To Make Your First Open-Source Contribution?</li>
                            <li>How To Work With A Team? — part </li>
                            <li>How To Create Your Stunning Github Profile?</li>
                            <li>How To Build Your Own Viral Repository?</li>
                            <li>Building A Personal Landing Page For Your Portfolio For Free</li>
                            <li>How To Grow Followers On Github?</li>
                            <li>How To Work With A Team? Part 2 — issues, Milestones, And Projects</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Personal Profile And Portfolio") {
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
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Projects") {
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
                            <li>Live Kaggle Competition</li>
                            <li>Hands On Experience On Datasets</li>
                            <li>End To End Unique Projects</li>
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
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 lowercase tracking-wide">
                Why Pursue a Career in Data Science?
              </h1>
              
              <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>High Demand:</strong> Data scientists are in high demand across various industries, including tech, finance, healthcare, and more.</li>
                  <li><strong>Lucrative Salaries:</strong> Data science professionals often command high salaries due to their specialized skill sets.</li>
                  <li><strong>Diverse Opportunities:</strong> The skills learned in data science can be applied to numerous roles, such as data analyst, machine learning engineer, and business intelligence developer.</li>
                  <li><strong>Impactful Work:</strong> Data science allows you to solve real-world problems, drive business decisions, and contribute to advancements in technology and society.</li>
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
                  question: " What prerequisites are required for the Data Science Master Course?",
                  answer: "To excel in the Data Science Master Course, a basic understanding of programming concepts, preferably in languages like Python, and familiarity with fundamental mathematical concepts such as statistics and linear algebra are recommended."
                },
                {
                  question: "How will this course benefit my career?",
                  answer: "Our Data Science Master Course equips you with essential skills in Python programming, SQL database management, Machine Learning algorithms, and advanced data visualization tools like Power BI. These skills are highly sought after in today's job market across various industries, providing numerous career opportunities in data analysis, AI development, and more."
                },
                {
                  question: "How are the instructors and mentors selected?",
                  answer: "Our instructors are industry experts and seasoned professionals with extensive experience in Data Science, often holding advanced degrees in relevant fields. They are selected based on their expertise, teaching abilities, and commitment to student success. Mentors provide personalized guidance throughout the course."
                },
                {
                  question: "What career support services are available?",
                  answer: "We offer comprehensive career support services, including resume building workshops, mock interviews, and networking opportunities with industry professionals. Additionally, our job placement assistance program connects students with potential employers seeking Data Science expertise."
                },
                {
                  question: "How can I enroll in the Data Science Master Course?",
                  answer: "Enrollment typically involves an application process to assess your background and readiness for the course. Once accepted, you can proceed with payment options and begin your journey towards mastering Data Science."
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
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${courseimg6})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Data Science</h3>
                  <p className="text-[#666666] font-bold text-lg">Buy for ₹30,000</p>
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

export default DataScience;