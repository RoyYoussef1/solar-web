import React from "react";
import './About.css'
import Banner from "../../components/banner/Banner";
import FeatureSection from "../../components/featureSection/FeatureSection";
import CityBuilding from "../../assets/city-building.jpg";
import BannerImage from "../../assets/about-banner.jpg";
import IconImage1 from "../../assets/icon-1-1.png";
import IconImage2 from "../../assets/icon-2-1.png";
import ServiceV2Image1 from '../../assets/serviceV2-1.jpg'
import ServiceV2 from "../../components/services/ServiceV2";

const About = () => {
  return (
    <div>
      <Banner
        title={"About"}
        teaser={"Specializing in Green Technology"}
        image={BannerImage}
      />
      <div className="service-v2-wrap">
        <ServiceV2 image={ServiceV2Image1} title={'Renewable Source'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dolor id nunc dictum.'}/>
        <ServiceV2 image={ServiceV2Image1} title={'Renewable Source'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dolor id nunc dictum.'}/>
        <ServiceV2 image={ServiceV2Image1} title={'Renewable Source'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dolor id nunc dictum.'}/>
      </div>
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
  );
};

export default About;
