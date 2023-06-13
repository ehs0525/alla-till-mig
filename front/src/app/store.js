import { configureStore } from "@reduxjs/toolkit";

import mapReducer from "../features/mapSlice";
import chatReducer from "../features/chatSlice";

export const store = configureStore({
  reducer: {
    map: mapReducer,
    chat: chatReducer,
  },
});
