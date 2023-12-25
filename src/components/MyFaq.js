import React from "react";
const MyFaq = ({ question, answer, expanded, onClick }) => (
  <div style={{ border: "1px solid gray", borderRadius: "4px", margin: "10px" }}>
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      {question}
    </div>
    {expanded && <div>{answer}</div>}
  </div>
);

export default MyFaq;

