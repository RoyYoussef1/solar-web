import React from "react";
import "./Footer.css";
import { BrowserRouter, NavLink } from "react-router-dom";


import FooterLogo from "../../assets/logoFooter.png";


import SocialIcons from "../socialIcons/SocialIcons";

const Footer = () => {
  return (
    <div>
    <BrowserRouter>
      <div className="footer">
        <div className="footer-wrapper">
            <div className="footer-column">
                <div className="footer-logo"><NavLink to="/"><img src={FooterLogo} alt="Logo" className="logo-icon" /></NavLink></div>
                <div className="footer-text">We Offer a Wide Range of Quality Solar Panel Installation Services.</div>
                <div className="footer-contact">
                    <div className="email"><a href="mailto:SSolarWeb@gmail.com">SSolarWeb@gmail.com</a></div>
                    <div className="phone"><a href="tel:(123) 456-7890">(123) 456-7890</a></div>
                </div>
            </div>
            <div className="footer-column">
                <div className="footer-title">Explore</div>
                <div className="footer-links">
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/about">Leadership Team</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </div>
            </div>
            <div className="footer-column">
            <div className="footer-title">Services</div>
                <div className="footer-links">
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/about">Leadership Team</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </div>
            </div>
            <div className="footer-column">
            <div className="footer-title">Contact</div>
                <div className="footer-text">60 Brooklyn Golden Street<br></br>New York 8800 United States</div>
                <div className="footer-social">
                    <SocialIcons socialIcons={["facebook", "instagram", "youtube", "linkedin"]} />
                </div>
            </div>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
};

export default Footer;
