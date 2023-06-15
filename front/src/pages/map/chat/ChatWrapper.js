import React from "react";
import { useSelector } from "react-redux";

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
  const openChatRooms = useSelector((state) => state.chat.openRooms);

  return (
    <div className="chat_container">
      {openChatRooms.map((ocr) => (
        <PopupChatWindow
          key={ocr.socketID}
          username={ocr.username}
          socketID={ocr.socketID}
        />
      ))}
    </div>
  );
};

export default ChatWrapper;
