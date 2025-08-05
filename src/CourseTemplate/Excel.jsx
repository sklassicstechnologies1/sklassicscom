// import React from "react";
// // import Cert from "./Cert";
// import courseimg11 from "../assets/courseimg11.jpg";
// import certImage from "../assets/cert.png";
// import azureImage from "../assets/azure.png";
// import courseimg6 from "../assets/courseimg6.jpg";
// import courseimg8 from "../assets/courseimg8.jpg";
// import courseimg9 from "../assets/courseimg9.jpg";
// import courseimg10 from "../assets/courseimg10.jpg";

// const Excel = () => {
//   return (
//     <>
//       {/* Hero Section */}
//       <section
//         className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white px-6 py-10 pt-32"
//         style={{ backgroundImage: `url(${courseimg11})` }}
//       >
//         <div className="absolute inset-0 bg-black/60 z-0" />

//         <div className="relative z-20 max-w-4xl">
//           <h1 className="text-5xl font-extrabold mb-10">Excel</h1>

//           <p className="space-y-4 text-lg leading-relaxed">
//           In The Natural Language Processing (NLP) Specialization, You Will Learn How
// To Design NLP Applications That Perform Question-Answering And Sentiment
// Analysis, Create Tools To Translate Languages, Summarize Text, And Even Build
// Chatbots. These And Other NLP Applications Will Be At The Forefront Of The
// Coming Transformation To An AI-Powered Future.
//           </p>
//           <h3>
//             <strong>
//            Course Duration : 45 days
//             </strong>
//           </h3>
          

//           <button className="mt-10 bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-yellow-300 transition-all">
//             Buy for ₹20,000
//           </button>
//         </div>
//       </section>

//       {/* Main Content Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
//         <div className="grid lg:grid-cols-3 gap-10">
//           {/* Left Side: Overview, Highlights, Who Can Apply */}
//           <div className="lg:col-span-2 space-y-10">
//             {/* Overview */}
//             <div>
//               <h2 className="text-3xl font-bold mb-4">Overview</h2>
//               <p className="mb-4">
//               The Study Of Natural Language Processing Involves Computers Understanding And Interacting With Human Speech. Key Features Include Textual Tokenization, Sentiment Analysis, Machine Translation, And Speech Recognition. What Areas Can Be Used Such As Chatbots, Language Translation Or Content Generation Using Transformer Models. This Course Will Explore NLP Basics, Real World Application And Recent Developments In The Field.
//               </p>
//               <h2 className="text-3xl font-bold mb-4">Key Highlights</h2>
//               <ul className="list-disc list-inside space-y-2">
//                 <li>One-on-One with Industry</li>
//                 <li>Expert Guidance</li>
//                 <li>1:1 Mock Interview</li>
//               </ul>
//             </div>

//             {/* Who Can Apply */}
//             <div>
//               <h2 className="text-3xl font-bold mb-4">Who Can Apply?</h2>
//               <ul className="list-disc list-inside space-y-2">
                
//                 <li>Individuals with a bachelor’s degree and a keen interest to learn AI and Data Science </li>
//                 <li>IT professionals looking for a career transition as Data Scientists and Artificial Intelligence Engineers </li>
//                 <li>Professionals aiming to move ahead in their IT career </li>
//                 <li>Artificial Intelligence and Business Intelligence professionals </li>
//                 <li>Developers and Project Managers </li>
//                 <li>Freshers who aspire to build their career in the field of Artificial Intelligence and Data Science </li>
//               </ul>
//             </div>

//             {/* Curriculum Section */}
//             <div>
//               <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Curriculum</h2>
//               <div className="space-y-3">
//                 {[
//                   "Fundamentals Of NLP",
//                   "NLP Techniques",
//                   "Statistical And Machine Learning Approaches",
//                   "Deep Learning for NLP",
//                   "Advanced NLP Models and Techniques",
//                   "NLP Applications",
//                   "Tools And Libraries For Nlp",
//                   "Case Studies and Practical Examples",
//                   "Ethical Considerations in NLP",
//                   "Evaluation Metrics",
//                   "Multimodal and Emerging NLP Trends",
//                   "Projects",
//                 ].map((item, index) => {
//                   if (item === "Python Basics") {
//                     return (
//                       <details
//                         key={index}
//                         className="group border border-purple-800 rounded overflow-hidden"
//                       >
//                         <summary className="bg-purple-900 text-white px-4 py-3 cursor-pointer flex justify-between items-center">
//                           <span>{item}</span>
//                           <span className="text-xl font-bold group-open:hidden">+</span>
//                           <span className="text-xl font-bold hidden group-open:block">-</span>
//                         </summary>
//                         <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
//                           <ul className="list-disc list-inside space-y-1">
//                             <li>Operators</li>
//                             <li>Conditional Statements</li>
//                             <li>While Loop</li>
//                             <li>For Loops</li>
//                             <li>Functions</li>
//                             <li>Lists</li>
//                             <li>Tuple</li>
//                             <li>Dictionary</li>
//                             <li>Set</li>
//                           </ul>
//                         </div>
//                       </details>
//                     );
//                   } else if (item === "Python With Data Science") {
//                     return (
//                       <details
//                         key={index}
//                         className="group border border-purple-800 rounded overflow-hidden"
//                       >
//                         <summary className="bg-purple-900 text-white px-4 py-3 cursor-pointer flex justify-between items-center">
//                           <span>{item}</span>
//                           <span className="text-xl font-bold group-open:hidden">+</span>
//                           <span className="text-xl font-bold hidden group-open:block">-</span>
//                         </summary>
//                         <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
//                           <ul className="list-disc list-inside space-y-1">
//                             <li>NumPy Fundamentals</li>
//                             <li>Pandas Data Manipulation</li>
//                             <li>Matplotlib Visualization</li>
//                             <li>Seaborn Statistical Graphics</li>
//                             <li>Data Cleaning & Preprocessing</li>
//                             <li>Statistical Analysis</li>
//                           </ul>
//                         </div>
//                       </details>
//                     );
//                   } else if (item === "Exploratory Data Analysis (EDA) With Dataset") {
//                     return (
//                       <details
//                         key={index}
//                         className="group border border-purple-800 rounded overflow-hidden"
//                       >
//                         <summary className="bg-purple-900 text-white px-4 py-3 cursor-pointer flex justify-between items-center">
//                           <span>{item}</span>
//                           <span className="text-xl font-bold group-open:hidden">+</span>
//                           <span className="text-xl font-bold hidden group-open:block">-</span>
//                         </summary>
//                         <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
//                           <ul className="list-disc list-inside space-y-1">
//                             <li>Data Understanding & Profiling</li>
//                             <li>Univariate Analysis</li>
//                             <li>Bivariate Analysis</li>
//                             <li>Multivariate Analysis</li>
//                             <li>Correlation Analysis</li>
//                             <li>Outlier Detection</li>
//                             <li>Missing Value Treatment</li>
//                             <li>Feature Engineering</li>
//                           </ul>
//                         </div>
//                       </details>
//                     );
//                   } else if (item === "Machine Learning Algorithms") {
//                     return (
//                       <details
//                         key={index}
//                         className="group border border-purple-800 rounded overflow-hidden"
//                       >
//                         <summary className="bg-purple-900 text-white px-4 py-3 cursor-pointer flex justify-between items-center">
//                           <span>{item}</span>
//                           <span className="text-xl font-bold group-open:hidden">+</span>
//                           <span className="text-xl font-bold hidden group-open:block">-</span>
//                         </summary>
//                         <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
//                           <ul className="list-disc list-inside space-y-1">
//                             <li>Linear Regression</li>
//                             <li>Logistic Regression</li>
//                             <li>Decision Trees</li>
//                             <li>Random Forest</li>
//                             <li>Support Vector Machines</li>
//                             <li>K-Nearest Neighbors</li>
//                             <li>K-Means Clustering</li>
//                             <li>Naive Bayes</li>
//                           </ul>
//                         </div>
//                       </details>
//                     );
//                   } else {
//                     return (
//                       <details
//                         key={index}
//                         className="group border border-purple-800 rounded overflow-hidden"
//                       >
//                         <summary className="bg-purple-900 text-white px-4 py-3 cursor-pointer flex justify-between items-center">
//                           <span>{item}</span>
//                           <span className="text-xl font-bold group-open:hidden">+</span>
//                           <span className="text-xl font-bold hidden group-open:block">-</span>
//                         </summary>
//                         <div className="bg-white px-4 py-3 text-gray-700 text-sm">
//                           <p>Module details coming soon.</p>
//                         </div>
//                       </details>
//                     );
//                   }
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* Right Side: Corporate Training Card */}
//           <div className="sticky top-24 self-start">
//             <div className="bg-blue-100 p-6 rounded-md shadow-md space-y-6">
//               <h3 className="text-xl font-bold">Corporate Training</h3>
//               <p>We give Corporate Employees the Training They Need to Learn & Lead</p>
//               <button className="bg-purple-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700 transition-all">
//                 CONTACT US
//               </button>
//               <div className="space-y-4 pt-6 border-t border-gray-300">
//                 <div className="flex items-center space-x-3">
//                   <span>📚</span>
//                   <span>Flexible Timings</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <span>⏱</span>
//                   <span>48 Hours Training</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <span>🎓</span>
//                   <span>Certification</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <span>📞</span>
//                   <span>24/7 Support</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Certificate Section */}
//       <div className="pt-16">
//         {/* Main Content Section */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Side: Career Information */}
//             <div className="space-y-6">
//               <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 uppercase tracking-wide">
//               Courses focused on building strong foundational skills for career growth
//               </h1>
              
//               <div className="text-gray-700 text-lg leading-relaxed space-y-4">
//                 <p>
//                 Taking Up An NLP Course Equips You With Skills To Develop Intelligent Systems That Understand And Generate Human Language. It Opens Career Opportunities In AI, Data Science, And Software Development, And Allows You To Work On Cutting-Edge Technologies Like Chatbots, Language Translation, And Sentiment Analysis, Driving Innovation And Enhancing User Experiences.
//                 </p>
//               </div>
//             </div>

//             {/* Right Side: Certificate */}
//             <div className="flex justify-center lg:justify-end">
//               <div className="relative">
//                 <img 
//                   src={certImage} 
//                   alt="Certificate of Completion" 
//                   className="w-full max-w-md h-auto shadow-2xl rounded-lg"
//                 />
                
//                 {/* Optional overlay for interactive elements */}
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                   <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded">
//                     <p className="text-sm">Certificate of Completion</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Student Success Stories Section */}
//         <div className="bg-gray-50 py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                 Student Success Stories
//               </h2>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {/* Student 1 */}
//               <div className="bg-white p-6 rounded-lg shadow-md text-center">
//                 <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
//                   <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-gray-800 mb-2">Sri Nikitha Srustu</h3>
//                 <p className="text-gray-600 text-sm">Graduate</p>
//                 <p className="text-gray-600 text-sm">Engineer Trainee,</p>
//                 <p className="text-gray-600 text-sm">Orange Business</p>
//               </div>

//               {/* Student 2 */}
//               <div className="bg-white p-6 rounded-lg shadow-md text-center">
//                 <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
//                   <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-gray-800 mb-2">Stalin Mudi raj</h3>
//                 <p className="text-gray-600 text-sm">Machine Learning</p>
//                 <p className="text-gray-600 text-sm">Associate, Amazon</p>
//               </div>

//               {/* Student 3 */}
//               <div className="bg-white p-6 rounded-lg shadow-md text-center">
//                 <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
//                   <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-gray-800 mb-2">Jahnavi Dometi</h3>
//                 <p className="text-gray-600 text-sm">Machine Learning</p>
//                 <p className="text-gray-600 text-sm">Associate, Amazon</p>
//               </div>

//               {/* Student 4 */}
//               <div className="bg-white p-6 rounded-lg shadow-md text-center">
//                 <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
//                   <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-gray-800 mb-2">Raji Reddy</h3>
//                 <p className="text-gray-600 text-sm">Software Engineer,</p>
//                 <p className="text-gray-600 text-sm">Accenture</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* FAQ Section */}
//         <div className="relative py-16">
//           {/* Background Image Overlay with Light Purple Tint */}
//           <div 
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `
//                 linear-gradient(
//                   rgba(124, 58, 237, 0.35), 
//                   rgba(124, 70, 237, 0.35)
//                 ),
//                 url(${azureImage})
//               `,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               backgroundAttachment: 'fixed',
//               opacity: 0.85
//             }}
//           ></div>
          
//           <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-white mb-4">
//                 Frequently Asked Questions
//               </h2>
//             </div>
//             <div className="space-y-4">
//               {[
//                 {
//                   question: "How can NLP be used in creative fields?",
//                   answer: "Natural Language Processing (NLP) enhances creativity by generating poems, composing music, and aiding in scriptwriting through dialogue generation and plot analysis. It facilitates personalized storytelling and artistic expression across various mediums."
//                 },
//                 {
//                   question: "What are the future directions of NLP?",
//                   answer: "Explainable AI: Developing NLP models that can explain their reasoning and decision-making processes.<br/>Conversational AI: Creating chatbots and virtual assistants that can have more natural and engaging conversations.<br/> Multilingual NLP: Improving the ability of NLP models to handle multiple languages seamlessly."
//                 },
//                 {
//                   question: "What are some career opportunities in NLP?",
//                   answer: "The field of NLP is growing rapidly, creating exciting career opportunities for:<br/>NLP Engineers:Develop and implement NLP models for various applications.<br/>Data Scientists:Prepare and analyse data used to train NLP models.</br>Computational Linguists: Bridge the gap between computer science and linguistics, working on the theoretical foundations of NLP."
//                 },
//                 {
//                   question: "How does NLP work?",
//                   answer: "NLP uses a combination of techniques, including machine learning and statistical methods, to analyze language data. This data can take the form of text, speech, or even handwriting."
//                 },
//                 {
//                     question: "What are some of the challenges in NLP?",
//                     answer: "NLP faces challenges such as ambiguity in language, difficulty in understanding context, identifying sarcasm and irony, adapting to domain-specific terminology, managing multilingual data, and addressing data scarcity issues."
//                 }
//               ].map((faq, index) => (
//                 <details
//                   key={index}
//                   className="group bg-white bg-opacity-90 rounded-lg overflow-hidden shadow-lg"
//                 >
//                   <summary className="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-gray-50 transition-colors">
//                     <span className="font-semibold text-gray-800 text-lg">{faq.question}</span>
//                     <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
//                       <svg
//                         className="w-4 h-4 text-white transform group-open:rotate-180 transition-transform duration-300"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </div>
//                   </summary>
//                   <div className="px-6 py-4 bg-white bg-opacity-95 border-t border-gray-200">
//                     <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
//                   </div>
//                 </details>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Related Courses Section */}
//         <div className="bg-white py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="mb-12">
//               <h2 className="text-4xl font-bold text-gray-800">
//                 Related Courses
//               </h2>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {/* Course 1: Natural Language Processing */}
//               <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//                 <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${courseimg6})` }}>
//                 </div>
//                 <div className="p-6 bg-gray-50">
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">Natural Language Processing</h3>
//                   <p className="text-gray-600 text-sm mb-3">2 Months</p>
//                   <p className="text-red-600 font-bold text-xl">₹20,000</p>
//                 </div>
//               </div>

//               {/* Course 2: Big Data Analytics */}
//               <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//                 <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${courseimg8})` }}>
//                 </div>
//                 <div className="p-6 bg-gray-50">
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">Big Data Analytics</h3>
//                   <p className="text-gray-600 text-sm mb-3">3 Months</p>
//                   <p className="text-red-600 font-bold text-xl">₹30,000</p>
//                 </div>
//               </div>

//               {/* Course 3: Tableau */}
//               <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//                 <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${courseimg10})` }}>
//                 </div>
//                 <div className="p-6 bg-gray-50">
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">Tableau</h3>
//                   <p className="text-gray-600 text-sm mb-3">45 Days</p>
//                   <p className="text-red-600 font-bold text-xl">₹15,000</p>
//                 </div>
//               </div>

//               {/* Course 4: Power BI */}
//               <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//                 <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${courseimg9})` }}>
//                 </div>
//                 <div className="p-6 bg-gray-50">
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">Power BI</h3>
//                   <p className="text-gray-600 text-sm mb-3">45 Days</p>
//                   <p className="text-red-600 font-bold text-xl">₹15,000</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Excel;


import React from "react";
import courseimg11 from "../assets/courseimg11.jpg";
import certImage from "../assets/cert.png";
import azureImage from "../assets/azure.png";
import courseimg6 from "../assets/courseimg6.jpg";
import courseimg8 from "../assets/courseimg8.jpg";
import courseimg9 from "../assets/courseimg9.jpg";
import courseimg10 from "../assets/courseimg10.jpg";

const Excel = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-left justify-center text-white px-6 py-10 pt-32"
        style={{ backgroundImage: `url(${courseimg11})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-20 max-w-4xl">
          <h1 className="text-5xl font-extrabold mb-10">Excel</h1>

          <p className="space-y-4 text-lg leading-relaxed">
            Master Excel from basic to advanced.
            <br />
            Gain certification in Excel data analysis.
            <br />
            Work on business-centric Excel projects.
          </p>
          {/* <h3 className="mt-4">
            <strong>Course Duration: 45 days</strong>
          </h3> */}

          <button className="mt-10 bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-yellow-300 transition-all">
            Buy for ₹10,000
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
                Excel in your career by mastering Microsoft Excel through this comprehensive course.
                Learn everything from basic formulas to advanced data analysis techniques and visualization methods.
                This course is designed to boost your productivity and enhance your data handling capabilities.
              </p>
              <h2 className="text-3xl font-bold mb-4">Key Highlights</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Interactive Learning: Engage with practical exercises covering various Excel functions and features</li>
                <li>Real-World Applications: Use Excel for complex business analytics, financial modeling, and data management tasks</li>
             
              </ul>
            </div>

            {/* Who Can Apply */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Who Can Apply?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Professionals seeking to enhance their data handling skills</li>
                <li>Business managers who rely on data for decision-making</li>
                <li>Students and hobbyists interested in data analysis</li>
                <li>Individuals with a bachelor's degree and a keen interest to learn data analysis</li>
                <li>IT professionals looking for a career transition as Data Analysts</li>
              </ul>
            </div>

            {/* Curriculum Section */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Curriculum</h2>
              <div className="space-y-3">
                {[
  "Basics of Excel",
  "Functions",
  "Lookup Functions",
  "Slicers And Charts",
  "Excel Dashboard",
  "Project"
].map((item, index) => {
                  if (item === "Basics of Excel") {
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
                            <li>Introduction To Excel Interface</li>
                            <li>Menu System and Ribbon</li>
                            <li>Fundamentals Of Spreadsheets</li>
                            <li>Personalizing Excel Options</li>
                            <li>Customizing The Ribbon</li>
                            <li>Basic Navigation and Shortcuts</li>
              </ul>
            </div>
                      </details>
                    );
                  } else if (item === "Functions") {
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
                            <li>Basic Functions (Sum, Average, Max, Min, Count)</li>
                            <li>Absolute, Mixed And Relative Referencing</li>
                            <li>Conditional Functions (SumIf, SumIfs, CountIf)</li>
                            <li>Text Functions (Upper, Lower, Proper, Left, Mid, Right)</li>
                            <li>Advanced Text Functions (Trim, Len, Exact, Concatenate)</li>
                            <li>Date and Time Functions</li>
                          </ul>
        </div>
      </details>
    );
                  } else if (item === "Lookup Functions") {
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
                            <li>Vlookup and Hlookup Functions</li>
                            <li>Vlookup With Helper Columns</li>
                            <li>Index And Match Functions</li>
                            <li>Reverse Lookup Using Choose Function</li>
                            <li>Nested Vlookup</li>
                            <li>Worksheet Linking Using Indirect</li>
                          </ul>
                        </div>
                      </details>
                    );
                  } else if (item === "Slicers And Charts") {
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
                            <li>Creating and Customizing Charts</li>
                            <li>Chart Types and Best Practices</li>
                            <li>Pivot Tables and Pivot Charts</li>
                            <li>Slicers for Interactive Filtering</li>
                            <li>Advanced Chart Formatting</li>
                            <li>Dynamic Charts with Formulas</li>
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


          {/* Curriculum Section
<div>
  <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Curriculum</h2>
  <div className="space-y-3">
    {[
      {
        title: "Basics of Excel",
        topics: [
          "Introduction To Excel",
          "• A Description Of The Interface",
          "• The Menu System",
          "• The Fundamentals Of Spreadsheets",
          "Personalizing Excel",
          "• Changing Excel's Default Options Using Autoconnect And Customizing It",
          "• Customizing The Ribbon"
        ]
      },
      {
        title: "Functions",
        topics: [
          "Using Functions",
          "• Sum, Average, Max, Min, Count",
          "• Absolute, Mixed And Relative Referencing",
          "Arithmetic Function",
          "• Sum If",
          "• Sumifs",
          "• Count If",
          "• Average If",
          "• Average Ifs",
          "Text Functions",
          "• Upper, Lower, Proper",
          "• Left, Mid, Right",
          "• Trim, Len, Exact",
          "• Concatenate",
          "• Find, Substitute"
        ]
      },
      {
        title: "Proofing And Formatting",
        topics: [
          "Formatting Cells With Number Formats",
          "• Font Formats",
          "• Alignment",
          "• Borders",
          "• Basic Conditional Formatting",
          "Protecting Excel - Excel Security",
          "• File Level Protection",
          "• Workbook, Worksheet Protection"
        ]
      },
      {
        title: "Lookup Functions",
        topics: [
          "Vlookup / Hlookup",
          "Vlookup With Helper Columns",
          "Creating Smooth User Interface Using Lookup",
          "Index And Match",
          "Reverse Lookup Using Choose Function",
          "Nested Vlookup",
          "Worksheet Linking Using Indirect"
        ]
      },
      {
        title: "Slicers And Charts",
        topics: [
          "Using Slicers, Filter Data With Slicers",
          "Various Charts",
          "• Bar Charts / Pie Charts / Line Charts",
          "Manage Primary And Secondary Axes"
        ]
      },
      {
        title: "Excel Dashboard",
        topics: [
          "Planning A Dashboard",
          "Adding Dynamic Contents To Dashboard",
          "Adding Tables And Charts To Dashboard"
        ]
      },
      {
        title: "Project",
        topics: [
          "Practical Assignments (Real Time Scenarios)"
        ]
      }
    ].map((module, index) => (
      <details
        key={index}
        className="group border border-purple-800 rounded overflow-hidden"
      >
        <summary className="bg-purple-900 text-white px-4 py-3 cursor-pointer flex justify-between items-center">
          <span className="font-bold">{module.title}</span>
          <span className="text-xl font-bold group-open:hidden">+</span>
          <span className="text-xl font-bold hidden group-open:block">-</span>
        </summary>
        <div className="bg-white px-4 py-3 text-gray-800 text-sm space-y-2">
          <ul className="space-y-2">
            {module.topics.map((topic, topicIndex) => (
              <li 
                key={topicIndex} 
                className={topic.startsWith("•") ? "pl-4" : "font-semibold mt-2"}
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </details>
    ))}
  </div>
</div> */}

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
                  <span>36 Hours Training</span>
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
                <ul className="list-disc list-inside space-y-2">
                  <li>Essential Tool: Pervasive use in business for data analysis and reporting</li>
                  <li>Improves Productivity: Automates tasks and organizes data efficiently</li>
                  <li>Versatile Applications: From simple data entry to complex financial models</li>
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
                  question: "Can I learn Excel online effectively?",
                  answer: "Yes, interactive tutorials and exercises can replicate classroom learning effectively."
                },
                {
                  question: "What advanced features of Excel are covered?",
                  answer: "Topics like macros, pivot tables, and advanced formulas."
                },
               
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

export default Excel;