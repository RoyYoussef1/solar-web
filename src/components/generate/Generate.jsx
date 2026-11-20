import React from "react";
import { Link } from "react-router-dom";
import { TbArrowRight } from "react-icons/tb";
import CtaBackground from "../../assets/gransolar-epc-constructor.png";
import "./Generate.css";

const Generate = ({
  title = "Ready to cut your electricity bill?",
  text = "Get a free, no-obligation quote from our solar specialists within 24 hours.",
}) => {
  return (
    <section className="generate-section on-dark" style={{ backgroundImage: `url(${CtaBackground})` }}>
      <div className="generate-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="generate-actions">
          <Link to="/contact" className="site-btn site-btn-primary">
            Get a Free Quote <TbArrowRight />
          </Link>
          <a href="tel:+11234567890" className="site-btn site-btn-ghost">
            Call (123) 456-7890
          </a>
        </div>
      </div>
    </section>
  );
};

export default Generate;
