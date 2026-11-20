import React from "react";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandWhatsapp,
  TbBrandYoutube,
} from "react-icons/tb";
import "./SocialIcons.css";

const socialMedia = {
  facebook: { url: "https://www.facebook.com", icon: TbBrandFacebook, label: "Facebook" },
  instagram: { url: "https://www.instagram.com", icon: TbBrandInstagram, label: "Instagram" },
  linkedin: { url: "https://www.linkedin.com", icon: TbBrandLinkedin, label: "LinkedIn" },
  whatsapp: { url: "https://wa.me/96176348117", icon: TbBrandWhatsapp, label: "WhatsApp" },
  youtube: { url: "https://www.youtube.com", icon: TbBrandYoutube, label: "YouTube" },
};

const SocialIcons = ({ socialIcons = ["facebook", "instagram", "linkedin", "whatsapp"] }) => {
  return (
    <div className="social-icons">
      {socialIcons.map((key) => {
        const item = socialMedia[key];
        if (!item) return null;
        const Icon = item.icon;
        return (
          <a
            key={key}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="social-icon"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
