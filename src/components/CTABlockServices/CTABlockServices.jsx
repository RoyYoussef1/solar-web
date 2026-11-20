import React from "react";
import { Link } from "react-router-dom";
import { TbPhoneCall, TbArrowRight } from "react-icons/tb";
import CtaBackground from "../../assets/worker-installing-solar-panels-2.jpg";
import "./CTABlockServices.css";

const CTABlockServices = () => {
  return (
    <div className="cta-block on-dark" style={{ backgroundImage: `url(${CtaBackground})` }}>
      <div className="cta-block-content">
        <span className="cta-block-icon">
          <TbPhoneCall />
        </span>
        <h4>Need help choosing?</h4>
        <p>Talk to a solar specialist and get a free quote for your property.</p>
        <a href="tel:+11234567890" className="cta-block-phone">
          (123) 456-7890
        </a>
        <Link to="/contact" className="site-btn site-btn-primary">
          Get a Free Quote <TbArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default CTABlockServices;
