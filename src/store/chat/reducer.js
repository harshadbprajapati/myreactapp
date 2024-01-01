import { SEND_MESSAGE } from "./actionTypes";

const chatReducer = (state = [], action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return [...state, { ...action.payload } ];
    default:
      return state;
  }
};

export default chatReducer;


