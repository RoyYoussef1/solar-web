import React from "react";
import { useParams } from "react-router-dom";
import "./ServiceLayout.css";
import Banner from "../banner/Banner";
import BannerImage from "../../assets/Banner3.1.png";
import ServiceMenu from "../serviceMenu/ServiceMenu";
import CTABlockServices from "../CTABlockServices/CTABlockServices";
import ServiceBenefits from "../serviceBenefits/ServiceBenefits";
import SectionIntro from "../sectionIntro/SectionIntro";
import Generate from "../generate/Generate";
import NotFoundPage from "../404/NotFoundPage";
import { ServiceGrid } from "../serviceCard/ServiceCard";
import services from "../../data/servicesData";
import SubImage1 from "../../assets/worker-installing-solar-panels-2.jpg";
import SubImage2 from "../../assets/working-tools-for-installing-solar-panels.jpg";

const ServiceLayout = () => {
  const { serviceType } = useParams();
  const index = services.findIndex((s) => s.slug === serviceType);

  if (index === -1) {
    return <NotFoundPage />;
  }

  const service = services[index];
  const related = [1, 2, 3].map((n) => services[(index + n) % services.length]);

  return (
    <div>
      <Banner image={BannerImage} title={service.title} teaser={service.teaser} />

      <section className="service-layout-section">
        <div className="service-layout-wrapper">
          <aside className="service-layout-sidebar">
            <ServiceMenu />
            <CTABlockServices />
          </aside>

          <article className="service-layout-main">
            <div className="service-layout-img">
              <img src={service.detailImage} alt={service.title} />
            </div>
            <span className="service-layout-eyebrow">
              <span className="service-layout-line"></span> SERVICE DETAILS
            </span>
            <h2 className="service-layout-title">{service.title}</h2>
            <p className="service-layout-text">{service.text1}</p>

            <ServiceBenefits features={service.features} />

            <h3 className="service-layout-subtitle">{service.title2}</h3>
            <p className="service-layout-text">{service.text2}</p>

            <div className="service-layout-gallery">
              <img src={SubImage1} alt={`${service.title} at work`} loading="lazy" />
              <img src={SubImage2} alt={`${service.title} tools`} loading="lazy" />
            </div>
          </article>
        </div>
      </section>

      <section className="service-related">
        <div className="service-related-head">
          <SectionIntro title="Explore Other Services" text="MORE SOLUTIONS" />
        </div>
        <ServiceGrid items={related} />
      </section>

      <Generate />
    </div>
  );
};

export default ServiceLayout;
