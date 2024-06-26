import React from "react";
import { useParams } from "react-router-dom";
import "./ServiceLayout.css";
import ServiceMenu from "../serviceMenu/ServiceMenu";
import CTABlockServices from "../CTABlockServices/CTABlockServices";
import ServiceBenefits from "../serviceBenefits/ServiceBenefits";
import SubImage1 from "../../assets/worker-installing-solar-panels-2.jpg";
import SubImage2 from "../../assets/working-tools-for-installing-solar-panels.jpg";
import ServiceLayoutImage1 from "../../assets/service-layout/service-sub-image-01.jpg";
import ServiceLayoutImage2 from "../../assets/service-layout/service-sub-image-02.jpg";
import ServiceLayoutImage3 from "../../assets/service-layout/service-sub-image-03.jpg";
import ServiceLayoutImage4 from "../../assets/service-layout/service-sub-image-04.jpg";
import ServiceLayoutImage5 from "../../assets/service-layout/service-sub-image-05.jpg";
import ServiceLayoutImage6 from "../../assets/service-layout/service-sub-image-06.jpg";

const serviceDetails = {
  "solar-technology": {
    title: "Solar Technology",
    image: ServiceLayoutImage1,
    text1:
      "Discover the latest in solar technology, providing efficient and renewable energy solutions. Our innovative solar panels are designed to capture the maximum amount of sunlight and convert it into usable energy, ensuring that you get the most out of your investment. Whether for residential or commercial use, our solar technology is at the forefront of the industry, offering unparalleled performance and reliability.",
    title2: "Advanced Solar Panels",
    text2:
      "Our advanced solar panels are engineered to deliver superior efficiency and durability. With state-of-the-art materials and cutting-edge design, these panels can withstand harsh weather conditions and maintain high energy output for years to come. Experience the future of energy with our top-of-the-line solar panels, designed to provide sustainable power for all your needs.",
  },
  "solar-installation": {
    title: "Solar Installation",
    image: ServiceLayoutImage2,
    text1:
      "Professional installation services to ensure optimal performance of your solar system. Our team of certified technicians is dedicated to providing a seamless installation process, from initial consultation to final setup. We handle all aspects of the installation, ensuring that your solar panels are positioned for maximum efficiency and integrated seamlessly with your existing electrical system.",
    title2: "Expert Installation",
    text2:
      "Our expert installation services are tailored to meet the unique needs of each customer. We conduct thorough site assessments to determine the best placement for your solar panels and use high-quality materials to ensure a secure and lasting installation. Trust our experienced team to deliver a hassle-free and efficient installation, allowing you to start saving on energy costs immediately.",
  },
  "solar-equipment": {
    title: "Solar Equipment",
    image: ServiceLayoutImage3,
    text1:
      "High-quality equipment to support your solar energy system for long-lasting performance. We offer a wide range of solar equipment, including inverters, mounting systems, and monitoring devices, all designed to work together seamlessly. Our products are sourced from leading manufacturers and meet the highest standards of quality and reliability.",
    title2: "Durable and Reliable",
    text2:
      "We provide top-tier equipment that guarantees efficiency and reliability. Our inverters convert the direct current (DC) generated by your solar panels into alternating current (AC) for use in your home or business. Our mounting systems ensure that your panels are securely attached and optimally positioned, while our monitoring devices allow you to track the performance of your system in real-time.",
  },
  "battery-materials": {
    title: "Battery Materials",
    image: ServiceLayoutImage4,
    text1:
      "Premium materials for efficient energy storage and extended battery life. Our battery materials are designed to maximize storage capacity and ensure that your solar energy system can store and provide power even when the sun isn’t shining. We use advanced chemistry and high-quality components to deliver batteries that are safe, reliable, and long-lasting.",
    title2: "Efficient Energy Storage",
    text2:
      "Our materials ensure that your energy storage is both efficient and durable. With high energy density and long cycle life, our batteries provide consistent power over many years of use. They are designed to integrate seamlessly with your solar energy system, providing backup power during outages and reducing your reliance on the grid. Invest in our premium battery materials for a robust and reliable energy storage solution.",
  },
  "charge-controllers": {
    title: "Charge Controllers",
    image: ServiceLayoutImage5,
    text1:
      "Advanced controllers to manage and optimize the energy flow from your solar panels. Our charge controllers are essential for preventing overcharging and ensuring that your batteries are charged safely and efficiently. They regulate the voltage and current coming from your solar panels to match the requirements of your battery, prolonging its life and enhancing its performance.",
    title2: "Optimized Energy Management",
    text2:
      "Our controllers are designed to maximize energy efficiency and protect your system. With features such as maximum power point tracking (MPPT) and temperature compensation, our charge controllers ensure that your solar energy system operates at peak efficiency. They are easy to install and use, providing reliable and intelligent energy management for both residential and commercial applications.",
  },
  "grid-maintenance": {
    title: "Grid Maintenance",
    image: ServiceLayoutImage6,
    text1:
      "Comprehensive maintenance services to keep your solar energy grid in top condition. Regular maintenance is crucial to ensure that your solar energy system continues to operate efficiently and effectively. Our maintenance services include cleaning, inspection, and repair of solar panels, inverters, and other components of your system.",
    title2: "Reliable Maintenance",
    text2:
      "Regular maintenance services to ensure uninterrupted energy supply. Our team of experts conducts thorough inspections to identify any issues and perform necessary repairs to prevent system failures. We also offer performance monitoring and reporting to keep you informed about the health and efficiency of your solar energy system. Trust our reliable maintenance services to keep your solar grid running smoothly and efficiently.",
  },
};

const ServiceLayout = () => {
  const { serviceType } = useParams();
  const service = serviceDetails[serviceType];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <section className="service-layout-section">
        <div className="service-layout-wrapper">
          <div className="service-layout-left-column">
            <ServiceMenu />
            <CTABlockServices />
          </div>
          <div className="service-layout-right-column">
            <div className="service-layout-img">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-layout-title">{service.title}</div>
            <div className="service-layout-text">{service.text1}</div>
            <ServiceBenefits
              benefits={[
                "Solar Technology",
                "Solar Installation",
                "Solar Equipment",
                "Battery Materials",
                "Charge Controllers",
                "Grid Maintenance"
              ]}
            />
            <div className="service-layout-subtitle">
              <b>{service.title2}</b>
            </div>
            <div className="service-layout-text">{service.text2}</div>
            <div className="service-layout-gallery">
              <div className="service-layout-subimg">
                <img src={SubImage1} alt="Service Layout Sub 01" />
              </div>
              <div className="service-layout-subimg">
                <img src={SubImage2} alt="Service Layout Sub 02" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceLayout;
