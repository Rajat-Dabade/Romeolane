import React from 'react'

import './GetInTouch.css'

const GetInTouch = () => {
  return (
    <div className="GetInTouch">
      <div className="GetInTouch__header">
        <h1>Get In Touch</h1>
      </div>
      <div className="GetInTouch__form">
        <div className="GetInTouch__form-input">
          <input type="text" placeholder="Full Name"/>
        </div>
        <div className="GetInTouch__form-input">
          <input type="text" placeholder="Email"/>
          <input type="text" placeholder="Phone number"/>
        </div>
        <div className="GetInTouch__form-input">
          <textarea name="message" placeholder="Your Message"></textarea>
        </div>
        <div className="GetInTouch__form-input">
          <button>Send Message</button>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch
