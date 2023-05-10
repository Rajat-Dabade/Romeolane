import React from 'react'
import { BsPatchCheck } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import './PriceCard.css'

const style = {
  fontSize: '23px',
  color: '#6e6e6e'
}

const PriceCard = (props) => {

  let backgroundColorStyle = {}
  let colorStyle = {}
  if (props.bgColor) {
    backgroundColorStyle = {
      backgroundColor: props.bgColor,
    }
    colorStyle = {
      color: 'white'
    }
  }

  return (
    <div className="PriceCard" style={backgroundColorStyle}>
      <div className="PriceCard__per">{props.per}</div>
      <h2 style={colorStyle}>{props.heading}</h2>
      <p class="PriceCard__subheading" style={colorStyle}>{props.subheading}</p>
      <h1 style={colorStyle}>{props.price} Rs</h1>
      <hr/>
      <div className="PriceCard__list" style={colorStyle}>
        {props.points.map((point, index) =>
          <div className="PriceCard__list-point" style={colorStyle} key={index}>
            <BsPatchCheck style={{...style, ...colorStyle}} />
            <p>{point}</p>
          </div>)}
      </div>
      <button><Link to="/reservation">Reserve Now</Link></button>
    </div>
  )
}

export default PriceCard
