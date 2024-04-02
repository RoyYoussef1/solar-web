import React from "react";
import "./CTABlockServices.css";
import Button from "../button/Button";

const CTABlockServices = () => {
  return (
    <div className="cta-block-wrapper">
      <div className="cta-block">
        <div className="cta-block-header">
          Renewable & Solar Panel Solutions
        </div>
        <div className="cta-block-text">
          Solar Panel Installation Services At Your Door Step
        </div>
        <Button buttonLabel="Get in Touch" buttonURL="/contact" />
      </div>
    </div>
  );
};

export default CTABlockServices;
