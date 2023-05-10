import React from 'react'
import BookARoom from '../bookARoom/BookARoom'

import MakeAppointmentImg from '../../assets/slider-3.jpg'

import './MakeAppointment.css'

const MakeAppointment = () => {
  return (
    <div className="MakeAppointment">
      <div className="MakeAppointment__header">
        <p>Visit Us</p>
        <h1>Make An Appointment</h1>
      </div>
      <div className="MakeAppointment__content">
        <BookARoom />
        <div className="MakeAppointment__content-img">
          <img src={MakeAppointmentImg} alt="Make Appointment"/>
        </div>
      </div>
    </div>
  )
}

export default MakeAppointment
