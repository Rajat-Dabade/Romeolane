import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import './Card.css'

const Card = (props) => {
  return (
    <div className="Card">
      <img src={props.icon} alt="logo" />
      <h4>{props.heading}</h4>
      <p>{props.describe}</p>
      <Link to={props.link}>Read More <BsArrowRight /></Link>
    </div>
  )
}

export default Card
