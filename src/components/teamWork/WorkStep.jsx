import React from "react";
import "./TeamWork.css";

const WorkStep = ({ icon, title, text, index }) => {
  return (
    <div>
      <div className="work-step">
        <div className="work-step-icon">
          <img src={icon} alt="icon" />
        </div>
        <div className="work-step-content">
            <div className="step">STEP</div>
            <div className="work-step-index">0{index}.</div>
            <div className="work-step-title">{title}</div>
            <div className="work-step-line"></div>
            <div className="work-step-text">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default WorkStep;
