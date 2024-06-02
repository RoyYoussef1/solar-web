import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Home.css";
import HomeHero from "../../assets/home-hero.jpg";
import Hero from "../../components/hero/Hero";
import Service from "../../components/services/Service";
import ServiceImage1 from "../../assets/service-01.jpg";
import ServiceImage2 from "../../assets/service-02.jpg";
import ServiceImage3 from "../../assets/service-03.jpg";
import SectionIntro from "../../components/sectionIntro/SectionIntro";
import HouseImage from "../../assets/roof-top-with-solar-panels-for-green-energy.jpg";
import AfricanGirl from "../../assets/africa-solar-energy-concept.jpg";
import GirlImage from "../../assets/young-technology-lifestyle-indoor-person.jpg";
import ElecImage from "../../assets/worker-installing-solar-panels.jpg";
import Case from "../../components/case/Case";
import FeatureSection from "../../components/featureSection/FeatureSection";
import EnergyPerson from "../../assets/electrician-installing-solar-panels.jpg";
import IconImage1 from "../../assets/icon-1-1.png";
import IconImage2 from "../../assets/icon-2-1.png";
import CityBuilding from "../../assets/city-building.jpg";
import Generate from "../../components/generate/Generate";
import Button from "../../components/button/Button";

const Home = () => {
  const content = {
    title: (
      <>
        Powering Homes
        <br />
        With Solar Panels
      </>
    ),
    teaser: "SOLAR PANEL INSTALLATION SOLUTIONS",
    buttonLabel: "Discover More",
    buttonURL: "/about",
    image: HomeHero,
  };

  return (
    <div>
      <Hero {...content} />
      <FeatureSection
        title={"Sustainable Energy Solutions for Modern Living"}
        teaser={"OUR INTRODUCTION"}
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
        learn={{
          buttonLabel: "Learn More",
          buttonURL: "/about",
        }}
      />
      <div className="home-second-sec-intro">
        <SectionIntro title={"Our Services"} text={"WHAT WE DO"} />
      </div>
      <div className="services-home-sec">
        <div className="services-home-wrap">
          <Service
            title={"Solar Technology"}
            text={"Stay ahead with our advanced solar technology, designed for maximum efficiency and reliability."}
            image={ServiceImage1}
            link={"/services/solar-technology"}
          />
          <Service
            title={"Solar Installation"}
            text={"Professional installation services to ensure your solar panels are set up for optimal performance."}
            image={ServiceImage2}
            link={"/services/solar-installation"}
          />
          <Service
            title={"Solar Equipment"}
            text={"High-quality solar equipment to meet all your energy needs, ensuring durability and effectiveness."}
            image={ServiceImage3}
            link={"/services/solar-equipment"}
          />
        </div>
        <div className="view-services">
          <Button buttonLabel="View all" buttonURL="/services" />
        </div>
      </div>
      <div className="first-home-sec-intro">
        <SectionIntro title={"Latest Case Studies"} text={"RECENT PROJECTS"} />
      </div>
      <div className="home-cases">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            1200: { slidesPerView: 4 },
            900: {
              slidesPerView: 3,
            },
            568: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <Case
              image={HouseImage}
              type={"Installations"}
              title={"Tile & Metal Roof Installations"}
              URL={"/projects"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Case
              image={AfricanGirl}
              type={"Consulting"}
              title={"Commercial Solar Inspections"}
              URL={"/projects"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Case
              image={GirlImage}
              type={"Case Studies"}
              title={"Solar Research Development"}
              URL={"/projects"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Case
              image={ElecImage}
              type={"Installations"}
              title={"Solar Panel Installation"}
              URL={"/projects"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="second-feature-section">
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
              icon: IconImage1, // path to your icon image
              title: "Reduce Your Daily Energy Use",
              text: "Cut down on energy costs with our efficient solutions designed to minimize daily consumption.",
            },
            {
              icon: IconImage2, // path to your icon image
              title: "The Most Used Energy Systems",
              text: "Our systems are widely adopted, providing reliable and efficient energy for various needs.",
            },
          ]}
          learn={{
            buttonLabel: "Learn More",
            buttonURL: "/services",
          }}
        />
      </div>
      <Generate />
    </div>
  );
};

export default Home;
