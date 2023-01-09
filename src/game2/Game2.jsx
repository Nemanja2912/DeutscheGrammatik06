import React, { useEffect, useState, useRef } from "react";

import "../css/game2.css";
import StatusBar from "../UI/StatusBar";
import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Screen3 from "./screen3";

const finishList = [];

for (let i = 0; i < 19; i++) {
  finishList.push(false);
}

const Game2 = ({ nextLesson }) => {
  const [buttonLevel, setButtonLevel] = useState(0);
  const [step, setStep] = useState(0);
  const [isDone, setIsDone] = useState([...finishList]);
  const [endButton, setEndButton] = useState(false);

  useEffect(() => {
    let done = true;

    for (let i = 0; i < isDone.length; i++) {
      if (!isDone[i]) {
        done = false;
        break;
      }
    }

    if (done) {
      setButtonLevel(1);
    }
  }, [isDone]);

  return (
    <>
      <div className="game2">
        <div
          style={{
            transform: step > 0 ? "translateX(-100vw)" : "translateX(0)",
            transition: "0.5s",
            pointerEvents: step === 0 ? "initial" : "none",
          }}
        >
          <Screen1
            setIsDone={setIsDone}
            isDone={isDone}
            step={step}
            buttonLevel={buttonLevel}
            setStep={setStep}
          />
        </div>

        <div
          style={{
            transform: step > 1 ? "translateX(-100vw)" : "translateX(0)",
            opacity: step > 0 ? 1 : 0,
            pointerEvents: step > 0 ? "initial" : "none",

            transition: "0.5s",
            position: "absolute",
            top: 0,
            left: 100,
            right: 0,
            zIndex: 10000,
          }}
        >
          <Screen2 step={step} buttonLevel={buttonLevel} setStep={setStep} />
        </div>

        <div
          style={{
            opacity: step > 1 ? 1 : 0,
            pointerEvents: step > 1 ? "initial" : "none",
            transition: "0.5s linear opacity",
            position: "absolute",
            top: step > 1 ? 0 : "200vh",
            left: 100,
            right: 0,
          }}
        >
          <Screen3 step={step} setEndButton={setEndButton} />
        </div>
      </div>

      {endButton && (
        <div
          className="wrapper"
          style={{
            width: 1000,
            position: "absolute",
            top: 0,
            bottom: 30,
          }}
        >
          <div
            className="button-show"
            style={{ margin: "auto", left: 0, right: 0 }}
            onClick={nextLesson}
          >
            WEITER
          </div>
        </div>
      )}
    </>
  );
};

export default Game2;
