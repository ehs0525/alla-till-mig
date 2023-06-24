import { v4 as uuidv4 } from "uuid";

import { store } from "../../app/store";
import {
  setCurrentRoom,
  setLocalStream,
  setRemoteStream,
  setRooms,
} from "../videoSlice";
import { createVideoRoom, joinVideoRoom, leaveVideoRoom } from "../../socket";
import { peerID } from "../../peer";

export const createVideoRoomDispatch = async () => {
  const localStream = await openMediaDevicesDispatch();
  if (!localStream) return;

  const id = uuidv4();

  // socket 전송
  createVideoRoom({
    id,
    peerID,
  });

  // local store 설정
  store.dispatch(setCurrentRoom(id));
};

export const listVideoRoomsDispatch = (data) => {
  store.dispatch(setRooms(data));
};

// 미디어 기기
export const openMediaDevicesDispatch = async () => {
  const constraints = {
    video: true,
    audio: true,
  };

  const stream = await navigator.mediaDevices.getUserMedia(constraints);

  if (stream) {
    store.dispatch(setLocalStream(stream));
  }

  return Boolean(stream);
};

export const remoteStreamDispatch = (remoteStream) => {
  store.dispatch(setRemoteStream(remoteStream));
};

export const joinVideoRoomDispatch = async (id) => {
  const localStream = await openMediaDevicesDispatch();
  if (!localStream) return;

  // socket 전송
  joinVideoRoom({
    id,
    peerID,
  });

  // local store 설정
  store.dispatch(setCurrentRoom(id));
};

export const leaveVideoRoomDispatch = (id) => {
  // disconnect()
  leaveVideoRoom(id);

  // local store 설정
  store.dispatch(setCurrentRoom(null));
};
