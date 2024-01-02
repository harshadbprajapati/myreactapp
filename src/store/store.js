import { configureStore, Tuple } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(logger, thunk),
  // middleware: () => new Tuple(thunk),
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development
});

export default store;

