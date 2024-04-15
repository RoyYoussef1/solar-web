import React from "react";
import Banner from "../../components/banner/Banner";
import BannerImage from "../../assets/Banner2.1.png";
import Map from "../../components/Map";
import Form from "../../components/Form";

const Contact = () => {

  return (
    <div>
      <Banner
        image={BannerImage}
        title="Contact Us"
        teaser="Need Assistance or Have a Question?"
      />
      <Map />
      <Form />
    </div>
  );
};

export default Contact;
