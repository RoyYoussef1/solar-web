import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Banner from "../../components/banner/Banner";
import BannerImage from "../../assets/Banner1.png";

import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      const projectsCollection = collection(db, "Projects");
      const projectsSnapshot = await getDocs(projectsCollection);
      const projectsList = projectsSnapshot.docs.map((doc) => doc.data());
      setProjects(projectsList);
      setFilteredProjects(projectsList);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (filter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.Type === filter)
      );
    }
  }, [filter, projects]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div>
      <Banner
        image={BannerImage}
        title="Projects"
        teaser="Helping you save energy and keep the lights on"
      />
      <div className="projects-container">
        <div className="filter-container">
          <button
            onClick={() => handleFilterChange("All")}
            className={filter === "All" ? "active-project-cta" : ""}
          >
            All
          </button>
          <button
            onClick={() => handleFilterChange("Case Studies")}
            className={filter === "Case Studies" ? "active-project-cta" : ""}
          >
            Case Studies
          </button>
          <button
            onClick={() => handleFilterChange("Consulting")}
            className={filter === "Consulting" ? "active-project-cta" : ""}
          >
            Consulting
          </button>
          <button
            onClick={() => handleFilterChange("Installations")}
            className={filter === "Installations" ? "active-project-cta" : ""}
          >
            Installations
          </button>
        </div>
        <div className="projects-list">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.Name}</h3>
              <p className="project-desc">{project.Description}</p>
              <strong className="project-type">Type: {project.Type}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
