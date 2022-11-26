import { useState } from 'react'
import './App.css'
import Navbar from './components/nav_component/Navbar'
import MainContent from './components/MainContent'

import Footer from './components/Footer.jsx'

function App() {

  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Footer />
      
    </div>
  )
}

export default App
