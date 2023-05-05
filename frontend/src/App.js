import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Navbar from './component/navbar/Navbar'
import Home from './component/home/Home'
import About from './component/about/About'
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
