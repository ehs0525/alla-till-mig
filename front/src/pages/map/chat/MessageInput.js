import React, { useCallback, useState } from "react";

const MessageInput = ({ socketID }) => {
  const [message, setMessage] = useState("");

  const onChangeMessage = useCallback((e) => {
    setMessage(e.target.value);
  }, []);
  const onPressEnter = useCallback(
    (e) => {
      if (e.code === "Enter" && message.trim().length > 0) {
        console.log("message sent");
        setMessage("");
      }
    },
    [message]
  );

  return (
    <div className="message_input_container">
      <input
        className="message_input"
        type="text"
        placeholder="메시지 내용을 입력하세요."
        value={message}
        onChange={onChangeMessage}
        onKeyDown={onPressEnter}
      />
    </div>
  );
};

export default MessageInput;
