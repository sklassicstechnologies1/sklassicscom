import React, { useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Varun Kumar",
    role: "Our Student",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "Sed blandit posuere nunc in hendrerit. Pellentesque placerat enim nec velit mattis finibus. Donec gravida ligula sit amet est gravida.",
    rating: 5,
  },
  {
    id: 2,
    name: "Karan Sharma",
    role: "Our Student",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "Curabitur at velit auctor, vehicula nulla non, semper lacus. Phasellus suscipit tempor enim a auctor.",
    rating: 4,
  },
  {
    id: 3,
    name: "Ananya Singh",
    role: "Alumni",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "Nullam ut turpis in nisl tincidunt fringilla. Aenean bibendum vel libero eget dapibus.",
    rating: 5,
  },
  {
    id: 4,
    name: "Mukund Vastav",
    role: "Top Performer",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    text: "Aliquam ut eros eu justo vehicula auctor a eget dui. Praesent vestibulum ex et nisl fermentum, ut feugiat magna tincidunt.",
    rating: 4,
  },
];

const WTestimonial = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (slider) {
          slider.scrollBy({ left: 320, behavior: "smooth" });
          if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
            slider.scrollTo({ left: 0, behavior: "smooth" });
          }
        }
      }, 3000);
    };

    startAutoScroll();
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="bg-white py-12 px-4 md:px-8">
      <div className="text-center mb-10">
        <p className="text-lg text-gray-500">Testimonial</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          See What Our Students Say
        </h1>
      </div>

      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-6 px-2 md:px-6 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 w-[90%] sm:w-[300px] md:w-[340px] lg:w-[360px] bg-white shadow-md rounded-xl p-5 space-y-4 text-center border"
            >
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="text-left">
                  <h3 className="font-semibold text-gray-800">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              <div className="text-sm text-gray-600 text-left overflow-hidden max-h-[80px]">
                {t.text}
              </div>

              <div className="text-yellow-400 text-lg">
                {"⭐".repeat(t.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WTestimonial;
