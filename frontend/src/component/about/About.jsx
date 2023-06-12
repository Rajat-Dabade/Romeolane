import React from "react";
import AboutUs from './about-us/AboutUs'
import AboutRooms from './about-rooms/AboutRooms'
import MakeAppointment from "../make-appointment/MakeAppointment";
import Footer from "../footer/Footer";

import CocoonImg from '../../assets/aqua.jpg'

import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1 className="heading___about">About</h1>
      <AboutUs />
      <AboutRooms
        aboutRoomImg={CocoonImg}
        subHeading="Luxury Suite (Private Outdoor pool with Patio)"
        heading="Romeo Lagoon"
        description="King Bed, Private Outdoor Pool with Patio, Breakfast and HI-Tea at pool (fees may apply)  in floating Pool Basket and 2 nos Signature Cocktails on the day of arrival. King Bed 485-sq-foot individually decorated room, balcony/patio with pool views Layout - Separate sitting area Relax - Private pool; in-room Internet - Free Wi-Fi 25+ Mbps Entertainment - 42-inch LCD TV with satellite channels, pay movies, Food & Drink - Refrigerator, minibar (fees may apply), coffee/tea maker, and 24-hour room service Sleep - Bed sheets Bathroom - Private bathroom, bathrobes, and shower with a rainfall showerhead, - Electronics safe."
      />
      <AboutRooms
        aboutRoomImg={CocoonImg}
        subHeading="Suite (Private Indoor Pool with Patio)"
        heading="Romeo Royalty"
        description="King Bed, Private Indoor Pool & Deck Bench, Breakfast and Hi-Tea serve at Pool (fees may apply) in a Floating Pool Basket.  King Bed 685-sq-foot individually decorated room, balcony/patio with pool views Layout - Separate sitting area Relax - indoor Private pool; in-room Internet - Free Wi-Fi 25+ Mbps Entertainment - 42-inch LCD TV with satellite channels, pay movies, Food & Drink - Refrigerator, minibar (fees may apply), coffee/tea maker, and 24-hour room service Sleep - Bed sheets Bathroom - Private bathroom, bathrobes, and shower with a rainfall showerhead, Electronics safe."
        flexDirection="row-reverse"
      />
      <AboutRooms
        aboutRoomImg={CocoonImg}
        subHeading="Rooms With Balcony"
        heading="Romeo Sundowners"
        description="King Bed, Private Indoor Pool & Deck Bench, Breakfast at Designated area  King Bed 375-sq-foot individually decorated room, balcony/patio with pool views Layout - Separate sitting area Relax ; in-room Internet - Free Wi-Fi 25+ Mbps Entertainment - 42-inch LCD TV with satellite channels, Food & Drink - Refrigerator, minibar (fees may apply), coffee/tea maker, and 24-hour room service Sleep - Bed sheets Bathroom - Private bathroom, bathrobes, and shower with a rainfall showerhead,- Electronics safe. "
      />
      <AboutRooms
        aboutRoomImg={CocoonImg}
        subHeading="Rooms with private garden"
        heading="Romeo Wild Grove"
        description="King Bed, Private Indoor Pool & Deck Bench, Breakfast at designated area.  King Bed 375-sq-foot individually decorated room, balcony/patio with pool views Layout - Separate sitting area Relax -; in-room Internet - Free Wi-Fi 25+ Mbps Entertainment - 42-inch LCD TV with satellite channels, Food & Drink - Refrigerator, minibar (fees may apply), coffee/tea maker, and 24-hour room service,  Sleep - Bed sheets,  Bathroom - Private bathroom, bathrobes, and shower with a rainfall showerhead Practical - Electronics safe."
        flexDirection="row-reverse"
      />
      <MakeAppointment />
      <Footer />
    </div>
  );
};

export default About;
