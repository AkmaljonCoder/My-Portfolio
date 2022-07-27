import {React, useEffect} from 'react'
import AOS from 'aos'
import './App.css'
import "aos/dist/aos.css";

// components

import Navbar from './components/Navbar/Navbar'
import Entery from './components/Entery/Entery'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });

  }, [])
  

  return (
    <> 
      <Navbar/>
      <Entery/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Footer/>
    </>
  )
}

export default App