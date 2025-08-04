import React from "react";

const features = [
  {
    title: "Best Coaching",
    description:
      "Learn from experienced mentors who simplify complex concepts and help you master skills with confidence. Our coaching ensures you’re equipped with the best strategies for success.",
    icon: "https://html.geekcodelab.com/courseshub/assets/images/our-features-icon-1.svg",
  },
  {
    title: "Convenient Practice",
    description:
      "Practice at your own pace with flexible resources designed to fit into your schedule. Strengthen your skills anytime, anywhere.",
    icon: "https://html.geekcodelab.com/courseshub/assets/images/our-features-icon-2.svg",
  },
  {
    title: "Video Lecture",
    description:
      "Access high-quality, easy-to-follow video lessons that cover every topic in detail. Replay and review whenever you need clarity or a refresher.",
    icon: "https://html.geekcodelab.com/courseshub/assets/images/our-features-icon-3.svg",
  },
  {
    title: "Live Practice",
    description:
      "Join interactive live sessions that simulate real-world challenges. Get instant feedback and refine your skills with guided practice.",
    icon: "https://html.geekcodelab.com/courseshub/assets/images/our-features-icon-4.svg",
  },
];

const WFeatures = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-16 bg-white">
      {/* Left Side - Text */}
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <h5 className="text-blue-600 font-semibold uppercase mb-2">
          Our Features
        </h5>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1d2951] leading-snug mb-8">
          Why We Are Path to <br /> Excellence & Success
        </h2>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-12 h-12"
              />
              <p className="text-gray-700 text-[1.05rem] leading-relaxed">
                <span className="font-semibold text-[#1d2951] block mb-1">
                  {feature.title}
                </span>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="relative w-full max-w-md lg:max-w-[400px]">
        <div className="absolute top-1/2 left-1/2 w-full aspect-square border-[20px] border-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 z-0" />
        <img
          src="https://html.geekcodelab.com/courseshub/assets/images/our-features-image.png"
          alt="Student"
          className="relative z-10 w-full"
        />
      </div>
    </div>
  );
};

export default WFeatures;
