import {
  TbSolarPanel2,
  TbTool,
  TbSolarPanel,
  TbBatteryCharging2,
  TbGauge,
  TbBuildingFactory2,
  TbSun,
  TbCpu,
  TbChartLine,
  TbDeviceMobile,
  TbRuler2,
  TbClipboardList,
  TbFileCertificate,
  TbPlugConnected,
  TbBox,
  TbTruck,
  TbShieldCheck,
  TbBattery4,
  TbTemperature,
  TbShieldBolt,
  TbRefresh,
  TbAdjustmentsBolt,
  TbThermometer,
  TbBrush,
  TbSearch,
  TbReportAnalytics,
  TbCalendarRepeat,
} from "react-icons/tb";

import ServiceImage1 from "../assets/service-01.jpg";
import ServiceImage2 from "../assets/service-02.jpg";
import ServiceImage3 from "../assets/service-03.jpg";
import ServiceImage4 from "../assets/service-04.jpg";
import ServiceImage5 from "../assets/service-05.jpg";
import ServiceImage6 from "../assets/service-06.jpg";
import DetailImage1 from "../assets/service-layout/service-sub-image-01.jpg";
import DetailImage2 from "../assets/service-layout/service-sub-image-02.jpg";
import DetailImage3 from "../assets/service-layout/service-sub-image-03.jpg";
import DetailImage4 from "../assets/service-layout/service-sub-image-04.jpg";
import DetailImage5 from "../assets/service-layout/service-sub-image-05.jpg";
import DetailImage6 from "../assets/service-layout/service-sub-image-06.jpg";

const services = [
  {
    slug: "solar-technology",
    title: "Solar Technology",
    icon: TbSolarPanel2,
    image: ServiceImage1,
    detailImage: DetailImage1,
    short: "Advanced solar technology designed for maximum efficiency and reliability.",
    teaser: "Efficient, renewable energy built on the latest solar innovation",
    text1:
      "Discover the latest in solar technology, providing efficient and renewable energy solutions. Our innovative solar panels are designed to capture the maximum amount of sunlight and convert it into usable energy, ensuring that you get the most out of your investment. Whether for residential or commercial use, our solar technology is at the forefront of the industry, offering unparalleled performance and reliability.",
    title2: "Advanced Solar Panels",
    text2:
      "Our advanced solar panels are engineered to deliver superior efficiency and durability. With state-of-the-art materials and cutting-edge design, these panels can withstand harsh weather conditions and maintain high energy output for years to come. Experience the future of energy with our top-of-the-line solar panels, designed to provide sustainable power for all your needs.",
    features: [
      { icon: TbSun, title: "High-yield N-type cells", text: "More power from every hour of sunlight." },
      { icon: TbCpu, title: "Smart system design", text: "Every system is sized to your real usage." },
      { icon: TbChartLine, title: "Performance tracking", text: "Clear reports on what your system produces." },
      { icon: TbDeviceMobile, title: "App monitoring", text: "Check production and storage from your phone." },
    ],
  },
  {
    slug: "solar-installation",
    title: "Solar Installation",
    icon: TbTool,
    image: ServiceImage2,
    detailImage: DetailImage2,
    short: "Professional installation so your panels are set up for optimal performance.",
    teaser: "Certified technicians, clean work and a hassle-free switch-on",
    text1:
      "Professional installation services to ensure optimal performance of your solar system. Our team of certified technicians is dedicated to providing a seamless installation process, from initial consultation to final setup. We handle all aspects of the installation, ensuring that your solar panels are positioned for maximum efficiency and integrated seamlessly with your existing electrical system.",
    title2: "Expert Installation",
    text2:
      "Our expert installation services are tailored to meet the unique needs of each customer. We conduct thorough site assessments to determine the best placement for your solar panels and use high-quality materials to ensure a secure and lasting installation. Trust our experienced team to deliver a hassle-free and efficient installation, allowing you to start saving on energy costs immediately.",
    features: [
      { icon: TbRuler2, title: "Site assessment", text: "Roof, shading and load checked before we quote." },
      { icon: TbClipboardList, title: "Custom layout", text: "Panels placed for maximum sun exposure." },
      { icon: TbPlugConnected, title: "Seamless wiring", text: "Integrated cleanly with your existing electrics." },
      { icon: TbFileCertificate, title: "Certified team", text: "Trained, insured installers on every job." },
    ],
  },
  {
    slug: "solar-equipment",
    title: "Solar Equipment",
    icon: TbSolarPanel,
    image: ServiceImage3,
    detailImage: DetailImage3,
    short: "High-quality panels, inverters and mounting built to last.",
    teaser: "Proven components from leading manufacturers",
    text1:
      "High-quality equipment to support your solar energy system for long-lasting performance. We offer a wide range of solar equipment, including inverters, mounting systems, and monitoring devices, all designed to work together seamlessly. Our products are sourced from leading manufacturers and meet the highest standards of quality and reliability.",
    title2: "Durable and Reliable",
    text2:
      "We provide top-tier equipment that guarantees efficiency and reliability. Our inverters convert the direct current (DC) generated by your solar panels into alternating current (AC) for use in your home or business. Our mounting systems ensure that your panels are securely attached and optimally positioned, while our monitoring devices allow you to track the performance of your system in real-time.",
    features: [
      { icon: TbSolarPanel, title: "Premium panels", text: "High-efficiency modules from top brands." },
      { icon: TbBox, title: "Complete kits", text: "Inverters, mounting and cabling that fit together." },
      { icon: TbTruck, title: "Fast delivery", text: "In-stock equipment delivered quickly." },
      { icon: TbShieldCheck, title: "Official warranty", text: "Manufacturer-backed coverage on every item." },
    ],
  },
  {
    slug: "battery-materials",
    title: "Battery Materials",
    icon: TbBatteryCharging2,
    image: ServiceImage4,
    detailImage: DetailImage4,
    short: "Lithium storage that keeps the lights on at night and during outages.",
    teaser: "Reliable storage for power day and night",
    text1:
      "Premium materials for efficient energy storage and extended battery life. Our battery materials are designed to maximize storage capacity and ensure that your solar energy system can store and provide power even when the sun isn't shining. We use advanced chemistry and high-quality components to deliver batteries that are safe, reliable, and long-lasting.",
    title2: "Efficient Energy Storage",
    text2:
      "Our materials ensure that your energy storage is both efficient and durable. With high energy density and long cycle life, our batteries provide consistent power over many years of use. They are designed to integrate seamlessly with your solar energy system, providing backup power during outages and reducing your reliance on the grid. Invest in our premium battery materials for a robust and reliable energy storage solution.",
    features: [
      { icon: TbBattery4, title: "High capacity", text: "Store more of the energy you produce." },
      { icon: TbRefresh, title: "Long cycle life", text: "Thousands of cycles of dependable use." },
      { icon: TbShieldBolt, title: "Outage backup", text: "Automatic power when the grid goes down." },
      { icon: TbTemperature, title: "Built-in protection", text: "Smart management keeps cells safe." },
    ],
  },
  {
    slug: "charge-controllers",
    title: "Charge Controllers",
    icon: TbGauge,
    image: ServiceImage5,
    detailImage: DetailImage5,
    short: "Smart controllers that protect your batteries and optimize energy flow.",
    teaser: "Intelligent energy management that protects your system",
    text1:
      "Advanced controllers to manage and optimize the energy flow from your solar panels. Our charge controllers are essential for preventing overcharging and ensuring that your batteries are charged safely and efficiently. They regulate the voltage and current coming from your solar panels to match the requirements of your battery, prolonging its life and enhancing its performance.",
    title2: "Optimized Energy Management",
    text2:
      "Our controllers are designed to maximize energy efficiency and protect your system. With features such as maximum power point tracking (MPPT) and temperature compensation, our charge controllers ensure that your solar energy system operates at peak efficiency. They are easy to install and use, providing reliable and intelligent energy management for both residential and commercial applications.",
    features: [
      { icon: TbAdjustmentsBolt, title: "MPPT tracking", text: "Extracts maximum power from your panels." },
      { icon: TbShieldBolt, title: "Overcharge protection", text: "Keeps batteries healthy for longer." },
      { icon: TbThermometer, title: "Temperature compensation", text: "Adjusts charging to the conditions." },
      { icon: TbChartLine, title: "Live readings", text: "Voltage and current at a glance." },
    ],
  },
  {
    slug: "grid-maintenance",
    title: "Grid Maintenance",
    icon: TbBuildingFactory2,
    image: ServiceImage6,
    detailImage: DetailImage6,
    short: "Cleaning, inspections and repairs to keep output at its peak.",
    teaser: "Keep your system running at peak performance",
    text1:
      "Comprehensive maintenance services to keep your solar energy grid in top condition. Regular maintenance is crucial to ensure that your solar energy system continues to operate efficiently and effectively. Our maintenance services include cleaning, inspection, and repair of solar panels, inverters, and other components of your system.",
    title2: "Reliable Maintenance",
    text2:
      "Regular maintenance services to ensure uninterrupted energy supply. Our team of experts conducts thorough inspections to identify any issues and perform necessary repairs to prevent system failures. We also offer performance monitoring and reporting to keep you informed about the health and efficiency of your solar energy system. Trust our reliable maintenance services to keep your solar grid running smoothly and efficiently.",
    features: [
      { icon: TbBrush, title: "Panel cleaning", text: "Remove dust and debris that cut output." },
      { icon: TbSearch, title: "Full inspections", text: "Wiring, inverters and mounts checked." },
      { icon: TbReportAnalytics, title: "Performance reports", text: "Know exactly how your system is doing." },
      { icon: TbCalendarRepeat, title: "Scheduled visits", text: "Maintenance plans that fit your calendar." },
    ],
  },
];

export default services;
