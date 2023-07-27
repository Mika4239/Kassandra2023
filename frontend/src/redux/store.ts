import { configureStore } from "@reduxjs/toolkit";
import matchDataReducer from "./matchDataSlice";

const store = configureStore({
  reducer: {
    matchDataReducer: matchDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
