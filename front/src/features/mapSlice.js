import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myLocation: null,
  onlineUsers: [],
  selectedUser: null,
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setMyLocation: (state, action) => {
      state.myLocation = action.payload;
    },
    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
    removeOfflineUser: (state, action) => {
      state.onlineUsers = state.onlineUsers.filter(
        (user) => user.socketID !== action.payload
      );
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
});

export const {
  setMyLocation,
  setOnlineUsers,
  removeOfflineUser,
  setSelectedUser,
} = mapSlice.actions;

export default mapSlice.reducer;
