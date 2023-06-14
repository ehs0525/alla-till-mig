import React from "react";

const RightChatMessage = ({ content }) => {
  return <p className="right_chat_message">{content}</p>;
};

const LeftChatMessage = ({ content }) => {
  return <p className="left_chat_message">{content}</p>;
};

const SingleChatMessage = ({ id, content, isMine }) => {
  return (
    <div
      className="single_chat_message_container"
      style={
        isMine
          ? { justifyContent: "flex-end" }
          : { justifyContent: "flex-start" }
      }
    >
      {isMine ? (
        <RightChatMessage content={content} />
      ) : (
        <LeftChatMessage content={content} />
      )}
    </div>
  );
};

export default SingleChatMessage;
