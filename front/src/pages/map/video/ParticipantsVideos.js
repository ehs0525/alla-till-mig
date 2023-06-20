import React from "react";
import { useSelector } from "react-redux";

import SingleParticipantVideo from "./SingleParticipantVideo";

const ParticipantsVideos = () => {
  const currentRoom = useSelector((state) => state.video.currentRoom);
  const localStream = useSelector((state) => state.video.localStream);

  return (
    <div className="videos_container">
      {currentRoom && localStream && (
        <SingleParticipantVideo stream={localStream} muted />
      )}
    </div>
  );
};

export default ParticipantsVideos;
