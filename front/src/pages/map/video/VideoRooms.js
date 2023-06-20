import React from "react";
import { useSelector } from "react-redux";
import CallButton from "../CallButton";

const VideoRooms = () => {
  const videoRooms = useSelector((state) => state.video.rooms);

  return (
    <div className="video_rooms_list">
      <CallButton />
    </div>
  );
};

export default VideoRooms;
