import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./LoginPage.css";
import Logo from "./Logo";
import NameInput from "./NameInput";
import LoginButton from "./LoginButton";
import { setMyLocation } from "../../features/mapSlice";

const isUsernameValid = (username) => {
  return username.length > 0 && username.length < 10 && !username.includes(" ");
};

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [isLocationError, setIsLocationError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const success = (position) => {
      console.log(position);
      dispatch(
        setMyLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      );
    };
    const error = (error) => {
      console.log("Sorry, no position available.");
      console.log(error);
      setIsLocationError(true);
    };
    const options = {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);

  const onLogin = useCallback(() => {
    navigate("/map");
  }, [navigate]);

  return (
    <div className="container">
      <div className="box">
        <Logo />
        <NameInput username={username} setUsername={setUsername} />
        <LoginButton
          disabled={!isUsernameValid(username) || isLocationError}
          onClick={onLogin}
        />
      </div>
    </div>
  );
};

export default LoginPage;
