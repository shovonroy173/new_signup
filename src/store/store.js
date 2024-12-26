import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../reducers/todoReducer";

const rootReducer = combineReducers({
  todo: todoReducer,

});

export const store = configureStore({
  reducer: rootReducer,
});
