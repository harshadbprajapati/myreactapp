import { SEND_MESSAGE } from "./actionTypes";

export const sendMessage = (sender, message) => ({
  type: SEND_MESSAGE,
  payload: { sender, message },
});


