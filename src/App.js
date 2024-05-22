// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Inverters from "./pages/equipment/Inverters/Inverters";
import InverterPage from "./pages/equipment/Inverters/InverterPage";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import Services from "./pages/services/Services";
import FAQs from "./pages/faq/FAQs";
import ServiceLayout from "./components/serviceLayout/ServiceLayout";
import NotFoundPage from "./components/404/NotFoundPage";

import ServiceLayoutImage1 from './assets/service-layout/service-sub-image-01.jpg';
import ServiceLayoutImage2 from './assets/service-layout/service-sub-image-02.jpg';
import ServiceLayoutImage3 from './assets/service-layout/service-sub-image-03.jpg';
import ServiceLayoutImage4 from './assets/service-layout/service-sub-image-04.jpg';
import ServiceLayoutImage5 from './assets/service-layout/service-sub-image-05.jpg';
import ServiceLayoutImage6 from './assets/service-layout/service-sub-image-06.jpg';
import Equipment from "./pages/equipment/Equipment";

import "./App.css";
import PanelsPage from "./pages/equipment/Panels/PanelsPage";
import Panels from "./pages/equipment/Panels/Panels";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/services/solar-technology"
            element={<ServiceLayout title={"Solar Technology"} image={ServiceLayoutImage1} />}
          />
          <Route
            path="/services/solar-installation"
            element={<ServiceLayout title={"Solar Installation"} image={ServiceLayoutImage2} />}
          />
          <Route
            path="/services/solar-equipment"
            element={<ServiceLayout title={"Solar Equipment"} image={ServiceLayoutImage3} />}
          />
          <Route
            path="/services/battery-materials"
            element={<ServiceLayout title={"Battery Materials"} image={ServiceLayoutImage4} />}
          />
          <Route
            path="/services/charge-controllers"
            element={<ServiceLayout title={"Charge Controllers"} image={ServiceLayoutImage5} />}
          />
          <Route
            path="/services/grid-maintenance"
            element={<ServiceLayout title={"Grid Maintenance"} image={ServiceLayoutImage6} />}
          />
          <Route path="/equipment/inverters" element={<Inverters />} />
          <Route path="/equipment/panels" element={<Panels />} />
          <Route path="/inverter/:id" element={<InverterPage />} />
          <Route path="/panels/:id" element={<PanelsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
