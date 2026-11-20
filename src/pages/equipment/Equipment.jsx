import React from "react";
import { Link } from "react-router-dom";
import {
  TbArrowRight,
  TbCheck,
  TbShieldCheck,
  TbCertificate,
  TbTruckDelivery,
  TbHeadset,
} from "react-icons/tb";
import Banner from "../../components/banner/Banner";
import SectionIntro from "../../components/sectionIntro/SectionIntro";
import Generate from "../../components/generate/Generate";
import { inverters, solarPanels, Batteries } from "../../data/EquipmentData";
import "./Equipment.css";

//images
import equipmentBanner from "../../assets/equipments/equipment-banner.jpg";
import solarPanel from "../../assets/equipments/solar-panels.jpg";
import batteries from "../../assets/equipments/batteries.png";
import inverter from "../../assets/equipments/inverters.png";

const categories = [
  {
    title: "Solar Panels",
    url: "/equipment/panels",
    image: solarPanel,
    count: solarPanels.length,
    text: "High-efficiency N-type modules that capture more sunlight and keep producing for decades.",
    highlights: ["430W to 635W options", "Jinko Tiger Neo N-type cells", "Up to 10-year performance warranty"],
  },
  {
    title: "Batteries",
    url: "/equipment/batteries",
    image: batteries,
    count: Batteries.length,
    text: "Lithium storage that keeps your home or business running at night and during outages.",
    highlights: ["Lithium-ion technology", "6000-cycle lifespan", "Up to 7-year warranty"],
  },
  {
    title: "Inverters",
    url: "/equipment/inverters",
    image: inverter,
    count: inverters.length,
    text: "Smart hybrid inverters that balance solar, battery and grid power automatically.",
    highlights: ["3kW to 12kW range", "Single & three phase", "Solar + battery hybrid ready"],
  },
];

const perks = [
  { icon: <TbShieldCheck />, title: "Manufacturer Warranty", text: "Every product is covered by official warranties." },
  { icon: <TbCertificate />, title: "Certified Brands", text: "We only stock tested, certified equipment." },
  { icon: <TbTruckDelivery />, title: "Fast Delivery", text: "In-stock items delivered and installed quickly." },
  { icon: <TbHeadset />, title: "Expert Advice", text: "Our engineers help you pick the right setup." },
];

const Equipment = () => {
  return (
    <div>
      <Banner
        image={equipmentBanner}
        title={"Equipment"}
        teaser={"Discover our wide range of equipment options."}
      />

      <section className="equipment-section">
        <div className="equipment-intro">
          <SectionIntro title="Everything Your System Needs" text="OUR EQUIPMENT" />
          <p>
            We supply and install proven components from leading manufacturers,
            so every part of your solar system works together reliably.
          </p>
        </div>

        <div className="equipment-grid">
          {categories.map((cat) => (
            <Link to={cat.url} className="equipment-card" key={cat.title}>
              <div className="equipment-card-image">
                <img src={cat.image} alt={cat.title} />
                <span className="equipment-count">{cat.count} models</span>
              </div>
              <div className="equipment-card-body">
                <h3>{cat.title}</h3>
                <p>{cat.text}</p>
                <ul>
                  {cat.highlights.map((h) => (
                    <li key={h}>
                      <TbCheck /> {h}
                    </li>
                  ))}
                </ul>
                <span className="equipment-card-cta">
                  Browse {cat.title} <TbArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="equipment-perks">
        <div className="equipment-perks-wrap">
          {perks.map((perk) => (
            <div className="equipment-perk" key={perk.title}>
              <div className="equipment-perk-icon">{perk.icon}</div>
              <div>
                <h4>{perk.title}</h4>
                <p>{perk.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Generate />
    </div>
  );
};

export default Equipment;
