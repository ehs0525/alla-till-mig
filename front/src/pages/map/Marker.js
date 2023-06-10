import React from "react";
import MapMarker from "../../assets/images/map-marker.svg";

const Marker = ({ socketID, username, coords, isMe }) => {
  return (
    <div className="marker_container">
      <img src={MapMarker} alt={username} className="marker_img" />
      <p className="marker_text">{isMe ? "Me" : username}</p>
    </div>
  );
};

export default Marker;
