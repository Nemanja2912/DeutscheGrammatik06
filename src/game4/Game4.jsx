import { useEffect, useState } from "react";
import "../css/game4.css";
import StatusBar from "../UI/StatusBar";

import Group1 from "./group1";
import Group2 from "./group2";
import Static from "./static";

const Game4 = ({ nextLesson }) => {
  const [part, setPart] = useState(0);

  const handleInfo = () => {
    setPart(1);
  };

  return (
    <>
      <div className="game4">
        <div>{part === 0 && <Group1 setPart={handleInfo} />}</div>
        <div>{part === 1 && <Group2 setPart={() => setPart(2)} />}</div>
        <div>
          <div
            style={{
              pointerEvents: part === 2 ? "initial" : "none",
              opacity: part === 2 ? 1 : 0,
              transition: "0.5s linear 1s",
            }}
          >
            <Static />
          </div>
        </div>
      </div>

      {part === 2 && (
        <div
          className="wrapper"
          style={{
            width: 1000,
            position: "absolute",
            top: 0,
            bottom: 50,
          }}
        >
          <div
            className="button-show"
            style={{ margin: "auto", left: 0, right: 0 }}
            onClick={() => {
              nextLesson();
            }}
          >
            WEITER
          </div>
        </div>
      )}
    </>
  );
};

export default Game4;
