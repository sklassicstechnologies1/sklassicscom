// import React, { useState } from "react";

// import Nlp from "../assets/nlp.jpg";
// import Ml from "../assets/Ml.png";
// import Deep from "../assets/dp.jpg";
// import Power from "../assets/pb.png";
// import Gen from "../assets/gai.jpg";
// import Ai from "../assets/aiagent.jpg";
// import SQL from "../assets/sql.jpg";
// import Excel from "../assets/ex.jpg";
// import Computer from "../assets/cv.jpg";
// import Eventcard from "../components/EventCard";

// const Wheadpart = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filter = [
//     { id: 1, Catageries: "All" },
//     { id: 2, Catageries: "Active" },
//     { id: 3, Catageries: "Coming soon" },
//   ];

//   const cardData = [
//     {
//       id: 1,
//       category: "Active",
//       title: "Natural Language Processing (NLP)",
//       Days: "5 Days",
//       date: "20-01-2025",
//       description: "Machines interpreting and responding to human language.",
//       videos: "75 Videos",
//       classes: "35 Classes",
//       originalPrice: "- 1hr",
//       rating: "⭐⭐⭐⭐⭐ (15 Reviews)",
//       image: Nlp,
//       link: "/Nlp",
//     },
//     {
//       id: 2,
//       category: "Active",
//       title: "Machine Learning",
//       Days: "5 Days",
//       date: "20-01-2025",
//       description: "Algorithms that learn from data to make decisions.",
//       videos: "50 Videos",
//       classes: "20 Classes",
//       originalPrice: "$80",
//       rating: "⭐⭐⭐⭐ (10 Reviews)",
//       image: Ml,
//       link: "/machinelearning",
//     },
//     {
//       id: 3,
//       category: "Coming soon",
//       title: "Deep Learning",
//       Days: "7 Days",
//       date: "00-00-0000",
//       description: "Neural networks for image, speech, and language tasks.",
//       videos: "100 Videos",
//       classes: "50 Classes",
//       originalPrice: "$140",
//       rating: "⭐⭐⭐⭐⭐ (20 Reviews)",
//       image: Deep,
//       link: "#",
//     },
//     {
//       id: 4,
//       category: "Coming soon",
//       title: "Power BI",
//       Days: "7 Days",
//       date: "00-00-0000",
//       description: "Visualize and share insights with dashboards and reports.",
//       videos: "60 Videos",
//       classes: "25 Classes",
//       originalPrice: "$60",
//       rating: "⭐⭐⭐⭐ (12 Reviews)",
//       image: Power,
//       link: "/powerbi",
//     },
//     {
//       id: 5,
//       category: "Coming soon",
//       title: "Computer Vision",
//       Days: "7 Days",
//       date: "00-00-0000",
//       description: "Enables machines to interpret and analyze visual data.",
//       videos: "80 Videos",
//       classes: "40 Classes",
//       originalPrice: "$100",
//       rating: "⭐⭐⭐⭐⭐ (18 Reviews)",
//       image: Computer,
//       link: "#",
//     },
//     {
//       id: 6,
//       category: "Coming soon",
//       title: "Generative AI",
//       Days: "5 Days",
//       date: "00-00-0000",
//       description: "Creates new content like text, images, or videos.",
//       videos: "90 Videos",
//       classes: "45 Classes",
//       originalPrice: "$160",
//       rating: "⭐⭐⭐⭐⭐ (22 Reviews)",
//       image: Gen,
//       link: "#",
//     },
//     {
//       id: 7,
//       category: "Coming soon",
//       title: "SQL",
//       Days: "5 Days",
//       date: "00-00-0000",
//       description: "Used to manage and query relational databases.",
//       videos: "40 Videos",
//       classes: "20 Classes",
//       originalPrice: "$50",
//       rating: "⭐⭐⭐⭐ (8 Reviews)",
//       image: SQL,
//       link: "#",
//     },
//     {
//       id: 8,
//       category: "Coming soon",
//       title: "Excel",
//       Days: "5 Days",
//       date: "00-00-0000",
//       description: "Analyze and visualize data with formulas and charts.",
//       videos: "30 Videos",
//       classes: "15 Classes",
//       originalPrice: "$40",
//       rating: "⭐⭐⭐⭐ (5 Reviews)",
//       image: Excel,
//       link: "#",
//     },
//     {
//       id: 10,
//       category: "Coming soon",
//       title: "AI Agent",
//       Days: "7 Days",
//       date: "00-00-0000",
//       description: "AI systems that automate decisions and actions.",
//       videos: "70 Videos",
//       classes: "35 Classes",
//       originalPrice: "$90",
//       rating: "⭐⭐⭐⭐ (14 Reviews)",
//       image: Ai,
//       link: "#",
//     },
//   ];

//   const filteredCards =
//     selectedCategory === "All"
//       ? cardData
//       : cardData.filter((card) => card.category === selectedCategory);

//   return (
//     <div className="w-full px-4 py-16 md:px-10 lg:px-16  min-h-screen font-[Segoe UI]">
//       <div className="text-center mb-10">
//         <h1 className="text-3xl sm:text-4xl font-bold text-white">
//           Build The Skills To Drive Your Career.
//         </h1>
//       </div>

//       <div className="flex flex-wrap justify-center gap-4 mb-12">
//         {filter.map((cate) => (
//           <button
//             key={cate.id}
//             onClick={() => setSelectedCategory(cate.Catageries)}
//             className={`px-5 py-2 rounded-full border transition-all text-sm md:text-base ${
//               selectedCategory === cate.Catageries
//                 ? "bg-black text-white border-black"
//                 : "bg-white text-gray-800 border-gray-300 hover:bg-black hover:text-white hover:border-black"
//             }`}
//           >
//             {cate.Catageries}
//           </button>
//         ))}
//       </div>

// <div className="flex flex-wrap justify-center gap-4 px-2 sm:px-4 lg:px-6">
//   {filteredCards.map((card) => (
//     <div key={card.id} className="h-full">
//       <Eventcard data={card} />
//     </div>
//   ))}
// </div>


//     </div>
//   );
// };

// export default Wheadpart;




import React, { useState } from "react";
import Nlp from "../assets/nlp.jpg";
import Ml from "../assets/Ml.png";
import Deep from "../assets/dp.jpg";
import Power from "../assets/pb.png";
import Gen from "../assets/gai.jpg";
import Ai from "../assets/aiagent.jpg";
import SQL from "../assets/sql.jpg";
import Excel from "../assets/ex.jpg";
import Computer from "../assets/cv.jpg";
import Eventcard from "../components/EventCard";

const Wheadpart = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filter = [
    { id: 1, Catageries: "All" },
    { id: 2, Catageries: "Active" },
    { id: 3, Catageries: "Coming soon" },
  ];

  const cardData = [
    {
      id: 1,
      category: "Active",
      title: "Natural Language Processing (NLP)",
      Days: "5 Days",
      date: "20-01-2025",
      description: "Machines interpreting and responding to human language.",
      videos: "75 Videos",
      classes: "35 Classes",
      originalPrice: "- 1hr",
      rating: "⭐⭐⭐⭐⭐ (15 Reviews)",
      image: Nlp,
      link: "/workshop-nlp", // This should match your route
    },
    {
      id: 2,
      category: "Active",
      title: "Machine Learning",
      Days: "5 Days",
      date: "20-01-2025",
      description: "Algorithms that learn from data to make decisions.",
      videos: "50 Videos",
      classes: "20 Classes",
      originalPrice: "$80",
      rating: "⭐⭐⭐⭐ (10 Reviews)",
      image: Ml,
      link: "/workshop-ml",
    },
    {
      id: 3,
      category: "Coming soon",
      title: "Deep Learning",
      Days: "7 Days",
      date: "00-00-0000",
      description: "Neural networks for image, speech, and language tasks.",
      videos: "100 Videos",
      classes: "50 Classes",
      originalPrice: "$140",
      rating: "⭐⭐⭐⭐⭐ (20 Reviews)",
      image: Deep,
      link: "#",
    },
    {
      id: 4,
      category: "Active",
      title: "Power BI",
      Days: "7 Days",
      date: "00-00-0000",
      description: "Visualize and share insights with dashboards and reports.",
      videos: "60 Videos",
      classes: "25 Classes",
      originalPrice: "$60",
      rating: "⭐⭐⭐⭐ (12 Reviews)",
      image: Power,
      link: "/workshop-powerbi",
    },
    {
      id: 5,
      category: "Coming soon",
      title: "Computer Vision",
      Days: "7 Days",
      date: "00-00-0000",
      description: "Enables machines to interpret and analyze visual data.",
      videos: "80 Videos",
      classes: "40 Classes",
      originalPrice: "$100",
      rating: "⭐⭐⭐⭐⭐ (18 Reviews)",
      image: Computer,
      link: "#",
    },
    {
      id: 6,
      category: "Coming soon",
      title: "Generative AI",
      Days: "5 Days",
      date: "00-00-0000",
      description: "Creates new content like text, images, or videos.",
      videos: "90 Videos",
      classes: "45 Classes",
      originalPrice: "$160",
      rating: "⭐⭐⭐⭐⭐ (22 Reviews)",
      image: Gen,
      link: "#",
    },
    {
      id: 7,
      category: "Coming soon",
      title: "SQL",
      Days: "5 Days",
      date: "00-00-0000",
      description: "Used to manage and query relational databases.",
      videos: "40 Videos",
      classes: "20 Classes",
      originalPrice: "$50",
      rating: "⭐⭐⭐⭐ (8 Reviews)",
      image: SQL,
      link: "#",
    },
    {
      id: 8,
      category: "Coming soon",
      title: "Excel",
      Days: "5 Days",
      date: "00-00-0000",
      description: "Analyze and visualize data with formulas and charts.",
      videos: "30 Videos",
      classes: "15 Classes",
      originalPrice: "$40",
      rating: "⭐⭐⭐⭐ (5 Reviews)",
      image: Excel,
      link: "#",
    },
    {
      id: 10,
      category: "Coming soon",
      title: "AI Agent",
      Days: "7 Days",
      date: "00-00-0000",
      description: "AI systems that automate decisions and actions.",
      videos: "70 Videos",
      classes: "35 Classes",
      originalPrice: "$90",
      rating: "⭐⭐⭐⭐ (14 Reviews)",
      image: Ai,
      link: "#",
    },
  ];

  const filteredCards =
    selectedCategory === "All"
      ? cardData
      : cardData.filter((card) => card.category === selectedCategory);

  return (
    <div className="w-full px-4 py-16 md:px-10 lg:px-16 min-h-screen font-[Segoe UI]">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1e1e1e]">
          Build The Skills To Drive Your Career.
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filter.map((cate) => (
          <button
            key={cate.id}
            onClick={() => setSelectedCategory(cate.Catageries)}
            className={`px-5 py-2 rounded-full border transition-all text-sm md:text-base ${
              selectedCategory === cate.Catageries
                ? "bg-black text-white border-black"
                : "bg-white text-gray-800 border-gray-300 hover:bg-black hover:text-white hover:border-black"
            }`}
          >
            {cate.Catageries}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-4 lg:px-6">
        {filteredCards.map((card) => (
          <Eventcard key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
};

export default Wheadpart;