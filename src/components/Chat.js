import React, { useState } from "react";
import { connect } from "react-redux";
import { sendMessage } from "./../store/chat/actions";

const Chat = ({ loggedInUsers, chatMessages, sendMessage }) => {
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message && loggedInUsers.includes(sender) > 0) {
      sendMessage(sender, message);
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

const mapStateToProps = (state) => ({
  loggedInUsers: state.loggedInUsers,
  chatMessages: state.chatMessages,
});

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (sender, message) => dispatch(sendMessage(sender, message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
