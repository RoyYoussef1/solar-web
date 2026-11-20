import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { TbStarFilled, TbSolarPanel2, TbHeadset, TbAward } from "react-icons/tb";
import StatsBackground from "../../assets/stats-background.jpg";
import "./Stats.css";

const stats = [
  { value: 320, suffix: "+", title: "Five Star Reviews", icon: TbStarFilled },
  { value: 4800, suffix: "+", title: "Panels Installed", icon: TbSolarPanel2 },
  { value: 24, suffix: "/7", title: "Technical Support", icon: TbHeadset },
  { value: 12, suffix: "+", title: "Years Experience", icon: TbAward },
];

const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      className="stats-section"
      ref={ref}
      style={{ backgroundImage: `url(${StatsBackground})` }}
    >
      <div className="stats-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="stats-item">
              <span className="stats-icon">
                <Icon />
              </span>
              <div className="stats-number">
                {inView ? <CountUp end={stat.value} duration={2.5} separator="," /> : 0}
                <span className="stats-suffix">{stat.suffix}</span>
              </div>
              <div className="stats-title">{stat.title}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
