import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./LoginPage.css";

import Logo from "./Logo";
import NameInput from "./NameInput";
import LoginButton from "./LoginButton";

import { setMyLocation } from "../../features/mapSlice";
import { connectWithSocketIOServer, login } from "../../socket";
import { connectWithPeerServer } from "../../peer";

const isUsernameValid = (username) => {
  return username.length > 0 && username.length < 10 && !username.includes(" ");
};

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [isLocationError, setIsLocationError] = useState(false);

  const myLocation = useSelector((state) => state.map.myLocation);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const success = (position) => {
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
    // success(getFakeLocation());
  }, [dispatch]);
  useEffect(() => {
    if (myLocation) {
      connectWithSocketIOServer();
      connectWithPeerServer();
    }
  }, [myLocation]);

  const onLogin = useCallback(() => {
    login({
      username,
      coords: {
        lat: myLocation.lat,
        lng: myLocation.lng,
      },
    });
    navigate("/map");
  }, [username, myLocation?.lat, myLocation?.lng, navigate]);

  return (
    <div className="login_container">
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
