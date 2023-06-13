import React from "react";

import NavBar from "./NavBar";

const PopupChatWindow = ({ username, socketID }) => {
  return (
    <div className="popup_chat_window_container">
      <NavBar username={username} socketID={socketID} />
    </div>
  );
};

export default PopupChatWindow;
