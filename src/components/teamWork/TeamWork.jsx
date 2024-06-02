import React from "react";
import "./TeamWork.css";
import WorkStep from "./WorkStep";
import icon1 from "../../assets/work-icon/icon-1.jpg";
import icon2 from "../../assets/work-icon/icon-2.jpg";
import icon3 from "../../assets/work-icon/icon-3.jpg";
import icon4 from "../../assets/work-icon/icon-4.jpg";

const TeamWork = () => {
  return (
    <>
      <div className="yellow-banner">
        <div className="yellow-banner-text">
            How Our Solar Team Works
        </div>
      </div>
      <div className="steps-section">
        <div className="work-step-wrapper">
          <div className="work-step-container">
            <WorkStep
              icon={icon1}
              index={1}
              title={"Meet Consultant"}
              text={"Discuss your energy needs and goals with our expert consultant to tailor the best solar solution for you."}
            />
          </div>
          <div className="work-step-container">
            <WorkStep
              icon={icon2}
              index={2}
              title={"Generate Power"}
              text={"Our team installs high-efficiency solar panels to start generating clean, renewable energy."}
            />
          </div>
          <div className="work-step-container">
            <WorkStep
              icon={icon3}
              index={3}
              title={"Save the Energy"}
              text={"Efficiently store the generated energy for consistent and reliable usage throughout the day."}
            />
          </div>
          <div className="work-step-container">
            <WorkStep
              icon={icon4}
              index={4}
              title={"Use the Power"}
              text={"Utilize the stored solar energy to power your home or business, reducing reliance on traditional energy sources."}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamWork;
