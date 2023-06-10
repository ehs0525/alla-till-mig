import React from "react";
import { useSelector } from "react-redux";

const UserCard = ({ socketID, username, coords }) => {
  const myLocation = useSelector((state) => state.map.myLocation);

  return (
    <div className="card_container">
      <p className="card_label" style={{ fontSize: "16px" }}>
        {username}
      </p>
      <p className="card_label" style={{ fontSize: "14px" }}>
        24km
      </p>
    </div>
  );
};

export default UserCard;
