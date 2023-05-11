import React from 'react'

import './SimpleCard.css'

const SimpleCard = (props) => {
  return (
    <div className="SimpleCard">
      <div className="SimpleCard__icon">
        {props.icon}
      </div>
      <div className="SimpleCard__content">
        <h4>{props.heading}</h4>
        <p>{props.subheading}</p>
      </div>
    </div>
  )
}

export default SimpleCard
