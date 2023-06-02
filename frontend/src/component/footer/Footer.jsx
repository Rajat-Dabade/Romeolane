import React from "react";
import { Grid } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import CopyRight from "../copyright/CopyRight";

import logo from "../../assets/logo.png";

import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const styles = {
    fontSize: "30px",
  };

  return (
    <div>
      <div className="footer_Base">
        <Grid container spacing={2} className="footer_Base_Grid">
          <Grid
            container
            direction="column"
            display="flex"
            justify="center"
            item
            xs={12}
            md={4}
            className="footer_base_grid_content"
          >
            <div className="footer_Info">
              <div className="footer_logo">
                <img src={logo} alt="Logo"/>
              </div>
              <div className="footer__content">
                <div className="footer__details">
                  <div>
                    <CallIcon style={styles} />
                  </div>
                  <div>
                    <p>(+91) 8222999127</p>
                    <p>(+91) 8222999128</p>
                  </div>
                </div>
                <div className="footer__details">
                  <div>
                    <EmailIcon style={styles} />
                  </div>
                  <div>
                    <p>reservations.crs@romeolane.com</p>
                  </div>
                </div>
                <div className="footer__details">
                  <div>
                    <LocationOnIcon style={styles} />
                  </div>
                  <div>
                    <p>Romeo Lane, </p><p>The Boutique Resort, Assagao, Badem</p>
                    <p>Vagator, Goa, </p>
                    <p>Goa 403509</p>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="Footer__navigation">
              <h2>Our Links</h2>
              <div className="footer_Links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/our-room">Our Rooms</Link>
                <Link to="/Gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="Footer_Map" />
          </Grid>
        </Grid>
      </div>
      <CopyRight />
    </div>
  );
};

export default Footer;
