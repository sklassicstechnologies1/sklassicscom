import React from 'react';

const projects = [
  {
    title: 'Water Quality Prediction',
    subtitle: '"Efficient Prediction of Water Quality"',
    image: '/projectimg1.jpg',
  },
  {
    title: 'Beach Monitoring System',
    subtitle: '"Real-time Analysis of Environmental Conditions"',
    image: '/projectimg2.jpg',
  },
];

const Projects = () => {
  return (
    <div className="pt-[120px] max-w-5xl mx-auto px-4 py-12">
      {/* Heading with zoom animation */}
      <h2 
        className="text-3xl font-bold text-center mb-8 animate-in"
        style={{
          animation: 'zoomIn 1s ease-out',
        }}
      >
        Projects
      </h2>

      {/* Search Bar */}
      <div className="flex justify-center mb-12">
        <div className="flex w-full max-w-[920px]">
          <input
            type="text"
            placeholder="Search for courses"
            className="border px-4 py-2 w-full rounded-l-md text-base"
          />
          <button className="bg-gray-300 text-black px-6 py-2 rounded-r-md text-base font-medium">
            Search
          </button>
        </div>
      </div>

      {/* Project Cards */}
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div key={index} className="text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-2">
              {project.title}
            </h3>
            <p className="text-sm italic mb-4 text-gray-700">{project.subtitle}</p>
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>

      {/* Add the animation keyframes to the global styles */}
      <style jsx global>{`
        @keyframes zoomIn {
          from {
            transform: scale(0.5);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-in {
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default Projects;