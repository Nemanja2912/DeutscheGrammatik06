import React, { useState, useEffect } from "react";
import ChatBox from "./ChatBox";
import PositionWords from "./PositionWords";

const ChatBoxes = ({
  index,
  setLevel,
  message1,
  message2,
  words,
  answers,
  help,
  setHelpFingerPosition,
  preventHelp,
}) => {
  const [finished, setFinished] = useState(-1);

  useEffect(() => {
    if (finished === 0) {
      preventHelp();
      setTimeout(() => {
        setFinished(1);

        setTimeout(() => {
          setFinished(2);

          setTimeout(() => {
            setLevel();
          }, 1000);
        }, 1000);
      }, 2000);
    }
  }, [finished]);

  return (
    <div className="chat-boxes">
      <ChatBox
        line1={message1.line1}
        line2={message1.line2}
        condition={finished >= 0}
      />
      {finished >= 1 && (
        <div className="wrapper-chatbox">
          <ChatBox name="Laura" line1={message2.line1} line2={message2.line2} />
        </div>
      )}
      <div className={`${finished >= 0 && "hide"}`}>
        {finished < 2 && (
          <PositionWords
            words={words}
            answers={answers}
            completed={() => setFinished(0)}
            uniqueID={index}
            help={help}
            setHelpFingerPosition={setHelpFingerPosition}
          />
        )}
      </div>
    </div>
  );
};

export default ChatBoxes;
