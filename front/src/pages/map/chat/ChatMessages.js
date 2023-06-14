import React from "react";

import SingleChatMessage from "./SingleChatMessage";

const DUMMY_CHAT_MESSAGES = [
  {
    id: 1,
    content: "Hello",
    isMine: true,
  },
  {
    id: 2,
    content: "Hello Back",
    isMine: false,
  },
];
const ChatMessages = ({ socketID }) => {
  return (
    <div className="chat_messages_container">
      {DUMMY_CHAT_MESSAGES.map((cm) => (
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
