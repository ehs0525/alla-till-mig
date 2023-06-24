import React from "react";

import CallSlash from "../../../assets/images/call-slash.svg";

const VideoButtonGroup = () => {
  return (
    <div className="video_btns_container">
      <img src={CallSlash} alt="card-slash" className="video_btn" />
      <img src={CallSlash} alt="card-slash" className="video_btn" />
      <img src={CallSlash} alt="card-slash" className="video_btn" />
    </div>
  );
};

export default VideoButtonGroup;
