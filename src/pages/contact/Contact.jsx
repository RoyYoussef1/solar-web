import React from "react";
import Banner from "../../components/banner/Banner";
import BannerImage from "../../assets/Banner2.1.png";

const Contact = () => {

  return (
    <div>
      <Banner
        image={BannerImage}
        title="Contact Us"
        teaser="Need Assistance or Have a Question?"
      />
      <div className="contact-map-wrapper">
        <iframe src="https://snazzymaps.com/embed/591714" width="99.81%" height="450px"></iframe>
      </div>
    </div>
  );
};

export default Contact;
