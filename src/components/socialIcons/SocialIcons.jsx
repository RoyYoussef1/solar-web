import React from "react";

import facebook from "../../assets/socialicons/facebook.png";
import instagram from "../../assets/socialicons/instagram.png";
import whatsapp from "../../assets/socialicons/whatsapp.png";
import youtube from "../../assets/socialicons/youtube.png";
import linkedin from "../../assets/socialicons/linkedin.png";

import "./SocialIcons.css";

const socialMediaLinks = {
  facebook: "https://www.facebook.com",
  instagram: "https://www.instagram.com",
  whatsapp: "https://www.whatsapp.com",
  youtube: "https://www.youtube.com",
  linkedin: "https://www.linkedin.com",
};

const icons = {
  facebook,
  instagram,
  whatsapp,
  youtube,
  linkedin,
};

const SocialIcons = ({ socialIcons }) => {
  return (
    <div className="social-icons">
      {socialIcons.map((icon) => (
        <a
          key={icon}
          href={socialMediaLinks[icon]}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src={icons[icon]} alt={`${icon} icon`} />
        </a>
      ))}
    </div>
  );
};

export { facebook, instagram, whatsapp, youtube, linkedin };
export default SocialIcons;
