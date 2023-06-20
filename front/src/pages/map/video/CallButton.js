import React, { useCallback } from "react";

import CallIcon from "../../../assets/images/call.svg";

const CallButton = () => {
  const onCall = useCallback(() => {}, []);

  return (
    <img
      className="card_img"
      src={CallIcon}
      alt="video call button"
      onClick={onCall}
    ></img>
  );
};

export default CallButton;
