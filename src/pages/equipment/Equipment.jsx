import React from "react";
import Banner from "../../components/banner/Banner";
import "./Equipment.css";

//images
import equipmentBanner from "../../assets/equipments/equipment-banner.jpg";
import Case from "../../components/case/Case";
import solarPanel from "../../assets/equipments/solar-panels.jpg";
import batteries from '../../assets/equipments/batteries.png';
import inverter from "../../assets/equipments/inverters.png";

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
        <Case image={batteries} title={"Batteries"} URL={'/equipment/batteries'} />
        <Case image={inverter} title={"Inverters"} URL={'/equipment/inverters'} />
      </div>
    </div>
  );
};

export default Equipment;
