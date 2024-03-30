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
        title={"Energy Source for a Better Life"}
        teaser={"OUR INTRODUCTION"}
        smallText={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Donec scelerisque dolor id nunc dictum."
        }
        image={EnergyPerson}
        isImageRight={false}
        featuresWithIcon={[
          {
            icon: IconImage1, // path to your icon image
            title: "Reduce Your Daily Energy Use",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            icon: IconImage2, // path to your icon image
            title: "The Most Used Energy Systems",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
      <div className="services-home-wrap">
        <Service
          title={"Solar Technology"}
          text={"Test1234"}
          image={ServiceImage1}
        />
        <Service
          title={"Solar Installation"}
          text={"Test1234"}
          image={ServiceImage2}
        />
        <Service
          title={"Solar Equipment"}
          text={"Test1234"}
          image={ServiceImage3}
        />
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
              URL={"/services"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Case
              image={AfricanGirl}
              type={"Consulting"}
              title={"Commercial Solar Inspections"}
              URL={"/services"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Case
              image={GirlImage}
              type={"Case Studies"}
              title={"Solar Research Development"}
              URL={"/services"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Case
              image={ElecImage}
              type={"Installations"}
              title={"Solar Panel Installation"}
              URL={"/services"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="second-feature-section">
        <FeatureSection
          title={"Energy Source for a Better Life"}
          teaser={"OUR INTRODUCTION"}
          smallText={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Donec scelerisque dolor id nunc dictum."
          }
          image={CityBuilding}
          isImageRight={true}
          featuresWithIcon={[
            {
              icon: IconImage1, // path to your icon image
              title: "Reduce Your Daily Energy Use",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              icon: IconImage2, // path to your icon image
              title: "The Most Used Energy Systems",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ]}
          learn={{
            buttonLabel: "Learn More",
            buttonURL: "/about",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
