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
// import WebDevelopment from './CourseTemplate/WebDevelopment';
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

// import Business Analytics from './CourseTemplate/BusinessAnalytics';
// import NodeJs from './CourseTemplate/NodeJs';



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
        <Route path="/data-science" element={<DataSciencePage/>} />
        <Route path="/ai" element={<AiPage/>} />
        <Route path="/Data Science" element={<DataScience2/>} />
        <Route path="/MachineLearning" element={<MachineLearning/>} />
        <Route path="/DataAnalytics" element={<DataAnalytics/>} />
        {/* <Route path="/WebDevelopment" element={<WebDevelopment/>} /> */}
        <Route path="/Natural Language Processing" element={<NLP/>} />
        {/* <Route path="/Node Js" element={<NodeJs/>} /> */}
        {/* <Route path="/BusinessAnalytics" element={<BusinessAnalytics/>} /> */}
        <Route path="/Big Data Analytics" element={<BigData/>} />
        <Route path="/powerbi" element={<PowerBi/>} />
        <Route path="/Tableau" element={<Tableau/>} />
        <Route path="/Excel" element={<Excel/>} />
        <Route path="/SQL" element={<Sql/>} />
        <Route path="/ComputerVision" element={<ComputerVision/>} />
        <Route path="/DeepLearning" element={<DeepLearning/>} />
        <Route path="/GenerativeAi" element={<GenerativeAi/>} />


        {/* "Big Data Analytics": "/Big Data Analytics",
  "Power BI": "/Power BI",
  "Tableau": "/Tableau",
  "Excel": "/Excel",
  "SQL": "/SQL", */}

      </Routes>
      <Footer />

    </>
  )
}

export default App
