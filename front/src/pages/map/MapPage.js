import React from "react";
import { useSelector } from "react-redux";
import GoogleMapReact from "google-map-react";

import "./MapPage.css";

const MapPage = () => {
  const myLocation = useSelector((state) => state.map.myLocation);

  const defaultProps = {
    center: {
      lat: myLocation.lat,
      lng: myLocation.lng,
    },
    zoom: 11,
  };

  return (
    <div className="map_container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
};

export default MapPage;
