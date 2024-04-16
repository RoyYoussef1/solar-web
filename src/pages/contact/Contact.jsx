import React from "react";
import "./Contact.css";
import Banner from "../../components/banner/Banner";
import BannerImage from "../../assets/Banner2.1.png";
import Map from "../../components/Map";
import Form from "../../components/Form";
import ContactInfo from "../../components/contactInfo/ContactInfo";

const Contact = () => {
  return (
    <div>
      <Banner
        image={BannerImage}
        title="Contact Us"
        teaser="Need Assistance or Have a Question?"
      />
      <Map />

      <div className="contact-tab">
        <div className="contact-tab-info">
          <div className="info-title">Schedule a Quote</div>
          <div className="info-teaser">Fill out the form and we'll get back to you ASAP!</div>
        </div>
        <div className="contact-tab-wrap">
          <ContactInfo />
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
