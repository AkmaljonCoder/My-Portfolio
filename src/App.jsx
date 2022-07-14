import {React , useEffect} from 'react'

import AOS from 'aos'

import './App.css'

// components

import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

const App = () => {

  useEffect(() => {
    AOS.init(
      // offset: 120,
      // delay: 0,
      // duration: 400,
    );
    AOS.refresh();
    
  }, [])

  return (
    <> 
      <Navbar/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App