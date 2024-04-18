import React, { useState } from "react";
import "./Navigation.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

// Import your logo icon
import HeaderLogo from "../../assets/logoHeader.png";

//Components
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Projects from "../../pages/projects/Projects";
import Button from "../button/Button";
import Services from "../../pages/services/Services";
import FAQs from "../../pages/faq/FAQs";
import ServiceLayout from "../serviceLayout/ServiceLayout";
import NotFoundPage from "../404/NotFoundPage";
import ScrollToTopOnMount from "../ScrollToTopOnMount";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <BrowserRouter>
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
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  Contact
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
      <div className={`mobile-menu ${showMenu ? "show" : "hide"}`}>
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
            to="/faqs"
            onClick={toggleMenu}
            className={({ isActive }) => (isActive ? "active-nav" : "")}
          >
            FAQs
          </NavLink>
        </li>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/services/solar-technology"
          element={<ServiceLayout title={"Solar Technology"} />}
        />
        <Route
          path="/services/solar-installation"
          element={<ServiceLayout title={"Solar Installation"} />}
        />
        <Route
          path="/services/solar-equipment"
          element={<ServiceLayout title={"Solar Equipment"} />}
        />
        <Route
          path="/services/battery-materials"
          element={<ServiceLayout title={"Battery Materials"} />}
        />
        <Route
          path="/services/charge-controllers"
          element={<ServiceLayout title={"Charge Controllers"} />}
        />
        <Route
          path="/services/grid-maintenance"
          element={<ServiceLayout title={"Grid Maintenance"} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
