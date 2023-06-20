import React from "react";
import { useSelector } from "react-redux";

import { getDistance } from "../../utils/distance";

import ChatButton from "./ChatButton";

const UserCard = ({ socketID, username, coords }) => {
  const myLocation = useSelector((state) => state.map.myLocation);

  return (
    <div className="card_container">
      <p className="card_label" style={{ fontSize: "16px" }}>
        {username}
      </p>
      <p className="card_label" style={{ fontSize: "14px" }}>
        {getDistance(myLocation, coords)}km
      </p>
      <div className="card_btns_container">
        <ChatButton socketID={socketID} username={username} />
      </div>
    </div>
  );
};

export default UserCard;
