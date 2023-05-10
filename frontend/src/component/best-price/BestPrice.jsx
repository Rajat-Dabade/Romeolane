import React from 'react'
import PriceCard from '../../element/card/PriceCard'

import { priceCardData } from '../../data/priceCardData'

import './BestPrice.css'

const BestPrice = (props) => {
  return (
    <div className="BestPrice">
      <div className="BestPrice__content">
        <p className="BestPrice__content-subheading">{props.subheading}</p>
        <h1>{props.heading}</h1>
        <p className="BestPrice__content-description">{props.description}</p>
      </div>
      <div className="BestPrice__cards">
        <PriceCard
          heading={priceCardData[0].heading}
          subheading={priceCardData[0].subheading}
          price={priceCardData[0].price}
          per={priceCardData[0].per}
          points={priceCardData[0].points}
        />
        <PriceCard
          heading={priceCardData[1].heading}
          subheading={priceCardData[1].subheading}
          price={priceCardData[1].price}
          per={priceCardData[1].per}
          points={priceCardData[1].points}
        />
      </div>
    </div>
  )
}

export default BestPrice
