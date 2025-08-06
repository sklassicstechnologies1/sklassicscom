// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0A0D17] text-white px-6 py-40 relative font-poppins overflow-hidden">
//       {/* Decorative Big Dots */}
//       <div className="absolute top-0 right-0 w-[180px] h-[180px] z-[1] flex flex-col items-end justify-start pointer-events-none">
//         <div className="w-[120px] h-[120px] mt-5 bg-[#ffe066] rounded-full opacity-85"></div>
//         <div className="w-[60px] h-[60px] -mt-8 mr-[70px] bg-[#b3c6e0] rounded-full opacity-70"></div>
//       </div>

//       {/* Heading */}
//       <div className="relative z-10 text-[2.25rem] font-bold leading-snug md:text-[3.75rem]">
//         Where talent meets <br />
//         <span className="inline-block relative text-yellow-400">
//           opportunity
//           <span className="absolute top-[-0.5rem] right-[-1rem] w-3 h-3 bg-yellow-400 rounded-full"></span>
//         </span>
//       </div>

//       {/* Content Grid */}
//       <div className="relative z-10 grid gap-6 mt-12 md:grid-cols-3">
//         {/* OUR DOMAINS */}
//         <section className="animate-fade-in-up delay-[300ms]">
//           <h4 className="text-yellow-400 text-sm font-semibold mb-4 tracking-wide">OUR DOMAINS</h4>
//           <ul className="flex flex-col gap-3 text-base">
//             {[
//               "sklassics.com", "sklassicstech.com", "sklassicsacademy.com",
//               "sklassics-lms.com", "sklassics-ai.com", "sklassicstutor.com",
//               "sklassics-quiz.com", "hanumancars.com", "vlrws.com",
//             ].map((domain) => (
//               <li key={domain} className="hover:text-[#0071bc] cursor-pointer">{domain}</li>
//             ))}
//           </ul>
//         </section>

//         {/* OUR SERVICES */}
//         <section className="animate-fade-in-up">
//           <h4 className="text-yellow-400 text-sm font-semibold mb-4 tracking-wide">OUR SERVICES</h4>
//           <ul className="flex flex-col gap-3 text-base">
//             {[
//               "IT Training & Placement Programs",
//               "Professional IT Services",
//               "Travel Application Services",
//               "Real Estate Platform Solutions",
//               "Online & offline Tutoring"
//             ].map((service) => (
//               <li key={service} className="hover:text-[#0071bc] cursor-pointer">{service}</li>
//             ))}
//           </ul>
//         </section>

//         {/* CTA Cards */}
//         <div className="flex flex-col gap-6">
//           {[
//             {
//               heading: "I want to enroll",
//               desc: "Find the right course for your learning journey"
//             },
//             {
//               heading: "I want to teach",
//               desc: "Inspire students and share your knowledge"
//             }
//           ].map((card, i) => (
//             <div key={i} className="border border-white rounded-xl p-6 hover:scale-[1.03] hover:-translate-x-3 hover:translate-y-3 transition-all duration-200 shadow-none hover:shadow-[12px_12px_0_0_#ffe066]">
//               <h3 className="text-lg font-semibold mb-2">{card.heading}</h3>
//               <p className="text-slate-400 text-sm">{card.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-slate-700 mt-12 pt-6 flex flex-col md:flex-row md:justify-between md:items-center text-sm text-slate-400 gap-4">
//         <div className="flex flex-wrap gap-4">
//           <span>© 2025 Sklassics Technologies</span>
//           <span>Privacy Policy</span>
//         </div>
//         <div className="text-base font-bold text-black bg-white px-6 py-3 rounded-full fixed bottom-6 right-6 z-[9999] shadow-lg cursor-pointer hover:bg-white transition">
//           +91 9392732341
//         </div>
//         <div className="text-xs">Web Design by Sklassics</div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0A0D17] text-white px-6 py-40 relative font-poppins overflow-hidden">
      {/* Decorative Big Dots */}
      <div className="absolute top-0 right-0 w-[180px] h-[180px] z-[1] flex flex-col items-end justify-start pointer-events-none">
        <div className="w-[120px] h-[120px] mt-5 bg-[#ffe066] rounded-full opacity-85"></div>
        <div className="w-[60px] h-[60px] -mt-8 mr-[70px] bg-[#b3c6e0] rounded-full opacity-70"></div>
      </div>

      {/* Heading */}
      <div className="relative z-10 text-[2.25rem] font-bold leading-snug md:text-[3.75rem]">
        Where talent meets <br />
        <span className="inline-block relative text-yellow-400">
          opportunity
          <span className="absolute top-[-0.5rem] right-[-1rem] w-3 h-3 bg-yellow-400 rounded-full"></span>
        </span>
      </div>

      {/* Content Grid */}
      <div className="relative z-10 grid gap-6 mt-12 md:grid-cols-3">
        {/* OUR DOMAINS */}
        <section className="animate-fade-in-up delay-[300ms]">
          <h4 className="text-yellow-400 text-sm font-semibold mb-4 tracking-wide">OUR DOMAINS</h4>
          <ul className="flex flex-col gap-3 text-base">
            {[
              { name: "sklassics.com", url: "https://sklassics.com/" },
              { name: "sklassicstech.com", url: "https://sklassicstech.com/" },
              { name: "sklassicsacademy.com", url: "https://share.google/KZ3l5sjewn4aQ2eUk" },
              { name: "sklassics-lms.com", url: "https://sklassicsacademy.com/lms" },
              { name: "sklassics-ai.com", url: "https://sklassics-ai.com/" },
              { name: "sklassicstutor.com", url: "https://sklassicstutor.com/" },
              { name: "sklassics-quiz.com", url: "https://sklassics-ai.com/" },
              { name: "hanumancars.com", url: "https://www.hanumancars.com/" },
              { name: "vlrws.com", url: "https://vlrws.com/" },
            ].map((domain) => (
              <li key={domain.name}>
                <a
                  href={domain.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0071bc] cursor-pointer"
                >
                  {domain.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* OUR SERVICES */}
        <section className="animate-fade-in-up">
          <h4 className="text-yellow-400 text-sm font-semibold mb-4 tracking-wide">OUR SERVICES</h4>
          <ul className="flex flex-col gap-3 text-base">
            {[
              { name: "IT Training & Placement Programs", url: "https://share.google/KZ3l5sjewn4aQ2eUk" },
              { name: "Professional IT Services", url: "https://sklassicstech.com/" },
              { name: "Travel Application Services", url: "https://www.hanumancars.com/" },
              { name: "Real Estate Platform Solutions", url: "https://vlrws.com/" },
              { name: "Online & offline Tutoring", url: "https://sklassicstutor.com/" },
            ].map((service) => (
              <li key={service.name}>
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0071bc] cursor-pointer"
                >
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA Cards */}
        <div className="flex flex-col gap-6">
          {[
            {
              heading: "I want to enroll",
              desc: "Find the right course for your learning journey"
            },
            {
              heading: "I want to teach",
              desc: "Inspire students and share your knowledge"
            }
          ].map((card, i) => (
            <div
              key={i}
              className="border border-white rounded-xl p-6 hover:scale-[1.03] hover:-translate-x-3 hover:translate-y-3 transition-all duration-200 shadow-none hover:shadow-[12px_12px_0_0_#ffe066]"
            >
              <h3 className="text-lg font-semibold mb-2">{card.heading}</h3>
              <p className="text-slate-400 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 mt-12 pt-6 flex flex-col md:flex-row md:justify-between md:items-center text-sm text-slate-400 gap-4">
        <div className="flex flex-wrap gap-4">
          <span>© 2025 Sklassics Technologies</span>
          {/* <span>Privacy Policy</span> */}
        </div>
        <div className="text-base font-bold text-black bg-white px-6 py-3 rounded-full fixed bottom-6 right-6 z-[9999] shadow-lg cursor-pointer hover:bg-white transition">
          +91 9392732341
        </div>
        <div className="text-xs gap-4"> <span>Privacy Policy </span>      Web Design by Sklassics </div>
      </div>
    </footer> 
  );
};

export default Footer;
