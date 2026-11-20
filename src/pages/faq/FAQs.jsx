import React from "react";
import Banner from "../../components/banner/Banner";
import BannerImage from "../../assets/about-banner.jpg";
import Accordion from "../../components/accordion/Accordion";
import Generate from "../../components/generate/Generate";
import "./FAQs.css";

const FAQs = () => {
  return (
    <div className="faq-page">
      <Banner
        title={"FAQs"}
        teaser={"Helping you save energy and keep the lights on"}
        image={BannerImage}
      />
      <Accordion />
      <Generate
        title="Still have questions?"
        text="Our solar specialists are happy to help. Call us or request a free quote."
      />
    </div>
  );
};

export default FAQs;
