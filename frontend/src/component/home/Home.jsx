import React from 'react'

import BookARoom from '../bookARoom/BookARoom'
import Explore from './explore/Explore'
import RoomAndSuites from '../roomAndSuites/RoomAndSuites'

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
    </div>
  )
}

export default Home
