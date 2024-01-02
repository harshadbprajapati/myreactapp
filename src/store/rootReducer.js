import { combineReducers } from "redux";
import loginReducer from "./login/reducer";
import chatReducer from "./chat/reducer";
import userReducer from "./users/reducer";

const rootReducer = combineReducers({
  loggedInUsers: loginReducer,
  chatMessages: chatReducer,
  users: userReducer,
});

export default rootReducer;

