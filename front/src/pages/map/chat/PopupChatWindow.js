import React from "react";

import NavBar from "./NavBar";
import ChatMessage from "./ChatMessage";

const PopupChatWindow = ({ username, socketID }) => {
  return (
    <div className="popup_chat_window_container">
      <NavBar username={username} socketID={socketID} />
      <ChatMessage />
    </div>
  );
};

export default PopupChatWindow;
