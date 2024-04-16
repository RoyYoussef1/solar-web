import React from "react";
import SocialIcons from "../socialIcons/SocialIcons";
import "./ContactInfo.css";

//Images:
import Location from "../../assets/location.png";
import Phone from "../../assets/phone-call.png";
import Email from "../../assets/email.png";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-info-wrapper">
        <div className="contact-info">
          <div className="info-tab">
            <div className="info-icon">
              <img src={Location} alt="Location" />
            </div>
            <div className="info-text">
              60 Brooklyn Golden Street <br></br>
              New York 8800 United States
            </div>
          </div>
          <div className="info-tab">
            <div className="info-icon">
              <img src={Phone} alt="Phone" />
            </div>
            <div className="info-text">
              <a href="tel:(123) 456-7890">(123) 456-7890</a>
            </div>
          </div>
          <div className="info-tab">
            <div className="info-icon">
              <img src={Email} alt="Email" />
            </div>
            <div className="info-text">
              <a href="mailto:needhelp@company.com">needhelp@company.com</a>
            </div>
          </div>
        </div>
        <div className="follow-cont">
          <div className="follow-title">Follow us</div>
          <div className="contact-socials">
            <SocialIcons socialIcons={["facebook", "instagram", "linkedin"]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
