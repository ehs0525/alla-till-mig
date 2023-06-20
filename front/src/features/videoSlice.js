import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],
  userRoomInfo: null,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setRooms: (state, action) => {
      state.rooms = action.payload;
    },
    setUserRoomInfo: (state, action) => {
      state.userRoomInfo = action.payload;
    },
  },
});

export const { setRooms, setUserRoomInfo } = videoSlice.actions;

export default videoSlice.reducer;
