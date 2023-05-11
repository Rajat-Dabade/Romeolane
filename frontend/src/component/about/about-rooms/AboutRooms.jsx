import React from 'react'
import { Link } from 'react-router-dom'
import NegXAnimate from '../../../element/animation/NegXAnimate'
import XAnimate from '../../../element/animation/XAnimate'

import './AboutRooms.css'

const AboutRooms = (props) => {

  const styles = {
    flexDirection:  props.flexDirection,
  }

  return (
    <div className="AboutRooms" style={styles}>
      <div className="AboutRooms__image">
        <NegXAnimate><img src={props.aboutRoomImg} alt='About'/></NegXAnimate>
      </div>
      <div className="AboutRooms__content">
        <XAnimate><p className="AboutRooms__content-subheading">{props.subHeading}</p></XAnimate>
        <XAnimate><h1>{props.heading}</h1></XAnimate>
        <XAnimate><p className="AboutRooms__content-description">{props.description}</p></XAnimate>
        <XAnimate><button><Link to="/reservation">Reserver now</Link></button></XAnimate>
      </div>
    </div>
  )
}

export default AboutRooms
