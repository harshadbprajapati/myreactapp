import { combineReducers } from "redux";
import loginReducer from "./login/reducer";

const rootReducer = combineReducers({
  loggedInUsers: loginReducer,
});

export default rootReducer;

