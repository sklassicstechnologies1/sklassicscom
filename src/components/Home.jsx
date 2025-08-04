import React from 'react'
import Hero from '../components/Hero'
import Rating from './Rating'
import Us from './Us'

import ContactHome from './ContactHome'
import CourseHome from './CourseHome'


const Home = () => {
  return (
    <div>
      <Hero />
    <Rating /> 
    <Us />
    <CourseHome/>
    <ContactHome />
    </div>
  )
}

export default Home
