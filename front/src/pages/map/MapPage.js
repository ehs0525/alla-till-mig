import React from "react";
import { useSelector } from "react-redux";
import GoogleMapReact from "google-map-react";

import "./MapPage.css";

import Marker from "./Marker";
import UserCard from "./UserCard";

const MapPage = () => {
  const { myLocation, onlineUsers, selectedUser } = useSelector(
    (state) => state.map
  );

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
      {selectedUser && (
        <UserCard
          socketID={selectedUser.socketID}
          username={selectedUser.username}
          coords={selectedUser.coords}
        />
      )}
    </div>
  );
};

export default MapPage;
