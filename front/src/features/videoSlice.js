import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],
  currentRoom: null,
  localStream: null,
  remoteStream: null,
  isMicrophoneOn: true,
  isCameraOn: true,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setRooms: (state, action) => {
      state.rooms = action.payload;
    },
    setCurrentRoom: (state, action) => {
      state.currentRoom = action.payload;
    },
    setLocalStream: (state, action) => {
      state.localStream = action.payload;
    },
    setRemoteStream: (state, action) => {
      state.remoteStream = action.payload;
    },
    setIsMicrophoneOn: (state, action) => {
      state.isMicrophoneOn = action.payload;
    },
    setIsCameraOn: (state, action) => {
      state.isCameraOn = action.payload;
    },
  },
});

export const {
  setRooms,
  setCurrentRoom,
  setLocalStream,
  setRemoteStream,
  setIsMicrophoneOn,
  setIsCameraOn,
} = videoSlice.actions;

export default videoSlice.reducer;
