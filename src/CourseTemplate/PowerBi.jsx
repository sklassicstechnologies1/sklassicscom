import React from "react";
import certImage from "../assets/cert.png";
import azureImage from "../assets/azure.png";
import courseimg6 from "../assets/courseimg6.jpg";
import courseimg8 from "../assets/courseimg8.jpg";
import courseimg9 from "../assets/courseimg9.jpg";
import courseimg10 from "../assets/courseimg10.jpg";

const PowerBi = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white px-6 py-10 pt-32"
        style={{ backgroundImage: `url(${courseimg9})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-20 max-w-4xl">
          <h1 className="text-5xl font-extrabold mb-10">Power Bi</h1>

          <ul className="space-y-4 text-lg leading-relaxed">
            <li>Learn from industry experts.</li>
            <li>Earn a recognized certification.</li>
            <li>Work on real-world projects.</li>
            <li>Master tools like Power BI, DAX, and Power Query.</li>
          </ul>
          <br/>

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
                Dive deep into the world of business intelligence with this comprehensive Power BI course designed to empower you with the skills to create, share, and benefit from insightful data visualizations and reports. This course covers data modeling, visual analytics, report generation, and the use of Power BI service and desktop applications.
              </p>
              <h2 className="text-3xl font-bold mb-4">Key Highlights</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Hands-On Experience:</strong> Engage in hands-on projects to develop custom dashboards and reports using real data.</li>
                <li><strong>Expert Guidance:</strong> Learn from seasoned BI professionals with deep insights into business data strategy.</li>
                <li><strong>Career Advancement:</strong> Equip yourself for roles in business intelligence, corporate reporting, and analytics consultancy.</li>
              </ul>
            </div>

            {/* Who Can Apply */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Who Can Apply?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>BI professionals seeking to specialize in Power BI.</li>
                <li>Data analysts aiming to leverage advanced visualization tools.</li>
                <li>Students and newcomers to the field of business intelligence.</li>
              </ul>
            </div>

            {/* Curriculum Section */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Curriculum</h2>
              <div className="space-y-3">
                {[
                  "Introduction Of Power Bi",
                  "Power Query",
                  "Merge Queries and Append Queries",
                  "Data Analysis Expressions",
                  "Visualization",
                  "Grouping, Binning & Sorting",
                  "Dashboards Development",
                  "Projects"
                ].map((item, index) => {
                  if (item === "Introduction Of Power Bi") {
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
                          <div className="font-bold text-black">Introduction Of Power Bi</div>
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
                            <div className="font-bold text-black">Pbi Desktop Installation Power Bi Desktop & Power Bi Service Overview</div>
                            <li>Power Bi Desktop Software Installation</li>
                            <li>Download & Installation Of Power Bi Desktop Software</li>
                            <li>What Are The Prerequisites To Install Power Bi Desktop Software</li>
                            <div className="font-bold text-black">Power Query Software Overview</div>

                            <li>Overview Of Power Query / Power Query Editor</li>
                            <li>How To Open Power Query / Power Query Editor Software</li>
                            <li>Connecting To Data Sources And Extracting The Data</li>
                            <li>Establish Connection To The Excel Source, Sql Server</li>
                            <li>Importing Data Into Power Query Editor</li>
                            <li>Transforming Data Into Power Query Editor Using Gui Options</li>
                            <li>Loading The Data Into Power Pivot</li>
                            <li>Understanding The M(Mashup) Language Behind The Gui Options</li>
                            <div className="font-bold text-black">Power Pivot Software Overview</div>
                            <li> Understanding About Power Pivot – A In Memory Columnar Database</li>
                            <li>Advantage Of In Memory Columnar Database</li>
                            <li>Power Pivot – Xvelocity In-Memory Analytics Engine (Previously Called Vertipaq)</li>
                            <li>Overview Of Data Modeling – Model View (Previously Relationship View)</li>
                            <li>Enhancing The Data Model – Dax (Data Analysis Expressions) Language – Data View</li>
                            <div className="font-bold text-black">Power View Software Overview</div>
                            <li> Overview Of Visualizations, Fields, Fields Wells </li>
                            <li>Understanding Dimension Column & Fact Columns</li>
                            <li>Visualizing The Data Using Power View And Power Maps – Report View</li>
                            <li>Saving Report</li>
                            <li>Publishing The Report To Power Bi Service</li>
                            <div className="font-bold text-black">Power Bi Software Overview</div>
                           
                            <li>Logon To Power Bi Service</li>
                            <li>Share The Reports With Clients</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Power Query") {
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
                          <div className="font-bold text-black"> Power Bi Desktop User Interface</div>
                        
                          <li>Understanding Power Bi Desktop User Interface</li>
                          <li>Fields Pane, Visualization Pane, Filters Pane</li>
                          <li>Ribbon Multiple Views (Report View, Data View & Model View)</li>
                          <li>Report Canvas Pages Selection</li>
 
<div className="font-bold text-black">Building Blocks Of Power Bi</div>

<li>Datasets, Visualizations, Reports, Dashboards & Tiles</li>
<div className="font-bold text-black">Power Ǫuery</div>

<p>Introduction To Power Ǫuery &Power Ǫuery Editor User Interface</p>

<li>Overview Of Power Ǫuery / Ǫuery Editor</li>
<li>How To Open Power Ǫuery /Ǫuery Editor</li>
<li>Extracting The Data From Data Sources</li>
<li>Transforming The Data Using Gui Options</li>
<li>Loading The Data In Power Pivot</li>
<li>Ǫuery Editor Ui (Ǫueries Pane, Data Pane / Results Pane, Power Ǫuery Ribbon)</li>
<li>Ǫuery Settings, Pane Applied Steps, Formula Bar</li>
<li>Advanced Editor, Ǫuery Dependencies</li>
<li>Understanding Power Ǫuery Conceptually</li>
 
<div className="font-bold text-black">Data Processing, Data Types And Filters In Power Ǫuery</div>

<li>How Data Processed In Power Ǫuery</li>
<li>Data Types, Changing The Data Type Of A Column, Detect Data Type</li>
<li>Filters In Power Query And Their Purpose</li>
<li>Types Of Filters In Power Ǫuery (Basic Filtering, Advanced Filtering)</li>
<li>Auto Filter / Basic Filtering</li>
<li>Filter A Column Using Advanced Text Filters, Number Filters, Data Filters</li>
<li>Filter Multiple Columns</li>
<div className="font-bold text-black">Inbuilt Column Transformation</div>

<li>Remove Columns/Remove Other Columns, Choose Cloumns, Go To Column</li>
<li>Name Or Rename A Column</li>
<li>Reorder Columns Or Sort Columns (Move Left, Right, To Beginning, To End)</li>
<li>Column From Examples (From All Columns, From Selection)</li>
<li>Add Column / Custom Column</li>
<li>Duplicate Column, Split Column, Merge Columns</li>
<li>Pivot, Unpivot Columns, Transpose Columns</li>
<li>Replace Values, Remove Empty</li>
 
<div className="font-bold text-black">In Built Row Transformations</div>

<li>Header Row Or Use First Row As Header, Use Header As First Row</li>
<li>Keep Top Rows, Keep Bottom Rows, Keep Range Of Rows</li>
<li>Keep Duplicates, Keep Errors</li>
<li>Remove Top Rows, Remove Bottom Rows, Remove Alternative Rows</li>
<li>Remove Duplicates, Remove Blank Rows, Remove Errors</li>
<li>Group Rows / Group By</li>

                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Merge Queries and Append Queries") {
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
                          <div className="font-bold text-black">Merge Queries/Join Tables</div>
                            <li>Merge Queries, Merge Queries As New</li>
                            <li>Need Of Merge Queries, Minium Requirements To Perform Merge Queries</li>
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
                            <div className="font-bold text-black">Append Ǫueries / Union All Tables</div>

                            <li>Append Ǫueries, Append Ǫueries As New</li>
                            <li>Minimum Requirements To Perform Append Ǫueries</li>
                            <li>Append Two Tables, Append Three Or More Tables</li>
                            <li>Folder As Source</li>
                            <li>Appending Multiple Files Of Same Type From A Folder Using Single Ǫuery</li>
                            <li>Appending Multiple Excel Files And Multiple Sheets Using Single Ǫuery</li>
                            <li>Union All, How To Get Union Result</li>
<div className="font-bold text-black">Ǫuery Options</div>

<li>Copy Ǫuery, Paste Ǫuery, Delete Ǫuery, Rename Ǫuery</li>
<li>Enable Load, Include In Report Refresh</li>
<li>Duplicate Ǫuery, Reference Ǫuery</li>
<li>Move To Group, Move Up, Move Down</li>
<li>Create Function, Convert To Parameter</li>
<li>Advanced Editor, Properties</li>
<div className="font-bold text-black">How Tab Options</div>

<li>Close & Apply, Close</li>
<li> New Source, Recent Sources, Enter Data, Data Source Settings</li>
<li>Manage Parameters (Manage Parameters, Edit Parameters, New Parameters)</li>
<li>Suggested Values (Any Value, List Of Values, Ǫuery), Convert To List</li>
<li>Ǫuery Parameters And Power Bi Templates</li>
<li>.Pbix(Power Bi File) And .Pbit(Power Bi Template File)</li>
<li>Refresh Preview, Refresh All, Cancel Refresh</li>
<li>Sorting Data</li>
<div className="font-bold text-black">Transform Tab Options</div>

<li>Reverse Rows, Count Rows, Replace Values, Replace Errors, Fill Down, Fill Up</li>
<li>Text Column, Number Column, Date &Time Column Options</li>
<li>Structured Column (Expand, Aggregate, Extract Values)</li>
<li>Run R Script, Run Python Script</li>
<div className="font-bold text-black">Add Column Tab Options</div>

<li>Create Custom Function, Invoke Custome Function</li>
<li>Conditional Column, Index Column, Duplicate Column</li>
<li>From Text, From Number, From Date & Time Column Options View Tab, Tools Tab & Help Tab Options</li>
 
<div className="font-bold text-black">Power Pivot Software Overview</div>

<li>Understanding About Power Pivot – A In Memory Columnar Database</li>
<li>Advantage Of In Memory Columnar Database</li>
<li>Power Pivot – Xvelocity In-Memory Analytics Engine (Previously Called Vertipaq)</li>
<li>Overview Of Data Modeling – Model View (Previously Relationship View)</li>
<li>Enhancing The Data Model – Dax (Data Analysis Expressions) Language- Data View</li>
<div className="font-bold text-black">Power Bi Data Modeling – Model View (Previously Relationship View)</div>

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
                    );
                  } else if (item === "Data Analysis Expressions") {
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
                          <div className="font-bold text-black">Pbi Desktop Installation Power Bi Desktop & Power Bi Service Overview</div>
                            <li>What Is Dax (Data Analysis Expressions) Language – Functional Language</li>
                            <li>New Column, New Measure / Quick Measure, New Table</li>
                            <li>Dax Table And Column Name Syntax</li>
                            <li>Creating New Column, Creating New Measure</li>
                            <li>Implicit Measures, Explicit Measures</li>
                            <li>Difference Between New Columns & New Measures</li>
                            <li>Dax Operators, Types Of Operators</li>
                            <li>Arithmetic Operators, Comparison Operators</li>
                            <li>Text Concatenation Operator, Logical Operators</li>
                            <div className="font-bold text-black">  Dax Function – Categories</div>
                          
                            <li>Text Function</li>
                            <li>Logical Functions</li>
                            <li>Date & Time Functions</li>
                            <li>Filter Functions</li>
                            <li>Math & Statistical Functions</li>
                            <li>Time Intelligence Functions</li>
<div className="font-bold text-black">Dax Text Functions</div>

<li>Len, Concatenate (&)</li>
<li>Left, Right, Mid</li>
<li>Upper, Lower</li>
<li>Trim, Substitute, Replace, Blank</li>
<div className="font-bold text-black">Dax Logical Functions</div>

<li>If, Nested If</li>
<li>True, False, Not, Or, In, And</li>
<li>Iferror</li>
<li>Switch</li>
 <li>Dax Date & Time Functions</li>
<li>Creating Date Dimension Table For Performing Time Intelligence Analysis</li>
<li>Year, Ǫuarter, Month, Day</li>
<li>Weekday, Weeknum</li>
<li>Format (Text Function) - Month Name, Weekday Name</li>
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
<div className="font-bold text-black">Dax Time Intelligence Functions</div>

<li>Time Intelligence Introduction</li>
<li>Date Dimension Table, Mark As Date Table</li>
<li>Totalmtd, Totalǫtd, Totalytd</li>
<li>Previousday, Previousmonth, Previousǫuarter, Previousyear</li>
<li>Nextday, Nextmonth, Nextǫuarter, Nextyear</li>
<li>Sameperioodlastyear</li>
<li>Yoy Growth, Ǫoǫ Growth, Mom Growth</li>
<li>Firstdate, Lastdate</li>
<div className="font-bold text-black">Ǫuick Measures</div>

<li>Creating Measures Without Writing The Dax Formula Using Ǫuick Measures</li>
<li>Sales Yoy%, Sales Ytd, Sales Mtd</li>
<li>Report View / Power View</li>
<li>Report View User Interface / Power Bi Desktop User Interface</li>
<li>Fields Pane, Visualizations Pane, Filters Pane</li>
<li>Ribbon, Multiple Views, Report Canvas, Pages Section</li>
<li>Fields, Filed Wells, Formatting, Analytics</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Visualization") {
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
                          <div className="font-bold text-black">Visuals Interactions</div>
                          

                          <li>Interaction Type (Highlight, Filter, None)</li>
                          <li>Visual Interactions Default Behavior</li>
                          <li>Changing The Default Interaction Behavior, Edit Interactions</li>
<div className="font-bold text-black">Filters In Power View</div>

<li>Filters, Filter Types In Power View</li>
<li>Filters On This Visual, Filters On This Page, Filters On All Pages</li>
<li>Drill Through Filters, Cross Report Drill Through, Keep All Filters</li>
<li>Filter Sub Types – Basic Filtering, Advanced Filtering, Top N, Relative Date Filtering</li>
<li>Numeric Field Filters, Text Filed Filters, Date And Time Field Filters</li>
<div className="font-bold text-black">Hierarchies And Drill-Down Reports</div>

<li>Hierarchy Introduction, Default Date Hierarchy</li>
<li>Creating Hierarchy, Creating Custom Date Hierarchy, Change Hierarchy Levels</li>
<li>Drill Actions- Drill Down, Drill Up, Show Next Level, Expand Next Level</li>
<li>Apply Drill Down Filters To Selected Visual</li>
<div className="font-bold text-black">Power Bi Visualizations</div>

<li>Visualizing Data, Why Visualizations</li>
<li>Visualization Types, Field Wells</li>
<li>Visuals For Filtering, Visualizing Categorial Data, Visualizing Trend Data</li>
<li>Visualizing Kpi Data, Visualizing Tabular Data, Visualizing Geographical Data</li>
<li>Leveraging Power Bi Custom Visuals</li>
<div className="font-bold text-black">Visuals For Filtering</div>

<li>Slicer Visualization, When To Use A Slicer</li>
<li>Create And Format Slicer Visualization</li>
<li>Hierarchy Slicer (Custom Visualization)</li>
<li>When To Use A Hierarchy Slicer, Create And Format Hierarchy Slicer</li>
<li>Advantage Of Hierarchy Slicer</li>
<li>Play Axis (Dynamic Slicer) – Custom Visualization</li>
<li>When To Use A Play Axis Visual, Create And Format Play Axis Visual</li>
<div className="font-bold text-black">Visualizing Categorical Data</div>

<li>Purpose Of Pie And Donut Charts, Create And Format Pie And Donut Charts</li>
<li>Purpose Of Tree Map Visual, Create And Format The Tree Map Visual</li>
<li>Purpose Of Bar & Column Charts</li>
<li>Create And Format Bar And Column Charts</li>
<li>Create And Format Stacked Bar Charts, Stacked Column Chart</li>
<li>Create And Format Clustered Bar Chart, Clustered Column Chart</li>
<li>Create And Format 100% Stacked Bar Chart, 100% Stacked Column Chart</li>
<li>Purpose Of Scatter Chart, Create And Format Scatter Chart</li>
 
<div className="font-bold text-black">Visualizing Trend Data</div>

<li>Purpose Of Line And Area Charts</li>
<li>Create And Format Line Charts, Area Charts, Stacked Area Charts</li>
<li>Combo Charts</li>
<li>Create And Format Line And Stacked Column Chart, Line And Clustered Column Chart</li>
<li>Create And Format Ribbon Chart, Waterfall Chart</li>
<div className="font-bold text-black">Visualizing Kpi Data</div>

<li>Create And Format Gauge Visual, Kpi Visual</li>
<li>Create And Format Card Visualization, Multi Row Card</li>
<li>Create And Format Funnel Chart</li>
<div className="font-bold text-black">Visualizing Tabular Data</div>

<li>Create And Format Table Visual, Matrix Visualization</li>
<div className="font-bold text-black">Visualizing Geographical Data</div>

<li>Create And Format Map Visual, Filled Map Visual</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Grouping, Binning & Sorting") {
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
                          <div className="font-bold text-black"> Grouping, Binning & Sorting</div>
                         
                          <li>Grouping And Binning Introduction</li>
                          <li>Using Grouping, Creating Groups On Text Columns</li>
                          <li>Using Binning, Creating Bins On Numbers Column And Date Columns</li>
                          <li>Sorting Data In Visuals, Changing The Sort Column, Changing The Sort Order</li>
                          <li>Sort Using Column That Is Not Used In The Visualization Tooltip Page</li>
                          <li>Create A Report Tooltip Page, Configure Your Tooltip Report Page</li>
                          <li>Manually Setting A Report Tooltip</li>
<div className="font-bold text-black">Bookmarks, Selection Pane & Buttons</div>


<li>Changing The Chart Type Dynamically</li>
<li>Changing The Axis Of Chart Dynamically</li>
<div className="font-bold text-black">Power Bi Service Introduction</div>

<li>Power Bi Service Introduction, Power Bi Cloud Architecture</li>
<li>Cloud Vs. On Premise</li>
<li>Creating Power Bi Service Account, Sign In To Power Bi Service Account</li>
<li>Power Bi Pro & Power Bi Premium</li>
<li>My Workspace & Project Workspace</li>
<div className="font-bold text-black">Adding Dataset To Power Bi Service And Creating Multiple New Reports</div>

<li>Publishing Reports To The Power Bi Service, Import / Getting The Report To Pbi Service</li>
<li>Creating Multiple Reports Using Dataset</li>
<li>Power Bi Datasets Live Connection Using Desktop To Create New Reports</li>
<li>Creating New Reports In Cloud Using Published Datasets</li>
<li>Shared And Certified Datasets, Sharing Dataset Across Multiple Projects</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Dashboards Development") {
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
                          <div className="font-bold text-black">Pbi Desktop Installation Power Bi Desktop & Power Bi Service Overview</div>
                            <li>Dashboard, Creating Dashboard Using Multiple Reports</li>
                            <li>Pin Visuals And Pin Live Report Pages To Dashboards</li>
                            <li>Advantages Of Dashboards</li>
                            <li>Interacting With Dashboards</li>
                            <li>Adding Tiles To Dashboards</li>
                            <li>Web Content, Image, Text Box, Video</li>
                            <li>Formatting Dashboard</li>
                            <div className="font-bold text-black">Pbi Desktop Installation Power Bi Desktop & Power Bi Service Overview</div>
                            <li>Building Blocks Of Power Bi</li>
                            <li>Datasets, Visualizations, Reports, Dashboards & Tiles</li>
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
                            <li>Hands on Experience with Real time Projects</li>
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
                Why Pursue a Career in Business Intelligence with Power BI?
              </h1>
              
              <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>High Demand: Organizations increasingly rely on informed decision-making supported by real-time data visualization.</li>
                  <li>Lucrative Opportunities: Strong demand for BI professionals with specific skills in tools like Power BI.</li>
                  <li>Strategic Impact: Play a crucial role in strategic decision-making processes in diverse industries.</li>
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
                  question: "What specific tools and techniques will I master in the Power BI course?",
                  answer: "Skills in using Power BI Desktop, DAX language for dynamic calculations, and Power Query for data transformation."
                },
                {
                  question: "What is the importance of data visualization in business intelligence?",
                  answer: "Crucial for interpreting complex datasets and communicating findings effectively to stakeholders."
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
            
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${courseimg10})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Tableau</h3>
                  <p className="text-[#666666] font-bold text-lg">Buy for ₹15,000</p>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${courseimg10})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Machine Learning</h3>
                  <p className="text-[#666666] font-bold text-lg">Buy for ₹20,000</p>
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