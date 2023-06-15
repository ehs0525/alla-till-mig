import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import CloseButton from "../../../assets/images/close.svg";
import { removeOpenChatRoom } from "../../../features/chatSlice";

const NavBar = ({ username, socketID }) => {
  const dispatch = useDispatch();

  const onCloseChat = useCallback(() => {
    dispatch(removeOpenChatRoom(socketID));
  }, [dispatch, socketID]);

  return (
    <div className="chat_nav_bar_container">
      <p className="chat_nav_bar_label">{username}</p>
      <div className="chat_close_btn_container">
        <img
          className="chat_close_btn_img"
          src={CloseButton}
          alt="close"
          onClick={onCloseChat}
        />
      </div>
    </div>
  );
};

export default NavBar;
