import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import MapMarker from "../../assets/images/map-marker.svg";
import { setSelectedUser } from "../../features/mapSlice";

const Marker = ({ socketID, username, coords, isMe }) => {
  const dispatch = useDispatch();

  const onClickMarker = useCallback(() => {
    if (isMe) return;
    dispatch(
      setSelectedUser({
        socketID,
        username,
        coords,
      })
    );
    console.log("SELECT USER");
  });

  return (
    <div className="marker_container" onClick={onClickMarker}>
      <img src={MapMarker} alt={username} className="marker_img" />
      <p className="marker_text">{isMe ? "Me" : username}</p>
    </div>
  );
};

export default Marker;
