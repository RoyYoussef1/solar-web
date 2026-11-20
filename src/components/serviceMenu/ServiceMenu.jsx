import React from "react";
import { NavLink } from "react-router-dom";
import { TbChevronRight } from "react-icons/tb";
import services from "../../data/servicesData";
import "./ServiceMenu.css";

const ServiceMenu = () => {
  return (
    <div className="service-menu">
      <h4 className="service-menu-title">All Services</h4>
      <ul className="service-menu-list">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <li key={s.slug}>
              <NavLink to={`/services/${s.slug}`}>
                <span className="service-menu-icon">
                  <Icon />
                </span>
                <span className="service-menu-name">{s.title}</span>
                <TbChevronRight className="service-menu-arrow" />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServiceMenu;
