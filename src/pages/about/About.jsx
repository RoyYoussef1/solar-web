import React from "react";
import './About.css'
import Banner from "../../components/banner/Banner";
import FeatureSection from "../../components/featureSection/FeatureSection";
import CityBuilding from "../../assets/city-building.jpg";
import BannerImage from "../../assets/about-banner.jpg";
import IconImage1 from "../../assets/icon-1-1.png";
import IconImage2 from "../../assets/icon-2-1.png";
import ServiceV2Image1 from '../../assets/serviceV2-1.jpg'
import ServiceV2Image2 from '../../assets/serviceV2-2.jpg'
import ServiceV2Image3 from '../../assets/serviceV2-3.jpg'
import ServiceV2 from "../../components/services/ServiceV2";
import TeamWork from "../../components/teamWork/TeamWork";
import Testimonials from "../../components/firebase/Testimonials";
import Generate from "../../components/generate/Generate";
import Stats from "../../components/firebase/Stats";
import SectionIntro from "../../components/sectionIntro/SectionIntro";
import { TbLeaf, TbTool, TbShieldCheck } from "react-icons/tb";

const About = () => {
  return (
    <div>
      <Banner
        title={"About"}
        teaser={"Specializing in Green Technology"}
        image={BannerImage}
      />
      <FeatureSection
        title={"Energy Source for a Better Life"}
        teaser={"OUR INTRODUCTION"}
        smallText={
          "Discover how our innovative energy solutions can enhance your daily life and contribute to a sustainable future. We provide cutting-edge technology designed to optimize energy use and reduce environmental impact."
        }
        image={CityBuilding}
        isImageRight={true}
        featuresWithIcon={[
          {
            icon: IconImage1,
            title: "Reduce Your Daily Energy Use",
            text: "Cut down on energy costs with our efficient solutions designed to minimize daily consumption.",
          },
          {
            icon: IconImage2,
            title: "The Most Used Energy Systems",
            text: "Our systems are widely adopted, providing reliable and efficient energy for various needs.",
          },
        ]}
        learn={{
          buttonLabel: "Learn More",
          buttonURL: "/services",
        }}
      />
      <section className="about-advantages">
        <div className="about-advantages-head">
          <SectionIntro title="Why Go Solar With Us" text="OUR ADVANTAGES" />
          <p>Clean energy that is simple to install and easy to live with.</p>
        </div>
        <div className="service-card-grid">
          <ServiceV2
            icon={TbLeaf}
            image={ServiceV2Image1}
            title={"Renewable Source"}
            text={"Harness the power of renewable energy to reduce carbon footprints and promote sustainability. Embrace the future with clean and green energy solutions."}
          />
          <ServiceV2
            icon={TbTool}
            image={ServiceV2Image2}
            title={"Easy Installation"}
            text={"Our solar panels are designed for quick and hassle-free installation, so you can start benefiting from solar energy without delays or complications."}
          />
          <ServiceV2
            icon={TbShieldCheck}
            image={ServiceV2Image3}
            title={"Low Maintenance"}
            text={"Our systems are built to last, requiring minimal upkeep while providing maximum efficiency and reliability year after year."}
          />
        </div>
      </section>
      <Stats />
      <TeamWork />
      <Testimonials />
      <Generate />
    </div>
  );
};

export default About;
