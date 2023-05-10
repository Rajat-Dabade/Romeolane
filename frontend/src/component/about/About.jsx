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
        subHeading="Luxury Stay at Hotel"
        heading="Romeo Cocoon"
        description="With Room sizes ranging from 210-295 sq. ft these cottages offer amenities like double bed, smart TV’s, Mini bar, Handcrafted artefacts and room décor.Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget."
      />
      <AboutRooms
        aboutRoomImg={CocoonImg}
        subHeading="Luxury Stay at Hotel"
        heading="Romeo Cocoon"
        description="With Room sizes ranging from 210-295 sq. ft these cottages offer amenities like double bed, smart TV’s, Mini bar, Handcrafted artefacts and room décor.Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget."
        flexDirection="row-reverse"
      />
      <AboutRooms
        aboutRoomImg={CocoonImg}
        subHeading="Luxury Stay at Hotel"
        heading="Romeo Cocoon"
        description="With Room sizes ranging from 210-295 sq. ft these cottages offer amenities like double bed, smart TV’s, Mini bar, Handcrafted artefacts and room décor.Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget."
      />
      <MakeAppointment />
      <Footer />
    </div>
  );
};

export default About;
