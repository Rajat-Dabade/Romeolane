import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button'

import Logo from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (<nav className="Navbar">
            <div className="Navbar__content">
              <div className="Navbar__logo">
                <img src={Logo} alt="Logo" />
              </div>
              <div className="Navbar__nav">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/about">Our Rooms</Link>
                  </li>
                  <li>
                    <Link to="/about">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/about">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="Navbar__reservationbtn">
                <button>
                  Reservation
                </button>
              </div>
            </div>
          </nav>)
}

export default Navbar
