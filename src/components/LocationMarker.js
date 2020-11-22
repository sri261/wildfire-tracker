import React from "react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/file-alert";

const LocationMarker = () => {
  return (
    // <div className="location-marker" onClick={onClick}>
    <div className="location-marker">
      <div className="location-icon">
        <i className="fas fa-fire"></i>
      </div>
      {/* <Icon icon={locationIcon} className="location-icon" /> */}
    </div>
  );
};

export default LocationMarker;
