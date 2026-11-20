import React from "react";
import "../serviceCard/ServiceCard.css";

const ServiceV2 = ({ image, title, text, icon: Icon }) => {
  return (
    <div className="service-card service-card-static">
      <div className="service-card-image">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="service-card-body">
        {Icon && (
          <span className="service-card-icon">
            <Icon />
          </span>
        )}
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServiceV2;
