import { LOGIN, LOGOUT } from "./actionTypes";

const loginReducer = (state = [], action) => {
  switch (action.type) {
    case LOGIN:
      return [...state, action.payload.username]; 
      // Add the username to the array
    case LOGOUT:
      return state.filter((user) => user !== action.payload.username); 
      // Remove the username from the array
    default:
      return state;
  }
};

export default loginReducer;


