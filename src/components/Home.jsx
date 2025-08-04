import React from 'react'
import Hero from '../components/Hero'
import Rating from './Rating'
import Us from './Us'
import CourseHome from './CourseHome.JSX'
import ContactHome from './ContactHome'


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
