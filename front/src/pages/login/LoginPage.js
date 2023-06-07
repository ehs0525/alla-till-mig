import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./LoginPage.css";
import Logo from "./Logo";
import NameInput from "./NameInput";
import LoginButton from "./LoginButton";

const isUsernameValid = (username) => {
  return username.length > 0 && username.length < 10 && !username.includes(" ");
};

const LoginPage = () => {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const onLogin = useCallback(() => {
    navigate("/map");
  }, [navigate]);

  return (
    <div className="container">
      <div className="box">
        <Logo />
        <NameInput username={username} setUsername={setUsername} />
        <LoginButton disabled={!isUsernameValid(username)} onClick={onLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
