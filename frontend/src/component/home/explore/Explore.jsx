import React from 'react'
import Card from '../../../element/card/Card'

import {cardData} from '../../../data/carddata'
import './Explore.css'

const Explore = () => {
  return (
    <section className="Explore">
      <div className="Explore__content">
        <div className="Explore__heading">
          <p>Explore</p>
          <h1>The Hotel</h1>
          <p class="Explore__description">Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p>
        </div>
        <div className="Explore__cards">
          {cardData.map((data) =>
            <Card
              key={data.id}
              icon={data.icon}
              heading={data.heading}
              describe={data.describe}
              link={data.link}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default Explore
