import React from "react";

import CloseButton from "../../../assets/images/close.svg";

const NavBar = ({ username, socketID }) => {
  return (
    <div className="chat_nav_bar_container">
      <p className="chat_nav_bar_label">{username}</p>
      <div className="chat_close_btn_container">
        <img className="chat_close_btn_img" src={CloseButton} alt="close" />
      </div>
    </div>
  );
};

export default NavBar;
