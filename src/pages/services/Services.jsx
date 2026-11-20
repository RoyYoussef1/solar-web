import React from "react";
import Banner from "../../components/banner/Banner";
import BannerImage from "../../assets/Banner3.1.png";
import SectionIntro from "../../components/sectionIntro/SectionIntro";
import Highlights from "../../components/highlights/Highlights";
import TeamWork from "../../components/teamWork/TeamWork";
import Testimonials from "../../components/firebase/Testimonials";
import Generate from "../../components/generate/Generate";
import { ServiceGrid } from "../../components/serviceCard/ServiceCard";
import services from "../../data/servicesData";
import "./Services.css";

const Services = () => {
  return (
    <div>
      <Banner
        image={BannerImage}
        title="Services"
        teaser="We offer a wide range of services to meet your needs"
      />

      <section className="services-page-list">
        <div className="services-page-head">
          <SectionIntro title="Complete Solar Solutions" text="WHAT WE DO" />
          <p>
            From the first consultation to years of maintenance, one team handles
            every part of your solar journey.
          </p>
        </div>
        <ServiceGrid items={services} />
      </section>

      <TeamWork />
      <Testimonials />
      <div className="services-page-why">
        <div className="services-page-head">
          <SectionIntro title="Why Customers Choose Us" text="OUR PROMISE" />
        </div>
        <Highlights />
      </div>

      <Generate />
    </div>
  );
};

export default Services;
