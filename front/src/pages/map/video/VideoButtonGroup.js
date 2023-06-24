import React, { useCallback } from "react";

import CallSlash from "../../../assets/images/call-slash.svg";
import { leaveVideoRoomDispatch } from "../../../features/actions/videoActions";

const VideoButtonGroup = ({ videoRoomID }) => {
  const onClickCallSlash = useCallback(() => {
    leaveVideoRoomDispatch(videoRoomID);
  }, [videoRoomID]);

  return (
    <div className="video_btns_container">
      <img src={CallSlash} alt="card-slash" className="video_btn" />
      <img
        src={CallSlash}
        alt="card-slash"
        className="video_btn"
        onClick={onClickCallSlash}
      />
      <img src={CallSlash} alt="card-slash" className="video_btn" />
    </div>
  );
};

export default VideoButtonGroup;
