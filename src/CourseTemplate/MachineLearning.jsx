import React from "react";
import Cert from "./Cert";
import courseimg4 from "../assets/courseimg4.jpg";

const MachineLearning = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white px-6 py-10 pt-32"
       
            style={{ backgroundImage: `url(${courseimg4})` }}
    
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-20 max-w-4xl">
          <h1 className="text-5xl font-extrabold mb-10">Machine Learning</h1>

          <ul className="space-y-4 text-lg leading-relaxed">
            <li><strong>Learn from Experts:</strong> Gain insights and knowledge from industry professionals who are leaders in the field.</li>
            <li><strong>Certification:</strong> Get certified as a Machine Learning expert to boost your career prospects.</li>
            <li><strong>Real Projects:</strong> Work on real-world projects using industry-standard tools and techniques.</li>
            <li><strong>60-Day Program:</strong> Engage in a comprehensive 60-day certification program with practical exercises and projects.</li>
            <li><strong>Skill Mastery:</strong> Master essential skills such as data analysis, model building, machine learning algorithms, and implementation.</li>
          </ul>

          <button className="mt-10 bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-yellow-300 transition-all">
            Buy for ₹20,000
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
              Accelerate your career and become a skilled Machine Learning expert through our comprehensive Machine Learning Course. Gain expertise in essential skills like data analysis, machine learning algorithms, model building, and implementation. Dive deep into the world of AI and ML, mastering various techniques and tools to enhance your proficiency and excel in the field of machine learning.
            </p>
                        <h2 className="text-3xl font-bold mb-4">Key Highlights</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Learn Data Analysis Fundamentals:</strong> Understand the basics of data analysis essential for machine learning.</li>
              <li><strong>Master Machine Learning Algorithms:</strong> Gain in-depth knowledge of various machine learning algorithms.</li>
              <li><strong>Build and Implement Models:</strong> Learn how to build, train, and implement machine learning models.</li>
              <li><strong>Hands-on Experience:</strong> Work on real-world projects to apply your learning in practical scenarios.</li>
              <li><strong>Industry-Standard Tools:</strong> Get proficient in using tools like Python, Tensor Flow, and more for machine learning tasks.</li>
              <li><strong>Develop Real-World Projects:</strong> Apply your knowledge to develop projects that address real-world problems and scenarios.</li>
              <li>Join our Machine Learning Course to gain in-depth knowledge and practical experience, preparing you for diverse roles in top global firms and making you a valuable asset in the industry.</li>
            </ul>
          </div>

          {/* Who Can Apply */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Who Can Apply?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Individuals with a Bachelor's Degree those keen on learning machine learning and AI.</li>
              <li>Beginners with Basic Knowledge of Python looking to specialize in machine learning.</li>
              <li>IT Professionals seeking career advancement through machine learning expertise.</li>
              <li>Data Analysts and Scientists Professionals aiming to enhance their skill set with machine learning techniques.</li>
              <li>Developers and Project Managers looking to expand their knowledge and skills in machine learning and AI.</li>
            </ul>
          </div>

          {/* Curriculum Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Curriculum</h2>
            <div className="space-y-3">
              {[
                "Python Basics",
                "Python With Data Science",
                "Task - 1",
                "Exploratory Data Analysis (EDA) With Dataset",
                "Task - 2",
                "Statistics And Math's",
                "Data Preprocessing And Feature Engineering",
                "Task - 3",
                "Machine Learning Alogorithm's",
                "Model Evaluation",
                "Task - 4",
                "Hyper Parameter Tuning",
                "Task - 5",
                "Projects"
              ].map((item, index) => {
                if (item === "Python Basics") {
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
                          <li>Operators</li>
                          <li>Conditional Statements</li>
                          <li>While Loop</li>
                          <li>For Loops</li>
                          <li>Functions</li>
                          <li>Lists</li>
                          <li>Tuple</li>
                          <li>Dictionary</li>
                          <li>Set</li>
                        </ul>
                      </div>
                    </details>
                  );
                } else if (item === "Python With Data Science") {
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
                          <div className="font-bold text-black">Python With Data Science</div>
                          <li>Numpy</li>
                          <li>Pandas</li>
                          <li>Matplotlib</li>
                          <li>Seaborn</li>
                          <li>Sklearn</li>
                          <div className="font-bold text-black">Data Visualization Using Matplotlib And Seaborn</div>
                          <li>Introduction To Matplotlib</li>
                          <li>Basic Plotting</li>
                          <li>Properties Of Plotting</li>
                          <li>Sub Plots</li>
                          <li>Line Plots</li>
                          <li>Pie Chart</li>
                          <li>Bar Graph</li>
                          <li>Scatter Plot</li>
                          <li>Histograms</li>
                          <li>Box Plots</li>
                          <li>Violin Plots</li>
                          <li>Dist Plots</li>
                          <li>Dis Plots</li>
                          <li>Kde Plots</li>
                        </ul>
                      </div>
                    </details>
                  );
                } else if (item === "Task - 1") {
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
                        <p className="list-disc list-inside space-y-1">
                         
                       Need to develop visualization charts based on the topics provided above.
                        </p>
                      </div>
                    </details>
                  );
                } else if (item === "Exploratory Data Analysis (EDA) With Dataset") {
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
                          {/* <div className="font-bold text-black">Exploratory Data Analysis (Eda) With Dataset</div> */}
                          <li>Uni-Variate Analysis</li>
                          <li>Bi-Variate Analysis</li>
                          <li>Multi-Variate Analysis</li>
                        </ul>
                      </div>
                    </details>
                  );
                } else if (item === "Task - 2") {
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
                        <p className="list-disc list-inside space-y-1">
                          
                        Univariate, multivariate, and bivariate analyses provide essential insights for understanding 
                        <br/>complex data relationships and enhancing decision-making processes.

<br/>The data set will be provided.
                        </p>
                      </div>
                    </details>
                  );
                } else if (item === "Statistics And Math's") {
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
                      className="group border border-purple-800 rounded overflow-hidden"
                    >
                      <summary className="bg-purple-900 text-white px-4 py-3 cursor-pointer flex justify-between items-center">
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
                } else if (item === "Task - 3") {
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
                        <p className="list-disc list-inside space-y-1">
                          
                        Apply  EDA

<br/>Enhance the provided data through effective preprocessing and feature engineering <br/>techniques.
                        </p>
                      </div>
                    </details>
                  );
                } else if (item === "Machine Learning Alogorithm's") {
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
                        <div className="font-bold text-black"> Supervised Learning </div>  
<li>Linear Regression</li>
<li>Polynomial Regression</li>
<li>Classification</li>
<li>Naïve Bayes</li>
<li>Logistic Regression</li>
<li>Knn</li>
<li>Decision Tree Svm</li>
<div className="font-bold text-black">Unsupervised Learning</div>
<li>K-Means</li>
<li>C-Means</li>
<li>K-Means</li>
<li>C-Means</li>
<li>Pca</li>
<div className="font-bold text-black">Ensemble Models</div>
<li>Random Forest Classifier</li>
<li>Random Forest Regressor</li>
<li>Ada Boost Classifier</li>
<li>Ada Boost Regressor</li>
<li>Xg Boost Classifier</li>
<li>Xg Boost Regressor</li>
<li>Cat Boost Classifier</li>
<li>Light Gbm</li>
<li>Gradient Boost Classifier</li>
<li>Gradient Boost Regressor</li>
<li>Voter Classifier</li>
<li>Stacking</li>
<li>Customised Ensemble Models</li>

                        </ul>
                      </div>
                    </details>
                  );
                } else if (item === "Model Evaluation") {
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
                        <div className="font-bold text-black"> Metrics</div>  
<li>Classification Report</li>
<li>Confusion Matrix</li>
<li>Accuracy Score</li>
<li>Crosstab</li>
<li>Fi-Score</li>
<li>Precision</li>
<li>Recall</li>
<li>Roc Curve</li>
<li>R Squared And Adjusted R Squared</li>
<li>Rmse, Mse</li>
<li>Evaluation Metrix</li>
<div className="font-bold text-black">Over Sampling And Under Sampling</div>
<li>Random Over Sampling</li>
<li>Random Under Sampling</li>
<li>Smote Over Sampling</li>
<li>Smote Under Sampling (Knn,Svm,Clustering)</li>
<li>Random Over Sampling</li>
<li>Random Under Sampling</li>
<li>Smote Over Sampling</li>
<li>Smote Under Sampling (Knn,Svm,Clustering)</li>
<div className="font-bold text-black">Cross Validation</div>
<li>K-Fold Cross Validation</li>
<li>C-Fold Cross Validation</li>

                        </ul>
                      </div>
                    </details>
                  );
                } else if (item === "Task - 4") {
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
                        <p className="list-disc list-inside space-y-1">
                          
                        Elevate the provided data by employing strategic preprocessing and advanced feature engineering methods <br/>to construct a robust Machine Learning model.
                        </p>
                      </div>
                    </details>
                  );
                } else if (item === "Hyper Parameter Tuning") {
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
                       
<li>Grid Search Cv</li>
<li>Randomized Cv</li>
<li>Optuna</li>
                        </ul>
                      </div>
                    </details>
                  );
               
                } else if (item === "Task - 5") {
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
                        <p className="list-disc list-inside space-y-1">
                          
                        Enhance the performance of your model by applying hyperparameter tuning to the task-4 .
                        </p>
                      </div>
                    </details>
                  );
                } else if (item === "Projects") {
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
      <Cert />
    </>
  );
};

export default MachineLearning;
