import React, { useCallback } from "react";

import ChatIcon from "../../assets/images/chat.svg";

const ChatButton = ({ socketID, username }) => {
  const onChat = useCallback(() => {});

  return (
    <img src={ChatIcon} alt="채팅하기" className="card_img" onClick={onChat} />
  );
};

export default ChatButton;
