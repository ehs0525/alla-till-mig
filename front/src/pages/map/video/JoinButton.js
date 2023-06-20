import React, { useCallback } from "react";

const JoinButton = ({ host, videoRoomID, numberOfParticipants }) => {
  const onJoin = useCallback(() => {}, []);
  return (
    <button onClick={onJoin} className="join_btn">
      {host.charAt(0)}
    </button>
  );
};

export default JoinButton;
