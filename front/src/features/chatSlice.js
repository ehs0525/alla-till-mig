import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openRooms: [],
  histories: {},
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
    addChatHistory: (state, action) => {
      // 이미 대화 내역이 있다면
      if (state.histories[action.payload.socketID]) {
        state.histories[action.payload.socketID].push({
          id: action.payload.id,
          content: action.payload.content,
          isMine: action.payload.isMine,
        });
      } else {
        // 처음 대화하는 거라면
        state.histories[action.payload.socketID] = [
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

export const { addOpenChatRoom, removeOpenChatRoom, addChatHistory } =
  mapSlice.actions;

export default mapSlice.reducer;
