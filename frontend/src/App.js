import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ReactWhatsapp from 'react-whatsapp'
import { IoLogoWhatsapp } from 'react-icons/io'

import Navbar from './component/navbar/Navbar'
import Home from './component/home/Home'
import About from './component/about/About'
import OurRooms from './component/our-rooms/OurRooms'
import Contact from './component/contact/Contact'
import Gallery from './component/gallery/Gallery'
import Reservation from './component/reservation/Reservation'

import './App.css';

const whatsAppIconStyle = {
  fontSize: '50px',
  color: 'green',
  backgroundColor: 'transparent'
}

function App() {
  return (
    <div>
      <div className="App__whatsapp-icon">
        <ReactWhatsapp number="+91 " message="Hello There" className="Home__heading-whatsapp">
          <IoLogoWhatsapp style={whatsAppIconStyle} />
        </ReactWhatsapp>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-rooms" element={<OurRooms />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reservation" element={<Reservation />}/>
      </Routes>
    </div>
  );
}

export default App;
