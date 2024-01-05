import { combineReducers, configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
export const rootReducer = combineReducers({
  itemSlice,
});
export const store = configureStore({
  reducer: rootReducer,
});
