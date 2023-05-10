import React from 'react'
import ReviewCard from '../../element/card/ReviewCard'

import { reviewData } from '../../data/reviewData'

import './Testimonial.css'

const Testimonial = () => {
  return (
    <div className="Testimonial">
      <div className="Testimonial__main">
        <div className="Testimonial__content">
          <p className="Testimonial__content-subheading">Testimonial</p>
          <h1>What our clients says</h1>
          <p className="Testimonail__content-description">Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p>
        </div>
        <div className="Testimonial__cards">
          {reviewData.map((review) =>
            <ReviewCard
              key={review.id}
              name={review.name}
              city={review.city}
              review={review.review}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
