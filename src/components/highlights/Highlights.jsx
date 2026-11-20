import React from "react";
import { TbClipboardCheck, TbCertificate, TbShieldCheck, TbHeadset } from "react-icons/tb";
import "./Highlights.css";

const highlights = [
  { icon: <TbClipboardCheck />, title: "Free Site Assessment", text: "We inspect your roof and usage before quoting." },
  { icon: <TbCertificate />, title: "Certified Installers", text: "Trained, insured technicians on every job." },
  { icon: <TbShieldCheck />, title: "Warranty Backed", text: "Official manufacturer warranties included." },
  { icon: <TbHeadset />, title: "24/7 Support", text: "We're here whenever your system needs us." },
];

const Highlights = ({ overlap = false }) => (
  <section className={`highlights ${overlap ? "highlights-overlap" : ""}`}>
    <div className="highlights-wrap">
      {highlights.map((h) => (
        <div className="highlight" key={h.title}>
          <div className="highlight-icon">{h.icon}</div>
          <div>
            <h4>{h.title}</h4>
            <p>{h.text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Highlights;
