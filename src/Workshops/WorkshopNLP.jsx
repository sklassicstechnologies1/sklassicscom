import React from 'react';
import Qr from '../assets/qrcode.jpg';
// import Logosk from "../assets/Logosk.png";

const WorkshopNLP = () => {
    return (
      <div className="flex flex-col min-h-screen bg-white text-black">
        <div className="flex flex-col w-[90%] mx-auto py-12 md:py-8 flex-grow">
          {/* Header Section */}
          <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
            {/* Content Section - Proper spacing and visibility */}
            <div className="flex flex-col items-center justify-center flex-1 order-2 md:order-1 pt-20 md:pt-0">
              <div className="w-full text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#000] break-words">
                  Natural Language Processing
                </h1>
                <hr className="w-16 border-t-4 border-[#4f1964] my-4 mx-auto" />
                <p className="text-base text-gray-600 mb-6">
                  Unlock the power of language with our hands-on NLP Workshop! Learn how machines understand, analyze, and respond to human language using real-world tools like sentiment analysis, chatbots, and transformer models.
                </p>
              </div>
              
              <div className="w-full flex flex-col items-center">
                <a 
                  href="#cta" 
                  className="inline-block px-6 py-3 text-base font-bold text-white bg-[#4f1964] rounded-lg cursor-pointer transition hover:bg-[#3a1249] text-center max-w-[250px] mx-auto mb-8 md:mb-0"
                >
                  Join Us
                </a>
                
                {/* Mobile Image - Shows below button */}
                <div className="md:hidden w-full mt-4">
                  <div 
                    className="bg-[url('https://themexriver.com/wp/ai-power/wp-content/uploads/2023/06/mft1.png')] bg-cover bg-center bg-no-repeat h-[18rem] w-full rounded-lg"
                    alt="NLP Workshop"
                  />
                </div>
              </div>
            </div>
            
            {/* Desktop Image - Shows on right */}
            <div className="hidden md:block flex-1 order-1 md:order-2 h-[25rem]">
              <div 
                className="bg-[url('https://themexriver.com/wp/ai-power/wp-content/uploads/2023/06/mft1.png')] bg-cover bg-center bg-no-repeat h-full w-full rounded-lg"
                alt="NLP Workshop"
              />
            </div>
          </div>
  
          <NlpSchedule />
          <NLPCTA />
        </div>
      </div>
    );
  };
// Internal Schedule Component with responsive grid
const NlpSchedule = () => {
  const workshopSchedule = [
    {
      id: 1,
      day: "Day - 1 (Part-1)",
      topics: [
        "Topics (Theory)",
        "Introduction to Natural Language Processing",
        "Text Processing",
        "Feature Extraction",
        "Modeling",
        "Text Processing",
        "Raw Text",
        "Noise Entity Removal",
        "Word Normalization",
      ],
    },
    {
      id: 2,
      day: "Day - 1 (Part-2)",
      topics: [
        "Standardizaton of Text",
        "Feature Extraction",
        "Bag of Words",
        "Count Vectorizer",
        "TF-IDF",
        "Modeling",
        "Topic Modeling",
        "Machine Learning Algorithms",
      ],
    },
    {
      id: 3,
      day: "Day - 2",
      topics: [
        "Topics(Working on Datasets)",
        "Text Processing",
        "Sentence Tokenization",
        "Removing Punctuation Marks",
        "StopWords",
        "Stemming",
        "Lemmatization",
      ],
    },
    {
      id: 4,
      day: "Day - 3",
      topics: [
        "Topics(Working on Datasets)",
        "Bag of Words",
        "Count Vectorizer",
        "TF-IDF",
      ],
    },
    {
      id: 5,
      day: "Day - 4",
      topics: ["Project 1", "Email Spam Classification using NLP"],
    },
    {
      id: 6,
      day: "Day - 5",
      topics: ["Project 2", "Movie Recommendation using NLP"],
    },
  ];

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#000]">WORKSHOP Agenda</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {workshopSchedule.map((day) => (
          <div 
            key={day.id} 
            className="bg-gray-50 p-6 rounded-lg shadow-md border-2 border-[#4f1964] transition-all duration-300 hover:border-[#3a1249] hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl">📅</span>
              <div>
                <p className="font-semibold">{day.day}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {day.topics.map((topic, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png"
                    alt=""
                    className="w-4 h-4 mt-1"
                  />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

// Internal CTA Component
const NLPCTA = () => {
  return (
    <div id="cta" className="flex flex-col md:flex-row gap-8 bg-gray-100 p-8 rounded-lg my-12 ">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4 text-[#000]">How to join?</h1>
        <h2 className="font-bold text-2xl md:text-3xl mb-4 text-[#4f1964]">Scan and Pay Amount ₹299/-</h2>
        <p className="flex items-start gap-2 mb-6">
          <span className="text-yellow-500">⚠️</span>
          Please share the screenshot to this WhatsApp number (6305490580) at
          your earliest convenience. Once received, we will promptly add you
          to the group.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold text-[#4f1964]">Call us now:</h3>
            <p>+91 (630) 549 0580</p>
          </div>
          <div>
            <h3 className="font-bold text-[#4f1964]">Get in touch:</h3>
            <p>revanthteja@sklassics.com</p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img src={Qr} alt="Payment QR Code" className="max-w-[250px] h-auto" />
      </div>
    </div>
  );
};

export default WorkshopNLP;