import React from "react";

import "./LoginPage.css";
import Logo from "./Logo";
import NameInput from "./NameInput";
import LoginButton from "./LoginButton";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="box">
        <Logo />
        <NameInput />
        <LoginButton />
      </div>
    </div>
  );
};

export default LoginPage;
