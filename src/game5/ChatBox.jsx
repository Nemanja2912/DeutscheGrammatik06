import React from "react";

const ChatBox = ({ name = "Stefan", line1, line2, condition = true }) => {
  return (
    <div className="chat-box">
      <div className="chat-box send">
        <div
          className="name"
          style={{
            backgroundColor: name === "Stefan" ? "#5AC8F5" : "#A0C814",
            height: condition ? "100%" : "65%",
          }}
        >
          {name}
        </div>
        <div
          className="message"
          style={{
            backgroundColor: name === "Stefan" ? "#EDEDED" : "#D6D9DB",
            height: condition ? "100%" : "65%",
          }}
        >
          <div className="line">{line1}</div>
          <div className="line" style={{ opacity: condition ? 1 : 0 }}>
            {line2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
