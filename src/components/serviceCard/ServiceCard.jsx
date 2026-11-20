import React from "react";
import { Link } from "react-router-dom";
import { TbArrowRight } from "react-icons/tb";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  return (
    <Link to={`/services/${service.slug}`} className="service-card">
      <div className="service-card-image">
        <img src={service.image} alt={service.title} loading="lazy" />
      </div>
      <div className="service-card-body">
        <span className="service-card-icon">
          <Icon />
        </span>
        <h3>{service.title}</h3>
        <p>{service.short}</p>
        <span className="service-card-link">
          Learn more <TbArrowRight />
        </span>
      </div>
    </Link>
  );
};

export const ServiceGrid = ({ items }) => (
  <div className="service-card-grid">
    {items.map((s) => (
      <ServiceCard service={s} key={s.slug} />
    ))}
  </div>
);

export default ServiceCard;
