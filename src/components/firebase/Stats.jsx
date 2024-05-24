import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import CountUp from "react-countup";
import "./Stats.css";

const Stats = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const StatisticsCollection = collection(db, "Statistics");
      const StatisticsSnapshot = await getDocs(StatisticsCollection);
      const StatisticsList = StatisticsSnapshot.docs.map((doc) => doc.data());
      setStats(StatisticsList);
    };

    fetchData();
  }, []);

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div key={index} className="statistics-wrap">
          <div className="statistics-cont">
            <div className="stat-widget">
              <img
                src="https://solam.progressionstudios.com/wp-content/uploads/2022/01/circle-icon-4.png"
                alt="5-star-widget"
              />
            </div>
            <div className="stat">
              <CountUp end={stat.Five_Stars_Reviews} duration={5} />
            </div>
            <div className="stat-title">Five Star Reviews</div>
          </div>
          <div className="statistics-cont">
            <div className="stat-widget">
              <img
                src="https://solam.progressionstudios.com/wp-content/uploads/2022/01/circle-icon-1.png"
                alt="5-star-widget"
              />
            </div>
            <div className="stat">
              <CountUp end={stat.Nb_Panels_Installed} duration={5} />
            </div>
            <div className="stat-title">Panels Installed</div>
          </div>
          <div className="statistics-cont">
            <div className="stat-widget">
              <img
                src="https://solam.progressionstudios.com/wp-content/uploads/2022/01/circle-icon-2.png"
                alt="5-star-widget"
              />
            </div>
            <div className="stat">
              <CountUp end={stat.Nb_Technical_Support} duration={5} />
            </div>
            <div className="stat-title">Technical Support</div>
          </div>
          <div className="statistics-cont">
            <div className="stat-widget">
              <img
                src="https://solam.progressionstudios.com/wp-content/uploads/2022/01/circle-icon-3.png"
                alt="5-star-widget"
              />
            </div>
            <div className="stat">
              <CountUp end={stat.Years_of_Experience} duration={5} />
            </div>
            <div className="stat-title">Years Experience</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
