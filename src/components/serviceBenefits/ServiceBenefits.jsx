import React from "react";
import "./ServiceBenefits.css";

const ServiceBenefits = ({ features }) => {
  return (
    <div className="service-benefits">
      {features.map((f) => {
        const Icon = f.icon;
        return (
          <div key={f.title} className="benefit">
            <span className="benefit-icon">
              <Icon />
            </span>
            <div>
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceBenefits;
