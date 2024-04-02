import React from "react";
import "./ServiceBenefits.css";

const ServiceBenefits = ({ benefits }) => {
  return (
    <div>
      <div className="service-benefits-wrapper">
        <div className="service-benefits">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefits">
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceBenefits;
