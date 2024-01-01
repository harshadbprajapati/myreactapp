import { configureStore, Tuple } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import logger from "redux-logger";

const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(logger),
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development
});

export default store;
