import React from 'react'

import YAnimate from '../animation/YAnimate'

import './Header.css'

const Header = (props) => {

  const bgImageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props.backgroundImage})`
  }

  return (
    <div className="Header" style={bgImageStyle}>
      <YAnimate><h1>{props.heading}</h1></YAnimate>
    </div>
  )
}

export default Header
