import React from "react";
import "./ServiceMenu.css";
import { NavLink } from "react-router-dom";

const ServiceMenu = () => {
  const menuLinks = [
    { name: "Solar Technology", path: "/solar-technology" },
    { name: "Solar Installation", path: "/solar-installation" },
    { name: "Solar Equipment", path: "/solar-equipment" },
    { name: "Battery Materials", path: "/battery-materials" },
    { name: "Charge Controllers", path: "/charge-controllers" },
    { name: "Grid Maintenance", path: "/grid-maintenance" },
  ];

  return (
    <div>
      <ul className="service-menu-list">
        {menuLinks.map((link, index) => (
          <li key={index}>
            <NavLink to={`/services${link.path}`} activeClassName="active">
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceMenu;
