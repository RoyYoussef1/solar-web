import React from "react";
import Banner from "../../components/banner/Banner";
import "./Equipment.css";

//images
import equipmentBanner from "../../assets/equipments/equipment-banner.jpg";
import Case from "../../components/case/Case";
import solarPanel from "../../assets/equipments/solar-panels.jpg";

const Equipment = () => {
  return (
    <div>
      <Banner
        image={equipmentBanner}
        title={"Equipment"}
        teaser={"Discover our wide range of equipment options."}
      />
      <div className="equipment-wrapper">
        <Case image={solarPanel} title={"Solar Panels"} URL={'/equipment/solarpanels'} />
        <Case image={solarPanel} title={"Batteries"} URL={'/equipment/batteries'} />
        <Case image={solarPanel} title={"Inverters"} URL={'/equipment/inverters'} />
      </div>
    </div>
  );
};

export default Equipment;
