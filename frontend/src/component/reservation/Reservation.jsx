import React from 'react'
import Header from '../../element/header/Header'
import MakeAppointment from '../make-appointment/MakeAppointment'
import Footer from '../footer/Footer'

import ReservationImg from '../../assets/aboutHeaderSectionImg.jpg'

import './Reservation.css'

const Reservation = () => {
  return (
    <div className="Reservation">
       <div className="Reservation__main">
         <Header
           backgroundImage={ReservationImg}
           heading="Reservation"
         />
         <MakeAppointment />
       </div>
      <Footer />
    </div>
  )
}

export default Reservation
