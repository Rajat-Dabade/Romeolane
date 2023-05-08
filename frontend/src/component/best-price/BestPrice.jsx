import React from 'react'

import './BestPrice.css'

const BestPrice = (props) => {
  return (
    <div className="BestPrice">
      <div className="BestPrice__content">
        <p className="BestPrice__content-subheading">{props.subheading}</p>
        <h1>{props.heading}</h1>
        <p className="BestPrice__content-description">{props.description}</p>
      </div>
      <div className="BestPrice__cards"></div>
    </div>
  )
}

export default BestPrice
