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
    </div>
  );
};

export default Contact;
