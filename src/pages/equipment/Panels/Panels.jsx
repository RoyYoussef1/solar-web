import React from "react";

import image1 from "../../../assets/equipments/inverters.png";
import BannerGallery from "../../../components/BannerGallery/BannerGallery";

const banners = [
  {
    id: 1,
    imageUrl: image1,
    title: "Jinko Tiger Neo 430W N-Type",
    link: "https://example.com/page1",
  },
  {
    id: 2,
    imageUrl: image1,
    title: "Jinko Tiger Neo 490W N-Type",
    link: "https://example.com/page2",
  },
  {
    id: 3,
    imageUrl: image1,
    title: "Jinko Tiger Neo 570W N-Type",
    link: "https://example.com/page3",
  },
  {
    id: 4,
    imageUrl: image1,
    title: "Jinko Tiger Neo 635W N-Type",
    link: "https://example.com/page4",
  },
];

const Panels = () => {
  return (
    <div>
      <h1>Solar Panels</h1>
      <BannerGallery banners={banners} />
    </div>
  );
};

export default Panels;
