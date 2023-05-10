import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Navbar from './component/navbar/Navbar'
import Home from './component/home/Home'
import About from './component/about/About'
import OurRooms from './component/our-rooms/OurRooms'
import Contact from './component/contact/Contact'

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-rooms" element={<OurRooms />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
