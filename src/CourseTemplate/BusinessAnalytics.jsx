import React from "react";
import courseimg7 from "../assets/courseimg7.jpg";
import certImage from "../assets/cert.png";
import azureImage from "../assets/azure.png";
import courseimg6 from "../assets/courseimg6.jpg";
import courseimg8 from "../assets/courseimg8.jpg";
import courseimg9 from "../assets/courseimg9.jpg";
import courseimg10 from "../assets/courseimg10.jpg";
import courseimg5 from "../assets/courseimg5.jpg";
const BusinessAnalytics = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white px-6 py-10 pt-32"
        style={{ backgroundImage: `url(${courseimg7})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-20 max-w-4xl">
          <h1 className="text-5xl font-extrabold mb-10">Business Analytics</h1>

          <ul className="space-y-4 text-lg leading-relaxed">
            <li>Our intensive Business Analytics certification program, designed by industry veterans, will equip you with the skills to become a data-driven powerhouse.</li>
            <li>Learn from Business Analytics experts who use their skills to solve real-world problems.</li>
            <li>Work on practical Business Analytics projects, applying your knowledge to real-world data sets.</li>
            <li>Develop expertise in data analysis, data visualization, statistics, machine learning, and business communication.</li>
          </ul>
          
          <button className="mt-10 bg-[#b7b100] text-[#ffffff] text-[20px] font-medium px-4 py-2 border-0 rounded-[3px] leading-[1.7em] bg-cover bg-center bg-no-repeat shadow-md group flex items-center gap-2 transition-all duration-300">
  <span>Buy for ₹20,000</span>
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
                Our comprehensive Business Analytics program, led by industry veterans, will transform you from data novice to analytics pro in 100 days. Master in-demand skills like data analysis, visualization, statistics, and machine learning, all tailored for real-world business applications. Learn to translate complex data into actionable insights that drive business success. Fast-track your career and become an asset to any organization.
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
                <li>Bachelor's Degree (Any Field): Your existing degree, regardless of field, demonstrates strong analytical and problem-solving skills – valuable assets for Business Analytics. Training equips you to apply these skills to data analysis and interpretation.</li>
                <li>Business or Quantitative Background: A degree in Business Administration, Statistics, Economics, or Mathematics provides a solid foundation for understanding business concepts and performing data analysis. Business Analytics training builds upon this knowledge with specific data analysis tools and techniques.</li>
              </ul>
            </div>

            {/* Curriculum Section */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Curriculum</h2>
              <div className="space-y-3">
                <details className="group border bg-[#4f1964] rounded overflow-hidden">
                  <summary className="bg-[#4f1964] text-white px-4 py-3 cursor-pointer flex justify-between items-center">
                    <span>Excel</span>
                    <span className="text-xl font-bold group-open:hidden">+</span>
                    <span className="text-xl font-bold hidden group-open:block">-</span>
                  </summary>
                  <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Introduction To Excel</li>
                      <li>A Description Of The Interface</li>
                      <li>The Menu System, And The Fundamentals Of Spreadsheets</li>
                      <li>Peronalizing Excel</li>
                      <li>Changing Excel's Default Options Using Autoconnect And Customizing It</li>
                      <li>Customizing The Ribbon</li>
                      <li>Functions</li>
                      <li>Using Functions -Sum,Average,Max,Min,Count,Absolute,Mixed And Relative Referencing</li>
                      <li>Arithmetic Function</li>
                      <li>Sum If</li>
                      <li>Sumifs</li>
                      <li>Count If</li>
                      <li>Average If</li>
                      <li>Average Ifs</li>
                      <li>Text Functions</li>
                      <li>Upper,Lower,Proper</li>
                      <li>Left,Mid,Right</li>
                      <li>Trim,Len,Exact</li>
                      <li>Concatenate</li>
                      <li>Find,Substitute</li>
                      <li>Proofing And Formatting</li>
                      <li>Formatting Cells With Number Formats</li>
                      <li>Font Formats</li>
                      <li>Alignment</li>
                      <li>Borders</li>
                      <li>Basic Conditional Formatting</li>
                      <li>Protecting Excel -Excel Security</li>
                      <li>File Level Protection</li>
                      <li>Workbook, Worksheet Protection</li>
                      <li>Printing Workbooks</li>
                      <li>Setting Up Print Area</li>
                      <li>Customizing Headers & Footers</li>
                      <li>Designing The Structure Of A Template</li>
                      <li>Print Titles -Repeat Rows / Columns</li>
                      <li>Advance Paste Special Techniǫues</li>
                      <li>Paste Formulas, Paste Formats</li>
                      <li>Transpose Tables</li>
                      <li>Paste Validations</li>
                      <li>Time And Date Functions</li>
                      <li>Today, Now</li>
                      <li>Date, Date If ,Date Add</li>
                      <li>Day,Month,Year</li>
                      <li>Month,Weekday</li>
                      <li>New In Excel 2013 /2016 & 365</li>
                      <li>New Charts -Tree Map & Waterfall</li>
                      <li>Combo Charts -Secondary Axis</li>
                      <li>Sunburnt, Box, And Whisker Charts</li>
                      <li>Using Power Map And Power View</li>
                      <li>Adding Slicers Tool In Pivot & Tables</li>
                      <li>Sparklines-Line, Column, & Win/Loss</li>
                      <li>Forecast Sheet</li>
                      <li>Smart Lookup And Manage Store</li>
                      <li>New Controls In Pivot Table-Field, Items, And Sets</li>
                      <li>Using 3-D Map</li>
                      <li>Auto Complete A Data Range And List</li>
                      <li>Various Timelines In Pivot Table</li>
                      <li>Ǫuick Analysis Tool</li>
                      <li>Filtering And Sorting</li>
                      <li>Filtering On Text, Numbers & Colors</li>
                      <li>Sorting Options</li>
                      <li>Advanced Filters On 15-20 Different Criteria's</li>
                      <li>Printing Workbooks</li>
                      <li>Setting Up Print Area</li>
                      <li>Print Tiles -Repeat Rows /Columns</li>
                      <li>Designing The Structure Of A Template</li>
                      <li>Customizing Headers And Footers</li>
                    </ul>
                  </div>
                </details>

                <details className="group border bg-[#4f1964] rounded overflow-hidden">
                  <summary className="bg-[#4f1964] text-white px-4 py-3 cursor-pointer flex justify-between items-center">
                    <span>Advance Excel</span>
                    <span className="text-xl font-bold group-open:hidden">+</span>
                    <span className="text-xl font-bold hidden group-open:block">-</span>
                  </summary>
                  <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
                    <ul className="list-disc list-inside space-y-1">
                      <li>What If Analysis</li>
                      <li>Goal Seek</li>
                      <li>Data Tables (Pmt Function)</li>
                      <li>Solver Tool</li>
                      <li>Scenario Analysis</li>
                      <li>Data Validation</li>
                      <li>Number, Date & Time Validation</li>
                      <li>Dynamic Dropdown List Creation Using Data Validation -Dependency List</li>
                      <li>Custom Validations Based On A Formula For A Cell</li>
                      <li>Text And List Validation</li>
                      <li>Logical Analysis</li>
                      <li>If Function</li>
                      <li>Complex If And Or Functions</li>
                      <li>Nested If</li>
                      <li>How To Fix Errors-If Error</li>
                      <li>Arrays Functions</li>
                      <li>What Are The Array Formulas, Use Of The Array Formulas</li>
                      <li>Array With If, Len And Mid Functions Formulas</li>
                      <li>Basic Examples Of Arrays (Using Ctrl+Shift+Enter)</li>
                      <li>Advanced Use Of Formulas With Array</li>
                      <li>Array With Lookup Functions</li>
                      <li>Lookup Functions</li>
                      <li>Vlookup /Hlookup</li>
                      <li>Vlookup With Helper Columns</li>
                      <li>Creating Smooth User Interface Using Lookup</li>
                      <li>Index And Match</li>
                      <li>Reverse Lookup Using Choose Function</li>
                      <li>Nested Vlookup</li>
                      <li>Worksheet Linking Using Indirect</li>
                      <li>Pivot Tables</li>
                      <li>Creating Simple Pivot Tables</li>
                      <li>Classic Pivot Table</li>
                      <li>Basic And Advanced Value Field Setting</li>
                      <li>Calculated Field & Calculated Items</li>
                      <li>Grouping Based On Numbers And Dates</li>
                      <li>Slicers And Charts</li>
                      <li>Using Slicers, Filter Data With Slicers</li>
                      <li>Various Charts I.E Bar Charts/Pie Charts/Line Charts</li>
                      <li>Manage Primary And Secondary Ax</li>
                      <li>Excel Dashboard</li>
                      <li>Planning A Dashboard</li>
                      <li>Adding Dynamic Contents To Dashboard</li>
                      <li>Adding Tables And Charts To Dashboard</li>
                      <li>Add On</li>
                      <li>Practical Assignments (Real Time)</li>
                    </ul>
                  </div>
                </details>

                <details className="group border bg-[#4f1964] rounded overflow-hidden">
                  <summary className="bg-[#4f1964] text-white px-4 py-3 cursor-pointer flex justify-between items-center">
                    <span>Power Bi</span>
                    <span className="text-xl font-bold group-open:hidden">+</span>
                    <span className="text-xl font-bold hidden group-open:block">-</span>
                  </summary>
                  <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Introduction Of Power Bi</li>
                      <li>Power Bi Introduction</li>
                      <li>Data Visualization, Reporting</li>
                      <li>Business Intelligence (Bi), Traditional Bi, Self-Serviced Bi</li>
                      <li>Cloud Based Bi, On Premise Bi</li>
                      <li>Power Bi Products</li>
                      <li>Power Bi Desktop (Power Query, Power Pivot, Power View)</li>
                      <li>Flow Of Work In Power Bi Desktop</li>
                      <li>Power Bi Service, Power Bi Report Service, Power Bi Mobile</li>
                      <li>Flow Of Work In Power Bi / Power Bi Architecture</li>
                      <li>A Brief History Of Power Bi</li>
                      <li>Pbi Desktop Installation Power Bi Desktop & Power Bi Service Overview</li>
                      <li>Power Bi Desktop Software Installation</li>
                      <li>Download & Installation Of Power Bi Desktop Software</li>
                      <li>What Are The Prerequisites To Install Power Bi Desktop Software</li>
                      <li>Power Ǫuery Software Overview</li>
                      <li>Overview Of Power Ǫuery / Power Ǫuery Editor</li>
                      <li>How To Open Power Ǫuery / Power Ǫuery Editor Software</li>
                      <li>Connecting To Data Sources And Extracting The Data</li>
                      <li>Establish Connection To The Excel Source, Sǫl Server</li>
                      <li>Importing Data Into Power Ǫuery Editor</li>
                      <li>Transforming Data Into Power Ǫuery Editor Using Gui Options</li>
                      <li>Loading The Data Into Power Pivot</li>
                      <li>Understanding The M(Mashup) Language Behind The Gui Options</li>
                      <li>Power Pivot Software Overview</li>
                      <li>Understanding About Power Pivot – A In Memory Columnar Database</li>
                      <li>Advantage Of In Memory Columnar Database</li>
                      <li>Power Pivot – Xvelocity In-Memory Analytics Engine (Previously Called Vertipaq)</li>
                      <li>Overview Of Data Modeling – Model View (Previously Relationship View)</li>
                      <li>Enhancing The Data Model – Dax (Data Analysis Expressions) Language – Data View</li>
                      <li>Power View Software Overview</li>
                      <li>Overview Of Visualizations, Fields, Fields Wells</li>
                      <li>Understanding Dimension Column & Fact Columns</li>
                      <li>Visualizing The Data Using Power View And Power Maps – Report View</li>
                      <li>Saving Report</li>
                      <li>Publishing The Report To Power Bi Service</li>
                      <li>Power Bi Service Overview</li>
                      <li>Powe Bi Service Overview</li>
                      <li>Logon To Power Bi Service</li>
                      <li>Share The Reports With Clients</li>
                      <li>Power Bi Desktop User Interface</li>
                      <li>Understanding Power Bi Desktop User Interface</li>
                      <li>Fields Pane, Visualization Pane, Filters Pane</li>
                      <li>Ribbon Multiple Views (Report View, Data View & Model View)</li>
                      <li>Report Canvas Pages Selection</li>
                      <li>Building Blocks Of Power Bi</li>
                      <li>Datasets, Visualizations, Reports, Dashboards & Tiles</li>
                      <li>Power Ǫuery</li>
                      <li>Introduction To Power Ǫuery &Power Ǫuery Editor User Interface</li>
                      <li>Overview Of Power Ǫuery / Ǫuery Editor</li>
                      <li>How To Open Power Ǫuery /Ǫuery Editor</li>
                      <li>Extracting The Data From Data Sources</li>
                      <li>Transforming The Data Using Gui Options</li>
                      <li>Loading The Data In Power Pivot</li>
                      <li>Ǫuery Editor Ui (Ǫueries Pane, Data Pane / Results Pane, Power Ǫuery Ribbon)</li>
                      <li>Ǫuery Settings, Pane Applied Steps, Formula Bar</li>
                      <li>Advanced Editor, Ǫuery Dependencies</li>
                      <li>Understanding Power Ǫuery Conceptually</li>
                      <li>Data Processing, Data Types And Filters In Power Ǫuery</li>
                      <li>How Data Processed In Power Ǫuery</li>
                      <li>Data Types, Changing The Data Type Of A Column, Detect Data Type</li>
                      <li>Filters In Power Query And Their Purpose</li>
                      <li>Types Of Filters In Power Ǫuery (Basic Filtering, Advanced Filtering)</li>
                      <li>Auto Filter / Basic Filtering</li>
                      <li>Filter A Column Using Advanced Text Filters, Number Filters, Data Filters</li>
                      <li>Filter Multiple Columns</li>
                      <li>Inbuilt Column Transformation</li>
                      <li>Remove Columns/Remove Other Columns, Choose Cloumns, Go To Column</li>
                      <li>Name Or Rename A Column</li>
                      <li>Reorder Columns Or Sort Columns (Move Left, Right, To Beginning, To End)</li>
                      <li>Column From Examples (From All Columns, From Selection)</li>
                      <li>Add Column / Custom Column</li>
                      <li>Duplicate Column, Split Column, Merge Columns</li>
                      <li>Pivot, Unpivot Columns, Transpose Columns</li>
                      <li>Replace Values, Remove Empty</li>
                      <li>In Built Row Transformations</li>
                      <li>Header Row Or Use First Row As Header, Use Header As First Row</li>
                      <li>Keep Top Rows, Keep Bottom Rows, Keep Range Of Rows</li>
                      <li>Keep Duplicates, Keep Errors</li>
                      <li>Remove Top Rows, Remove Bottom Rows, Remove Alternative Rows</li>
                      <li>Remove Duplicates, Remove Blank Rows, Remove Errors</li>
                      <li>Group Rows / Group By</li>
                      <li>Merge Ǫueries / Join Tables</li>
                      <li>Merge Ǫueries, Merge Ǫueries As New</li>
                      <li>Need Of Merge Ǫueries, Minium Requirements To Perform Merge Ǫueries</li>
                      <li>Types Of Joins/Join Kinds / Merge Type</li>
                      <li>Left Outer (All From First, Matching From Second)</li>
                      <li>Right Outer (All From Second, Matching From First)</li>
                      <li>Full Outer (All Rows From Both)</li>
                      <li>Inner (Only Matching Rows)</li>
                      <li>Left Anti (Rows Only In First), Right Anti (Rows Only In Second)</li>
                      <li>Cartesian Join Or Cross Join, Self-Join</li>
                      <li>Merging The Tables Using Multiple Join Conditions</li>
                      <li>How To Merge 3 Tables</li>
                      <li>Use Fuzzy Matching Option</li>
                      <li>Append Ǫueries / Union All Tables</li>
                      <li>Append Ǫueries, Append Ǫueries As New</li>
                      <li>Minimum Requirements To Perform Append Ǫueries</li>
                      <li>Append Two Tables, Append Three Or More Tables</li>
                      <li>Folder As Source</li>
                      <li>Appending Multiple Files Of Same Type From A Folder Using Single Ǫuery</li>
                      <li>Appending Multiple Excel Files And Multiple Sheets Using Single Ǫuery</li>
                      <li>Union All, How To Get Union Result</li>
                      <li>Ǫuery Options</li>
                      <li>Copy Ǫuery, Paste Ǫuery, Delete Ǫuery, Rename Ǫuery</li>
                      <li>Enable Load, Include In Report Refresh</li>
                      <li>Duplicate Ǫuery, Reference Ǫuery</li>
                      <li>Move To Group, Move Up, Move Down</li>
                      <li>Create Function, Convert To Parameter</li>
                      <li>Advanced Editor, Properties</li>
                      <li>How Tab Options</li>
                      <li>Close & Apply, Close</li>
                      <li>New Source, Recent Sources, Enter Data, Data Source Settings</li>
                      <li>Manage Parameters (Manage Parameters, Edit Parameters, New Parameters)</li>
                      <li>Suggested Values (Any Value, List Of Values, Ǫuery), Convert To List</li>
                      <li>Ǫuery Parameters And Power Bi Templates</li>
                      <li>.Pbix(Power Bi File) And .Pbit(Power Bi Template File)</li>
                      <li>Refresh Preview, Refresh All, Cancel Refresh</li>
                      <li>Sorting Data</li>
                      <li>Transform Tab Options</li>
                      <li>Reverse Rows, Count Rows, Replace Values, Replace Errors, Fill Down, Fill Up</li>
                      <li>Text Column, Number Column, Date &Time Column Options</li>
                      <li>Structured Column (Expand, Aggregate, Extract Values)</li>
                      <li>Run R Script, Run Python Script</li>
                      <li>Add Column Tab Options</li>
                      <li>Create Custom Function, Invoke Custome Function</li>
                      <li>Conditional Column, Index Column, Duplicate Column</li>
                      <li>From Text, From Number, From Date & Time Column Options View Tab, Tools Tab & Help Tab Options</li>
                      <li>Power Pivot Software Overview</li>
                      <li>Understanding About Power Pivot – A In Memory Columnar Database</li>
                      <li>Advantage Of In Memory Columnar Database</li>
                      <li>Power Pivot – Xvelocity In-Memory Analytics Engine (Previously Called Vertipaq)</li>
                      <li>Overview Of Data Modeling – Model View (Previously Relationship View)</li>
                      <li>Enhancing The Data Model – Dax (Data Analysis Expressions) Language- Data View</li>
                      <li>Power Bi Data Modeling – Model View (Previously Relationship View)</li>
                      <li>Data Modeling Introduction</li>
                      <li>Relationship, Need Of Relationship Between Tables</li>
                      <li>Dimension Column, Fact Column, Dimension Table, Fact Table</li>
                      <li>Star Schema, Snowflake Schema</li>
                      <li>Galaxy Schema Or Hybrid Schema Or Fact Constellation Schema</li>
                      <li>Relationship Types / Cardinality In General</li>
                      <li>One-To-One, One-To-Many (Or Many-To-One), Many-To-Many</li>
                      <li>Autodetect The Relationship, Create A New Relationship</li>
                      <li>Edit Existing Relationships, Delete A Relationship</li>
                      <li>Make Relationship Active Or Inactive</li>
                      <li>Cross Filter Direction (Single, Both), Apply Security Filter In Both Directions</li>
                      <li>Assume Referential Integrity</li>
                    </ul>
                  </div>
                </details>

                <details className="group border bg-[#4f1964] rounded overflow-hidden">
                  <summary className="bg-[#4f1964] text-white px-4 py-3 cursor-pointer flex justify-between items-center">
                    <span>Power Bi - DAX</span>
                    <span className="text-xl font-bold group-open:hidden">+</span>
                    <span className="text-xl font-bold hidden group-open:block">-</span>
                  </summary>
                  <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Enhancing The Data Model- Dax</li>
                      <li>What Is Dax (Data Analysis Expressions) Language – Functional Language</li>
                      <li>New Column, New Measure / Ǫuick Measure, New Table</li>
                      <li>Dax Table And Column Name Syntax</li>
                      <li>Creating New Column, Creating New Measure</li>
                      <li>Implicit Measures, Explicit Measures</li>
                      <li>Difference Between New Columns & New Measures</li>
                      <li>Dax Operators, Types Of Operators</li>
                      <li>Arithmetic Operators, Comparison Operators</li>
                      <li>Text Concatenation Operator, Logical Operators</li>
                      <li>Dax Function – Categories</li>
                      <li>Text Function</li>
                      <li>Logical Functions</li>
                      <li>Date & Time Functions</li>
                      <li>Filter Functions</li>
                      <li>Math & Statistical Functions</li>
                      <li>Time Intelligence Functions</li>
                      <li>Dax Text Functions</li>
                      <li>Len, Concatenate (&)</li>
                      <li>Left, Right, Mid</li>
                      <li>Upper, Lower</li>
                      <li>Trim, Substitute, Replace, Blank</li>
                      <li>Dax Logical Functions</li>
                      <li>If, Nested If</li>
                      <li>True, False, Not, Or, In, And</li>
                      <li>Iferror</li>
                      <li>Switch</li>
                      <li>Dax Date & Time Functions</li>
                      <li>Creating Date Dimension Table For Performing Time Intelligence Analysis</li>
                      <li>Year, Ǫuarter, Month, Day</li>
                      <li>Weekday, Weeknum</li>
                      <li>Format (Text Function) -&gt; Month Name, Weekday Name</li>
                      <li>Date, Today, Now</li>
                      <li>Hour, Minute, Second, Time</li>
                      <li>Datediff, Yearfrac, Calendar, Calendarrauto</li>
                      <li>Edate, Eomonth, Datevalue</li>
                      <li>Week Number Of Month, Fiscal Year, Fiscal Ǫuater</li>
                      <li>Dax Filter Function</li>
                      <li>Calculate, Calculatetable</li>
                      <li>All, Allselected, Allexcept</li>
                      <li>Related, Relatedtable</li>
                      <li>Lookupvalue (Information Function)</li>
                      <li>Userlationship</li>
                      <li>Filter, Distinct(Column), Distinct(Table), Values, Selectedvalue</li>
                      <li>Dax Math And Statistical Functions</li>
                      <li>Int, Round, Roundup, Rounddown</li>
                      <li>Divide, Even, Odd, Power, Sign, Sort, Fact</li>
                      <li>Sum, Sumx, Min, Max, Maxx, Count, Countx</li>
                      <li>Average, Averagex</li>
                      <li>Countrows, Countblank</li>
                      <li>Rankx, Summarize</li>
                      <li>Dax Time Intelligence Functions</li>
                      <li>Time Intelligence Introduction</li>
                      <li>Date Dimension Table, Mark As Date Table</li>
                      <li>Totalmtd, Totalǫtd, Totalytd</li>
                      <li>Previousday, Previousmonth, Previousǫuarter, Previousyear</li>
                      <li>Nextday, Nextmonth, Nextǫuarter, Nextyear</li>
                      <li>Sameperioodlastyear</li>
                      <li>Yoy Growth, Ǫoǫ Growth, Mom Growth</li>
                      <li>Firstdate, Lastdate</li>
                      <li>Ǫuick Measures</li>
                      <li>Creating Measures Without Writing The Dax Formula Using Ǫuick Measures</li>
                      <li>Sales Yoy%, Sales Ytd, Sales Mtd</li>
                      <li>Report View / Power View</li>
                      <li>Report View User Interface / Power Bi Desktop User Interface</li>
                      <li>Fields Pane, Visualizations Pane, Filters Pane</li>
                      <li>Ribbon, Multiple Views, Report Canvas, Pages Section</li>
                      <li>Fields, Filed Wells, Formatting, Analytics</li>
                      <li>Visuals Interactions</li>
                      <li>Visual Interactions</li>
                      <li>Interaction Type (Highlight, Filter, None)</li>
                      <li>Visual Interactions Default Behavior</li>
                      <li>Changing The Default Interaction Behavior, Edit Interactions</li>
                      <li>Filters In Power View</li>
                      <li>Filters, Filter Types In Power View</li>
                      <li>Filters On This Visual, Filters On This Page, Filters On All Pages</li>
                      <li>Drill Through Filters, Cross Report Drill Through, Keep All Filters</li>
                      <li>Filter Sub Types – Basic Filtering, Advanced Filtering, Top N, Relative Date Filtering</li>
                      <li>Numeric Field Filters, Text Filed Filters, Date And Time Field Filters</li>
                      <li>Hierarchies And Drill-Down Reports</li>
                      <li>Hierarchy Introduction, Default Date Hierarchy</li>
                      <li>Creating Hierarchy, Creating Custom Date Hierarchy, Change Hierarchy Levels</li>
                      <li>Drill Actions- Drill Down, Drill Up, Show Next Level, Expand Next Level</li>
                      <li>Apply Drill Down Filters To Selected Visual</li>
                      <li>Power Bi Visualizations</li>
                      <li>Visualizing Data, Why Visualizations</li>
                      <li>Visualization Types, Field Wells</li>
                      <li>Visuals For Filtering, Visualizing Categorial Data, Visualizing Trend Data</li>
                      <li>Visualizing Kpi Data, Visualizing Tabular Data, Visualizing Geographical Data</li>
                      <li>Leveraging Power Bi Custom Visuals</li>
                      <li>Visuals For Filtering</li>
                      <li>Slicer Visualization, When To Use A Slicer</li>
                      <li>Create And Format Slicer Visualization</li>
                      <li>Hierarchy Slicer (Custom Visualization)</li>
                      <li>When To Use A Hierarchy Slicer, Create And Format Hierarchy Slicer</li>
                      <li>Advantage Of Hierarchy Slicer</li>
                      <li>Play Axis (Dynamic Slicer) – Custom Visualization</li>
                      <li>When To Use A Play Axis Visual, Create And Format Play Axis Visual</li>
                      <li>Visualizing Categorical Data</li>
                      <li>Purpose Of Pie And Donut Charts, Create And Format Pie And Donut Charts</li>
                      <li>Purpose Of Tree Map Visual, Create And Format The Tree Map Visual</li>
                      <li>Purpose Of Bar & Column Charts</li>
                      <li>Create And Format Bar And Column Charts</li>
                      <li>Create And Format Stacked Bar Charts, Stacked Column Chart</li>
                      <li>Create And Format Clustered Bar Chart, Clustered Column Chart</li>
                      <li>Create And Format 100% Stacked Bar Chart, 100% Stacked Column Chart</li>
                      <li>Purpose Of Scatter Chart, Create And Format Scatter Chart</li>
                      <li>Visualizing Trend Data</li>
                      <li>Purpose Of Line And Area Charts</li>
                      <li>Create And Format Line Charts, Area Charts, Stacked Area Charts</li>
                      <li>Combo Charts</li>
                      <li>Create And Format Line And Stacked Column Chart, Line And Clustered Column Chart</li>
                      <li>Create And Format Ribbon Chart, Waterfall Chart</li>
                      <li>Visualizing Kpi Data</li>
                      <li>Create And Format Gauge Visual, Kpi Visual</li>
                      <li>Create And Format Card Visualization, Multi Row Card</li>
                      <li>Create And Format Funnel Chart</li>
                      <li>Visualizing Tabular Data</li>
                      <li>Create And Format Table Visual, Matrix Visualization</li>
                      <li>Visualizing Geographical Data</li>
                      <li>Create And Format Map Visual, Filled Map Visual</li>
                      <li>Grouping, Binning & Sorting</li>
                      <li>Grouping And Binning Introduction</li>
                      <li>Using Grouping, Creating Groups On Text Columns</li>
                      <li>Using Binning, Creating Bins On Numbers Column And Date Columns</li>
                      <li>Sorting Data In Visuals, Changing The Sort Column, Changing The Sort Order</li>
                      <li>Sort Using Column That Is Not Used In The Visualization Tooltip Page</li>
                      <li>Create A Report Tooltip Page, Configure Your Tooltip Report Page</li>
                      <li>Manually Setting A Report Tooltip</li>
                      <li>Dashboards Development</li>
                      <li>Dashboard, Creating Dashboard Using Multiple Reports</li>
                      <li>Pin Visuals And Pin Live Report Pages To Dashboards</li>
                      <li>Advantages Of Dashboards</li>
                      <li>Interacting With Dashboards</li>
                      <li>Adding Tiles To Dashboards</li>
                      <li>Web Content, Image, Text Box, Video</li>
                      <li>Formatting Dashboard</li>
                      <li>Building Blocks Of Power Bi</li>
                      <li>Datasets, Visualizations, Reports, Dashboards & Tiles</li>
                    </ul>
                  </div>
                </details>

                <details className="group border bg-[#4f1964] rounded overflow-hidden">
                  <summary className="bg-[#4f1964] text-white px-4 py-3 cursor-pointer flex justify-between items-center">
                    <span>SQL</span>
                    <span className="text-xl font-bold group-open:hidden">+</span>
                    <span className="text-xl font-bold hidden group-open:block">-</span>
                  </summary>
                  <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Introduction</li>
                      <li>What Is Data</li>
                      <li>Types Of Data</li>
                      <li>What Is Database</li>
                      <li>Types Of Databases</li>
                      <li>What Is A Table</li>
                      <li>Operations On Table</li>
                      <li>Creation Of Table</li>
                      <li>Select Statement</li>
                      <li>Data Modifications</li>
                      <li>Insert Data Into Tables</li>
                      <li>Insert Statements & Insert Into Select Statements</li>
                      <li>Updating Existing Data</li>
                      <li>Deleting Data From Table</li>
                      <li>Drop</li>
                      <li>Truncating Tables</li>
                      <li>Alter Statements</li>
                      <li>Constraints</li>
                      <li>Primary Key</li>
                      <li>Foreign Key</li>
                      <li>Unique Key</li>
                      <li>Not Null</li>
                      <li>Check</li>
                      <li>Default</li>
                      <li>Indexes</li>
                      <li>Understanding Indexes And Their Importance</li>
                      <li>Creating And Dropping Indexes</li>
                      <li>Index (B Tree, Hash)</li>
                      <li>Views</li>
                      <li>Creating Views</li>
                      <li>Modifying Views</li>
                      <li>Dropping Views</li>
                      <li>Updating Data Through View</li>
                      <li>Data Retrieval</li>
                      <li>Retrieving Data From A Single Table</li>
                      <li>Where Clause</li>
                      <li>Group By Clause</li>
                      <li>Having Clause</li>
                      <li>Order By Clause</li>
                      <li>Limit Clause</li>
                      <li>Case Statement</li>
                      <li>Case Statement For Validating The Data Based On Condition</li>
                      <li>Joins</li>
                      <li>Inner Join</li>
                      <li>Left Join</li>
                      <li>Right Join</li>
                      <li>Full Join</li>
                      <li>Cross Join</li>
                      <li>Self-Join</li>
                      <li>Functions</li>
                      <li>Numerical Functions</li>
                      <li>Date Functions</li>
                      <li>String Functions</li>
                      <li>Aggregate Functions</li>
                      <li>Set Operator</li>
                      <li>Union</li>
                      <li>Intersect</li>
                      <li>Minus</li>
                      <li>Except</li>
                      <li>Union All</li>
                      <li>Sub Ǫueries</li>
                      <li>Single Row</li>
                      <li>Multiple Row</li>
                      <li>Scalar Row</li>
                      <li>Correlated</li>
                      <li>Exist</li>
                      <li>Not Exist</li>
                      <li>From And Select</li>
                      <li>Where And From</li>
                      <li>Stored Procedure</li>
                      <li>Create</li>
                      <li>Dml</li>
                      <li>Tcl (Commit,Roll Back, Savepoints,Acid)</li>
                      <li>Cursor</li>
                      <li>Execution</li>
                      <li>Passing Parameters To Stored Procedures And Functions</li>
                      <li>Invoking Stored Procedures And Functions</li>
                      <li>Advance Sǫl Topics</li>
                      <li>Windows Functions</li>
                      <li>Common Table Expression</li>
                      <li>Recursion</li>
                      <li>Pivot And Unpivot Operation</li>
                      <li>Dynamic Sǫl</li>
                    </ul>
                  </div>
                </details>

                <details className="group border bg-[#4f1964] rounded overflow-hidden">
                  <summary className="bg-[#4f1964] text-white px-4 py-3 cursor-pointer flex justify-between items-center">
                    <span>Projects</span>
                    <span className="text-xl font-bold group-open:hidden">+</span>
                    <span className="text-xl font-bold hidden group-open:block">-</span>
                  </summary>
                  <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Real time Projects</li>
                      <li>End to End Unique Projects</li>
                    </ul>
                  </div>
                </details>
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
                Courses focused on building strong foundational skills for career growth
              </h1>
              
              <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                <ul className="list-disc list-inside">
                  <li>Be the Hero with Data: Turn raw data into actionable insights that drive business success.</li>
                  <li>Speak the Language of Business: Bridge the gap between data analysis and business needs.</li>
                  <li>High-Demand, High-Reward: Business Analysts are highly sought-after with competitive salaries.</li>
                  <li>Unlock Your Problem-Solving Superpowers: Analyze complex business challenges and develop data-driven solutions.</li>
                  <li>Future-Proof Your Career: Data skills are crucial in today's world, and Business Analytics puts you at the forefront.</li>
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
                  question: "What are the ethical considerations of using Big Data in Business Analytics?",
                  answer: "As data collection grows, understanding and upholding data privacy and security is crucial. Responsible data governance practices are essential for ethical BA practices."
                },
                {
                  question: "What skills are most important for a Business Analyst?",
                  answer: "Analytical Skills: Strong analytical thinking and problem-solving abilities are essential. You should be comfortable working with numbers, identifying patterns, and drawing conclusions from data. Business Acumen: A basic understanding of business concepts and processes allows you to better interpret data within the context of real-world business problems. Communication Skills: The ability to effectively communicate complex data insights to both technical and non-technical audiences is crucial."
                },
                {
                  question: "What is the role of data storytelling in Business Analytics?",
                  answer: "Data storytelling bridges the gap between data and action. By effectively communicating insights through compelling narratives, you can influence stakeholders and drive data-driven decision-making."
                },
                {
                  question: "What are the typical educational requirements for a Business Analytics career?",
                  answer: "Formal education is a plus, but not always mandatory. A bachelor's degree in any field demonstrates strong analytical and problem-solving skills – valuable assets for Business Analytics. Training equips you to apply these skills to data analysis and interpretation. Business or Quantitative Background (Bonus): A degree in Business Administration, Statistics, Economics, or Mathematics provides a solid foundation for understanding business concepts and performing data analysis. Business Analytics training builds upon this knowledge with specific data analysis tools and techniques. No Degree? Explore Alternatives: Passion and a drive to learn are key! Online courses, bootcamps, and even self-study with the right resources can equip you with the necessary skills. Look for programs that focus on practical applications and in-demand tools."
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
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${courseimg5})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Data Analytics</h3>
                  <p className="text-[#666666] font-bold text-lg">Buy for ₹25,000</p>
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

export default BusinessAnalytics;