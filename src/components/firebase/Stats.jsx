import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./Stats.css";

const stats = [
  {
    value: 320,
    suffix: "+",
    title: "Five Star Reviews",
    icon: "https://solam.progressionstudios.com/wp-content/uploads/2022/01/circle-icon-4.png",
  },
  {
    value: 4800,
    suffix: "+",
    title: "Panels Installed",
    icon: "https://solam.progressionstudios.com/wp-content/uploads/2022/01/circle-icon-1.png",
  },
  {
    value: 24,
    suffix: "/7",
    title: "Technical Support",
    icon: "https://solam.progressionstudios.com/wp-content/uploads/2022/01/circle-icon-2.png",
  },
  {
    value: 12,
    suffix: "",
    title: "Years Experience",
    icon: "https://solam.progressionstudios.com/wp-content/uploads/2022/01/circle-icon-3.png",
  },
];

const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="stats-container" ref={ref}>
      <div className="statistics-wrap">
        {stats.map((stat) => (
          <div key={stat.title} className="statistics-cont">
            <div className="stat-widget">
              <img src={stat.icon} alt="" />
            </div>
            <div className="stat">
              {inView ? (
                <CountUp end={stat.value} duration={3} separator="," />
              ) : (
                0
              )}
              {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
            </div>
            <div className="stat-title">{stat.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
