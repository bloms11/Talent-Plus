import { useState } from 'react'
import './App.css'
import Commuity from './components/Commuity'
import Courses from './components/Courses'
import Footer from './components/Footer'
import Hero from './components/Hero'
import PopularCourses from './components/PopularCourses'
import Questions from './components/Questions'
import Sponsors from './components/Sponsors'
import Testimonials from './components/Testimonials'
import WhyUs from './components/WhyUs'

function App() {

  return (
    <div className="App">
      <Hero/>
      <Sponsors/>
      <Courses/>
      <WhyUs/>
      <PopularCourses/>
      <Testimonials/>
      <Commuity/>
      <Questions/>
      <Footer/>
      
    </div>
  )
}

export default App
