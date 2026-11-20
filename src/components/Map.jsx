import React from "react";

const MAP_QUERY = "Beirut, Lebanon";

const Map = () => {
  return (
    <div className="contact-map-wrapper">
      <iframe
        title="Map showing our location"
        src={`https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=13&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0, display: "block" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
