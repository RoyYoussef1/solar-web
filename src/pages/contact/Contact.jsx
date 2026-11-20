import React from "react";
import {
  TbMapPin,
  TbPhone,
  TbMail,
  TbClock,
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
} from "react-icons/tb";
import "./Contact.css";
import Banner from "../../components/banner/Banner";
import BannerImage from "../../assets/Banner2.1.png";
import Map from "../../components/Map";
import Form from "../../components/Form";

const contactItems = [
  {
    icon: <TbMapPin />,
    label: "Visit Us",
    value: (
      <>
        60 Brooklyn Golden Street
        <br />
        New York 8800 United States
      </>
    ),
  },
  {
    icon: <TbPhone />,
    label: "Call Us",
    value: <a href="tel:+11234567890">(123) 456-7890</a>,
  },
  {
    icon: <TbMail />,
    label: "Email Us",
    value: <a href="mailto:SSolarWeb@gmail.com">SSolarWeb@gmail.com</a>,
  },
  {
    icon: <TbClock />,
    label: "Working Hours",
    value: (
      <>
        Mon – Fri: 8:00 AM – 6:00 PM
        <br />
        Sat: 9:00 AM – 2:00 PM
      </>
    ),
  },
];

const socials = [
  { icon: <TbBrandFacebook />, url: "https://www.facebook.com", label: "Facebook" },
  { icon: <TbBrandInstagram />, url: "https://www.instagram.com", label: "Instagram" },
  { icon: <TbBrandLinkedin />, url: "https://www.linkedin.com", label: "LinkedIn" },
];

const Contact = () => {
  return (
    <div>
      <Banner
        image={BannerImage}
        title="Contact Us"
        teaser="Need Assistance or Have a Question?"
      />

      <section className="contact-quote">
        <div className="contact-quote-wrap">
          <div className="contact-quote-info">
            <span className="contact-eyebrow">
              <span className="contact-line"></span> GET IN TOUCH
            </span>
            <h2>Schedule a Quote</h2>
            <p className="contact-lead">
              Tell us a little about your property and energy needs. One of our
              solar specialists will reach out within 24 hours with a free,
              no-obligation quote.
            </p>

            <ul className="contact-items">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <span className="contact-item-icon">{item.icon}</span>
                  <div>
                    <span className="contact-item-label">{item.label}</span>
                    <div className="contact-item-value">{item.value}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="contact-socials-row">
              <span>Follow us</span>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="contact-quote-card">
            <h3>Get Your Free Solar Quote</h3>
            <p>Fill out the form and we'll get back to you ASAP!</p>
            <Form />
          </div>
        </div>
      </section>

      <section className="contact-map">
        <Map />
        <div className="contact-map-card">
          <span className="contact-item-icon">
            <TbMapPin />
          </span>
          <div>
            <strong>Our Office</strong>
            <span>60 Brooklyn Golden Street, New York</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
