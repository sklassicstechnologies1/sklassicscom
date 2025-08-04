import React from 'react'
import { FaHeadset, FaStar, FaLaptop, FaBriefcase } from 'react-icons/fa'

const features = [
  {
    icon: <FaHeadset className="text-5xl text-purple-800" />,
    title: '24 x 7 Support',
  },
  {
    icon: <FaStar className="text-5xl text-purple-800" />,
    title: '4.8/5 Rating',
  },
  {
    icon: <FaLaptop className="text-5xl text-purple-800" />,
    title: 'Access On The Go',
  },
  {
    icon: <FaBriefcase className="text-5xl text-purple-800" />,
    title: 'Job Assistance',
  },
]

const Rating = () => {
  return (
    <section className="bg-white py-8 px-4 shadow-sm pt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            {feature.icon}
            <p className="mt-2 text-sm font-semibold text-gray-800">{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Rating
