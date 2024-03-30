import React from "react";
import "./FeatureSection.css";
import SectionIntro from "../sectionIntro/SectionIntro";
import Button from "../button/Button";

const FeatureSection = ({
  title,
  teaser,
  smallText,
  image,
  isImageRight,
  featuresWithIcon,
  learn,
}) => {
  return (
    <div>
      <section className="feature-section">
        <div
          className={`feature-wrapper ${
            isImageRight ? "image-right" : "image-left"
          }`}
        >
          <div className="feature-section-image-wrapper">
            <img src={image} alt="feature" />
          </div>
          <div className="about-feature">
            <div className="about-feature-sec-intro"><SectionIntro title={title} text={teaser} /></div>
            <p>{smallText}</p>
            <span className="feature-grey-line"></span>
            <div className="features">
              {featuresWithIcon.map((feature, index) => {
                return (
                  <div key={index} className="feature">
                    <div className="icon">
                      <img src={feature.icon} alt="icon" />
                    </div>
                    <div className="feature-text">
                      <h3>{feature.title}</h3>
                      <p>{feature.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <span className="feature-grey-line"></span>
            <div className="feature-learn">
              <div className="learn-btn">
                <Button
                  buttonLabel={learn.buttonLabel}
                  buttonURL={learn.buttonURL}
                />
              </div>
              <div className="learn-questions">
                <div className="call-icon"></div>
                <div className="call-text">
                  <div className="call-question">Have any questions?</div>
                  <a href="tel:1234567890">+123 456 7890</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
