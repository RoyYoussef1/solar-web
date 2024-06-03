import React from "react";
import Banner from "../../components/banner/Banner";
import BannerImage from "../../assets/about-banner.jpg";
import Accordion from "../../components/accordion/Accordion";
// import DataFetcher from "../../components/DataFetcher";
import "./FAQs.css";
import ChatBot from "../../components/ChatBot";

const FAQs = () => {
  return (
    <div className="faq-page">
      <Banner
        title={"FAQs"}
        teaser={"Helping you save energy and keep the lights on"}
        image={BannerImage}
      />
      <Accordion />
      {/* <DataFetcher /> */}
      <div className="faq-header">
        <h2>Have More Questions? Feel free to ask our own Chat Bot: SOLARWEBOT</h2>
      </div>
      <ChatBot />
    </div>
  );
};

export default FAQs;
