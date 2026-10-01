import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import JourneyTemp from './components/JourneyTemp'
import WeeklyGoal from './components/WeeklyGoal'
import LearningModules from './components/LearningModules'
import Resources from './components/Resources'
import Support from './components/Support'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar/>
      <Hero/>
      <WeeklyGoal/>
      <JourneyTemp/>
      <LearningModules/>
      <Resources/>
      <Support/>
      <Footer/>
      
    </div>
  )
}

export default App