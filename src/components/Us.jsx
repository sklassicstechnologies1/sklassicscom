import React from 'react'

export const Us = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We are a team of seasoned professionals in the realm of IT technologies,
            with years of collective experience. Our passion lies in imparting
            high-quality education to learners worldwide, empowering them with
            the skills needed to thrive in today’s digital landscape.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Sklassics, we offer a diverse array of IT courses meticulously crafted
            to meet the demands of industry standards. Our curriculum covers
            everything from fundamental concepts to advanced techniques,
            ensuring comprehensive learning experiences that prepare our students
            for real-world challenges.
          </p>
        </div>

        {/* Image from URL */}
        <div className="flex justify-center">
          <img
            src="https://sklassics.com/wp-content/uploads/2024/06/cert.png"
            alt="Sklassics Certificate"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Us
