import React, { useState } from 'react'
import Navbar from './Pages/Navbar'
import Landing from './Pages/Landing'
import About from './Pages/About'
import Contact from './Pages/Contact'
import LandingTransition from './Pages/LandingTransition'
import AboutMobile from './Pages/AboutMobile'
import QuickHighlights from './Pages/QuickHighlights'
import QuickOther from './Pages/QuickOther'
import {categories} from "./ReusableComponents/CategoriesData"


const App = () => 
  {
  const [chosenCategory, setChosenCategory] = useState(-1);
  const [animsActive, setAnimsActive] = useState(false);
  return (
    <main className='relative min-h-screen w-screen'>
      <Navbar categorys={categories} 
      setChosenCategory={setChosenCategory} 
      chosenCategory={chosenCategory}
      funModeEnabled={animsActive}
      setFunModeEnabled={setAnimsActive}/>
        {/*
      Background, is behind first screen too.
      */}
      {animsActive && <div className='absolute w-screen h-[600dvh]
        top-0 left-0 -z-10 bg-DarkArea-50'>
      </div>}
      {!animsActive && <div className='absolute w-screen h-screen
        top-0 left-0 -z-10 bg-DarkArea-50'>
      </div>}
      <Landing animsActive={animsActive}/>
      <div className='relative w-screen h-[25dvh]'>
          {/*
            Doing this to make the landing transition 
            fit better. As we want it to fit at
            half the landing screen. But if we
            do it within the transition, it will cause
            a gap to the highlights section which is not what
            we want.
          */}
      </div>
      {animsActive && <LandingTransition chosenCategory={chosenCategory} categorys={categories}/>}
      {!animsActive && <QuickHighlights/>}
      {animsActive && <About/>}
      {!animsActive && <AboutMobile/>}
      <QuickOther/>
      {animsActive && <Contact/>}
      {!animsActive && <Contact/>}
    </main>
  )
}

export default App
