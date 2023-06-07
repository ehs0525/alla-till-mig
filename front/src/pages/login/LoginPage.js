import React, { useState } from "react";

import "./LoginPage.css";
import Logo from "./Logo";
import NameInput from "./NameInput";
import LoginButton from "./LoginButton";

const LoginPage = () => {
  const [username, setUsername] = useState("");

  return (
    <div className="container">
      <div className="box">
        <Logo />
        <NameInput username={username} setUsername={setUsername} />
        <LoginButton />
      </div>
    </div>
  );
};

export default LoginPage;
