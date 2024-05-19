// src/components/BannerGallery/BannerGallery.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BannerGallery.css";

const BannerGallery = ({ banners }) => {
  const initialVisibleCount = 3;
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [showMore, setShowMore] = useState(true);

  const handleShowMore = () => {
    if (visibleCount + 3 >= banners.length) {
      setVisibleCount(banners.length);
      setShowMore(false);
    } else {
      setVisibleCount(visibleCount + 3);
    }
  };

  const handleShowLess = () => {
    setVisibleCount(initialVisibleCount);
    setShowMore(true);
  };

  return (
    <div className="banner-gallery-wrapper">
      <div className="banner-gallery">
        {banners.slice(0, visibleCount).map((banner) => (
          <div key={banner.id} className="banner">
            <Link to={`/inverter/${banner.id}`}>
              <img
                src={banner.imageUrl}
                alt={`Banner ${banner.id}`}
                style={{ width: "100%", marginBottom: "10px" }}
              />
            </Link>
            <h3>{banner.title}</h3>
            <Link to={`/inverter/${banner.id}`}>Learn More</Link>
          </div>
        ))}
      </div>
      {showMore && visibleCount < banners.length && (
        <button onClick={handleShowMore}>Show More</button>
      )}
      {!showMore && <button onClick={handleShowLess}>Show Less</button>}
    </div>
  );
};

export default BannerGallery;
