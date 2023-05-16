import React from 'react'
import { useNavigate } from 'react-router-dom'
import Grid from "@mui/material/Grid";
import YAnimate from '../../../element/animation/YAnimate'
import XAnimate from '../../../element/animation/XAnimate'
import NegXAnimate from '../../../element/animation/NegXAnimate'

import DeluxCottage from '../../../assets/Delux_Cottage.png'
import AccomodationSingleRoom from '../../../assets/accomodation-single-room.jpg'

import './AboutUs.css'

const AboutUs = () => {

  const navigate = useNavigate()

  const navigateToAbout = () => {
    navigate("/about")
  }

  return (
    <Grid container spacing={0} className="About__MainGrid">
      <Grid item xs={12} md={6}>
        <div className="aboutUs_image_grid">
          <NegXAnimate><img
            src={DeluxCottage}
            alt="Delux Cottage"
            className="About__image-main"
          /></NegXAnimate>
          <img
            src={AccomodationSingleRoom}
            alt="Accomodation Single Room"
            className="About__image-fixImage"
          />
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="AboutUs_grid_two">
          <YAnimate><h3 className="sub_heading_aboutUs">About us</h3></YAnimate>
          <YAnimate><h1>Most Safe & Rated Hotel In Goa.</h1></YAnimate>
          <YAnimate>
            <p>
              A place spreading Three Generational Romance entices the city's food lovers with the melange of its urban interiors paired with delectable food and upbeat handcrafted drinks and more. An everyday and all day restaurant, the Romeo Lane is a place for pretyy sunsets. Scrumptions food and Delicious drinks.
              The idea is to have the perfect amalgamation of innovative food, potent concoctions, breathtaking interiors, culinary cocktails and entertainment followed by unmatched hospitality. Our goal is to have a pan India presence in all metros and a few chosen B cities. After which, we would work on International exposure.
            </p>
          </YAnimate>
          <br />
          <div className="about_discoverMore_btn">
            <XAnimate><button onClick={navigateToAbout}>Discover More</button></XAnimate>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}

export default AboutUs
