import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],
  history: {},
};

export const mapSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addChatRoom: (state, action) => {
      if (state.rooms.find((room) => room.socketID === action.payload.socketID))
        return;
      state.rooms.push(action.payload);
    },
    removeChatRoom: (state, action) => {
      state.rooms = state.rooms.filter(
        (room) => room.socketID !== action.payload.socketID
      );
    },
  },
});

export const { addChatRoom, removeChatRoom } = mapSlice.actions;

export default mapSlice.reducer;
