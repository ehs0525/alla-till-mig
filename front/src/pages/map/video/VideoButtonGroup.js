import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Microphone from "../../../assets/images/microphone.svg";
import MicrophoneSlash from "../../../assets/images/microphone-slash.svg";
import CallSlash from "../../../assets/images/call-slash.svg";
import Camera from "../../../assets/images/camera.svg";
import CameraSlash from "../../../assets/images/camera-slash.svg";
import { leaveVideoRoomDispatch } from "../../../features/actions/videoActions";
import { setIsCameraOn, setIsMicrophoneOn } from "../../../features/videoSlice";

const VideoButtonGroup = ({ videoRoomID }) => {
  const isMicrophoneOn = useSelector((state) => state.video.isMicrophoneOn);
  const isCameraOn = useSelector((state) => state.video.isCameraOn);
  const localStream = useSelector((state) => state.video.localStream);

  const dispatch = useDispatch();

  const onToggleMicrophone = useCallback(() => {
    localStream
      .getAudioTracks()
      .forEach((track) => (track.enabled = !track.enabled));
    dispatch(setIsMicrophoneOn(!isMicrophoneOn));
  }, [localStream, dispatch, isMicrophoneOn]);
  const onClickCallSlash = useCallback(() => {
    leaveVideoRoomDispatch(videoRoomID);
  }, [videoRoomID]);
  const onToggleCamera = useCallback(() => {
    localStream
      .getVideoTracks()
      .forEach((track) => (track.enabled = !track.enabled));
    dispatch(setIsCameraOn(!isCameraOn));
  }, [localStream, dispatch, isCameraOn]);

  return (
    <div className="video_btns_container">
      <img
        src={isMicrophoneOn ? Microphone : MicrophoneSlash}
        alt="mute"
        className="video_btn"
        onClick={onToggleMicrophone}
      />
      <img
        src={CallSlash}
        alt="leave"
        className="video_btn"
        onClick={onClickCallSlash}
      />
      <img
        src={isCameraOn ? Camera : CameraSlash}
        alt="card-slash"
        className="video_btn"
        onClick={onToggleCamera}
      />
    </div>
  );
};

export default VideoButtonGroup;
