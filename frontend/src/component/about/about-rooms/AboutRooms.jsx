import React from 'react'
import { Link } from 'react-router-dom'

import './AboutRooms.css'

const AboutRooms = (props) => {

  const styles = {
    flexDirection:  props.flexDirection,
  }

  return (
    <div className="AboutRooms" style={styles}>
      <div className="AboutRooms__image">
        <img src={props.aboutRoomImg} alt='About'/>
      </div>
      <div className="AboutRooms__content">
        <p className="AboutRooms__content-subheading">{props.subHeading}</p>
        <h1>{props.heading}</h1>
        <p className="AboutRooms__content-description">{props.description}</p>
        <button><Link to="/reservation">Reserver now</Link></button>
      </div>
    </div>
  )
}

export default AboutRooms
