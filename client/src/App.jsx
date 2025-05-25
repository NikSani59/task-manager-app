import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import './css/App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/terms" element={<h1>Terms Of Service</h1>} />
        <Route path="/faq" element={<h1>FAQ</h1>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
