import React from 'react'
import SuitesCard from '../../element/card/SuitesCard'
import { cardSuitesData } from '../../data/cardSuitesData'

import './RoomAndSuites.css'

const RoomAndSuites = (props) => {
  return (
    <div className="RoomAndSuites">
      <div className="RoomAndSuites__heading">
        <p>The pleasure of Luxury</p>
        <h1>Room and Suites</h1>
        <p className="RoomAndSuites__description">Romeo Lane, the boutique resort in goa is a blissful getaway in goa. Postcard views, coupled with exceptional services and luxurious facilities define this 5-star resort in Goa. Spread across an expansive area we have Well-manicured lush green plants enveloping the entire pool and restaurant side, Lavish layout buffet in our all- day dining space, Local Goan exotic birds in and around the property</p>
      </div>
      <div className="RoomAndSuites__cards">
        {cardSuitesData.map((data) =>
          <SuitesCard
            key={data.id}
            suiteImg={data.image}
            roomType={data.roomType}
            price={data.price}
            describe={data.describe}
            bed={data.bed}
            wifi={data.wifi}
            parking={data.parking}
            tea={data.tea}
            meals={data.meals}
            pool={data.pool}
          />
        )}
      </div>
    </div>
  )
}

export default RoomAndSuites
