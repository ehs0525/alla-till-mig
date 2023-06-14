import React from "react";

import NavBar from "./NavBar";
import ChatMessages from "./ChatMessages";
import MessageInput from "./MessageInput";

const PopupChatWindow = ({ username, socketID }) => {
  return (
    <div className="popup_chat_window_container">
      <NavBar username={username} socketID={socketID} />
      <ChatMessages />
      <MessageInput />
    </div>
  );
};

export default PopupChatWindow;
