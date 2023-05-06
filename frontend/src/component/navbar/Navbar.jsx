import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RxCross2 } from 'react-icons/rx'

import Logo from '../../assets/logo.png'
import './Navbar.css'

const style = {color: 'white', fontSize: '40px'}

const Navbar = () => {

  const [handBurgerMenu, setHandBurgerMenu] = useState(false)

  const openHandBurgerMenu = () => {
    setHandBurgerMenu(true)
  }

  const closeHandBurgerMenu = () => {
    setHandBurgerMenu(false)
  }


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

              <div className="Navbar__handburgermenu">
                {!handBurgerMenu && <RxHamburgerMenu
                  style={style}
                  onClick={openHandBurgerMenu}
                /> }
                {handBurgerMenu && <nav className="Navbar__handburgermenu-nav">
                                     <div class="Navbar__handburgermenu-icon">
                                       <RxCross2
                                         style={style}
                                         onClick={closeHandBurgerMenu}
                                       />
                                     </div>
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
                                   </nav>}
              </div>
            </div>
          </nav>)
}

export default Navbar
