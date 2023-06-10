import React from "react";
import { useSelector } from "react-redux";
import GoogleMapReact from "google-map-react";

import "./MapPage.css";

import Marker from "./Marker";

const MapPage = () => {
  const myLocation = useSelector((state) => state.map.myLocation);
  const onlineUsers = useSelector((state) => state.map.onlineUsers);

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
      >
        {onlineUsers.map((user) => (
          <Marker
            key={user.socketID}
            lat={user.coords.lat}
            lng={user.coords.lng}
            socketID={user.socketID}
            username={user.username}
            isMe={user.isMe}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default MapPage;
