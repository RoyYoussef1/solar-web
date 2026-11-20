import React from "react";
import { Link } from "react-router-dom";
import { TbArrowRight, TbStarFilled, TbCalculator, TbBolt } from "react-icons/tb";

import "./Home.css";
import HomeHero from "../../assets/home-hero.jpg";
import HouseImage from "../../assets/roof-top-with-solar-panels-for-green-energy.jpg";
import AfricanGirl from "../../assets/africa-solar-energy-concept.jpg";
import GirlImage from "../../assets/young-technology-lifestyle-indoor-person.jpg";
import ElecImage from "../../assets/worker-installing-solar-panels.jpg";
import EnergyPerson from "../../assets/electrician-installing-solar-panels.jpg";
import IconImage1 from "../../assets/icon-1-1.png";
import IconImage2 from "../../assets/icon-2-1.png";
import PanelsImage from "../../assets/equipments/solar-panels.jpg";
import BatteriesImage from "../../assets/equipments/batteries.png";
import InvertersImage from "../../assets/equipments/inverters.png";

import SectionIntro from "../../components/sectionIntro/SectionIntro";
import Case from "../../components/case/Case";
import FeatureSection from "../../components/featureSection/FeatureSection";
import TeamWork from "../../components/teamWork/TeamWork";
import Testimonials from "../../components/firebase/Testimonials";
import Highlights from "../../components/highlights/Highlights";
import Generate from "../../components/generate/Generate";
import { ServiceGrid } from "../../components/serviceCard/ServiceCard";
import services from "../../data/servicesData";

const equipment = [
  { title: "Solar Panels", url: "/equipment/panels", image: PanelsImage, text: "Jinko Tiger Neo N-type, 430W – 635W" },
  { title: "Batteries", url: "/equipment/batteries", image: BatteriesImage, text: "Lithium-ion storage, 6000-cycle lifespan" },
  { title: "Inverters", url: "/equipment/inverters", image: InvertersImage, text: "Hybrid inverters from 3kW to 12kW" },
];

const caseStudies = [
  { image: HouseImage, type: "Installations", title: "Tile & Metal Roof Installations" },
  { image: AfricanGirl, type: "Consulting", title: "Commercial Solar Inspections" },
  { image: GirlImage, type: "Case Studies", title: "Solar Research Development" },
  { image: ElecImage, type: "Installations", title: "Solar Panel Installation" },
];

const Home = () => {
  return (
    <div className="home-page">
      {/* HERO */}
      <section className="home-hero on-dark" style={{ backgroundImage: `url(${HomeHero})` }}>
        <div className="home-hero-inner">
          <div className="home-hero-content">
            <span className="home-eyebrow">
              <TbBolt /> SOLAR PANEL INSTALLATION SOLUTIONS
            </span>
            <h1>
              Powering Homes & Businesses <span>With Clean Solar Energy</span>
            </h1>
            <p>
              From the first site visit to switch-on day, we design, install and
              maintain solar systems that cut your bills and keep your power running
              through every outage.
            </p>
            <div className="home-hero-actions">
              <Link to="/contact" className="site-btn site-btn-primary">
                Get a Free Quote <TbArrowRight />
              </Link>
              <Link to="/services" className="site-btn site-btn-ghost">
                Explore Services
              </Link>
            </div>
            <div className="home-hero-trust">
              <div className="home-hero-rating">
                <span className="stars">
                  <TbStarFilled /><TbStarFilled /><TbStarFilled /><TbStarFilled /><TbStarFilled />
                </span>
                <span>Rated 4.9 by 320+ customers</span>
              </div>
              <div className="home-hero-divider" />
              <div><strong>12+</strong> years of experience</div>
            </div>
          </div>

          <div className="home-hero-card">
            <div className="home-hero-card-icon"><TbCalculator /></div>
            <h3>How big should your system be?</h3>
            <p>Add your appliances and get an instant estimate of the system size you need.</p>
            <Link to="/calculations">
              Calculate now <TbArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <Highlights overlap />

      {/* ABOUT */}
      <FeatureSection
        title={"Sustainable Energy Solutions for Modern Living"}
        teaser={"WHO WE ARE"}
        smallText={
          "Explore our comprehensive range of energy solutions designed to promote a greener, more sustainable lifestyle. Our cutting-edge technology is engineered to maximize efficiency and reduce ecological footprints."
        }
        image={EnergyPerson}
        isImageRight={false}
        featuresWithIcon={[
          {
            icon: IconImage1,
            title: "Maximize Energy Efficiency",
            text: "Optimize your energy usage with our advanced solutions, ensuring lower energy bills and a more sustainable future.",
          },
          {
            icon: IconImage2,
            title: "Trusted Energy Innovations",
            text: "Experience the reliability of our top-tier energy systems, trusted by countless users for their durability and performance.",
          },
        ]}
        learn={{ buttonLabel: "About Us", buttonURL: "/about" }}
      />

      {/* SERVICES */}
      <section className="home-services">
        <div className="home-section-head">
          <SectionIntro title={"Complete Solar Solutions"} text={"WHAT WE DO"} />
          <p>One team for everything: design, equipment, installation and long-term care.</p>
        </div>
        <ServiceGrid items={services} />
      </section>

      {/* PROCESS */}
      <TeamWork />

      {/* EQUIPMENT */}
      <section className="home-equipment">
        <div className="home-equipment-wrap">
          <div className="home-equipment-text">
            <SectionIntro title={"Premium Equipment, Proven Brands"} text={"OUR EQUIPMENT"} />
            <p>
              We only install components we trust: high-efficiency panels, long-life
              lithium batteries and smart hybrid inverters, all covered by official
              warranties.
            </p>
            <Link to="/equipment" className="site-btn site-btn-dark">
              View All Equipment <TbArrowRight />
            </Link>
          </div>
          <div className="home-equipment-list">
            {equipment.map((e) => (
              <Link to={e.url} className="home-equipment-item" key={e.title}>
                <img src={e.image} alt={e.title} loading="lazy" />
                <div>
                  <h4>{e.title}</h4>
                  <p>{e.text}</p>
                </div>
                <TbArrowRight className="home-equipment-arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <div className="first-home-sec-intro">
        <SectionIntro title={"Latest Case Studies"} text={"RECENT PROJECTS"} />
      </div>
      <div className="home-cases">
        {caseStudies.map((item) => (
          <div className="home-case-item" key={item.title}>
            <Case image={item.image} type={item.type} title={item.title} URL={"/projects"} />
          </div>
        ))}
      </div>
      <div className="home-cases-more">
        <Link to="/projects" className="site-btn site-btn-primary">
          View All Projects <TbArrowRight />
        </Link>
      </div>

      {/* TESTIMONIALS */}
      <Testimonials />

      <Generate />
    </div>
  );
};

export default Home;
