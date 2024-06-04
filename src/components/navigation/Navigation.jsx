// src/components/navigation/Navigation.js
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import HeaderLogo from "../../assets/logoHeader.png";
import Button from "../button/Button";
import SocialIcons from "../socialIcons/SocialIcons";
import ScrollToTopOnMount from "../ScrollToTopOnMount";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showMenu]);

  return (
    <>
      <ScrollToTopOnMount />
      <div className="navigation-section">
        <div className="navigation-wrapper">
          <div className="navigation-container">
            <div className="logo-container">
              <NavLink to="/">
                <img src={HeaderLogo} alt="Logo" className="logo-icon" />
              </NavLink>
            </div>
            <div
              className={`burger-icon ${showMenu ? "active-nav" : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
            </div>
            <div className="navigation-links">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/equipment"
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  Equipment
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/calculations"
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  Calculations
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faqs"
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  FAQs
                </NavLink>
              </li>
            </div>
            <Button buttonLabel={"Get a Quote"} buttonURL={"/contact"}></Button>
          </div>
        </div>
      </div>
      <div className={`mobile-menu-overlay ${showMenu ? "show" : ""}`}>
        <div className="mobile-menu">
          <ul className="mobile-menu-links">
            <li>
              <NavLink
                to="/"
                onClick={toggleMenu}
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={toggleMenu}
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={toggleMenu}
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                onClick={toggleMenu}
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/equipment"
                onClick={toggleMenu}
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                Equipment
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                onClick={toggleMenu}
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/calculations"
                onClick={toggleMenu}
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                Calculations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faqs"
                onClick={toggleMenu}
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                FAQs
              </NavLink>
            </li>
          </ul>
          <div className="footer-social">
            <SocialIcons
              socialIcons={["facebook", "instagram", "youtube", "linkedin"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
