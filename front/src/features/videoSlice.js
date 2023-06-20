import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],
  currentRoom: null,
  localStream: null,
  remoteStream: null,
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
  },
});

export const { setRooms, setCurrentRoom, setLocalStream, setRemoteStream } =
  videoSlice.actions;

export default videoSlice.reducer;
