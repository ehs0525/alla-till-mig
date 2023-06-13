import React from "react";

import "./ChatWrapper.css";

import PopupChatWindow from "./PopupChatWindow";

const DUMMY_POPUP_CHAT_WINDOWS = [
  {
    username: "Mohammed",
    socketID: "U436XVUWxB",
    messages: [],
  },
  {
    username: "Anish",
    socketID: "IJ7tIlDhL6",
    messages: [],
  },
  {
    username: "Meadow",
    socketID: "aHqnOwq2Od",
    messages: [],
  },
  {
    username: "Teodoro",
    socketID: "tFLkTneqtd",
    messages: [],
  },
];

const ChatWrapper = () => {
  return (
    <div className="chat_container">
      {DUMMY_POPUP_CHAT_WINDOWS.map((pcw) => (
        <PopupChatWindow
          key={pcw.socketID}
          username={pcw.username}
          socketID={pcw.socketID}
        />
      ))}
    </div>
  );
};

export default ChatWrapper;
