import React from 'react'

import Stars from '../../assets/Icons/review-icon2.png'
import Quote from '../../assets/Icons/qt-icon.png'

import './ReviewCard.css'

const ReviewCard = (props) => {
  return (
    <div className="ReviewCard">
      <img  src={Quote} alt="Quote"/>
      <div className="ReviewCard__client">
        <h2>{props.name}</h2>
        <p>{props.city}</p>
      </div>
      <div className="ReviewCard__stars">
        <img src={Stars} alt="stars" />
      </div>
      <div className="ReviewCard__review">
        <p>"{props.review}"</p>
      </div>
    </div>
  )
}

export default ReviewCard
