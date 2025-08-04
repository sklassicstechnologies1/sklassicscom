// import React, { useState, useEffect } from 'react'

// const slides = [
//   {
//     image: 'https://sklassics.com/wp-content/uploads/2024/06/home-1.jpg',
//     heading: 'Find courses that are best for your career',
//     subtext:
//       'Take online IT courses to advance your education and jumpstart your career in information technology.',
//   },
//   {
//     image: 'https://sklassics.com/wp-content/uploads/2024/07/homepage-3.jpg',
//     heading: 'Accelerate Your Career Growth & Upskill Yourself',
//     subtext:
//       'Join our expert-led programs to transform skills into impact. Real projects. Real progress.',
//   },
// ]

// const Hero = () => {
//   const [current, setCurrent] = useState(0)
//   const [animateKey, setAnimateKey] = useState(0) // used to re-trigger animations

//   // Auto slide
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => {
//         const next = prev === slides.length - 1 ? 0 : prev + 1
//         setAnimateKey(Date.now()) // update key to trigger animation
//         return next
//       })
//     }, 5000)

//     return () => clearInterval(timer)
//   }, [])

//   // Manual
//   const goToSlide = (index) => {
//     if (index !== current) {
//       setCurrent(index)
//       setAnimateKey(Date.now())
//     }
//   }

//   const prevSlide = () => {
//     const newIndex = current === 0 ? slides.length - 1 : current - 1
//     setCurrent(newIndex)
//     setAnimateKey(Date.now())
//   }

//   const nextSlide = () => {
//     const newIndex = current === slides.length - 1 ? 0 : current + 1
//     setCurrent(newIndex)
//     setAnimateKey(Date.now())
//   }

//   return (
// <section className="group relative w-full h-[100vh] overflow-hidden pt-[140px]">

//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
//         style={{
//           backgroundImage: `url('${slides[current].image}')`,
//         }}
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-[#11061f]/85" />

//       {/* Content */}
// <div className="relative z-10 flex items-center h-full px-6 md:px-12 lg:pl-32">
//         <div
//           key={animateKey} // ✅ re-mounts div to retrigger animation
//           className="max-w-2xl text-white text-left animate-fade-slide"
//         >
//           <h1 className="text-7xl sm:text-5xl md:text-6xl font-bold leading-snug md:leading-tight whitespace-pre-line mb-4">
//             {slides[current].heading}
//           </h1>
//           <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8">
//             {slides[current].subtext}
//           </p>
//           <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition">
//             Explore Courses
//           </button>
//         </div>
//       </div>

//       {/* Arrows */}
//       <button
//   onClick={prevSlide}
//   className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-orange-500"
// >
//   ‹
// </button>

// <button
//   onClick={nextSlide}
//   className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-orange-500"
// >
//   ›
// </button>


//       {/* Dots */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-2 h-2 rounded-full transition-all duration-300 ${
//               current === index ? 'bg-white scale-125' : 'bg-white/50'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Hero


import React, { useState, useEffect } from 'react'
import home1 from '../assets/home-1.png'
import home2 from '../assets/home-2.png'


const slides = [
  {
    image: home1,
    heading: 'Find courses that are best\nfor your career',
    subtext:
      'Grow your skillset with the best online courses and certifications in management, technology, programming, and data science.',
  },
  {
    image: home2,
    heading: 'Accelerate Your Career\nGrowth & Upskill Yourself',
    subtext:
      'Take online IT courses to advance your education and jumpstart your career in information technology.',
  },
]

const Hero = () => {
  const [current, setCurrent] = useState(0)
  const [animateKey, setAnimateKey] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const next = prev === slides.length - 1 ? 0 : prev + 1
        setAnimateKey(Date.now())
        return next
      })
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index) => {
    if (index !== current) {
      setCurrent(index)
      setAnimateKey(Date.now())
    }
  }

  const prevSlide = () => {
    const newIndex = current === 0 ? slides.length - 1 : current - 1
    setCurrent(newIndex)
    setAnimateKey(Date.now())
  }

  const nextSlide = () => {
    const newIndex = current === slides.length - 1 ? 0 : current + 1
    setCurrent(newIndex)
    setAnimateKey(Date.now())
  }

  return (
    <section className="group relative w-full min-h-[100vh] flex items-end overflow-hidden pb-[40px]">
      {/* Background Image */}
      <div
  className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-all duration-500"
  style={{
    backgroundImage: `url('${slides[current].image}')`,
  }}
/>


      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#11061f]/80" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:pl-32 pb-[40px]">
        <div
          key={animateKey}
          className="max-w-4xl text-white animate-fade-slide"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-snug md:leading-tight whitespace-pre-line mb-4">
            {slides[current].heading}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-3xl">
            {slides[current].subtext}
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition">
            Explore Courses
          </button>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-orange-500"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-orange-500"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current === index ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
