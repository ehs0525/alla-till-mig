import React from "react";

import CallSlash from "../../../assets/images/call-slash.svg";

const VideoButtonGroup = () => {
  return (
    <div className="video_btns_container">
      <img src={CallSlash} alt="card-slash" className="video_btn" />

      <button className="video_btn">B</button>
      <button className="video_btn">C</button>
    </div>
  );
};

export default VideoButtonGroup;
