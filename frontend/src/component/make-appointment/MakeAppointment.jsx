import React from 'react'

import BookARoom from '../bookARoom/BookARoom'
import YAnimate from '../../element/animation/YAnimate'
import XAnimate from '../../element/animation/XAnimate'
import NegXAnimate from '../../element/animation/NegXAnimate'

import MakeAppointmentImg from '../../assets/slider-3.jpg'

import './MakeAppointment.css'

const MakeAppointment = () => {
  return (
    <div className="MakeAppointment">
      <div className="MakeAppointment__header">
        <YAnimate><p>Visit Us</p></YAnimate>
        <YAnimate><h1>Make An Appointment</h1></YAnimate>
      </div>
      <div className="MakeAppointment__content">
        <NegXAnimate><BookARoom /></NegXAnimate>
        <XAnimate><div className="MakeAppointment__content-img">
          <img src={MakeAppointmentImg} alt="Make Appointment"/>
        </div></XAnimate>
      </div>
    </div>
  )
}

export default MakeAppointment
