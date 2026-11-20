import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbMapPin, TbBolt, TbCalendarTime, TbArrowRight } from "react-icons/tb";

import Banner from "../../components/banner/Banner";
import Generate from "../../components/generate/Generate";
import BannerImage from "../../assets/Banner1.png";
import RoofImage from "../../assets/roof-top-with-solar-panels-for-green-energy.jpg";
import InspectionImage from "../../assets/africa-solar-energy-concept.jpg";
import ResearchImage from "../../assets/young-technology-lifestyle-indoor-person.jpg";
import WorkerImage from "../../assets/worker-installing-solar-panels.jpg";
import ElectricianImage from "../../assets/electrician-installing-solar-panels.jpg";
import CityImage from "../../assets/city-building.jpg";
import ToolsImage from "../../assets/working-tools-for-installing-solar-panels.jpg";
import "./Projects.css";

const projects = [
  {
    name: "Tile & Metal Roof Installation",
    type: "Installations",
    image: RoofImage,
    location: "Byblos",
    capacity: "12 kWp",
    year: "2024",
    description:
      "A 28-panel rooftop array on a mixed tile and metal roof, paired with a hybrid inverter and battery storage for round-the-clock power.",
  },
  {
    name: "Commercial Solar Inspection",
    type: "Consulting",
    image: InspectionImage,
    location: "Beirut",
    capacity: "250 kWp audit",
    year: "2024",
    description:
      "Full performance audit of an existing commercial plant, identifying wiring losses and shading issues that recovered 14% of lost output.",
  },
  {
    name: "Home Energy Research Study",
    type: "Case Studies",
    image: ResearchImage,
    location: "Jounieh",
    capacity: "40 homes",
    year: "2023",
    description:
      "A year-long study tracking how families use solar energy, used to size systems more accurately and cut payback time for new clients.",
  },
  {
    name: "Industrial Rooftop Plant",
    type: "Installations",
    image: WorkerImage,
    location: "Zahle",
    capacity: "180 kWp",
    year: "2023",
    description:
      "Large-scale installation for a food factory, offsetting most daytime consumption and running production lines through grid outages.",
  },
  {
    name: "Residential Hybrid System",
    type: "Installations",
    image: ElectricianImage,
    location: "Baabda",
    capacity: "8 kWp + 15 kWh",
    year: "2025",
    description:
      "Compact hybrid system with lithium batteries giving a family villa full backup power and a 70% drop in monthly energy bills.",
  },
  {
    name: "Office Building Feasibility",
    type: "Consulting",
    image: CityImage,
    location: "Beirut Downtown",
    capacity: "95 kWp design",
    year: "2025",
    description:
      "Feasibility study and system design for a multi-storey office tower, including roof load analysis, ROI modelling and permit support.",
  },
  {
    name: "Battery Retrofit Program",
    type: "Case Studies",
    image: ToolsImage,
    location: "Tripoli",
    capacity: "25 sites",
    year: "2024",
    description:
      "Upgrading lead-acid banks to lithium storage across 25 small businesses, doubling usable capacity and extending system life.",
  },
];

const filters = ["All", "Case Studies", "Consulting", "Installations"];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.type === filter);

  return (
    <div>
      <Banner
        image={BannerImage}
        title="Projects"
        teaser="Helping you save energy and keep the lights on"
      />
      <div className="projects-container">
        <div className="filter-container">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={filter === f ? "active-project-cta" : ""}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="projects-list">
          {filteredProjects.map((project) => (
            <article key={project.name} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.name} loading="lazy" />
                <span className="project-type">{project.type}</span>
              </div>
              <div className="project-body">
                <h3>{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-meta">
                  <span><TbMapPin /> {project.location}</span>
                  <span><TbBolt /> {project.capacity}</span>
                  <span><TbCalendarTime /> {project.year}</span>
                </div>
                <Link to="/contact" className="project-link">
                  Start a similar project <TbArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Generate />
    </div>
  );
};

export default Projects;
