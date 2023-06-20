import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { sendChatMessageDispatch } from "../../../features/actions/chatActions";

const MessageInput = ({ socketID }) => {
  const [message, setMessage] = useState("");
  const [isOnline, setIsOnline] = useState(true);

  const onlineUsers = useSelector((state) => state.map.onlineUsers);

  useEffect(() => {
    if (!onlineUsers.find((user) => user.socketID === socketID)) {
      setIsOnline(false);
    }
  }, [onlineUsers, socketID]);

  const onChangeMessage = useCallback((e) => {
    setMessage(e.target.value);
  }, []);
  const onPressEnter = useCallback(
    (e) => {
      if (e.nativeEvent.isComposing) return;
      if (e.code === "Enter" && message.trim().length > 0) {
        sendChatMessageDispatch(socketID, message);
        setMessage("");
      }
    },
    [message, socketID]
  );

  return (
    <div className="msg_input_container">
      <input
        className="msg_input"
        type="text"
        placeholder={
          isOnline ? "메시지 내용을 입력하세요." : "사용자가 오프라인입니다."
        }
        value={message}
        onChange={onChangeMessage}
        onKeyDown={onPressEnter}
        disabled={!isOnline}
      />
    </div>
  );
};

export default MessageInput;
