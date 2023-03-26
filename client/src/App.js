import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App