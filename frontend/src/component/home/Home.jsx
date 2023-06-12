import React from 'react'
import { useNavigate } from 'react-router-dom'

import BookARoom from '../bookARoom/BookARoom'
import AboutUs from '../about/about-us/AboutUs'
import Explore from './explore/Explore'
import RoomAndSuites from '../roomAndSuites/RoomAndSuites'
import AboutRooms from '../about/about-rooms/AboutRooms'
import BestPrice from '../best-price/BestPrice'
import Testimonial from '../testimonial/Testimonial'
import MakeAppointment from '../make-appointment/MakeAppointment'
import Footer from '../footer/Footer'
import YAnimate from '../../element/animation/YAnimate'
import XAnimate from '../../element/animation/XAnimate'
import NegXAnimate from '../../element/animation/NegXAnimate'

import { cardSuitesData } from '../../data/cardSuitesData'
import CocoonImg from '../../assets/aqua.jpg'

import './Home.css'

const Home = () => {

  const navigate = useNavigate()

  const navigateToAbout = () => {
    navigate("/about")
  }

  return (
    <div className="Home">
      <div className="Home__header">
        <div className="Home__main">
          <div className="Home__heading">
            <YAnimate><h1>Paradise Calling...</h1></YAnimate>
            <YAnimate><p>A MAGICAL OASIS IN THE MIDDLE OF THE CITY, ENCOMPASSING HALLMARKS OF LUXURY.</p></YAnimate>
            <NegXAnimate><button onClick={navigateToAbout}>Discover More</button></NegXAnimate>
          </div>
          <div className="Home__form">
            <XAnimate><BookARoom /></XAnimate>
          </div>
        </div>
      </div>
      <AboutUs />
      <Explore />
      <RoomAndSuites
        cardSuitesData={cardSuitesData}
      />
      <AboutRooms
        aboutRoomImg={CocoonImg}
        subHeading="Luxury Stay at Hotel"
        heading="Romeo Lagoon"
        description="King Bed, Private Outdoor Pool with Patio, Breakfast and HI-Tea at pool (fees may apply)  in floating Pool Basket and 2 nos Signature Cocktails on the day of arrival. King Bed 485-sq-foot individually decorated room, balcony/patio with pool views Layout - Separate sitting area Relax - Private pool; in-room Internet - Free Wi-Fi 25+ Mbps Entertainment - 42-inch LCD TV with satellite channels, pay movies, Food & Drink - Refrigerator, minibar (fees may apply), coffee/tea maker, and 24-hour room service Sleep - Bed sheets Bathroom - Private bathroom, bathrobes, and shower with a rainfall showerhead, - Electronics safe."
      />
      <BestPrice
        subheading="Extra Service"
        heading="Best Price"
        description="Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget."
      />
      <Testimonial />
      <MakeAppointment />
      <Footer />
    </div>
  )
}

export default Home
