import React from 'react'
import { FaRegAddressCard } from 'react-icons/fa'
import { MdWifiCalling3 } from 'react-icons/md'
import { BiMailSend } from 'react-icons/bi'

import Header from '../../element/header/Header'
import SimpleCard from '../../element/card/SimpleCard'
import GetInTouch from '../get-in-touch/GetInTouch'
import Footer from '../footer/Footer'

import ContactImg from '../../assets/about-6.jpg'
import './Contact.css'

const Contact = () => {

  const iconStyle = {
    fontSize: '60px'
  }

  return (
    <div className="Contact">
      <div className="Contact__main">
        <Header
          backgroundImage={ContactImg}
          heading="Contact"
        />
        <div className="Content__content">
          <div className="Content__content-cards">
            <SimpleCard
              icon={<FaRegAddressCard style={iconStyle} />}
              heading="Office Address"
              subheading="Romeo Lane, The Boutique Resort, Assagao, Badem, Vagator, Goa, Goa 403509"
            />
            <hr />
            <SimpleCard
              icon={<MdWifiCalling3 style={iconStyle} />}
              heading="Phone number"
              subheading="(+91) 8830263951"
            />
            <hr />
            <SimpleCard
              icon={<BiMailSend style={iconStyle} />}
              heading="Email"
              subheading="reservations.crs@romeolane.com"
            />
          </div>
          <div className="Content__content-form">
            <GetInTouch />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
