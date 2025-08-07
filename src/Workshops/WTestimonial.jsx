import React, { useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "varun Kumar",
    role: "Our Student",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "Sed blandit posuere nunc in hendrerit. Pellentesque placerat enim nec velit mattis finibus. Donec gravida ligula sit amet est gravida.",
    rating: 5,
  },
  {
    id: 2,
    name: "karan Sharma",
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
    name: "Mukund vastav",
    role: "Top Performer",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    text: "Aliquam ut eros eu justo vehicula auctor a eget dui. Praesent vestibulum ex et nisl fermentum, ut feugiat magna tincidunt.",
    rating: 4,
  },
];

const WTestimonial = () => {
  const sliderRef = useRef(null);
  const sliderContentRef = useRef(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const slider = sliderRef.current;
    const sliderContent = sliderContentRef.current;
    let scrollInterval;
    let animationFrame;
  
    // Clone the testimonials for seamless looping
    const clonedTestimonials = [...testimonials, ...testimonials];
  
    const startAutoScroll = () => {
      if (!slider || !sliderContent || isScrollingRef.current) return;
  
      isScrollingRef.current = true;
      const cardWidth = 320; // Width of each testimonial card
      const scrollAmount = 2; // Increased from 1 to 2 (moves 2px per frame)
      const scrollSpeed = 16; // Reduced from 30 to 16ms (~60fps animation)
  
      const scroll = () => {
        if (!slider) return;
  
        slider.scrollLeft += scrollAmount;
  
        // Reset to start when reaching halfway (seamless loop)
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
  
        animationFrame = requestAnimationFrame(scroll);
      };
  
      animationFrame = requestAnimationFrame(scroll);
  
      return () => {
        cancelAnimationFrame(animationFrame);
        isScrollingRef.current = false;
      };
    };
  
    // Start scrolling after a brief delay
    const startDelay = setTimeout(startAutoScroll, 1000);
  
    return () => {
      clearTimeout(startDelay);
      cancelAnimationFrame(animationFrame);
      clearInterval(scrollInterval);
    };
  }, []);
  // Double the testimonials for seamless looping
  const displayTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="bg-white py-12 px-4 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-lg text-gray-500">Testimonial</p>
        <h1 className="text-3xl font-bold text-gray-800">See What Our Students Say</h1>
      </div>

      {/* Testimonial Slider */}
      <div className="relative w-full">
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto scroll-smooth whitespace-nowrap py-4 no-scrollbar"
          style={{ scrollbarWidth: 'none' }}
        >
          <div ref={sliderContentRef} className="flex gap-6">
            {displayTestimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[300px] md:w-[350px] bg-white rounded-xl shadow-md p-6"
              >
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm md:text-base line-clamp-3">
                    {testimonial.text}
                  </p>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WTestimonial;