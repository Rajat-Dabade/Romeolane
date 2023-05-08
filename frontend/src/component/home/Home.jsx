import React from 'react'

import BookARoom from '../bookARoom/BookARoom'
import Explore from './explore/Explore'
import RoomAndSuites from '../roomAndSuites/RoomAndSuites'
import AboutRooms from '../about/about-rooms/AboutRooms'

import CocoonImg from '../../assets/aqua.jpg'

import './Home.css'

const Home = () => {

  return (
    <div className="Home">
      <div className="Home__header">
        <div className="Home__main">
          <div className="Home__heading">
            <h1>Paradise Calling</h1>
            <p>A MAGICAL OASIS IN THE MIDDLE OF THE CITY, ENCOMPASSING HALLMARKS OF LUXURY.</p>
            <button>Discover More</button>
          </div>
          <div className="Home__form">
            <BookARoom />
          </div>
        </div>
      </div>
      <Explore />
      <RoomAndSuites />
      <AboutRooms
        aboutRoomImg={CocoonImg}
        subHeading="Luxury Stay at Hotel"
        heading="Romeo Cocoon"
        description="With Room sizes ranging from 210-295 sq. ft these cottages offer amenities like double bed, smart TV’s, Mini bar, Handcrafted artefacts and room décor.Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget."
      />
    </div>
  )
}

export default Home
