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
      <div className="first-home-sec-intro">
        <SectionIntro title={"Latest Case Studies"} text={"RECENT PROJECTS"}/>
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
      <div className="home-second-sec-intro"><SectionIntro title={"Our Services"} text={"WHAT WE DO"} /></div>
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
    </div>
  );
};

export default Home;
