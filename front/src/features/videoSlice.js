import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],
  currentRoom: null,
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
  },
});

export const { setRooms, setCurrentRoom } = videoSlice.actions;

export default videoSlice.reducer;
