import React, { useState } from "react";
import "./BannerGallery.css";

const BannerGallery = ({ banners }) => {
  const initialVisibleCount = 3;
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [showMore, setShowMore] = useState(true);

  console.log('Banners:', banners);

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
            <img
              src={banner.imageUrl}
              alt={`Banner ${banner.id}`}
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <h3>{banner.title}</h3>
            {banner.link && (
              <a href={banner.link} target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            )}
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
