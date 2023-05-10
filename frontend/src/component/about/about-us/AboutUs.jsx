import React from 'react'
import Grid from "@mui/material/Grid";

import DeluxCottage from '../../../assets/Delux_Cottage.png'
import AccomodationSingleRoom from '../../../assets/accomodation-single-room.jpg'

import './AboutUs.css'

const AboutUs = () => {
  return (
    <Grid container spacing={0} className="About__MainGrid">
      <Grid item xs={12} md={6}>
        <div className="aboutUs_image_grid">
          <img
            src={DeluxCottage}
            alt="Delux Cottage"
            className="About__image-main"
          />
          <img
            src={AccomodationSingleRoom}
            alt="Accomodation Single Room"
            className="About__image-fixImage"
          />
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="AboutUs_grid_two">
          <h3 className="sub_heading_aboutUs">About us</h3>
          <h1>Most Safe & Rated Hotel In Goa.</h1>
          <p>
            Morbi tortor urna, placerat vel arcu quis, fringilla egestas
            neque. Morbi sit amet porta erat, quis rutrum risus. Vivamus et
            gravida nibh, quis posuere felis. In commodo mi lectus, Integer
            ligula lorem, finibus vitae lorem vitae tincidunt dolor consequat
            quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Est cum voluptatibus sequi ratione ducimus dolores autem!
            Incidunt, earum quae? Vero vitae necessitatibus sit dolores omnis
            ipsa commodi doloribus, aliquam laboriosam totam voluptates dolor,
            similique aliquid debitis recusandae earum quos! Dolorum
            perferendis possimus ad consequuntur mollitia aperiam laborum
            tempore aut minima.
          </p>
          <br />
          <div className="about_discoverMore_btn">
            <button>Discover More</button>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}

export default AboutUs
