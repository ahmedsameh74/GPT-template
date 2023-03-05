import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Blogs from './components/Blogs/Blogs'
import Footer from './components/Footer/Footer'
import Future from './components/Future/Future'
import Home from './components/Home/Home'
import Logos from './components/Logos/Logos'
import Navbar from './components/Navbar/Navbar'
import Open from './components/Open/Open'

function App() {
 
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Logos/>
    <About/>
    <Future/>
    <Open/>
    <Banner/>
    <Blogs/>
    <Footer/>
    </div>
  )
}

export default App
