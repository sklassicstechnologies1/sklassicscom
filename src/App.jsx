import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import Courses from './components/Courses';
import Blog from './components/Blog';
import Projects from './components/Projects';
import ContactUs from './components/ContactUs';
import { Login } from './components/Login';
import Register from './components/Register';
import { WaterQuality } from './components/WaterQuality';
import Workshops from './Workshops/Workshops';
import DataSciencePage from './CourseTemplate/DataSciencePage';
import AiPage from './CourseTemplate/AiPage';
import MachineLearning from './CourseTemplate/MachineLearning';
import DataAnalytics from './CourseTemplate/DataAnalytics';
import NLP from './CourseTemplate/NLP';
import BigData from './CourseTemplate/BigData';
import PowerBi from './CourseTemplate/PowerBi';
import Sql from './CourseTemplate/Sql';
import Tableau from './CourseTemplate/Tableau';
import Excel from './CourseTemplate/Excel';
import ComputerVision from './CourseTemplate/ComputerVision';
import DeepLearning from './CourseTemplate/DeepLearning';
import GenerativeAi from './CourseTemplate/GenerativeAi';
import DataScience2 from './CourseTemplate/DataScience2';
import JavaFullStack from './CourseTemplate/JavaFullStack';
import PythonFullStack from './CourseTemplate/PythonFullStack';
import HtmlCssJs from './CourseTemplate/HtmlCssJs';
import Python from './CourseTemplate/Python';
import C from './CourseTemplate/C';
import Java from './CourseTemplate/Java';
import R from './CourseTemplate/R';
import Flask from './CourseTemplate/Flask';
import Aptitude from './CourseTemplate/Aptitude';
import BusinessAnalytics from './CourseTemplate/BusinessAnalytics';
import WorkshopNLP from './Workshops/WorkshopNLP';
import WorkshopPowerbi from './Workshops/WorkshopPowerbi';
import WorkshopML from './Workshops/WorkshopML';


function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/prediction-of-water-quality" element={<WaterQuality />} />

        <Route path="/workshops" element={<Workshops />} />
        <Route path="/workshop-nlp" element={<WorkshopNLP/>} />
        <Route path="/workshop-powerbi" element={<WorkshopPowerbi />}/>
        <Route path="/workshop-ml" element={<WorkshopML/>}/>
        
        {/* Course Routes */}
        <Route path="/data-science" element={<DataSciencePage/>} />
        <Route path="/ai" element={<AiPage/>} />
        <Route path="/data-science-basic" element={<DataScience2/>} />
        <Route path="/machine-learning" element={<MachineLearning/>} />
        <Route path="/data-analytics" element={<DataAnalytics/>} />
        <Route path="/natural-language-processing" element={<NLP/>} />
        <Route path="/big-data-analytics" element={<BigData/>} />
        <Route path="/business-analytics" element={<BusinessAnalytics/>} />
        <Route path="/powerbi" element={<PowerBi/>} />
        <Route path="/tableau" element={<Tableau/>} />
        <Route path="/excel" element={<Excel/>} />
        <Route path="/sql" element={<Sql/>} />
        <Route path="/computer-vision" element={<ComputerVision/>} />
        <Route path="/deep-learning" element={<DeepLearning/>} />
        <Route path="/generative-ai" element={<GenerativeAi/>} />
        <Route path="/java-full-stack" element={<JavaFullStack/>} />
        <Route path="/python-full-stack" element={<PythonFullStack/>} />
        <Route path="/html-css-js" element={<HtmlCssJs/>} />
        <Route path="/python-programming" element={<Python/>} />
        <Route path="/C-programming" element={<C/>} />
        <Route path="/Java-programming" element={<Java/>} />
        <Route path="/R-programming" element={<R/>} />
        <Route path="/Flask" element={<Flask/>} />
        <Route path="/Aptitude" element={<Aptitude/>} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App