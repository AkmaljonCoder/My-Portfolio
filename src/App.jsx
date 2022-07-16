import {React} from 'react'

import './App.css'

// components

import Navbar from './components/Navbar/Navbar'
import Entery from './components/Entery/Entery'
import About from './components/About/About'

const App = () => {

  return (
    <> 
      <Navbar/>
      <Entery/>
      <About/>
    </>
  )
}

export default App