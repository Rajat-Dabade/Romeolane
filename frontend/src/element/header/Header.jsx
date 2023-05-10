import React from 'react'

import './Header.css'

const Header = (props) => {

  const bgImageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props.backgroundImage})`
  }

  return (
    <div className="Header" style={bgImageStyle}>
      <h1>{props.heading}</h1>
    </div>
  )
}

export default Header
