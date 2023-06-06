import { configureStore } from "@reduxjs/toolkit";

import mapReducer from "../features/mapSlice";

export const store = configureStore({
  reducer: {
    map: mapReducer,
  },
});
