import React from "react";
import { TbMessageCircle, TbSolarPanel2, TbBatteryCharging2, TbHomeBolt } from "react-icons/tb";
import SectionIntro from "../sectionIntro/SectionIntro";
import WorkStep from "./WorkStep";
import "./TeamWork.css";

const steps = [
  {
    icon: TbMessageCircle,
    title: "Meet Consultant",
    text: "Discuss your energy needs and goals with our expert consultant to tailor the best solar solution for you.",
  },
  {
    icon: TbSolarPanel2,
    title: "Generate Power",
    text: "Our team installs high-efficiency solar panels to start generating clean, renewable energy.",
  },
  {
    icon: TbBatteryCharging2,
    title: "Save the Energy",
    text: "Efficiently store the generated energy for consistent and reliable usage throughout the day.",
  },
  {
    icon: TbHomeBolt,
    title: "Use the Power",
    text: "Power your home or business with stored solar energy and rely less on traditional sources.",
  },
];

const TeamWork = () => {
  return (
    <section className="process-section">
      <div className="process-head">
        <SectionIntro title="How Our Solar Team Works" text="OUR PROCESS" />
        <p>Four simple steps from first conversation to running on sunshine.</p>
      </div>
      <div className="process-steps">
        {steps.map((step, i) => (
          <WorkStep key={step.title} index={i + 1} {...step} />
        ))}
      </div>
    </section>
  );
};

export default TeamWork;
