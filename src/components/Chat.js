import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "./../store/chat/actions";

const Chat = () => {
  const loggedInUsers = useSelector((state) => state.loggedInUsers );
  const chatMessages = useSelector((state) => state.chatMessages);
  const dispatch = useDispatch();

  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message && loggedInUsers.includes(sender) > 0) {
      dispatch(sendMessage(sender, message));
      setMessage("");
    }
  };

  return (
    <div>
      <h2>Chat</h2>
      <div>
        {chatMessages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.sender}:</strong> {msg.message}
          </p>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type sender name here"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
      />{" "}
      <input
        type="text"
        placeholder="Type your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />{" "}
      <button onClick={handleSendMessage} disabled={!sender || !message}>Send Message</button>
    </div>
  );
};

export default Chat;
