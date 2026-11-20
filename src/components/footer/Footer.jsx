import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

import FooterLogo from "../../assets/logoFooter.png";
import SocialIcons from "../socialIcons/SocialIcons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-column">
          <div className="footer-logo">
            <NavLink to="/">
              <img src={FooterLogo} alt="Logo" className="logo-icon" />
            </NavLink>
          </div>
          <div className="footer-text">
            We Offer a Wide Range of Quality Solar Panel Installation Services.
          </div>
          <div className="footer-contact">
            <div className="email">
              <a href="mailto:SSolarWeb@gmail.com">SSolarWeb@gmail.com</a>
            </div>
            <div className="phone">
              <a href="tel:+96176348117">+961 76 348 117</a>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-title">Explore</div>
          <div className="footer-links">
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/equipment">Equipment</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/faqs">FAQs</NavLink>
            </li>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-title">Services</div>
          <div className="footer-links">
            <li>
              <NavLink to="/services/solar-technology">Solar Technology</NavLink>
            </li>
            <li>
              <NavLink to="/services/solar-installation">Solar Installation</NavLink>
            </li>
            <li>
              <NavLink to="/services/solar-equipment">Solar Equipment</NavLink>
            </li>
            <li>
              <NavLink to="/services/battery-materials">Battery Materials</NavLink>
            </li>
            <li>
              <NavLink to="/services/charge-controllers">Charge Controllers</NavLink>
            </li>
            <li>
              <NavLink to="/services/grid-maintenance">Grid Maintenance</NavLink>
            </li>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-title">Contact</div>
          <div className="footer-text">
            Beirut, Lebanon
          </div>
          <div className="footer-social">
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
