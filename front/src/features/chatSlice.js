import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openRooms: [],
  history: {},
};

export const mapSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addOpenChatRoom: (state, action) => {
      if (
        state.openRooms.find(
          (room) => room.socketID === action.payload.socketID
        )
      )
        return;
      state.openRooms.push(action.payload);
    },
    removeOpenChatRoom: (state, action) => {
      state.openRooms = state.openRooms.filter(
        (room) => room.socketID !== action.payload
      );
    },
    addChatMessage: (state, action) => {
      // 이미 대화 내역이 있다면
      if (state.history[action.payload.socketID]) {
        state.history[action.payload.socketID].push({
          id: action.payload.id,
          content: action.payload.content,
          isMine: action.payload.isMine,
        });
      } else {
        // 처음 대화하는 거라면
        state.history[action.payload.socketID] = [
          {
            id: action.payload.id,
            content: action.payload.content,
            isMine: action.payload.isMine,
          },
        ];
      }
    },
  },
});

export const { addOpenChatRoom, removeOpenChatRoom, addChatMessage } =
  mapSlice.actions;

export default mapSlice.reducer;
