import React from "react";
import { useSelector } from "react-redux";

import SingleParticipantVideo from "./SingleParticipantVideo";
import VideoButtonGroup from "./VideoButtonGroup";

const ParticipantsVideos = () => {
  const currentRoom = useSelector((state) => state.video.currentRoom);
  const localStream = useSelector((state) => state.video.localStream);
  const remoteStream = useSelector((state) => state.video.remoteStream);

  return (
    <div className="videos_container">
      {currentRoom && <VideoButtonGroup />}
      {currentRoom && localStream && (
        <SingleParticipantVideo stream={localStream} muted />
      )}
      {currentRoom && remoteStream && (
        <SingleParticipantVideo stream={remoteStream} muted />
      )}
    </div>
  );
};

export default ParticipantsVideos;
