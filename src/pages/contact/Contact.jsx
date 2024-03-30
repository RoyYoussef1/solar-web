import React, { useRef } from "react";
import Banner from "../../components/banner/Banner";
import BannerImage from "../../assets/Banner2.1.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wro64or", "template_jfzpyol", form.current, {
        publicKey: "N_Y03DkjfJseq_0pG",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <Banner
        image={BannerImage}
        title="Contact Us"
        teaser="Need Assistance or Have a Question?"
      />
      <div className="contact-map-wrapper">
        <iframe
          title="Map showing our location"
          src="https://snazzymaps.com/embed/591714"
          width="99.81%"
          height="450px"
        ></iframe>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
