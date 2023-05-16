import React from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineKingBed} from 'react-icons/md'
import {AiOutlineWifi} from 'react-icons/ai'
import {AiOutlineCar} from 'react-icons/ai'
import {GiTeapotLeaves} from 'react-icons/gi'
import {GiMeal} from 'react-icons/gi'
import {MdOutlinePool} from 'react-icons/md'

import NegXAnimate from '../animation/NegXAnimate'
import YAnimate from '../animation/YAnimate'

import './SuitesCard.css'

const style = {
  fontSize: '40px',
  color: '#182244'
}

const SuitesCard = (props) => {

  return (
    <div className="SuitesCard">
      <div className="SuitesCard__bookingBtn">
        <YAnimate><button>{props.price}/Night</button></YAnimate>
        <YAnimate><button><Link to="/reservation">Book Now</Link></button></YAnimate>
      </div>
      <div className="SuitesCard__suiteImg">
        <img src={props.suiteImg} alt="Suite Img"/>
      </div>
      <div className="SuitesCard__content">
        <NegXAnimate><h4>{props.roomType}</h4></NegXAnimate>
        <p>{props.describe}</p>
        <div className="SuitesCard__content-services">
          {props.bed && <MdOutlineKingBed style={style} />}
          {props.wifi && <AiOutlineWifi style={style}/>}
          {props.parking && <AiOutlineCar style={style}/>}
          {props.tea && <GiTeapotLeaves style={style}/>}
          {props.meals && <GiMeal style={style}/>}
          {props.pool && <MdOutlinePool style={style}/>}
        </div>
      </div>

      
    </div>
  )
}

export default SuitesCard
