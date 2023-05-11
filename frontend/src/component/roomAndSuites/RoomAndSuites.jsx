import React, { useEffect, useState } from 'react'
import SuitesCard from '../../element/card/SuitesCard'
import YAnimate from '../../element/animation/YAnimate'
import XAnimate from '../../element/animation/XAnimate'
import NegYAnimate from '../../element/animation/NegYAnimate'
import NegXAnimate from '../../element/animation/NegXAnimate'


import './RoomAndSuites.css'

const RoomAndSuites = (props) => {

  const [cardSuitesData, setCardSuitesData] = useState([])
  useEffect(() => {
    if (props.cardSuitesData) {
      setCardSuitesData(props.cardSuitesData)
    }
  }, [setCardSuitesData, props.cardSuitesData])

  return (
    <div className="RoomAndSuites">
      <div className="RoomAndSuites__heading">
        <YAnimate><p>The pleasure of Luxury</p></YAnimate>
        <YAnimate><h1>Room and Suites</h1></YAnimate>
        <YAnimate><p className="RoomAndSuites__description">Romeo Lane, the boutique resort in goa is a blissful getaway in goa. Postcard views, coupled with exceptional services and luxurious facilities define this 5-star resort in Goa. Spread across an expansive area we have Well-manicured lush green plants enveloping the entire pool and restaurant side, Lavish layout buffet in our all- day dining space, Local Goan exotic birds in and around the property</p></YAnimate>
      </div>
      <div className="RoomAndSuites__cards">
        {cardSuitesData.length !== 0 ? cardSuitesData.map((data) =>
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
        ) : ''}
      </div>
    </div>
  )
}

export default RoomAndSuites
