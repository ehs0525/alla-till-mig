import React from "react";

import SingleChatMessage from "./SingleChatMessage";
import { useSelector } from "react-redux";

const ChatMessages = ({ socketID }) => {
  const chatMessages = useSelector((state) => state.chat.history[socketID]);

  return (
    <div className="chat_messages_container">
      {chatMessages?.map((cm) => (
        <SingleChatMessage
          key={cm.id}
          content={cm.content}
          isMine={cm.isMine}
        />
      ))}
    </div>
  );
};

export default ChatMessages;
