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

import Equipment from "./pages/equipment/Equipment";

import "./App.css";
import PanelsPage from "./pages/equipment/Panels/PanelsPage";
import Panels from "./pages/equipment/Panels/Panels";
import TestimonialsData from "./components/firebase/TestimonialsData";
import Calculations from "./pages/calculations/Calculations";
import BatteryPage from "./pages/equipment/batteries/BatteryPage";
import Batteries from "./pages/equipment/batteries/Batteries";

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
          <Route path="/services/:serviceType" element={<ServiceLayout />} />
          <Route path="/equipment/inverters" element={<Inverters />} />
          <Route path="/equipment/panels" element={<Panels />} />
          <Route path="/equipment/batteries" element={<Batteries />} />
          <Route path="/inverter/:id" element={<InverterPage />} />
          <Route path="/panels/:id" element={<PanelsPage />} />
          <Route path="/batteries/:id" element={<BatteryPage />} />
          <Route path="/testi" element={<TestimonialsData />} />
          <Route path="/calculations" element={<Calculations />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
