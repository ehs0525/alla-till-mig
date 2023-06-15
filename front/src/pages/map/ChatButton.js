import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import ChatIcon from "../../assets/images/chat.svg";
import { addOpenChatRoom } from "../../features/chatSlice";

const ChatButton = ({ socketID, username }) => {
  const dispatch = useDispatch();

  const onOpenChat = useCallback(() => {
    dispatch(
      addOpenChatRoom({
        socketID,
        username,
      })
    );
  }, [dispatch, socketID, username]);

  return (
    <img
      src={ChatIcon}
      alt="채팅하기"
      className="card_img"
      onClick={onOpenChat}
    />
  );
};

export default ChatButton;
