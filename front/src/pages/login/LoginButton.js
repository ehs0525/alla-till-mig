import React from "react";

import "./LoginPage.css";

const LoginButton = ({ disabled, onClick }) => {
  return (
    <button className="login_btn" disabled={disabled} onClick={onClick}>
      입장하기
    </button>
  );
};

export default LoginButton;
