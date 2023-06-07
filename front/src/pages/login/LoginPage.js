import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./LoginPage.css";
import Logo from "./Logo";
import NameInput from "./NameInput";
import LoginButton from "./LoginButton";

const isUsernameValid = (username) => {
  return username.length > 0 && username.length < 10 && !username.includes(" ");
};

const success = (position) => {
  console.log(position);
};
const error = (error) => {
  console.log("Sorry, no position available.");
  console.log(error);
};
const options = {
  enableHighAccuracy: true,
  maximumAge: 0,
  timeout: 5000,
};

const LoginPage = () => {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

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
