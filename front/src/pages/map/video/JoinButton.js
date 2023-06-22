import React, { useCallback } from "react";

import { joinVideoRoomDispatch } from "../../../features/actions/videoActions";

const JoinButton = ({ host, videoRoomID, numberOfParticipants }) => {
  const onJoin = useCallback(() => {
    if (numberOfParticipants > 1) return alert("방이 꽉 찼습니다.");

    joinVideoRoomDispatch(videoRoomID);
  }, [numberOfParticipants, videoRoomID]);

  return (
    <button onClick={onJoin} className="join_btn">
      {host[0]}
    </button>
  );
};

export default JoinButton;
