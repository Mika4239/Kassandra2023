import { combineReducers, configureStore } from "@reduxjs/toolkit";
import matchDataReducer from "./matchDataSlice.js";
import currentUserReducer from "./currentUserSlice.js";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  matchData: matchDataReducer,
  user: currentUserReducer
});

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers)  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
