import React from "react";
import { useSelector } from "react-redux";
import CallButton from "./CallButton";
import JoinButton from "./JoinButton";

const DUMMY_VIDEO_ROOMS = [
  {
    id: 1,
    participants: [
      {
        socketID: 1,
        peerID: 1,
        username: "Iroda",
      },
    ],
  },
  {
    id: 2,
    participants: [
      {
        socketID: 2,
        peerID: 2,
        username: "Anuradha",
      },
      {
        socketID: 3,
        peerID: 3,
        username: "Harald",
      },
    ],
  },
  {
    id: 3,
    participants: [
      {
        socketID: 4,
        peerID: 4,
        username: "Aldreda",
      },
      {
        socketID: 5,
        peerID: 5,
        username: "Suad",
      },
      {
        socketID: 6,
        peerID: 6,
        username: "Kanchana",
      },
    ],
  },
];

const VideoRooms = () => {
  const videoRooms = useSelector((state) => state.video.rooms);

  return (
    <div className="video_rooms_list">
      <CallButton />
      {videoRooms.map((vr) => (
        <JoinButton
          key={vr.id}
          host={vr.host}
          videoRoomID={vr.id}
          numberOfParticipants={vr.numberOfParticipants}
        />
      ))}
    </div>
  );
};

export default VideoRooms;
