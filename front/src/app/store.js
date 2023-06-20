import { configureStore } from "@reduxjs/toolkit";

import mapReducer from "../features/mapSlice";
import chatReducer from "../features/chatSlice";
import videoReducer from "../features/videoSlice";

export const store = configureStore({
  reducer: {
    map: mapReducer,
    chat: chatReducer,
    video: videoReducer,
  },
});
