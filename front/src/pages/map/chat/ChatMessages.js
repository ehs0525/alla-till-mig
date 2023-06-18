import React from "react";
import { useSelector } from "react-redux";

import SingleChatMessage from "./SingleChatMessage";

const ChatMessages = ({ socketID }) => {
  const chatHistory = useSelector((state) => state.chat.histories[socketID]);

  return (
    <div className="chat_messages_container">
      {chatHistory?.map((ch) => (
        <SingleChatMessage
          key={ch.id}
          content={ch.content}
          isMine={ch.isMine}
        />
      ))}
    </div>
  );
};

export default ChatMessages;
