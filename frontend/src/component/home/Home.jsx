import React from 'react'

import BookARoom from '../bookARoom/BookARoom'
import './Home.css'

const Home = () => {

  return (
    <div className="Home">
      <div className="Home__heading">
        <h1>Paradise Calling</h1>
        <p>A MAGICAL OASIS IN THE MIDDLE OF THE CITY, ENCOMPASSING HALLMARKS OF LUXURY.</p>
      </div>
      <div className="Home__form">
        <BookARoom />
      </div>
    </div>
  )
}

export default Home
