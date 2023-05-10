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
        subHeading="Luxury Stay at Hotel"
        heading="Romeo Cocoon"
        description="With Room sizes ranging from 210-295 sq. ft these cottages offer amenities like double bed, smart TV’s, Mini bar, Handcrafted artefacts and room décor.Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget."
      />
      <MakeAppointment />
      <Footer />
    </div>
  )
}

export default OurRooms
