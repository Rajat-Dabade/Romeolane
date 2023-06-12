import React from 'react'
import ReviewCard from '../../element/card/ReviewCard'
import XAnimate from '../../element/animation/XAnimate'
import YAnimate from '../../element/animation/YAnimate'
import NegXAnimate from '../../element/animation/NegXAnimate'

import { reviewData } from '../../data/reviewData'

import './Testimonial.css'

const Testimonial = () => {
  return (
    <div className="Testimonial">
      <div className="Testimonial__main">
        <div className="Testimonial__content">
          <XAnimate><p className="Testimonial__content-subheading">Testimonial</p></XAnimate>
          <NegXAnimate><h1>What our clients says</h1></NegXAnimate>
          <XAnimate><p className="Testimonail__content-description">Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p></XAnimate>
        </div>
        <div className="Testimonial__cards">
          {reviewData.map((review) =>
            <YAnimate
              key={review.id}
            >
              <ReviewCard
              name={review.name}
              city={review.city}
              review={review.review}
            /></YAnimate>
          )}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
