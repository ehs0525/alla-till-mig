import React from "react";

const MessageInput = ({ socketID }) => {
  return (
    <div className="message_input_container">
      <input
        className="message_input"
        type="text"
        placeholder="메시지 내용을 입력하세요."
      />
    </div>
  );
};

export default MessageInput;
