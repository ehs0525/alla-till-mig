import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import SingleChatMessage from "./SingleChatMessage";

const ChatMessages = ({ socketID }) => {
  const chatHistory = useSelector((state) => state.chat.histories[socketID]);

  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  return (
    <div className="chat_msgs_container">
      {chatHistory?.map((ch) => (
        <SingleChatMessage
          key={ch.id}
          content={ch.content}
          isMine={ch.isMine}
        />
      ))}
      <div ref={scrollRef}></div>
    </div>
  );
};

export default ChatMessages;
