import React from "react";

const WorkStep = ({ icon: Icon, title, text, index }) => {
  return (
    <div className="process-step">
      <div className="process-step-icon">
        <Icon />
        <span className="process-step-number">0{index}</span>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default WorkStep;
