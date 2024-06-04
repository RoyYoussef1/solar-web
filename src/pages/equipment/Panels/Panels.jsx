import React from "react";
import "./PanelsPage.css";

import BannerGallery from "../../../components/BannerGallery/BannerGallery";
import panel430Image1 from "../../../assets/equipments/panels/430w-1.webp";
import panel490Image1 from "../../../assets/equipments/panels/490w-1.webp";
import panel570Image1 from "../../../assets/equipments/panels/570w-1.webp";
import panel635Image1 from "../../../assets/equipments/panels/635w-1.webp";
import SolarBanner from "../../../assets/equipments/panels/solar-banner.jpg";
import Banner from "../../../components/banner/Banner";

const banners = [
  {
    id: 1,
    imageUrl: panel430Image1,
    title: "Jinko Tiger Neo 430W N-Type",
    link: "https://example.com/page1",
  },
  {
    id: 2,
    imageUrl: panel490Image1,
    title: "Jinko Tiger Neo 490W N-Type",
    link: "https://example.com/page2",
  },
  {
    id: 3,
    imageUrl: panel570Image1,
    title: "Jinko Tiger Neo 570W N-Type",
    link: "https://example.com/page3",
  },
  {
    id: 4,
    imageUrl: panel635Image1,
    title: "Jinko Tiger Neo 635W N-Type",
    link: "https://example.com/page4",
  },
];

const Panels = () => {
  return (
    <div>
      <div className="inv-ban-wrap">
        <Banner title={"Solar Panels"} image={SolarBanner} />
      </div>
      <BannerGallery banners={banners} type={"panels"} />
    </div>
  );
};

export default Panels;
