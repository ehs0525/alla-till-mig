import React, { useCallback } from "react";

import CallIcon from "../../../assets/images/call.svg";
import { createVideoRoomDispatch } from "../../../features/actions/videoActions";

const CallButton = () => {
  const onCall = useCallback(() => {
    createVideoRoomDispatch();
  }, []);

  return (
    <img
      className="card_img"
      src={CallIcon}
      alt="video call"
      onClick={onCall}
    ></img>
  );
};

export default CallButton;
