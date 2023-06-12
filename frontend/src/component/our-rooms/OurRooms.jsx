import React from 'react'
import Header from '../../element/header/Header'
import RoomAndSuites from '../roomAndSuites/RoomAndSuites'
import AboutRooms from '../about/about-rooms/AboutRooms'
import MakeAppointment from '../make-appointment/MakeAppointment'
import Footer from '../footer/Footer'

import { cardSuitesData } from '../../data/cardSuitesData'
import CocoonImg from '../../assets/aqua.jpg'
import RoomImg from '../../assets/about-1.jpg'

import './OurRooms.css'

const OurRooms = () => {
  return (
    <div className="OurRooms">
      <Header
        backgroundImage={RoomImg}
        heading="Our Rooms"
      />
      <RoomAndSuites
        cardSuitesData={cardSuitesData}
      />
      <AboutRooms
        aboutRoomImg={CocoonImg}
        subHeading="Luxury Suite (Private Outdoor pool with Patio)"
        heading="Romeo Lagoon"
        description="King Bed, Private Outdoor Pool with Patio, Breakfast and HI-Tea at pool (fees may apply)  in floating Pool Basket and 2 nos Signature Cocktails on the day of arrival. King Bed 485-sq-foot individually decorated room, balcony/patio with pool views Layout - Separate sitting area Relax - Private pool; in-room Internet - Free Wi-Fi 25+ Mbps Entertainment - 42-inch LCD TV with satellite channels, pay movies, Food & Drink - Refrigerator, minibar (fees may apply), coffee/tea maker, and 24-hour room service Sleep - Bed sheets Bathroom - Private bathroom, bathrobes, and shower with a rainfall showerhead, - Electronics safe."
      />
      <MakeAppointment />
      <Footer />
    </div>
  )
}

export default OurRooms
