import { combineReducers } from "redux";
import loginReducer from "./login/reducer";
import chatReducer from "./chat/reducer";

const rootReducer = combineReducers({
  loggedInUsers: loginReducer,
  chatMessages: chatReducer,
});

export default rootReducer;

