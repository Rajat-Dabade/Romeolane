import React from 'react'
import Card from '../../../element/card/Card'
import YAnimate from '../../../element/animation/YAnimate'

import {cardData} from '../../../data/carddata'
import './Explore.css'

const Explore = () => {
  return (
    <section className="Explore">
      <div className="Explore__content">
        <div className="Explore__heading">
          <p>Explore</p>
          <h1>The Resort</h1>
          <p className="Explore__description">Our mission is to build brand loyalty by enhancing and exceeding customer expectations with quality dining experiences and state of the art interiors.</p>
        </div>
        <div className="Explore__cards">
          {cardData.map((data) =>
            <YAnimate
              key={data.id}
            ><Card
              icon={data.icon}
              heading={data.heading}
              describe={data.describe}
              link={data.link}
            /></YAnimate>
          )}
        </div>
      </div>
    </section>
  )
}

export default Explore
